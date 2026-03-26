"use client";

import InstallTabs from "@/components/install-tabs";
import { motion } from "framer-motion";
import { StarIcon } from "@/animatedIcons/Star-Icon";
import { NotificationIcon } from "@/animatedIcons/Notification";
import { SearchIcon } from "@/animatedIcons/Search-Icon";
import { DownloadIcon } from "@/animatedIcons/Download-Icon";
import { SettingIcon } from "@/animatedIcons/Setting-Icon";
import { LockIcon } from "@/animatedIcons/Lock-Icon";
import { LinkIcon } from "@/animatedIcons/Link-Icon";
import { DeleteIcon } from "@/animatedIcons/Delete-Icon";
import { AddIcon } from "@/animatedIcons/Add-Icon";
import { AlarmIcon } from "@/animatedIcons/Alarm-Icon";
import { ThumbsupIcon } from "@/animatedIcons/Thumbsup-Icon";
import { GithubIcon } from "@/animatedIcons/Github-Icon";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const floatAnimation = {
  y: [-8, 8, -8],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
};

const heroIcons = [
  { component: AlarmIcon, label: "Alarm" },
  { component: NotificationIcon, label: "Notification" },
  { component: StarIcon, label: "Star" },
  { component: SearchIcon, label: "Search" },
  { component: DownloadIcon, label: "Download" },
  { component: LockIcon, label: "Lock" },
];

