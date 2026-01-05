import { animate, Variants } from "framer-motion";

export const iconAnimations: Record<string, Variants> = {
  bounce: {
    hover: { y: -6 },
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },

  rotate: {
    hover: { rotate: 360 ,scale:1.5 },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 100,
      duration:2,
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
    hover: {
      scale: [1.5, 1.1, 1.5],
      transition: {
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  
};
