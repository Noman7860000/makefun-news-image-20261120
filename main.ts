// "The World in One Day" -- Friday 20 November 2026 (news-image-20261120).
//
// A Node 22 program using only the standard library. It takes the finished
// front page, entry.png, which sits beside this file in the repository, and
// writes it byte-for-byte to the grader's output directory as entry.png.
// No network, no image generation at run time: the picture is authored
// beforehand, so every run produces the exact same file.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

// The source must be present and non-empty before we copy anything.
const sourceSize = statSync(source).size;
if (sourceSize === 0) {
  throw new Error("entry.png is empty, refusing to write an empty output");
}

copyFileSync(source, target);

// Confirm the copy landed whole: same byte count as the source, and not empty.
const writtenSize = statSync(target).size;
if (writtenSize !== sourceSize) {
  throw new Error(
    `entry.png copy is incomplete: wrote ${writtenSize} bytes, expected ${sourceSize}`,
  );
}
if (writtenSize > 1048576) {
  throw new Error(`entry.png is ${writtenSize} bytes, over the 1 MiB limit`);
}

// Read the written file back and verify its integrity: it must start with
// the PNG signature, and its sha256 must match the source file exactly,
// so a truncated or corrupted copy can never pass silently.
const writtenBytes = readFileSync(target);
const pngSignature = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);
if (!writtenBytes.subarray(0, 8).equals(pngSignature)) {
  throw new Error("entry.png copy is not a PNG: bad signature bytes");
}
const sourceHash = createHash("sha256")
  .update(readFileSync(source))
  .digest("hex");
const writtenHash = createHash("sha256").update(writtenBytes).digest("hex");
if (writtenHash !== sourceHash) {
  throw new Error(
    `entry.png copy failed integrity check: sha256 ${writtenHash}, expected ${sourceHash}`,
  );
}

console.log(`Wrote ${target} (${writtenSize} bytes)`);
