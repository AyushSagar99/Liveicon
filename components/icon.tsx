"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { ICONS } from "@/utils/icon";
import { ICON_REGISTRY, type IconName } from "@/utils/iconRegistry";
import { ICON_CODE } from "@/utils/iconCode";
import { Copy } from "@/animatedIcons/Copy";
import TickIcon from "@/animatedIcons/Tick-Icon";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function getAnimatedRoot(container: HTMLElement): SVGElement | null {
  const first = container.firstElementChild;
  if (!first) return null;
  if (first.tagName === "DIV") {
    return first.querySelector("svg");
  }
  return first instanceof SVGElement ? first : null;
}

/** Framer attaches whileTap to a specific node (path vs svg vs g). Pick a target that receives the gesture. */
function resolveSyntheticTapTarget(root: SVGElement, x: number, y: number): Element {
  const tag = root.tagName.toLowerCase();

  if (tag === "g") {
    return root;
  }

  if (root instanceof SVGSVGElement) {
    const paths = root.querySelectorAll("path");
    if (paths.length === 1) {
      return paths[0];
    }
    if (paths.length > 1) {
      return root;
    }
  }

  const hit = document.elementFromPoint(x, y);
  if (hit && root.contains(hit)) {
    return hit;
  }

  return root;
}

let syntheticPointerId = 2_000;

/**
 * Framer Motion's whileTap stays active only while the pointer is down.
 * A near-instant pointerup (e.g. next frame) cuts animations short; we hold
 * the synthetic press long enough for typical tap transitions (~0.5–1s).
 */
function pressHoldSyntheticTapAtIconCenter(
  container: HTMLElement,
  holdMs = 1000
): () => void {
  const root = getAnimatedRoot(container);
  if (!root) return () => {};

  const rect = root.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const target = resolveSyntheticTapTarget(root, x, y);
  const el = target as HTMLElement | SVGElement;
  const pointerId = syntheticPointerId++;

  const base: PointerEventInit = {
    bubbles: true,
    cancelable: true,
    view: typeof window !== "undefined" ? window : undefined,
    clientX: x,
    clientY: y,
    pointerId,
    pointerType: "touch",
    isPrimary: true,
    width: 1,
    height: 1,
    pressure: 0.5,
    button: 0,
  };

  let released = false;
  const release = () => {
    if (released) return;
    released = true;
    el.dispatchEvent(new PointerEvent("pointerup", { ...base, buttons: 0 }));
  };

  el.dispatchEvent(new PointerEvent("pointerdown", { ...base, buttons: 1 }));

  const timeoutId = window.setTimeout(release, holdMs);

  return () => {
    window.clearTimeout(timeoutId);
    release();
  };
}

export default function IconGrid({ filter = "" }: { filter?: string }) {
  const filtered = filter
    ? ICONS.filter((name) => name.toLowerCase().includes(filter.toLowerCase()))
    : ICONS;

  return (
    <div className="select-none mx-auto max-w-[1200px] px-3 pb-6 pt-0 sm:px-4 sm:pb-8">
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-zinc-500 font-mono text-sm">No icons found for &quot;{filter}&quot;</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-2.5 sm:gap-3 md:gap-4">
          {filtered.map((name) => (
            <IconCard key={name} name={name} />
          ))}
        </div>
      )}
    </div>
  );
}

function IconCard({ name }: { name: IconName }) {
  const [copied, setCopied] = useState(false);
  const iconHostRef = useRef<HTMLDivElement>(null);
  const playReleaseRef = useRef<(() => void) | null>(null);

  const Icon = ICON_REGISTRY[name];
  const code = ICON_CODE[name];

  useEffect(() => {
    return () => {
      playReleaseRef.current?.();
      playReleaseRef.current = null;
    };
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const handlePlayAnimation = (e: React.MouseEvent) => {
    e.stopPropagation();
    playReleaseRef.current?.();
    playReleaseRef.current = null;
    if (iconHostRef.current) {
      playReleaseRef.current = pressHoldSyntheticTapAtIconCenter(
        iconHostRef.current
      );
    }
  };

  return (
    <div
      className="
        relative group
        bg-[#111111] border border-[#1c1c1c] hover:border-[#2a2a2a] hover:bg-[#161616]
        rounded-lg sm:rounded-xl p-4 pb-11 sm:p-5 sm:pb-11 md:p-6 lg:p-8
        shadow-lg
        flex items-center justify-center
        min-h-0 aspect-square sm:aspect-auto sm:min-h-30 md:min-h-34
        transition-all duration-200
      "
    >
      <div ref={iconHostRef} className="flex size-full min-h-0 items-center justify-center [&_svg]:max-h-full [&_svg]:w-auto [&_svg]:max-w-full">
        <Icon size={40} />
      </div>

      <button
        type="button"
        aria-label="Play icon animation"
        onClick={handlePlayAnimation}
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
        onClick={handleCopy}
        className="
          hidden md:flex
          absolute top-2 right-2 md:top-2.5 md:right-2.5
          items-center justify-center
          text-xs rounded-md
          transition cursor-pointer
        "
      >
        {copied ? <TickIcon/> :<Tooltip>
      <TooltipTrigger delay={0}>
         <Copy/>
      </TooltipTrigger>
      <TooltipPopup>copy tsx file</TooltipPopup>
    </Tooltip>}
      </button>
    </div>
  );
}
