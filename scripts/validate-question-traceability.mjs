#!/usr/bin/env node

if (process.argv.length === 2) {
  process.argv.push(
    "content/traceability/isfp-question-traceability.json",
    "src/content/isfp-questions.ts",
    "content/traceability/isfp-formal-sequence.json",
  );
}

await import("../.codex/skills/04-write-choice-game-questions/scripts/validate-question-traceability.mjs");
