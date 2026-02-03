"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type packageManager = "pnpm" | "npm" | "yarn";

export default function InstallTabs() {
    const [manager, setManager] = useState<packageManager>("pnpm");
    const [copied, setCopied] = useState(false);

    const commands = {
        pnpm: "pnpm add framer-motion",
        npm: "npm install framer-motion",
        yarn: "yarn add framer-motion",
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(commands[manager]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="lg:w-[500px] max-w-xl mx-auto lg:mr-0 lg:ml-auto">
            <div className="rounded-xl border border-zinc-800 bg-[#0A0A0A] overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 bg-[#0A0A0A]">
                    <div className="flex space-x-4">
                        {(["pnpm", "npm", "yarn"] as packageManager[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setManager(tab)}
                                className={cn(
                                    "text-xs font-mono transition-colors",
                                    manager === tab
                                        ? "text-zinc-400"
                                        : "text-zinc-600 hover:text-zinc-500"
                                )}
                            >
                                <div className="relative">
                                    {tab}
                                    {manager === tab && (
                                        <motion.div
                                            layoutId="active-tab-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-[1px] bg-zinc-400"
                                        />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="flex space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-900/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-900/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-900/50" />
                    </div>
                </div>

                <div className="p-6 pt-4 flex items-start justify-between font-mono text-sm relative group">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={manager}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="text-zinc-400 overflow-x-auto selection:bg-zinc-800 selection:text-white pr-10 leading-relaxed break-all"
                        >
                            <span className="text-zinc-600 mr-2">$</span>
                            {commands[manager]}
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={handleCopy}
                        className="ml-4 p-1.5 rounded-md text-zinc-400 transition-colors shrink-0"
                        aria-label="Copy command"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {copied ? (
                                <motion.div
                                    key="check"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                >
                                    <Check className="w-4 h-4 text-zinc-400" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="copy"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                >
                                    <Copy className="w-4 h-4" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>
        </div>
    );
}
