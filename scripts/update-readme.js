#!/usr/bin/env node
// Auto-updates the README.md "Turinys" table and total count based on
// what's actually in the repo. Run manually with `node scripts/update-readme.js`,
// or automatically via the pre-commit hook in githooks/pre-commit.

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const README_PATH = path.join(ROOT, "README.md");
const TOPICS_PATH = path.join(__dirname, "topics.json");

const TABLE_START = "<!-- AUTO-TABLE:START -->";
const TABLE_END = "<!-- AUTO-TABLE:END -->";
const TOTAL_START = "<!-- AUTO-TOTAL:START -->";
const TOTAL_END = "<!-- AUTO-TOTAL:END -->";

const FOLDER_PATTERN = /^(assignment\d+_[a-z0-9]+|pasikartojimas\d+)$/i;

function loadTopics() {
  return JSON.parse(fs.readFileSync(TOPICS_PATH, "utf8"));
}

function saveTopics(topics) {
  fs.writeFileSync(TOPICS_PATH, JSON.stringify(topics, null, 2) + "\n");
}

function discoverFolders() {
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && FOLDER_PATTERN.test(d.name))
    .map((d) => d.name);
}

function countTaskFiles(folder) {
  const base = path.join(ROOT, folder);
  const tasksSubdir = path.join(base, "tasks");
  const dir = fs.existsSync(tasksSubdir) ? tasksSubdir : base;
  if (!fs.existsSync(dir)) return 0;
  return fs.readdirSync(dir).filter((f) => /^task[\d_]*\.js$/i.test(f)).length;
}

function nextNum(topics) {
  const nums = topics
    .map((t) => parseInt(t.num, 10))
    .filter((n) => !Number.isNaN(n));
  const max = nums.length ? Math.max(...nums) : 0;
  return String(max + 1).padStart(2, "0");
}

function syncTopics(topics) {
  const known = new Set(topics.map((t) => t.folder));
  const found = discoverFolders();
  let changed = false;

  for (const folder of found) {
    if (!known.has(folder)) {
      const num = /^pasikartojimas/i.test(folder) ? "—" : nextNum(topics);
      topics.push({ num, folder, title: "(TODO: pavadinimas)" });
      known.add(folder);
      changed = true;
      console.log(`+ nauja tema aptikta: ${folder} (papildyk pavadinimą scripts/topics.json)`);
    }
  }

  // Drop topics whose folder no longer exists.
  const before = topics.length;
  topics = topics.filter((t) => fs.existsSync(path.join(ROOT, t.folder)));
  if (topics.length !== before) changed = true;

  return { topics, changed };
}

function buildTable(topics) {
  const rows = topics.map((t) => {
    const count = countTaskFiles(t.folder);
    return `| ${t.num.padEnd(3)} | [\`${t.folder}\`](./${t.folder}) | ${t.title} | ${count} |`;
  });

  const header =
    "| #   | Aplankas                                               | Tema                              | Užduočių kiekis |\n" +
    "| --- | ------------------------------------------------------ | --------------------------------- | --------------- |";

  const totalTasks = topics.reduce((sum, t) => sum + countTaskFiles(t.folder), 0);
  const totalTopics = topics.length;

  return { table: [header, ...rows].join("\n"), totalTasks, totalTopics };
}

function replaceBetween(content, startMarker, endMarker, replacement) {
  const start = content.indexOf(startMarker);
  const end = content.indexOf(endMarker);
  if (start === -1 || end === -1) {
    throw new Error(`Markers ${startMarker} / ${endMarker} not found in README.md`);
  }
  return (
    content.slice(0, start + startMarker.length) +
    "\n" +
    replacement +
    "\n" +
    content.slice(end)
  );
}

function main() {
  let topics = loadTopics();
  const { topics: syncedTopics, changed } = syncTopics(topics);
  topics = syncedTopics;
  if (changed) saveTopics(topics);

  const { table, totalTasks, totalTopics } = buildTable(topics);

  let readme = fs.readFileSync(README_PATH, "utf8");
  readme = replaceBetween(readme, TABLE_START, TABLE_END, table);
  readme = replaceBetween(
    readme,
    TOTAL_START,
    TOTAL_END,
    `**Iš viso:** ${totalTopics} temos, ${totalTasks} atskirų užduočių failų.`
  );

  fs.writeFileSync(README_PATH, readme);
  console.log(`README.md atnaujintas: ${totalTopics} temos, ${totalTasks} užduočių.`);
}

main();
