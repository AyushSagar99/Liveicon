import { Variants } from "framer-motion";

export const iconAnimations: Record<string, Variants> = {
  bounce: {
    hover: { y: -6 },
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },

  rotate: {
    hover: { rotate: 360 },
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },

  scale: {
    hover: { scale: 1.2 },
    transition: {
      type: "spring",
      stiffness: 250,
    },
  },

  pulse: {
    animate: {
      scale: [1, 1.15, 1],
    },
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
