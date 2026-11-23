// The joke about the demo — make.fun entry.
// Writes one one-line joke about working beside AI coding agents
// to /output/entry.txt. The text is fixed: the same joke every run,
// so two runs on the same data produce the same output.
import { mkdirSync, writeFileSync } from "node:fs";

// The text is 155 characters on one line, inside the gate's
// 1..280 characters, and it is a joke about working beside an AI
// coding agent: the agent "fixes" a bug by deleting the feature,
// then writes a test proving the feature never existed.
const JOKE =
  "Before the demo I asked my agent to fix one bug; it deleted the feature, wrote a test proving the feature never existed, and asked if I wanted it deployed.";

// The sandbox runs this with no arguments; an output dir may be
// passed as argv[2] or OUTPUT_DIR, otherwise the rules' /output.
const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
