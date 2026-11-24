import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My cat brings me dead mice every morning, and I've stopped correcting her — she's the only coworker who actually delivers on time.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
