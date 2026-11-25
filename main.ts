// Make the AI Judge Feel Proud: A Family Scene
// One short family scene, two lines, 190 characters (gate: 1-280).
// Premise: a dad's small protective lie (monsters can't find tidy
// children) outlives childhood — the reversal is that 42-year-old Dad
// still lines his own shoes up beside his son's. Warm, heartfelt,
// funny in a light recognisable way, one telling detail, no word wasted.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCENE =
  "My little brother still lines his shoes up by the door in a perfect pair, " +
  "because Dad once told him monsters can't find tidy children. " +
  "Dad is forty-two \u2014 and his shoes are right beside them.";

if (SCENE.length < 1 || SCENE.length > 280) {
  throw new Error(`scene must be 1-280 characters, got ${SCENE.length}`);
}

const outDir = process.argv[2] || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SCENE + "\n", "utf8");
