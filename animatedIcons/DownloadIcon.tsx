import { motion } from "framer-motion";

export function DownloadIcon({ size = 32 }: { size?: number }) {

  const arrowVariants = {
    hover: {
      y: [-3, 3]
    }
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
    >

      <motion.path 
      variants={arrowVariants}
      whileHover="hover"
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      d="M12 3V15" />

      <motion.path
        d="M12 15L8 11M12 15L16 11"
        variants={arrowVariants}
        whileHover="hover"
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      <path d="M5 21H19" />

    </motion.svg>
  );
}
