# LiveIcons

**Animated React icons you copy & paste.** Built with SVG + [Framer Motion](https://motion.dev). No package to install, no extra bundle — grab the TSX and ship.

**[Live demo → liveicon.vercel.app](https://liveicon.vercel.app)**

<!-- TODO: record a short GIF of the /icons page and drop it here -->
<!-- ![LiveIcons demo](public/demo.gif) -->

## Why

Icon packages ship hundreds of icons you never use. LiveIcons flips that: browse the [collection](https://liveicon.vercel.app/icons), hover to preview the animation, click copy — you own the component. Each icon is a single self-contained TSX file.

- 🎬 **40+ hand-crafted animations** — hover and tap interactions on every icon
- 📋 **Copy & paste** — no install, no lock-in, the code lives in your repo
- 🔤 **TypeScript first** — typed props, zero `any`
- 🧵 **ASCII icons too** — frame-based monospace icons at [/ascii](https://liveicon.vercel.app/ascii)

## Usage

The only dependency is Framer Motion:

```bash
pnpm add framer-motion
```

Copy an icon from the [collection](https://liveicon.vercel.app/icons) into your project, then use it like any component:

```tsx
import { StarIcon } from "@/components/icons/Star-Icon";

export default function Page() {
  return <StarIcon size={32} />;
}
```

Hover or tap the icon and it animates. Tweak the `motion` props in the copied file to make it yours.

## Running locally

```bash
pnpm install
pnpm dev
```

Icons live in [`animatedIcons/`](animatedIcons/). The registry is auto-generated — after adding an icon, run:

```bash
pnpm icons:generate
```

## Contributing

New icons welcome. Add a `Name-Icon.tsx` file to `animatedIcons/` following the existing pattern (one component, `size` prop, Framer Motion hover/tap animation), run `pnpm icons:generate`, and open a PR.

## License

[MIT](LICENSE)
