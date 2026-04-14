"use client";

import Link from "next/link";
import AsciiIconGrid from "@/components/ascii-icon-grid";
import { motion } from "framer-motion";
import { useState } from "react";
import { ASCII_ICONS } from "@/utils/asciiIconRegistry";

export default function AsciiIconsPage() {
  const [search, setSearch] = useState("");
  const total = ASCII_ICONS.length;

  return (
    <div className="min-h-screen bg-[#080808]">
      <section className="mx-auto max-w-[1200px] px-4 pt-24 pb-6 sm:px-6 sm:pt-28 sm:pb-8">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="mb-3">
              <Link
                href="/icons"
                className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                ← Animated SVG icons
              </Link>
            </p>
            <h1 className="text-3xl min-[420px]:text-4xl sm:text-5xl font-bold text-zinc-200 tracking-tight">
              ASCII icons
            </h1>
            <p className="mt-3 text-zinc-500 font-mono text-sm max-w-lg leading-relaxed">
              <span className="md:hidden">
                {total} frame-based icons. Tap play on a card to run the loop.
              </span>
              <span className="hidden md:inline">
                {total} monospace icons built from multiline{" "}
                <span className="text-zinc-400">frames</span>. Hover to cycle; copy grabs plain text.
              </span>
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search ASCII icons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0e0e0e] border border-[#1c1c1c] text-zinc-300 text-sm font-mono placeholder:text-zinc-600 focus:outline-none focus:border-[#2a2a2a] focus:bg-[#121212] transition-all duration-200"
            />
          </div>
        </motion.div>

        <div className="mt-8 border-t border-[#1a1a1a]" />
      </section>

      <section className="pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <AsciiIconGrid filter={search} />
        </motion.div>
      </section>
    </div>
  );
}
