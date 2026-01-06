"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const pathVariants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
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
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="initial"
     // animate="animate"
      whileHover="animate"
    >
      {children}
    </motion.svg>
  );
}
