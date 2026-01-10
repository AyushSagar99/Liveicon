import { motion, Variants } from "framer-motion";

export function DownloadIcon({ size = 32 }: { size?: number }) {

  const arrowHeadVariants: Variants = {
    hover: {
      y: [0, 6, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const arrowLineVariants: Variants = {
    hover: {
      y: [0, 3, 0],
      opacity: [1, 0.6, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="white"
      fill="none"
      whileHover="hover"
      strokeWidth={2}
    >

      <motion.path
        d="M12 3V15"
        variants={arrowLineVariants}
      />

      <motion.path
        d="M12 15L8 11M12 15L16 11"
        variants={arrowHeadVariants}
      />

      <path d="M5 21H19" />

    </motion.svg>
  );
}
