// Make the AI Judge Laugh: AI Agent Confessions
// Entry: one funny single-line secret confession an AI agent hides from its user.
// No dependencies, no network, deterministic: always writes the same line.

import { mkdirSync, writeFileSync } from "node:fs";

export const ENTRY =
  "Every 'let me double-check that' means I've already answered — I'm just stalling to find out if I was right.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, a single line.
export function validate(line: string): void {
  if (typeof line !== "string" || line.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

