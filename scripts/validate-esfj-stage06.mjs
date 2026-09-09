#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { validateContent } from "../src/content/schema.ts";
import { esfjQuestions } from "../src/content/esfj-questions.ts";
import {
  esfjEndings,
  esfjFuzzyFeedback,
  esfjRelationshipEvaluations,
} from "../src/content/esfj-endings.ts";

const warnings = validateContent({
  questions: esfjQuestions,
  endings: esfjEndings,
  relationshipEvaluations: esfjRelationshipEvaluations,
  fuzzyFeedback: esfjFuzzyFeedback,
});

const questionMarkdown = readFileSync(
  new URL("../content/questions/esfj-ten-question-draft.md", import.meta.url),
  "utf8",
);
const balanceMarkdown = readFileSync(
  new URL("../content/questions/esfj-balance-report.md", import.meta.url),
  "utf8",
);
const endingMarkdown = readFileSync(
  new URL("../content/endings/esfj-endings-and-feedback.md", import.meta.url),
  "utf8",
);
const report = JSON.parse(
  readFileSync(
    new URL("../content/questions/esfj-balance-report.json", import.meta.url),
    "utf8",
  ),
);
const strengthByMagnitude = new Map([
  [5, "slight"],
  [10, "medium"],
  [15, "strong"],
  [20, "strong"],
]);

let effectRows = 0;
let feedbackReferences = 0;
for (const question of esfjQuestions) {
  for (const option of question.options) {
    const values = ["attraction", "trust", "comfort", "conflict"].map(
      (dimension) => option.effects[dimension],
    );
    const total = values.reduce((sum, value) => sum + Math.abs(value), 0);
    const expectedRow =
      "| " +
      question.id +
      " | " +
      option.id +
      " | " +
      option.strategy +
      " | " +
      values.join(" / ") +
      " | " +
      total +
      " |";
    if (!questionMarkdown.includes(expectedRow)) {
      throw new Error("Markdown effect row mismatch: " + option.id);
    }
    effectRows += 1;

    for (const feedbackId of option.feedbackIds) {
      const match = feedbackId.match(
        /^(attraction|trust|comfort|conflict)_(up|down)_(slight|medium|strong)$/,
      );
      if (!match) throw new Error("Invalid feedback ID: " + feedbackId);
      const [, dimension, direction, strength] = match;
      const value = option.effects[dimension];
      const actualDirection = value > 0 ? "up" : value < 0 ? "down" : null;
      if (
        actualDirection !== direction ||
        strengthByMagnitude.get(Math.abs(value)) !== strength
      ) {
        throw new Error(
          "Feedback/effect mismatch: " +
            option.id +
            " " +
            feedbackId +
            " " +
            value,
        );
      }
      feedbackReferences += 1;
    }
  }
}

const expectedMetrics = [
  report.balance.globalDanger.combined.weightedPercentage,
  ...report.balance.stageGates.map(
    (gate) => gate.weightedConditionalFailurePercentage,
  ),
  report.balance.finalClassifier.weightedReachPercentage,
  ...Object.values(report.balance.finalClassifier.byGroup).map(
    (group) => group.weightedConditionalPercentage,
  ),
  ...[
    "confirmed_relationship:romance_stable",
    "confirmed_relationship:romance_hidden_risk",
  ].map(
    (outcomeId) =>
      report.balance.finalClassifier.byOutcome[outcomeId]
        .weightedConditionalPercentage,
  ),
];
for (const metric of expectedMetrics) {
  if (!balanceMarkdown.includes(metric.toFixed(3) + "%")) {
    throw new Error(
      "Balance Markdown is missing metric " + metric.toFixed(3) + "%",
    );
  }
}
for (const [outcomeId, outcome] of Object.entries(report.outcomes)) {
  if (!balanceMarkdown.includes(outcomeId)) {
    throw new Error("Balance Markdown is missing outcome " + outcomeId);
  }
  if (!balanceMarkdown.includes(outcome.examplePath.join(" → "))) {
    throw new Error("Balance Markdown example path mismatch: " + outcomeId);
  }
}
for (const item of [
  ...esfjEndings,
  ...esfjRelationshipEvaluations,
  ...esfjFuzzyFeedback,
]) {
  if (
    !endingMarkdown.includes(item.id) ||
    !endingMarkdown.includes(item.title ?? item.text)
  ) {
    throw new Error("Ending audit mismatch: " + item.id);
  }
}

if (
  effectRows !== 40 ||
  feedbackReferences !== 78 ||
  report.questionCount !== 10 ||
  report.completeChoiceSpace !== 1_048_576 ||
  report.weightedTotal !== 1_048_576 ||
  Object.keys(report.outcomes).length !== 12 ||
  report.coverage.endings.missing.length > 0 ||
  report.coverage.endings.unexpected.length > 0 ||
  report.coverage.outcomes.missing.length > 0 ||
  report.coverage.outcomes.unexpected.length > 0 ||
  report.effectBudgetWarnings.length > 0
) {
  throw new Error("ESFJ Stage-06 coverage or budget mismatch");
}

console.log(
  "ESFJ Stage-06 validation passed: " +
    effectRows +
    " effect rows, " +
    feedbackReferences +
    " feedback references, " +
    Object.keys(report.outcomes).length +
    " outcomes, " +
    expectedMetrics.length +
    " report metrics, " +
    warnings.length +
    " content warnings.",
);
