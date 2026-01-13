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
}`.trim(),
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
}`.trim(),
link:`
import { motion } from "framer-motion";

export function LinkIcon({ size = 32 }: { size?: number }) {

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={1.5}
      initial="initial"
      whileHover="hover"
      transition={{ duration:0.5, type: "spring", stiffness: 500, damping: 20 }}
    >
      <motion.path
        d="M9.14339 10.691L9.35031 10.4841C11.329 8.50532 14.5372 8.50532 16.5159 10.4841C18.4947 12.4628 18.4947 15.671 16.5159 17.6497L13.6497 20.5159C11.671 22.4947 8.46279 22.4947 6.48405 20.5159C4.50532 18.5372 4.50532 15.329 6.48405 13.3503L6.9484 12.886"
        variants={{
          initial: { x: 0, y: 0 },
          hover: { x: [1,-1], y: [-1,1] }
        }}
      />

      <motion.path
        d="M17.0516 11.114L17.5159 10.6497C19.4947 8.67095 19.4947 5.46279 17.5159 3.48405C15.5372 1.50532 12.329 1.50532 10.3503 3.48405L7.48405 6.35031C5.50532 8.32904 5.50532 11.5372 7.48405 13.5159C9.46279 15.4947 12.671 15.4947 14.6497 13.5159L14.8566 13.309"
        variants={{
          initial: { x: 0, y: 0 },
          hover: { x: [-1,1], y: [1,-1] }
        }}
      />
    </motion.svg>
  );
}`.trim(),
apple:`
import { motion } from "framer-motion";

export function AppleIcon({ size = 32 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={1.5}
      initial="initial"
      whileHover="hover"
      variants={{
        hover: {
          y: -3,
          scale: 1.05,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
    >
      <motion.path
        d="M12 5.75C12 3.75 13.5 1.75 15.5 1.75C15.5 3.75 14 5.75 12 5.75Z"
        variants={{
          initial: {
            rotate: 0,
            x: 0,
            y: 0,
          },
          hover: {
            rotate: -12,
            x: -1,
            y: -2,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 12,
        }}
        style={{
          transformOrigin: "bottom right",
        }}
      />

      <path d="M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z" />
    </motion.svg>
  );
}`.trim(),
github:`
import { motion } from "framer-motion";

export function GithubIcon({ size = 32 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={1.5}
      initial={{ rotate: 0, y: 0 }}
      whileHover={{
        x: [-1, 1, -1, 1, 0],
      }}
      transition={{ duration: 0.25 }}
    >
      <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" />
    </motion.svg>
  );
}`.trim(),
instagram:`
import { motion } from "framer-motion";

export function InstagramIcon({size=32}:{size?: number}) {
  return (
    <motion.svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='white'
    strokeWidth={1.5}
    whileHover='hover'
    >
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
    <motion.path 
    variants={{
        hover:{scale:0.6}
    }}
    d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" />
    <motion.circle 
    variants={{
        hover:{opacity:[0,1]}
    }}
    transition={{
        duration:0.5
    }}
    cx="17.5" cy="6.5" r="1" fill="white" />
    </motion.svg>
  )
}`.trim(),
delete:`
import { motion } from "framer-motion"

export function DeleteIcon({size=32}:{size?: number}) {
  return (
    <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    color="currentColor" 
    fill="none" 
    stroke="white" 
    strokeWidth="2"
    whileHover='hover'
    >
    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" />
    <motion.path 
    variants={{
        hover:{y:[-5,0]}
    }}
    transition={{
        duration:0.4,
        type:'spring',
        stiffness:300
    }}
    d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" />
    <path d="M9.5 16.5L9.5 10.5" />
    <path d="M14.5 16.5L14.5 10.5" />
    </motion.svg>
  )
}`.trim(),
lock:`
import { motion } from "framer-motion";

export function LockIcon({ size = 32 }: { size?: number }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      initial="initial"
      whileHover="hover"
      variants={{
        hover: {
          rotate: [0, -2, 2, -1, 1, 0],
        },
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <path d="M12 16.5V14.5" />
      <path d="M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z" />
      <motion.path
        d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
        variants={{
          hover: {
            y: [-2, -4, 0],
            rotate: [-5, 5, 0],
          },
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}`.trim(),
location:`
import { motion, spring } from "framer-motion";

export function LocationIcon({size=32}:{size?: number}) {
  return (
    <motion.svg viewBox="0 0 24 24" width={size} height={size}  fill="none" stroke="white" strokeWidth="1.5"
    whileHover={{
        y:[-3,0]
    }}
    transition={{
        type:spring,
        stiffness:600,
        duration:0.3
    }}
    >
    <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" />
    <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" />
    </motion.svg>
  )
}`.trim(),
user:`
import { motion } from "framer-motion";

export function UserIcon({ size = 32 }: { size?: number }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="white"
      strokeWidth="2"
      whileHover="hover"
      variants={{
        hover: {
          y: -2,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
    >
      <motion.path
        d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z"
        variants={{
          hover: {
            y: -1.5,
            rotate: -3,
          },
        }}
        transition={{ duration: 0.25 }}
        style={{ transformOrigin: "center bottom" }}
      />

      <motion.path
        d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5"
        variants={{
          hover: { y: 0.5 },
        }}
        transition={{ duration: 0.25 }}
      />
    </motion.svg>
  );
}`.trim(),
accident:`
import { motion } from "framer-motion";

export function AccidentIcon() {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="white" fill="none" stroke="currentColor" strokeWidth="1.5"
    whileHover='hover'
    >
        <motion.path 
        variants={{
            hover:{
                opacity:[0,1]
            }
        }}
        d="M10.0079 9.99999L7.4303 7.95292C7.13015 7.70141 6.98007 7.57565 7.01465 7.44574C7.04923 7.31584 7.24172 7.28229 7.62668 7.21519L8.79963 7.01075C9.24694 6.93279 9.30287 6.81796 9.10361 6.41056L7.86097 3.86982C7.61457 3.36601 7.49137 3.1141 7.6041 3.00757C7.71682 2.90104 7.95921 3.04032 8.44398 3.31887L10.5351 4.52047C10.8954 4.72748 10.9314 4.71654 11.117 4.34334L11.9611 2.64566C12.1808 2.2038 12.2907 1.98288 12.4373 2.00102C12.5839 2.01917 12.6372 2.2603 12.7437 2.74254L13.4246 5.82349C13.5138 6.2273 13.6177 6.28275 13.9978 6.11892L16.2665 5.14122C16.6616 4.97094 16.8592 4.8858 16.9592 4.98397C17.0593 5.08214 16.9794 5.28281 16.8198 5.68416L15.0047 9.99999" />
        <motion.path 
        variants={{
            hover:{
                x:[-4,0]
            }
        }}
        d="M6.74495 12.9996L2 12.9996M6.74495 12.9996C7.51333 13.5012 8.15661 13.5697 8.97523 13.986C9.99046 14.58 10.4726 15.5 10.4682 17C10.4682 18 10.598 19.02 10.2819 19.57C9.91993 20.2 7.69654 19.998 7.49669 19.998M6.74495 12.9996C5.72095 12.3312 5.15952 11.0869 4.5321 10.08C3.6602 8.58003 2.46581 8.10003 2.01194 8.00403M7.49669 19.998C7.49669 21.1 6.6905 22 5.49615 22C4.40133 22 3.50557 21.1 3.50557 19.998M7.49669 19.998C7.49669 18.95 6.6905 18 5.49615 18C4.40133 18 3.50557 18.9 3.50557 19.998M3.50557 19.998H2" />
        <motion.path 
        variants={{
            hover:{
                x:[4,0]
            }
        }}
        d="M17.255 12.997L22 12.997M17.255 12.997C16.4867 13.4987 15.8434 13.5672 15.0247 13.9837C14.0095 14.5779 13.5274 15.4981 13.5318 16.9986C13.5318 17.9989 13.402 19.0191 13.718 19.5693C14.0801 20.1995 16.3034 19.9974 16.5033 19.9974M17.255 12.997C18.279 12.3284 18.8405 11.0837 19.4679 10.0766C20.3398 8.57616 21.5342 8.09603 21.988 8M16.5033 19.9974C16.5033 21.0997 17.3095 22 18.5038 22C19.5986 22 20.4944 21.0997 20.4944 19.9974M16.5033 19.9974C16.5033 18.9491 17.3095 17.9989 18.5038 17.9989C19.5986 17.9989 20.4944 18.8991 20.4944 19.9974M20.4944 19.9974H22" />
    </motion.svg>
  )
}`.trim(),
compass:`
import { motion } from "framer-motion";

export function CompassIcon() {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="white" fill="none" stroke="currentColor" strokeWidth="1.5"
    whileHover='hover'
    >
        <circle cx="12" cy="13" r="9" />
        <motion.path variants={{ hover:{y:[2,0]}}} d="M12 3.5V2" />
        <motion.path variants={{ hover:{y:[2,0]}}} d="M10 2H14" />
        <motion.path 
        variants={{
            hover:{
                rotate:[360,0]
            }
        }}
        transition={{duration:0.3}}
        d="M14.7728 10.2571C15.5061 10.9837 14.3328 16.8933 13.1289 16.9974C12.1189 17.0848 11.8041 15.0928 11.5914 14.4614C11.3815 13.8383 11.1478 13.6139 10.5298 13.4095C8.95989 12.8901 8.17492 12.6304 8.0195 12.2192C7.60796 11.1304 13.8362 9.32902 14.7728 10.2571Z" />
    </motion.svg>
  )
}`.trim(),
activity:`
import { motion } from "framer-motion";

export function ActivityIcon() {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="white" fill="none" stroke="currentColor" strokeWidth="1.5" 
    whileHover='hover'
    >
    <path d="M4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682Z" />
    <motion.path variants={{ hover:{pathLength:[0,1]}}} transition={{duration:0.2}} d="M6 12H8.5L10.5 8L13.5 16L15.5 12H18" />
</motion.svg>
  )
}`.trim(),
square:`
import { motion } from "framer-motion";

export function SquareIcon() {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="white" fill="none" stroke="currentColor" stroke-width="2"
    whileHover='hover'
    >
    <motion.g
    variants={{
      hover: {
        rotate: 90,
        scale: 1.05,
      },
    }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 12,
    }}
    style={{ transformOrigin: "50% 50%" }}
  >
    <path d="M12 11.5C12.4955 11.5 12.9562 11.3015 13.8775 10.9045L14.5423 10.618C16.1808 9.91202 17 9.55902 17 9C17 8.44098 16.1808 8.08798 14.5423 7.38197L13.8775 7.09549C12.9562 6.6985 12.4955 6.5 12 6.5C11.5045 6.5 11.0438 6.6985 10.1225 7.09549L9.45768 7.38197C7.81923 8.08798 7 8.44098 7 9C7 9.55902 7.81923 9.91202 9.45768 10.618L10.1225 10.9045C11.0438 11.3015 11.5045 11.5 12 11.5ZM12 11.5V17.5" />
    <path d="M17 9V15C17 15.559 16.1808 15.912 14.5423 16.618L13.8775 16.9045C12.9562 17.3015 12.4955 17.5 12 17.5C11.5045 17.5 11.0438 17.3015 10.1225 16.9045L9.45768 16.618C7.81923 15.912 7 15.559 7 15V9" />
    <motion.path 
    d="M9.14426 2.5C6.48724 2.56075 4.93529 2.81456 3.87493 3.87493C2.81456 4.93529 2.56075 6.48724 2.5 9.14426M14.8557 2.5C17.5128 2.56075 19.0647 2.81456 20.1251 3.87493C21.1854 4.93529 21.4392 6.48724 21.5 9.14426M14.8557 21.5C17.5128 21.4392 19.0647 21.1854 20.1251 20.1251C21.1854 19.0647 21.4392 17.5128 21.5 14.8557M9.14426 21.5C6.48724 21.4392 4.93529 21.1854 3.87493 20.1251C2.81456 19.0647 2.56075 17.5128 2.5 14.8557" />
    </motion.g>
</motion.svg>
  )
}`.trim()
  };
  