function HeroIconPreview() {
  return (
    <div className="relative w-72 h-72 hidden lg:flex items-center justify-center">
      {heroIcons.map((icon, i) => {
        const angle = (i / heroIcons.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const IconComponent = icon.component;
        return (
          <motion.div
            key={icon.label}
            className="absolute w-14 h-14 rounded-xl bg-[#0e0e0e] border border-[#1a1a1a] backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x,
              y,
            }}
            transition={{
              delay: 0.5 + i * 0.1,
              duration: 0.5,
              type: "spring",
            }}
            whileHover={{ scale: 1.2, borderColor: "rgba(255,255,255,0.3)" }}
          >
            <motion.div animate={floatAnimation} style={{ animationDelay: `${i * 0.3}s` }}>
              <IconComponent size={28} />
            </motion.div>
          </motion.div>
        );
      })}
      {/* Center icon */}
      <motion.div
        className="w-16 h-16 rounded-2xl bg-[#141414] border border-[#252525] backdrop-blur-md flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <AddIcon size={32} />
      </motion.div>
    </div>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      className="text-center px-6 py-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
    >
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-sm text-zinc-500 font-mono mt-1">{label}</div>
    </motion.div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="group p-6 rounded-2xl bg-[#141414] border border-[#1f1f1f] hover:border-[#2a2a2a] hover:bg-[#181818] transition-all duration-300"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
    >
      <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#252525] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-zinc-200 mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function StepCard({
  step,
  title,
  description,
  icon,
  delay,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
    >
      <div className="w-16 h-16 rounded-2xl bg-[#111111] border border-[#1c1c1c] flex items-center justify-center mb-5 relative">
        <span className="text-zinc-300">{icon}</span>
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[11px] font-bold text-zinc-400 flex items-center justify-center font-mono">
          {step}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-zinc-200 mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 max-w-[220px] leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section — pure black */}
      <section className="relative bg-[#000000] mx-auto px-6 sm:px-10 lg:px-15 pt-28 pb-20">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="relative container mx-auto flex flex-col lg:flex-row justify-between gap-12 items-center">
          <div className="text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#1f1f1f] text-xs font-mono text-zinc-400 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                40+ animated icons and growing
              </span>
            </motion.div>

            <motion.h1
              className="text-zinc-200 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Icons that move.{" "}
              <span className="text-zinc-500 font-mono">
                Interfaces that feel alive.
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-zinc-500 text-base sm:text-lg font-mono max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A growing animated icon library built with SVG and Framer Motion.
              Copy the TSX, drop it in your project, and ship delightful interfaces.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="/icons"
                className="px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors duration-200"
              >
                Browse Icons
              </a>
              <a
                href="https://github.com/AyushSagar99/Liveicon"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-[#111111] border border-[#1f1f1f] text-zinc-300 text-sm font-semibold hover:bg-[#1a1a1a] transition-colors duration-200"
              >
                View on GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            className="w-full lg:w-auto flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HeroIconPreview />
            <InstallTabs />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar — slightly lifted */}
      <section className="border-y border-[#151515] bg-[#0a0a0a]">
        <div className="mx-auto max-w-4xl flex flex-wrap justify-center gap-8 py-8">
          <StatCard value="40+" label="Animated Icons" delay={0} />
          <StatCard value="TSX" label="Copy & Paste" delay={1} />
          <StatCard value="0kb" label="No Extra Bundle" delay={2} />
          <StatCard value="MIT" label="Open Source" delay={3} />
        </div>
      </section>

      {/* Features — charcoal */}
      <section className="relative bg-[#0c0c0c] px-6 py-24">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-200">
            Why LiveIcons?
          </h2>
          <p className="mt-4 text-zinc-500 font-mono text-sm max-w-md mx-auto">
            Built for developers who care about the details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard
            icon={<ThumbsupIcon size={24} />}
            title="Smooth Animations"
            description="Every icon is hand-crafted with Framer Motion for buttery smooth hover and interaction animations."
            delay={0}
          />
          <FeatureCard
            icon={<DownloadIcon size={24} />}
            title="Copy & Paste"
            description="Click any icon to copy its TSX code. No package install needed — just paste into your React project."
            delay={1}
          />
          <FeatureCard
            icon={<StarIcon size={24} />}
            title="Zero Dependencies"
            description="Icons are pure SVG + Framer Motion. No bloated icon packages, no extra runtime overhead."
            delay={2}
          />
          <FeatureCard
            icon={<SettingIcon size={24} />}
            title="Fully Customizable"
            description="Every icon accepts size and color props. Tweak them to fit your design system perfectly."
            delay={3}
          />
          <FeatureCard
            icon={<LockIcon size={24} />}
            title="TypeScript First"
            description="Written in TypeScript with full type safety. Autocomplete and type checking out of the box."
            delay={4}
          />
          <FeatureCard
            icon={<GithubIcon size={24} />}
            title="Dark Mode Ready"
            description="Icons use currentColor by default, making them automatically adapt to any color scheme."
            delay={5}
          />
        </div>
        </div>
      </section>

      {/* How It Works — deep black */}
      <section className="relative bg-[#060606] px-6 py-20">
        <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e0e0e] border border-[#1a1a1a] text-xs font-mono text-zinc-500 mb-4">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-200">
            Three steps. That&apos;s it.
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting lines (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-[1px]">
            <motion.div
              className="h-full w-full border-t border-dashed border-[#1f1f1f]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          <StepCard
            step={1}
            title="Browse"
            description="Explore the collection and find the icon that fits your UI."
            icon={<SearchIcon size={28} />}
            delay={0}
          />
          <StepCard
            step={2}
            title="Copy"
            description="Click the copy button to grab the TSX component code instantly."
            icon={<LinkIcon size={28} />}
            delay={1}
          />
          <StepCard
            step={3}
            title="Paste & Ship"
            description="Drop it into your React project. It works with Framer Motion out of the box."
            icon={<DownloadIcon size={28} />}
            delay={2}
          />
        </div>
        </div>
      </section>

      {/* CTA — elevated dark */}
      <section className="relative bg-[#101010] px-6 py-20">
        <div className="mx-auto max-w-3xl relative">
        {/* Glow behind the card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] bg-gradient-to-r from-purple-500/[0.06] via-blue-500/[0.06] to-cyan-500/[0.06] rounded-full blur-3xl" />
        </div>

        <motion.div
          className="relative rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a] backdrop-blur-sm p-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-200 mb-4">
            Ready to bring your UI to life?
          </h2>
          <p className="text-zinc-500 font-mono text-sm mb-8 max-w-md mx-auto">
            Start using LiveIcons today. Open source, free forever.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/icons"
              className="px-8 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors duration-200"
            >
              Get Started
            </a>
            <a
              href="https://github.com/AyushSagar99/Liveicon"
              target="_blank"
              className="px-8 py-3 rounded-xl bg-[#1a1a1a] border border-[#252525] text-zinc-300 text-sm font-semibold hover:bg-[#222222] transition-colors duration-200"
            >
              Star on GitHub
            </a>
          </div>
        </motion.div>
        </div>
      </section>

      {/* Footer — darkest */}
      <footer className="bg-[#050505] border-t border-[#151515] py-8">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-500 font-mono">
            Built with Next.js, Framer Motion & Tailwind CSS
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/AyushSagar99/Liveicon"
              target="_blank"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
            >
              GitHub
            </a>
            <span className="text-zinc-700 text-xs">MIT License</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
