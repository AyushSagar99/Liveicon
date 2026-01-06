import { motion, useAnimationControls } from "framer-motion";

export function SearchIcon({ size = 24 }: { size?: number }) {
  const controls = useAnimationControls();

  const handleClick = async () => {
    await controls.start("initial");
    await controls.start("finish");
  };

  const variants = {
    initial: {
      x: -3,
      y: -3,
    },
    finish: {
      x: 1,
      y: 1,
    },
  };

  return (
    <motion.svg
      onClick={handleClick}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      variants={variants}
      initial="finish"
      style={{cursor: "pointer"}}
      animate={controls}
      transition={{ duration: 0.6, 
        ease:"easeInOut"
      }}
    >
      <motion.path d="M17 17L21 21" />
      <motion.path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" />
    </motion.svg>
  );
}
