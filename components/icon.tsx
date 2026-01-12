"use client";

import { useState } from "react";
import { ICONS } from "@/utils/icon";
import { ICON_REGISTRY } from "@/utils/iconRegistry";
import { ICON_CODE } from "@/utils/iconCode";
import { Copy } from "@/animatedIcons/Copy";
import TickIcon from "@/animatedIcons/Tick-Icon";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type IconName = keyof typeof ICON_REGISTRY;

export default function IconGrid() {
  return (
    <div className="select-none mx-auto max-w-[1200px] p-4">
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-8 gap-4">
        {ICONS.map(({ id, name }) => (
          <IconCard key={id} name={name} />
        ))}
      </div>
    </div>
  );
}

function IconCard({ name }: { name: IconName }) {
  const [copied, setCopied] = useState(false);

  const Icon = ICON_REGISTRY[name];
  const code = ICON_CODE[name];

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      className="
        relative group
        backdrop-blur-xl bg-black/20 border border-white/30
        rounded-xl p-8 shadow-lg
        flex items-center justify-center
        transition-all duration-200        
      "
    >
      <Icon size={40} />

      <button
        onClick={handleCopy}
        className="
          absolute top-1 right-2
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
