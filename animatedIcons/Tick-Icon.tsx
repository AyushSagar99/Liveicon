import { motion } from "framer-motion";

function TickIcon({size=20}:{size?: number}) {
  return (
    <motion.svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='green'
    strokeWidth={2}
    whileHover={{
        pathLength:[0,1]
    }}
    >
    <path d="M5 14L8.5 17.5L19 6.5" />
    </motion.svg>
  )
}

export default TickIcon