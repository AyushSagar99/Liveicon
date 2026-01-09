"use client";

import React, { useState } from "react";
import { ICON_CODE } from "@/utils/iconCode";
import { ICON_REGISTRY } from "@/utils/iconRegistry";

type IconName = keyof typeof ICON_REGISTRY;

export function Modal({
  onClose,
  selectedIcon,
  children,
}: {
  onClose: () => void;
  selectedIcon: IconName;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const code = ICON_CODE[selectedIcon];

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-[90%] max-w-2xl bg-fuchsia-200 rounded-2xl shadow-2xl p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Preview */}
        <div className="flex justify-center items-center p-4 rounded-xl bg-fuchsia-300">
          {children}
        </div>

        {/* Note */}
        <div className="text-sm text-gray-700">
          Requires{" "}
          <code className="px-1 py-0.5 rounded bg-black/10 font-mono">
            framer-motion
          </code>
        </div>

        {/* Code block */}
        <pre className="relative bg-black text-white rounded-xl p-4 text-xs overflow-x-auto select-text">
          <code>{code}</code>
        </pre>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="w-full py-2 rounded-lg bg-black text-white text-sm hover:bg-black/80 transition"
        >
          {copied ? "Copied!" : "Copy code"}
        </button>
      </div>
    </div>
  );
}
