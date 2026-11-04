// Builds every challenge into dist/<slug>/ and writes the gallery page at dist/index.html.
// Usage: node scripts/build.mjs [slug ...]   (no args = all challenges)
//        BASE_PATH=/repo-name node scripts/build.mjs   (serve from a sub-path, e.g. GitHub Pages)
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
const challenges = JSON.parse(readFileSync(join(root, "challenges.json"), "utf8"));
const only = process.argv.slice(2);
const prefix = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const selected = only.length ? challenges.filter((c) => only.includes(c.slug)) : challenges;

if (!only.length) rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const run = (cmd, cwd, env = {}) =>
  execSync(cmd, { cwd, stdio: "inherit", env: { ...process.env, CI: "", ...env } });

const failed = [];
for (const { slug } of selected) {
  const dir = join(root, "challenges", slug);
  const out = join(dist, slug);
  const base = `${prefix}/${slug}/`;
  rmSync(out, { recursive: true, force: true });
  console.log(`\n=== ${slug}`);
  try {
    if (!existsSync(join(dir, "package.json"))) {
      cpSync(dir, out, { recursive: true, filter: (p) => !/(README\.md|\.DS_Store|style-guide\.md|\/design)$/.test(p) });
      continue;
    }
    const pkg = JSON.parse(readFileSync(join(dir, "package.json"), "utf8"));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    if (deps.next) {
      // Needs a server (Next.js runtime); deployed on its own Netlify site only.
      console.log("skipped: needs a server, see its own site");
      continue;
    }
    if (existsSync(join(dir, "yarn.lock"))) run("yarn install --frozen-lockfile --non-interactive", dir);
    else if (existsSync(join(dir, "package-lock.json"))) run("npm ci --no-audit --no-fund", dir);
    else run("npm install --no-audit --no-fund", dir);

    if (deps["react-scripts"]) {
      run("npm run build", dir, { PUBLIC_URL: base.slice(0, -1) });
      cpSync(join(dir, "build"), out, { recursive: true });
    } else {
      run(`npm run build -- --base=${base} --outDir=${out} --emptyOutDir`, dir);
    }
  } catch {
    failed.push(slug);
  }
}

const built = challenges.filter((c) => c.site || existsSync(join(dist, c.slug, "index.html")));
writeFileSync(join(dist, "index.html"), gallery(built));
console.log(`\nBuilt ${built.length}/${challenges.length} challenges.`);
if (failed.length) {
  console.error(`Failed: ${failed.join(", ")}`);
  process.exit(1);
}

function gallery(items) {
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const month = (ym) => new Date(`${ym}-01`).toLocaleDateString("en", { month: "short", year: "numeric" });
  const cards = items
    .map(
      (c) => `      <li>
        <a href="${c.site ?? `${prefix}/${c.slug}/`}">
          <h2>${esc(c.name)}</h2>
          <p>${esc(c.stack.join(" · "))}</p>
          <time datetime="${c.updated}">${month(c.updated)}</time>
        </a>
      </li>`,
    )
    .join("\n");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Frontend Mentor challenges · Salman Saleh</title>
  <style>
    :root { --bg: #f7f7f5; --fg: #1c1c1c; --muted: #6b6b6b; --card: #fff; --line: #e4e4e0; --accent: #3e54ac; }
    @media (prefers-color-scheme: dark) { :root { --bg: #161616; --fg: #ececec; --muted: #9a9a9a; --card: #1f1f1f; --line: #2e2e2e; --accent: #8fa3ff; } }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.5 system-ui, sans-serif; }
    main { max-width: 1080px; margin: 0 auto; padding: 48px 16px 64px; }
    h1 { margin: 0 0 4px; font-size: 1.75rem; }
    header p { margin: 0 0 32px; color: var(--muted); }
    header a { color: var(--accent); }
    ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }
    li a { display: block; height: 100%; padding: 16px; background: var(--card); border: 1px solid var(--line); border-radius: 8px; color: inherit; text-decoration: none; }
    li a:hover, li a:focus-visible { border-color: var(--accent); }
    h2 { margin: 0 0 8px; font-size: 1rem; }
    li p { margin: 0 0 8px; font-size: 0.875rem; color: var(--muted); }
    time { font-size: 0.8125rem; color: var(--muted); }
  </style>
</head>
<body>
  <main>
    <header>
      <h1>Frontend Mentor challenges</h1>
      <p>${items.length} solutions to <a href="https://www.frontendmentor.io">Frontend Mentor</a> challenges, newest first. Source: <a href="https://github.com/Salman-Abdulqadir/frontend-mentor-challenges">GitHub</a>.</p>
    </header>
    <ul>
${cards}
    </ul>
  </main>
</body>
</html>
`;
}
