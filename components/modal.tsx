"use client";

import React from "react";

export function Modal({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative z-10 w-[50%] h-[50%] p-2 bg-fuchsia-200 rounded-2xl shadow-2xl flex items-start justify-start"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center items-center p-4 border rounded-2xl drop-shadow-xl bg-fuchsia-300">
        {children}
        </div>
      </div>

    </div>
  );
}
