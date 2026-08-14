import fs from "node:fs";

const content = JSON.parse(
  fs.readFileSync(new URL("./infp-ending-content-draft.json", import.meta.url), "utf8"),
);

export const endings = content.endings;
export const relationshipEvaluations = content.relationshipEvaluations;
export const fuzzyFeedback = content.fuzzyFeedback;
