import { motion } from "framer-motion";

export function NotificationIcon({size =32}: {size?: number}) {

  return (
    <motion.g
    whileHover={{
      rotate: [-12, 12]
    }}
    transition={{
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    style={{ originX: 0.5, originY: 0 }}
  >
<motion.svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="white"
  strokeWidth={2}
>

    <path d="M20 18.5011L18.349 7.93407C17.8603 4.80601 15.166 2.5 12 2.5C8.83398 2.5 6.13971 4.80601 5.65098 7.93407L4 18.5011" />
    <path d="M20 18.5C20 16.8431 16.4183 15.5 12 15.5C7.58172 15.5 4 16.8431 4 18.5C4 20.1569 7.58172 21.5 12 21.5C16.4183 21.5 20 20.1569 20 18.5Z" />

  <motion.path d="M13 18.5H11" />
</motion.svg>
</motion.g>


  )
}

