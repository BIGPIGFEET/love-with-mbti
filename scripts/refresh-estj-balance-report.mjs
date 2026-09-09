#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const analyzerPath = path.join(
  repositoryRoot,
  ".codex/skills/06-balance-choice-game-paths/scripts/enumerate-choice-paths.mjs",
);
const adapterPath = path.join(
  repositoryRoot,
  ".codex/skills/06-balance-choice-game-paths/scripts/love-with-mbti-estj-adapter.mjs",
);
const reportName = process.argv.includes("--baseline")
  ? "estj-balance-baseline.json"
  : "estj-balance-report.json";
const reportPath = path.join(repositoryRoot, "content/questions", reportName);

const output = execFileSync(
  process.execPath,
  [analyzerPath, adapterPath, "--json"],
  {
    cwd: repositoryRoot,
    encoding: "utf8",
  },
);

const report = JSON.parse(output);
writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(`Updated ${path.relative(repositoryRoot, reportPath)}`);
