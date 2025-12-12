// Icon.tsx
import { HugeiconsIcon } from '@hugeicons/react'
import { ICONS } from '@/utils/icon' 

export default function Icon() {
  return (
    <div className='select-none mx-auto  max-w-[1200px] xl:px-0 p-4'>
    <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-10 gap-4'>
      {ICONS.map((item) => (
        <div
          key={item.id}
          className=' backdrop-blur-md bg-white/20 border border-white/30 
            rounded-xl p-6 shadow-lg'
        >
          <HugeiconsIcon
            icon={item.icon}
            size={24}
            width={32}
            height={32}
            color="currentColor"
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
    </div>
  )
}
