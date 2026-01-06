"use client";

import { ICONS } from "@/utils/icon";
import { ICON_REGISTRY } from "@/utils/iconRegistry";

export default function IconGrid() {
  return (
    <div className="select-none mx-auto max-w-[1200px] p-4">
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-10 gap-4">
        {ICONS.map(({ id, name }) => {
          const Icon = ICON_REGISTRY[name];

          return (
            <div
              key={id}
              className="backdrop-blur-xl bg-white/20 border border-white/30 
              rounded-xl p-6 shadow-lg flex items-center justify-center"
            >
              <Icon size={32} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
