import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry = "They drafted sweeping laws to tame crypto, banning coins they cannot pronounce and wallets they cannot unlock, yet the whitepaper they wrote about digital money still will not convert to PDF.";

try {
  mkdirSync(outDir, { recursive: true });
} catch {}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
