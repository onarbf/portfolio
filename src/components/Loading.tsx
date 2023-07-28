import { motion } from 'framer-motion'
export const Loading = () => {
  const dotTransition = {
    duration: 1,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 0.2
  }
  const dotAnimation = { y: [0, 50, 0] }
  return (
    <div className='flex items-center justify-center gap-2'>
      <motion.span
        animate={dotAnimation}
        transition={dotTransition}
        className='w-[30px] h-[30px] rounded-full bg-black'
      />
      <motion.span
        animate={dotAnimation}
        transition={{ delay: 0.2, ...dotTransition }}
        className='w-[30px] h-[30px] rounded-full bg-black'
      />
      <motion.span
        animate={dotAnimation}
        transition={{ delay: 0.4, ...dotTransition }}
        className='w-[30px] h-[30px] rounded-full bg-black'
      />
    </div>
  )
}
