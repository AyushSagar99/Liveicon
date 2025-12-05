// Icon.tsx
import { HugeiconsIcon } from '@hugeicons/react'
import { ICONS } from '@/utils/icon' 

export default function Icon() {
  return (
    <div className='flex justify-center items-center h-screen gap-3'>
      {ICONS.map((item) => (
        <div
          key={item.id}
          className='hover:border-2 transition-discrete rounded-xl p-7 hover:border-purple-200 bg-[#FBFCFB] cursor-pointer'
        >
          <HugeiconsIcon
            icon={item.icon}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
  )
}
