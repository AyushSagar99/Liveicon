"use client";

import { useState } from "react";
import { ICONS } from "@/utils/icon";
import { ICON_REGISTRY } from "@/utils/iconRegistry";
import { Modal } from "./modal";

export default function IconGrid() {
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof ICON_REGISTRY | null>(null);

  return (
    <div className="select-none mx-auto max-w-[1200px] p-4">
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-10 gap-4">
        {ICONS.map(({ id, name }) => {
          const Icon = ICON_REGISTRY[name];

          return (
            <div
              key={id}
              onClick={() => {
                setSelectedIcon(name);
                setOpen(true);
              }}
              className="backdrop-blur-xl bg-white/20 border border-white/30 
              rounded-xl p-6 shadow-lg flex items-center justify-center cursor-pointer"
            >
              <Icon size={32} />
            </div>
          );
        })}
      </div>

      {open && selectedIcon && (
        <Modal onClose={() => setOpen(false)}>
          {(() => {
            const Icon = ICON_REGISTRY[selectedIcon];
            return <Icon size={64} />;
          })()}
        </Modal>
      )}
    </div>
  );
}
