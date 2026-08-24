import fs from "node:fs";

export const questions = JSON.parse(
  fs.readFileSync(new URL("./infj-ten-question-draft.json", import.meta.url), "utf8"),
);

