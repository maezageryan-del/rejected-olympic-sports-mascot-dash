// Rejected Olympic Sports — The 100m Mascot Dash
// Writes one funny single-line rejected Olympic sport to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: mascots are a real Olympic institution, and every mascot is a
// human — so a rule disqualifying anyone "caught being human" disqualifies
// the whole field. The twist lands in the final clause, in one read.
const ENTRY =
  "The 100m Mascot Dash: athletes sprint in full mascot costume — gold to whoever finishes with the head still on, disqualified if anyone sees the human inside.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters; gate requires 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is whitespace-only");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
