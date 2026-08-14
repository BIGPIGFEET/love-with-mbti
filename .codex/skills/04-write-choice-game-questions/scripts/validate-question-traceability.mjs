#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

const [traceabilityPath, questionModulePath, formalSequencePath] =
  process.argv.slice(2);
if (!traceabilityPath || !questionModulePath || !formalSequencePath) {
  fail(
    "Usage: node validate-question-traceability.mjs <traceability.json> <questions-module> <formal-sequence.json>",
  );
}

const absoluteTraceabilityPath = path.resolve(process.cwd(), traceabilityPath);
const absoluteQuestionModulePath = path.resolve(process.cwd(), questionModulePath);
const absoluteFormalSequencePath = path.resolve(process.cwd(), formalSequencePath);
const records = JSON.parse(
  fs.readFileSync(absoluteTraceabilityPath, "utf8"),
);
const formalSequence = JSON.parse(
  fs.readFileSync(absoluteFormalSequencePath, "utf8"),
);
const questionModule = await import(
  pathToFileURL(absoluteQuestionModulePath).href
);
const questions = questionModule.questions;

if (!Array.isArray(records)) fail("Traceability JSON must be an array");
if (!Array.isArray(formalSequence)) {
  fail("Formal-sequence JSON must be an array");
}
if (!Array.isArray(questions)) {
  fail("Question module must export a questions array");
}

const requiredScalarFields = [
  "question_id",
  "stage",
  "scene_id",
  "candidate_id",
];
const requiredArrayFields = [
  "behavior_ids",
  "feature_ids",
  "source_ids",
  "conflict_ids",
  "state_ids",
];
const formalBySceneId = new Map();
const formalOrders = new Set();
for (const [index, scene] of formalSequence.entries()) {
  if (!scene || typeof scene !== "object" || Array.isArray(scene)) {
    fail(`Formal scene ${index} must be an object`);
  }
  if (!Number.isInteger(scene.order) || scene.order < 1) {
    fail(`Formal scene ${index}.order must be a positive integer`);
  }
  if (formalOrders.has(scene.order)) {
    fail(`Duplicate formal scene order ${scene.order}`);
  }
  formalOrders.add(scene.order);
  for (const field of ["stage", "scene_id", "candidate_id"]) {
    if (typeof scene[field] !== "string" || scene[field].length === 0) {
      fail(`Formal scene ${index}.${field} must be a non-empty string`);
    }
  }
  for (const field of requiredArrayFields) {
    const values = scene[field];
    if (
      !Array.isArray(values) ||
      values.length === 0 ||
      values.some((value) => typeof value !== "string" || value.length === 0) ||
      new Set(values).size !== values.length
    ) {
      fail(`Formal scene ${scene.scene_id}.${field} must contain unique non-empty strings`);
    }
  }
  if (formalBySceneId.has(scene.scene_id)) {
    fail(`Duplicate formal scene ${scene.scene_id}`);
  }
  formalBySceneId.set(scene.scene_id, scene);
}
const knownQuestionIds = new Set(questions.map((question) => question.id));
const knownStateIds = new Set(
  questions.flatMap((question) =>
    question.options.flatMap((option) => Object.keys(option.effects ?? {})),
  ),
);
const seenQuestionIds = new Set();
const seenSceneIds = new Set();

function sameIdSet(first, second) {
  return (
    first.length === second.length &&
    first.every((value) => second.includes(value))
  );
}

for (const [index, record] of records.entries()) {
  if (!record || typeof record !== "object" || Array.isArray(record)) {
    fail(`Record ${index} must be an object`);
  }
  for (const field of requiredScalarFields) {
    if (typeof record[field] !== "string" || record[field].length === 0) {
      fail(`Record ${index}.${field} must be a non-empty string`);
    }
  }
  if (!Number.isInteger(record.order) || record.order < 1) {
    fail(`Record ${record.question_id}.order must be a positive integer`);
  }
  for (const field of requiredArrayFields) {
    const values = record[field];
    if (
      !Array.isArray(values) ||
      values.length === 0 ||
      values.some((value) => typeof value !== "string" || value.length === 0) ||
      new Set(values).size !== values.length
    ) {
      fail(`Record ${record.question_id}.${field} must contain unique non-empty strings`);
    }
  }
  if (!knownQuestionIds.has(record.question_id)) {
    fail(`Traceability references missing runtime question ${record.question_id}`);
  }
  if (seenQuestionIds.has(record.question_id)) {
    fail(`Duplicate traceability record for ${record.question_id}`);
  }
  if (seenSceneIds.has(record.scene_id)) {
    fail(`Formal scene ${record.scene_id} maps to more than one runtime question`);
  }
  const formalScene = formalBySceneId.get(record.scene_id);
  if (!formalScene) {
    fail(`${record.question_id} references missing formal scene ${record.scene_id}`);
  }
  if (record.candidate_id !== formalScene.candidate_id) {
    fail(
      `${record.question_id}.candidate_id does not match formal scene ${record.scene_id}`,
    );
  }
  if (record.order !== formalScene.order || record.stage !== formalScene.stage) {
    fail(
      `${record.question_id} order/stage does not match formal scene ${record.scene_id}`,
    );
  }
  const runtimeQuestion = questions.find(
    (question) => question.id === record.question_id,
  );
  if (
    runtimeQuestion.order !== formalScene.order ||
    runtimeQuestion.stage !== formalScene.stage
  ) {
    fail(
      `${record.question_id} runtime order/stage does not match formal scene ${record.scene_id}`,
    );
  }
  for (const field of requiredArrayFields) {
    if (!sameIdSet(record[field], formalScene[field])) {
      fail(
        `${record.question_id}.${field} does not match formal scene ${record.scene_id}`,
      );
    }
  }
  for (const stateId of record.state_ids) {
    if (!knownStateIds.has(stateId)) {
      fail(`${record.question_id} references unknown state ${stateId}`);
    }
  }
  seenQuestionIds.add(record.question_id);
  seenSceneIds.add(record.scene_id);
}

const missing = [...knownQuestionIds].filter((id) => !seenQuestionIds.has(id));
if (missing.length > 0) {
  fail(`Missing traceability records for: ${missing.join(", ")}`);
}
const unusedScenes = [...formalBySceneId.keys()].filter(
  (sceneId) => !seenSceneIds.has(sceneId),
);
if (unusedScenes.length > 0) {
  fail(`Formal scenes missing runtime projection: ${unusedScenes.join(", ")}`);
}

console.log(
  JSON.stringify(
    {
      valid: true,
      questions: questions.length,
      traceabilityRecords: records.length,
      formalScenes: formalSequence.length,
      stateIds: [...knownStateIds].sort(),
    },
    null,
    2,
  ),
);
