import Icon from "@/components/icon";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="mx-auto w-screen px-6 pt-24 text-center">
        
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Icons that move.
          <br />
          <span className="text-zinc-400">
            Interfaces that feel alive.
          </span>
        </h1>

        <p className="mt-6 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
          A growing animated icon library built with SVG and Framer-Motion 
          designed for modern web interfaces.
        </p>

        <div className="mt-16">
          <Icon />
        </div>

      </div>
    </div>
  );
}
