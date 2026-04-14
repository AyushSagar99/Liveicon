"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import type { AsciiIconDef } from "@/utils/asciiIconRegistry";
import {
  ASCII_ICONS,
  asciiIconToReactSnippet,
} from "@/utils/asciiIconRegistry";
import { Copy } from "@/animatedIcons/Copy";
import TickIcon from "@/animatedIcons/Tick-Icon";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/** Pad frames so the box does not jump between frames. */
function normalizeFrames(frames: string[]): string[] {
  const linesPerFrame = frames.map((f) => f.split("\n"));
  const maxH = Math.max(...linesPerFrame.map((l) => l.length), 1);
  const maxW = Math.max(
    1,
    ...linesPerFrame.flatMap((lines) => lines.map((line) => line.length)),
  );
  return linesPerFrame.map((lines) => {
    const padded = lines.map((l) => l.padEnd(maxW, " "));
    while (padded.length < maxH) padded.push("".padEnd(maxW, " "));
    return padded.join("\n");
  });
}

const PLAY_HOLD_MS = 2800;

export default function AsciiIconGrid({ filter = "" }: { filter?: string }) {
  const q = filter.trim().toLowerCase();
  const filtered = q
    ? ASCII_ICONS.filter(
        (d) =>
          d.slug.toLowerCase().includes(q) ||
          d.label.toLowerCase().includes(q),
      )
    : [...ASCII_ICONS];

  return (
    <div className="select-none mx-auto max-w-[1200px] px-3 pb-6 pt-0 sm:px-4 sm:pb-8">
      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-zinc-500 font-mono text-sm">
            No ASCII icons for &quot;{filter}&quot;
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5 sm:gap-3 md:gap-4">
          {filtered.map((def) => (
            <AsciiIconCard key={def.slug} def={def} />
          ))}
        </div>
      )}
    </div>
  );
}

function AsciiIconCard({ def }: { def: AsciiIconDef }) {
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const playTimerRef = useRef<number | null>(null);

  const frames = useMemo(() => normalizeFrames(def.frames), [def.frames]);
  const active = hover || playing;
  const displayIndex = active ? frameIndex % frames.length : 0;

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => {
      setFrameIndex((i) => (i + 1) % frames.length);
    }, def.frameMs);
    return () => window.clearInterval(id);
  }, [active, def.frameMs, frames.length]);

  useEffect(() => {
    return () => {
      if (playTimerRef.current) window.clearTimeout(playTimerRef.current);
    };
  }, []);

  const stopPlayTimer = useCallback(() => {
    const id = playTimerRef.current;
    if (id != null) {
      window.clearTimeout(id);
      playTimerRef.current = null;
    }
  }, []);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    stopPlayTimer();
    setFrameIndex(0);
    setPlaying(true);
    playTimerRef.current = window.setTimeout(() => {
      setPlaying(false);
      playTimerRef.current = null;
    }, PLAY_HOLD_MS);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    void navigator.clipboard.writeText(asciiIconToReactSnippet(def));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  const text = frames[displayIndex] ?? frames[0];

  return (
    <div
      className="
        relative group
        bg-[#111111] border border-[#1c1c1c] hover:border-[#2a2a2a] hover:bg-[#161616]
        rounded-lg sm:rounded-xl p-3 pb-10 sm:p-4 sm:pb-10
        shadow-lg flex flex-col items-center justify-center
        min-h-28 sm:min-h-32
        transition-all duration-200
      "
      onMouseEnter={() => {
        setFrameIndex(0);
        setHover(true);
      }}
      onMouseLeave={() => setHover(false)}
    >
      <p className="absolute top-2 left-2.5 font-mono text-[10px] text-zinc-500 truncate max-w-[65%]">
        {def.label}
      </p>

      <motion.div
        className="mt-5 flex flex-1 w-full items-center justify-center px-1"
        initial={false}
        animate={active ? { scale: [1, 1.02, 1] } : { scale: 1 }}
        transition={
          active
            ? { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.2 }
        }
      >
        <pre
          className="font-mono text-[9px] min-[420px]:text-[10px] sm:text-xs leading-none tracking-normal text-zinc-100 whitespace-pre tabular-nums"
          aria-live="polite"
        >
          {text}
        </pre>
      </motion.div>

      <button
        type="button"
        aria-label="Play ASCII frame animation"
        onClick={handlePlay}
        className="
          md:hidden
          absolute bottom-2 left-2 z-1
          flex size-8 items-center justify-center rounded-lg
          border border-[#2a2a2a] bg-[#1a1a1a] text-zinc-300
          transition hover:bg-[#222] hover:text-white
        "
      >
        <Play className="size-3.5" strokeWidth={2} />
      </button>

      <button
        type="button"
        aria-label="Copy React component code"
        onClick={handleCopy}
        className="
          flex
          absolute bottom-2 right-2 md:top-2.5 md:right-2.5 md:bottom-auto
          items-center justify-center
          text-xs rounded-md
          transition cursor-pointer
        "
      >
        {copied ? (
          <TickIcon />
        ) : (
          <Tooltip>
            <TooltipTrigger delay={0}>
              <Copy />
            </TooltipTrigger>
            <TooltipPopup>Copy React component</TooltipPopup>
          </Tooltip>
        )}
      </button>
    </div>
  );
}
