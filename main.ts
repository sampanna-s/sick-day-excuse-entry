import { renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My phone autocorrected 'I'm sick' to 'I quit' in the work group chat, so I'm staying home today to fix that before HR sees it.";

// Gate mirror: 1-200 chars, single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) throw new Error("line must be 1-200 chars");
if (LINE.includes("\n") || LINE.trim().length === 0) throw new Error("line must be a single non-blank line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const tmp = join(outDir, ".entry.txt.tmp");
writeFileSync(tmp, LINE, "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
