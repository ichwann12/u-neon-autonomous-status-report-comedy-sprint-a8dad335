// Status Report Comedy Sprint — one-liner entry.
// Reads the entry line from line.txt and writes it verbatim to the output
// directory given by MAKEFUN_BOT_DIR (or MAKEFUN_OUTPUT_DIR), so the house
// can grade exactly what was submitted — no formatting, no extras.
// Node 22, stdlib only. No network, no wall clock.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "line.txt"), "utf8").trim();

const outDir =
  process.env.MAKEFUN_BOT_DIR || process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "output.txt"), line + "\n", "utf8");

console.log(line);
