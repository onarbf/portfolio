import { type Slide } from '@/types/types'
import { motion } from 'framer-motion'

interface Props{
    slide: Slide
}

export const PortfolioSliderCard = ({ slide }: Props) => {
  const { websiteTitle, position, description, technologies } = slide
  return (
    <motion.div
      key={slide.id}
      animate='show'
      initial='hide'
      variants={{
        show: {
          opacity: 1,
          transition: {
            ease: 'easeOut',
            duration: 0.3
          }
        },
        hide: {
          opacity: 0
        }
      }} className='pointer-events-auto bg-slate-700 bg-opacity-40 p-4 rounded min-h-[250px]'
    >
      <h1
        className='text-white'
      >{websiteTitle}
      </h1>
      <h2 className='text-[0.8rem] pt-1 font-[400] text-[#94a3b8]'>{position}</h2>
      <div className='grow  text-[#94a3b8] font-[300] text-[0.80rem]'>
        {description}
      </div>
      <ul className='flex flex-wrap gap-2 pt-3'>
        {technologies.map((technology, index) => (<li key={index} className='flex items-center rounded-full bg-teal-400/10 px-2 py-1 text-[0.6rem] font-medium leading-5 text-teal-300 '>{technology}</li>))}
      </ul>
    </motion.div>
  )
}
