"use client";

import { easeInOut, motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export const pathVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  finish:  { pathLength: 1, opacity: 1 },

  hoverStart: { pathLength: 1, opacity: 1 },
  hoverEnd:   { pathLength: 1, opacity: 1 }
};


export function AnimatedSvgIcon({
  size = 32,
  children,
}: {
  size?: number;
  children: ReactNode;
}) {
  return (
<motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"

      initial="hoverStart"      
     // animate="hoverEnd"        // default drawn state
      whileHover="hoverEnd"     // switch state on hover
      variants={pathVariants}
      transition={{
        duration:1.5,
        ease:easeInOut
      }}
    >

      {children}
    </motion.svg>
  );
}
