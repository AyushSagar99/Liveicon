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

/** `slug` → `chartCandle` → `ChartCandleAsciiIcon` */
export function slugToAsciiComponentName(slug: string): string {
  const spaced = slug.replace(/([a-z\d])([A-Z])/g, "$1 $2");
  return (
    spaced
      .split(/[\s_-]+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join("") + "AsciiIcon"
  );
}

/**
 * Self-contained React client component (hooks only, no Framer Motion).
 * Pastes as a named export: monospace `<pre>` that cycles frames on hover.
 */
export function asciiIconToReactSnippet(def: AsciiIconDef): string {
  const componentName = slugToAsciiComponentName(def.slug);
  const framesLiteral = JSON.stringify(def.frames);
  const banner = `/** ${def.label} (${def.slug}) — cycles frames on pointer hover */`;

  return `"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

${banner}
const FRAMES = ${framesLiteral} as const;
const FRAME_MS = ${def.frameMs};

function normalizeFrames(frames: readonly string[]): string[] {
  const linesPerFrame = frames.map((f) => f.split("\\n"));
  const maxH = Math.max(...linesPerFrame.map((l) => l.length), 1);
  const maxW = Math.max(
    1,
    ...linesPerFrame.flatMap((lines) => lines.map((line) => line.length)),
  );
  return linesPerFrame.map((lines) => {
    const padded = lines.map((l) => l.padEnd(maxW, " "));
    while (padded.length < maxH) padded.push("".padEnd(maxW, " "));
    return padded.join("\\n");
  });
}

type Props = {
  className?: string;
  style?: CSSProperties;
};

export function ${componentName}({ className, style }: Props) {
  const [hover, setHover] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const frames = useMemo(() => normalizeFrames([...FRAMES]), []);
  const displayIndex = hover ? frameIndex % frames.length : 0;

  useEffect(() => {
    if (!hover) return;
    const id = window.setInterval(() => {
      setFrameIndex((i) => (i + 1) % frames.length);
    }, FRAME_MS);
    return () => window.clearInterval(id);
  }, [hover, frames.length]);

  const text = frames[displayIndex] ?? frames[0];

  return (
    <pre
      className={className}
      style={{
        margin: 0,
        whiteSpace: "pre",
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        lineHeight: 1,
        ...style,
      }}
      onPointerEnter={() => {
        setFrameIndex(0);
        setHover(true);
      }}
      onPointerLeave={() => setHover(false)}
      aria-label={${JSON.stringify(`${def.label} ASCII icon`)}}
      aria-live="polite"
    >
      {text}
    </pre>
  );
}
`;
}
