import { motion } from "framer-motion";

export function AddIcon({ size = 32 }: { size?: number }) {

  const plusVariants = {
    initial: {
      scale: 1
    },
    finish: {
      scale: 1.2
    }
  };

  const circleVariants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    finish: {
      opacity: 1,
      scale: 1
    }
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      initial="initial"
      whileHover="finish"
      transition={{
        duration: 0.4,
        ease: "easeInOut"
      }}
    >

      <motion.circle
        cx="12"
        cy="12"
        r="11"
        variants={circleVariants}
        
      />

      {/* Plus sign */}
      <motion.g variants={plusVariants}>
        <motion.path d="M12.001 5V19"  />
        <motion.path d="M5 12H19"  />
      </motion.g>

    </motion.svg>
  );
}
