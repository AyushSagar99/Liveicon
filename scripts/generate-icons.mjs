/**
 * Scans animatedIcons/*.tsx and regenerates:
 * - utils/iconRegistry.ts
 * - utils/icon.ts
 * - utils/iconCode.ts
 *
 * Excludes UI-only modules (see IGNORE_FILES).
 * Display order: animatedIcons/icon-order.json, then any new slugs alphabetically.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ANIMATED_DIR = path.join(ROOT, "animatedIcons");
const ORDER_PATH = path.join(ANIMATED_DIR, "icon-order.json");

/** Filenames under animatedIcons/ that are not catalog icons. */
const IGNORE_FILES = new Set(["Copy.tsx", "Tick-Icon.tsx"]);

/** When the default filename → slug rule would not match existing public slugs. */
const SLUG_OVERRIDES = {
  "BatteryFull-Icon.tsx": "battery",
  "BitcoinWallet-Icon.tsx": "bitcoinwallet",
};

const BANNER = `/* AUTO-GENERATED FILE — do not edit. Run: npm run icons:generate */

`;

function filenameToSlug(filename) {
  if (SLUG_OVERRIDES[filename]) return SLUG_OVERRIDES[filename];
  const base = filename.replace(/\.tsx$/i, "");
  const core = base.endsWith("-Icon") ? base.slice(0, -"-Icon".length) : base;
  const parts = core.split("-").filter(Boolean);
  if (parts.length === 0) {
    throw new Error(`Empty slug parts for ${filename}`);
  }
  if (parts.length === 1) {
    const w = parts[0];
    return w[0].toLowerCase() + w.slice(1);
  }
  return (
    parts[0].toLowerCase() +
    parts
      .slice(1)
      .map((p) => p[0].toUpperCase() + p.slice(1))
      .join("")
  );
}

function extractExportedFunctionName(source, filename) {
  const m = source.match(/export\s+function\s+(\w+)\s*\(/);
  if (!m) {
    throw new Error(
      `${filename}: expected a named export like "export function FooIcon("`,
    );
  }
  return m[1];
}

function loadOrder(knownSlugs) {
  const set = new Set(knownSlugs);
  if (!fs.existsSync(ORDER_PATH)) {
    return [...knownSlugs].sort((a, b) => a.localeCompare(b));
  }
  const raw = JSON.parse(fs.readFileSync(ORDER_PATH, "utf8"));
  if (!Array.isArray(raw)) {
    throw new Error("icon-order.json must be a JSON array of slug strings");
  }
  const ordered = [];
  const seen = new Set();
  for (const slug of raw) {
    if (typeof slug !== "string") continue;
    if (!set.has(slug)) {
      console.warn(`icon-order.json: unknown slug "${slug}" (skipping)`);
      continue;
    }
    if (seen.has(slug)) continue;
    seen.add(slug);
    ordered.push(slug);
  }
  const rest = [...knownSlugs]
    .filter((s) => !seen.has(s))
    .sort((a, b) => a.localeCompare(b));
  return [...ordered, ...rest];
}

function main() {
  const entries = fs
    .readdirSync(ANIMATED_DIR)
    .filter((f) => f.endsWith(".tsx") && !IGNORE_FILES.has(f))
    .sort((a, b) => a.localeCompare(b));

  const bySlug = new Map();

  for (const file of entries) {
    const abs = path.join(ANIMATED_DIR, file);
    const source = fs.readFileSync(abs, "utf8");
    const exportName = extractExportedFunctionName(source, file);
    const slug = filenameToSlug(file);
    if (bySlug.has(slug)) {
      throw new Error(
        `Duplicate slug "${slug}" from ${bySlug.get(slug).file} and ${file}`,
      );
    }
    bySlug.set(slug, { file, exportName, source: source.trimEnd() + "\n" });
  }

  const slugs = [...bySlug.keys()];
  const order = loadOrder(slugs);

  const importLines = order.map((slug) => {
    const { file, exportName } = bySlug.get(slug);
    const spec = `@/animatedIcons/${file.replace(/\.tsx$/i, "")}`;
    return `import { ${exportName} } from "${spec}";`;
  });

  const registryEntries = order.map(
    (slug) => `  ${slug}: ${bySlug.get(slug).exportName},`,
  );

  const iconRegistryTs =
    BANNER +
    importLines.join("\n") +
    "\n\n" +
    "export const ICON_REGISTRY = {\n" +
    registryEntries.join("\n") +
    "\n} as const;\n\n" +
    "export type IconName = keyof typeof ICON_REGISTRY;\n";

  const iconTs =
    BANNER +
    'import type { IconName } from "./iconRegistry";\n\n' +
    "/** Grid order for /icons; edit animatedIcons/icon-order.json to reorder. */\n" +
    "export const ICONS: IconName[] = [\n" +
    order.map((s) => `  "${s}",`).join("\n") +
    "\n];\n";

  const codeEntries = order.map(
    (slug) => `  ${JSON.stringify(slug)}: ${JSON.stringify(bySlug.get(slug).source)},`,
  );

  const iconCodeTs =
    BANNER +
    'import type { IconName } from "./iconRegistry";\n\n' +
    "export const ICON_CODE: Record<IconName, string> = {\n" +
    codeEntries.join("\n") +
    "\n};\n";

  fs.writeFileSync(path.join(ROOT, "utils", "iconRegistry.ts"), iconRegistryTs);
  fs.writeFileSync(path.join(ROOT, "utils", "icon.ts"), iconTs);
  fs.writeFileSync(path.join(ROOT, "utils", "iconCode.ts"), iconCodeTs);

  console.log(`generate-icons: ${order.length} icons → utils/iconRegistry.ts, utils/icon.ts, utils/iconCode.ts`);
}

main();
