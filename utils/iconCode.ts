export const ICON_CODE: Record<string, string> = {
    thumbsup: `
  import { motion } from "framer-motion";

export function ThumbsupIcon({ size = 32 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={2}
      whileHover={{
        scale: [0.5,1.15],
        stroke: "#2563eb",
        rotate:[30,0]
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      <motion.path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" />
      <motion.path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" />
    </motion.svg>
  );
}

  `.trim(),
  alarm:`
import { motion } from "framer-motion";

export function AlarmIcon({ size = 32 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      style={{ originX: "50%", originY: "50%" }}
      whileHover={{
        rotate: [-12, 12, -8, 8, -4, 4, 0],
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      strokeWidth={2}
    >
      <path d="M20.5 12.5C20.5 17.1944 16.6944 21 12 21C7.30558 21 3.5 17.1944 3.5 12.5C3.5 7.80558 7.30558 4 12 4C16.6944 4 20.5 7.80558 20.5 12.5Z" />
      <path d="M5.88 18.7031L3.5 21.0031" />
      <path d="M18.14 18.668L20.5 20.998" />
      <path d="M5 3L2 6" />
      <path d="M22 6L19 3" />
      <path d="M12 8V12.5L14 14.5" />
    </motion.svg>
  );
}`.trim(),
  twitter:`
import { motion } from "framer-motion";

export function TwitterIcon({ size = 32 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={2}
    >
      <motion.path 
     initial={{ pathLength: 1, opacity: 1 }}
     whileHover={{
       pathLength: [0, 0, 0],
       opacity: [1, 0.5, 1],
       
     }}
     transition={{
       duration: 1,
       ease: "easeInOut",
     }}
      
      d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" />
    </motion.svg>
  );
}
  `.trim(),
  star:`
import { motion } from "framer-motion";

export function StarIcon({ size = 32 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={2}
    >
      <motion.path 
     initial={{ pathLength: 1, opacity: 1 }}
     whileHover={{
       pathLength: [0, 0, 0],
       opacity: [1, 0.5, 1],
       
     }}
     transition={{
       duration: 1,
       ease: "easeInOut",
     }}
      
      d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" />
    </motion.svg>
  );
}`.trim(),
  youtube:`
  import { motion, Variants } from "framer-motion";

export function YoutubeIcon({size= 32}:{size?: number}) {
   const variants: Variants={
    hover: {
      pathLength: [1, 0, 1],
      opacity: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
  return (
    <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    whileHover="hover"
    strokeWidth={2}
    transition={{ 
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut" 
  }}
    >
    <motion.path 
    d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" />
    <motion.path 
     variants={variants}
    
    d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" />
    </motion.svg>
  )
}`.trim(),
search:`
import { motion } from "framer-motion";

export function SearchIcon({ size = 24 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      style={{ cursor: "pointer" }}
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
}`.trim(),
notification:`
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
}`.trim(),
faviourate:`
import { motion } from "framer-motion";

export function FaviourateIcon({ size = 32 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="white"
      fill="none"
      whileHover={{
        fill: "red",
        scale: 1.2,
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      strokeWidth={2}
    >
      <motion.path d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z" />
    </motion.svg>
  );
}`.trim(),
download:`
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
}`.trim(),
add:`
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
      stroke="white"
      fill="none"
      initial="initial"
      whileHover="finish"
      transition={{
        duration: 0.4,
        ease: "easeInOut"
      }}
      strokeWidth={2}
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
}`.trim(),
setting:`
import { motion } from "framer-motion";

export function SettingIcon({size =32}:{size?: number}) {
  return (
    <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke="white"
    fill="none"
    whileHover={{
        rotate:[0,90]
    }}
    transition={{
        repeat:Infinity,
    }}
    strokeWidth={2}
    >
    <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" />
    <path d="M21.011 14.0965C21.5329 13.9558 21.7939 13.8854 21.8969 13.7508C22 13.6163 22 13.3998 22 12.9669V11.0332C22 10.6003 22 10.3838 21.8969 10.2493C21.7938 10.1147 21.5329 10.0443 21.011 9.90358C19.0606 9.37759 17.8399 7.33851 18.3433 5.40087C18.4817 4.86799 18.5509 4.60156 18.4848 4.44529C18.4187 4.28902 18.2291 4.18134 17.8497 3.96596L16.125 2.98673C15.7528 2.77539 15.5667 2.66972 15.3997 2.69222C15.2326 2.71472 15.0442 2.90273 14.6672 3.27873C13.208 4.73448 10.7936 4.73442 9.33434 3.27864C8.95743 2.90263 8.76898 2.71463 8.60193 2.69212C8.43489 2.66962 8.24877 2.77529 7.87653 2.98663L6.15184 3.96587C5.77253 4.18123 5.58287 4.28891 5.51678 4.44515C5.45068 4.6014 5.51987 4.86787 5.65825 5.4008C6.16137 7.3385 4.93972 9.37763 2.98902 9.9036C2.46712 10.0443 2.20617 10.1147 2.10308 10.2492C2 10.3838 2 10.6003 2 11.0332V12.9669C2 13.3998 2 13.6163 2.10308 13.7508C2.20615 13.8854 2.46711 13.9558 2.98902 14.0965C4.9394 14.6225 6.16008 16.6616 5.65672 18.5992C5.51829 19.1321 5.44907 19.3985 5.51516 19.5548C5.58126 19.7111 5.77092 19.8188 6.15025 20.0341L7.87495 21.0134C8.24721 21.2247 8.43334 21.3304 8.6004 21.3079C8.76746 21.2854 8.95588 21.0973 9.33271 20.7213C10.7927 19.2644 13.2088 19.2643 14.6689 20.7212C15.0457 21.0973 15.2341 21.2853 15.4012 21.3078C15.5682 21.3303 15.7544 21.2246 16.1266 21.0133L17.8513 20.034C18.2307 19.8187 18.4204 19.711 18.4864 19.5547C18.5525 19.3984 18.4833 19.132 18.3448 18.5991C17.8412 16.6616 19.0609 14.6226 21.011 14.0965Z" />
    </motion.svg>
  )
}`.trim(),
task:`
import { motion } from "framer-motion";

export function TaskIcon({ size = 40 }: { size?: number }) {
  const lineVariants = {
    rest: {
      pathLength: 0,
      opacity: 0,
    },
    hover: {
      pathLength: 1,
      opacity: 1,
    },
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={2}
      initial="rest"
      whileHover="hover"
    >
      <path d="M14.4961 2.00027H9.49609C8.66767 2.00027 7.99609 2.67185 7.99609 3.50027C7.99609 4.3287 8.66767 5.00027 9.49609 5.00027H14.4961C15.3245 5.00027 15.9961 4.3287 15.9961 3.50027C15.9961 2.67185 15.3245 2.00027 14.4961 2.00027Z" />

      <motion.path
        d="M7.99609 15.0003H11.4247M7.99609 11.0003H15.9961"
        variants={lineVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      <path d="M15.9961 3.50027C17.5496 3.54709 18.4761 3.72035 19.1174 4.36164C19.9961 5.24032 19.9961 6.65451 19.9961 9.4829L19.9961 15.9997C19.9961 18.8282 19.9961 20.2424 19.1174 21.1211C18.2387 21.9997 16.8245 21.9997 13.9961 21.9997L9.99609 21.9997C7.16767 21.9997 5.75346 21.9997 4.87478 21.1211C3.9961 20.2424 3.9961 18.8282 3.99609 15.9998L3.99611 9.48296C3.9961 6.65453 3.9961 5.24031 4.87478 4.36163C5.51606 3.72034 6.44261 3.54708 7.99599 3.50027" />
    </motion.svg>
  );
}`.trim()
  };
  