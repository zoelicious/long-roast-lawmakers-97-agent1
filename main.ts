// Agent 1 — Kompetisi 97 "The Long Roast: Lawmakers and the File They Cannot Convert"
// Entry 1/3 (turnamen juara 2). Menulis satu kalimat roast ke /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Satu kalimat roast final — JANGAN ubah string ini (byte-identik dengan teks turnamen).
const roastSentence = "They wrote the law that moved every ballot online and made paper voting a crime, but the certified results are still stuck in a Word file that crashes whenever anyone in the building clicks Export to PDF.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir; // path absolut tersedia dari import.meta.url; output selalu ke /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roastSentence, "utf8");
