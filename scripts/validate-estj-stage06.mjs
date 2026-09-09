#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { validateContent } from "../src/content/schema.ts";
import { estjQuestions } from "../src/content/estj-questions.ts";
import {
  estjEndings,
  estjFuzzyFeedback,
  estjRelationshipEvaluations,
} from "../src/content/estj-endings.ts";

const warnings = validateContent({
  questions: estjQuestions,
  endings: estjEndings,
  relationshipEvaluations: estjRelationshipEvaluations,
  fuzzyFeedback: estjFuzzyFeedback,
});

const questionMarkdown = readFileSync(
  new URL("../content/questions/estj-ten-question-draft.md", import.meta.url),
  "utf8",
);
const balanceMarkdown = readFileSync(
  new URL("../content/questions/estj-balance-report.md", import.meta.url),
  "utf8",
);
const reportText = readFileSync(
  new URL("../content/questions/estj-balance-report.json", import.meta.url),
  "utf8",
);
const report = JSON.parse(reportText);
const strengthByMagnitude = new Map([
  [5, "slight"],
  [10, "medium"],
  [15, "strong"],
  [20, "strong"],
]);

let effectRows = 0;
let feedbackReferences = 0;
for (const question of estjQuestions) {
  for (const option of question.options) {
    const values = ["attraction", "trust", "comfort", "conflict"].map(
      (dimension) => option.effects[dimension],
    );
    const total = values.reduce((sum, value) => sum + Math.abs(value), 0);
    const expectedRow = `| ${question.id} | \`${option.id}\` | ${option.strategy} | \`${values.join(" / ")}\` | ${total} |`;
    if (!questionMarkdown.includes(expectedRow)) {
      throw new Error(`Markdown effect row mismatch: ${option.id}`);
    }
    effectRows += 1;

    for (const feedbackId of option.feedbackIds) {
      const match = feedbackId.match(
        /^(attraction|trust|comfort|conflict)_(up|down)_(slight|medium|strong)$/,
      );
      if (!match) throw new Error(`Invalid feedback ID: ${feedbackId}`);
      const [, dimension, direction, strength] = match;
      const value = option.effects[dimension];
      const actualDirection = value > 0 ? "up" : value < 0 ? "down" : null;
      if (
        actualDirection !== direction ||
        strengthByMagnitude.get(Math.abs(value)) !== strength
      ) {
        throw new Error(
          `Feedback/effect mismatch: ${option.id} ${feedbackId} ${value}`,
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
  if (!balanceMarkdown.includes(`${metric.toFixed(3)}%`)) {
    throw new Error(`Balance Markdown is missing metric ${metric.toFixed(3)}%`);
  }
}

for (const [outcomeId, outcome] of Object.entries(report.outcomes)) {
  if (!balanceMarkdown.includes(`\`${outcomeId}\``)) {
    throw new Error(`Balance Markdown is missing outcome ${outcomeId}`);
  }
  if (!balanceMarkdown.includes(outcome.examplePath.join(" → "))) {
    throw new Error(`Balance Markdown example path mismatch: ${outcomeId}`);
  }
}

const freshOutput = execFileSync(
  process.execPath,
  [
    ".codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs",
    ".codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-estj-adapter.mjs",
    "--json",
  ],
  { cwd: new URL("..", import.meta.url), encoding: "utf8" },
);
if (JSON.stringify(JSON.parse(freshOutput)) !== JSON.stringify(report)) {
  throw new Error("Saved ESTJ report differs from fresh analyzer output");
}

const traceability = JSON.parse(
  execFileSync(
    process.execPath,
    [
      ".codex/skills/04-write-choice-game-questions/scripts/validate-question-traceability.mjs",
      "content/traceability/estj-question-traceability.json",
      "src/content/estj-questions.ts",
      "content/traceability/estj-formal-sequence.json",
    ],
    { cwd: new URL("..", import.meta.url), encoding: "utf8" },
  ),
);

const questionSource = readFileSync(
  new URL("../src/content/estj-questions.ts", import.meta.url),
  "utf8",
).replace(/\r\n/g, "\n");
const questionHash = createHash("sha256")
  .update(questionSource)
  .digest("hex")
  .toUpperCase();

if (
  effectRows !== 40 ||
  feedbackReferences !== 80 ||
  report.questionCount !== 10 ||
  Object.keys(report.outcomes).length !== 12 ||
  report.completeChoiceSpace !== 1_048_576 ||
  report.weightedTotal !== 1_048_576 ||
  report.coverage.endings.missing.length > 0 ||
  report.coverage.outcomes.missing.length > 0 ||
  report.globalStrategyDominance.length > 0 ||
  report.effectBudgetWarnings.length > 0 ||
  !report.balance.stageGates.every((gate) => gate.status === "within_recommended") ||
  report.balance.finalClassifier.reachStatus !== "within_recommended" ||
  !traceability.valid ||
  !balanceMarkdown.includes(questionHash)
) {
  throw new Error("ESTJ Stage-06 acceptance check failed");
}

console.log(
  `ESTJ Stage-06 validation passed: ${effectRows} effect rows, ${feedbackReferences} feedback references, 12 outcomes, ${expectedMetrics.length} report metrics, ${warnings.length} content warnings.`,
);
