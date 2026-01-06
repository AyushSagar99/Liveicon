import { motion } from "framer-motion";

export function DownloadIcon({ size = 32 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"

    >
      <motion.path
      whileHover={{
        y: [-5, 0]
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      style={{
        originX: 0.5
      }}
        d="M16.9504 12.1817C17.1981 12.814 16.5076 13.5726 15.1267 15.0899C13.6702 16.6902 12.9201 17.4904 12 17.5C11.0799 17.4904 10.3298 16.6902 8.87331 15.0899C7.49239 13.5726 6.80193 12.814 7.04964 12.1817C..."
      />

      <motion.path d="M5.00006 21H19.0001" />
    </motion.svg>
  );
}
