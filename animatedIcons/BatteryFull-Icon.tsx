import { motion, Variants } from "framer-motion";

export function BatteryFullIcon() {
  const barVariants: Variants = {
    hover: (i: number) => ({
      opacity: [0, 1],
      scaleY: [0.6, 1],
      transition: {
        delay: i * 0.08,
        duration: 0.25,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      whileHover="hover"
    >
      <path d="M2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H13C15.8284 6 17.2426 6 18.1213 6.87868C19 7.75736 19 9.17157 19 12C19 14.8284 19 16.2426 18.1213 17.1213C17.2426 18 15.8284 18 13 18H8C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12Z" />
      <path d="M19 9.5L22 12L19 14.5" />

      {[6, 9, 12, 15].map((x, i) => (
        <motion.path
          key={i}
          custom={i}
          variants={barVariants}
          d={`M${x} 10V14`}
        />
      ))}
    </motion.svg>
  );
}
