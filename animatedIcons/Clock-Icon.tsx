import { motion } from "framer-motion";

export function ClockIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
      fill="none"
      stroke="white"
      strokeWidth="2"
      whileHover="hover"
      initial="rest"
    >
      <motion.path
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.4292 4.87962 20.1859 8.86884 21.5"
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0.9 }
        }}
      />

      {/* Clock hands */}
      <motion.path
        d="M9 14L12 12V6.66702"
        variants={{
          rest: { rotate: 0 },
          hover: { rotate: 360 }
        }}
        style={{transformOrigin:"12px 12px", transformBox: "fill-box",}}
        transition={{
          duration: 1.2,
          ease: "linear"
        }}
      />

      {/* Side details (optional accent) */}
      <motion.path
        d="M13 16H15C15.5523 16 16 16.4477 16 17V18C16 18.5523 15.5523 19 15 19H14C13.4477 19 13 19.4477 13 20V21C13 21.5523 13.4477 22 14 22H16"
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0.6 }
        }}
      />

      <motion.path
        d="M22 16V19M22 19H20C19.4477 19 19 18.5523 19 18V16M22 19V22"
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0.6 }
        }}
      />
    </motion.svg>
  );
}
