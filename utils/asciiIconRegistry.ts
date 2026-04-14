import asciiData from "@/asciiIcons.json";

export type AsciiIconDef = {
  slug: string;
  label: string;
  /** Multiline ASCII art per frame; same height (line count) recommended. */
  frames: string[];
  /** Milliseconds between frames while animating. */
  frameMs: number;
};

const raw = asciiData as { icons: AsciiIconDef[] };

function validate(def: AsciiIconDef, index: number): void {
  if (!def.slug || typeof def.slug !== "string") {
    throw new Error(`asciiIcons.json: icon[${index}] missing slug`);
  }
  if (!Array.isArray(def.frames) || def.frames.length === 0) {
    throw new Error(`asciiIcons.json: "${def.slug}" needs non-empty frames[]`);
  }
  if (typeof def.frameMs !== "number" || def.frameMs < 16) {
    throw new Error(`asciiIcons.json: "${def.slug}" needs frameMs >= 16`);
  }
}

const list: AsciiIconDef[] = raw.icons.map((icon, i) => {
  const def: AsciiIconDef = {
    slug: icon.slug,
    label: icon.label?.trim() || icon.slug,
    frames: icon.frames.map((f) => String(f).replace(/\r\n/g, "\n")),
    frameMs: icon.frameMs,
  };
  validate(def, i);
  return def;
});

const bySlug = new Map(list.map((d) => [d.slug, d]));
if (bySlug.size !== list.length) {
  throw new Error("asciiIcons.json: duplicate slug");
}

export const ASCII_ICONS: readonly AsciiIconDef[] = list;

export type AsciiIconSlug = (typeof ASCII_ICONS)[number]["slug"];

export const ASCII_ICON_SLUGS: AsciiIconSlug[] = list.map((d) => d.slug);

export function getAsciiIcon(slug: string): AsciiIconDef | undefined {
  return bySlug.get(slug);
}

/** Plain text for README / terminal: all frames separated for easy editing. */
export function asciiIconToCopyText(def: AsciiIconDef): string {
  return def.frames.join(`\n\n--- ${def.slug} frame ---\n\n`);
}
