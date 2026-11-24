import { mkdirSync, writeFileSync } from "node:fs";

// Out-of-office reply: two auto-replies answering each other,
// and neither of them is getting anywhere — the loop is the joke.
const entry =
  "Out of office until Monday. I've left my out-of-office on to answer " +
  "your out-of-office, and neither of us is getting anywhere.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
