import Icon from "@/components/icon";
import InstallTabs from "@/components/install-tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="mx-auto container px-15 pt-24">
        <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
          <div className="text-left max-w-2xl">
            <h1 className="text-zinc-200 text-5xl sm:text-6xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Icons that move. <span className="text-zinc-400 font-mono">Interfaces that feel alive.</span>
            </h1>

            <p className="mt-8 text-zinc-500 text-base sm:text-lg font-mono">
              A growing animated icon library built with SVG and Framer-Motion designed for modern web interfaces.
            </p>

          </div>
          <div className="w-full lg:w-auto">
            <InstallTabs />
          </div>
        </div>
      </div>
      <div className="mt-16">
            <Icon />
          </div>
    </div>
  );
}
