"use client";

import Link from "next/link";
import "@fontsource/science-gothic";

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="
            grid h-16 w-full grid-cols-[1fr_auto_1fr] items-center gap-3
            backdrop-blur-xl
            bg-[#0a0a0a]/80
            border border-[#1f1f1f]
            rounded-2xl
            shadow-lg
            mt-4
            px-4 sm:px-6
          "
        >
          <Link href="/" className="flex min-w-0 items-center gap-2 justify-self-start">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white truncate">
              Live<span className="text-zinc-400">icons</span>
            </span>
          </Link>

          <nav className="flex items-center gap-0.5 sm:gap-2 justify-self-center">
            <Link
              href="/icons"
              className="px-2 py-1.5 sm:px-3 rounded-lg text-xs sm:text-sm font-mono text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              SVG
            </Link>
            <Link
              href="/ascii"
              className="px-2 py-1.5 sm:px-3 rounded-lg text-xs sm:text-sm font-mono text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              ASCII
            </Link>
          </nav>

          <Link
            href="https://github.com/AyushSagar99/Liveicon"
            target="_blank"
            className="
              justify-self-end
              text-white/80
              hover:text-white
              transition
              cursor-pointer
            "
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
