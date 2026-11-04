// Rewrites the challenge table in README.md from challenges.json.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const challenges = JSON.parse(readFileSync(join(root, "challenges.json"), "utf8"));
const rows = challenges
  .map((c) => `| [${c.name}](challenges/${c.slug}) | ${c.stack.join(", ")} | ${c.updated} | [live](${c.site ?? `https://SITE/${c.slug}/`}) |`)
  .join("\n");
const table = `<!-- challenges:start -->\n| Challenge | Stack | Updated | Demo |\n|---|---|---|---|\n${rows}\n<!-- challenges:end -->`;
const path = join(root, "README.md");
const readme = readFileSync(path, "utf8").replace(/<!-- challenges:start -->[\s\S]*<!-- challenges:end -->/, table);
writeFileSync(path, readme);
