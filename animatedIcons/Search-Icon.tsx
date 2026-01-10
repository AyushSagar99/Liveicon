import { motion } from "framer-motion";

export function SearchIcon({ size = 24 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      whileHover={{
        scale: 1.2,
        rotate: -9
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      strokeWidth={2}
    >
      <motion.path d="M17 17L21 21" />
      <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" />
      </motion.svg>
  );
}
