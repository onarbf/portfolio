import { useState } from 'react'
import MacModel from './Mac3D/MacModel'
import { PortfolioSliderCard } from './PortfolioSliderCard'
import { Project } from '@/types/types'
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc'
import PROJECTS from '@/db/projects'
import { motion } from 'framer-motion'
const slides: Project[] = PROJECTS
export const PortfolioSlider = () => {
  const [slide, setSlide] = useState<number>(0)
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)

  const handleIframeLoading = () => {
    setIsIframeLoaded(true)
  }
  const handleNextSlide = () => {
    if (slide < slides.length - 1) {
      setSlide(slide + 1)
    } else {
      setSlide(0)
    }
  }

  const handlePreviousSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1)
    } else {
      setSlide(slides.length - 1)
    }
  }

  return (
    <section id='projects' className='relative h-[900px] md:h-[800px] my-[48px] w-full'>
      <div className='relative h-full z-0 w-full md:w-auto md:ml-[400px] '>
        <MacModel websiteUrl={slides[slide].websiteUrl} isIframeLoaded={isIframeLoaded} handleIframeLoading={handleIframeLoading} />
      </div>
      <div className='relative md:w-[1112px]   md:mx-auto'>
        <div className='absolute pointer-events-none bottom-0 z-50 w-full h-full flex items-end'>
          <div className='w-full md:w-[45%] pb-6 px-6 md:px-0'>
            <motion.div
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
              }} className='flex gap-4 py-1 text-teal-400  pointer-events-auto '
            >
              <button
                className='p-1 rounded-full transition ease-in-out delay-50 duration-5
              outline outline-1 bg-opacity-1 bg-slate-800 hover:bg-teal-700 focus:bg-slate-800
            md:bg-opacity-0 md:outline-0 hover:outline
            md:hover:outline-1 md:hover:border-teal-700
            md:hover:bg-opacity-40' onClick={() => {
                  setIsIframeLoaded(false)
                  handlePreviousSlide()
                }}
              > <VscArrowLeft size={28} />
              </button>
              <button
                className='p-1 rounded-full transition ease-in-out delay-50 duration-5
              outline outline-1 bg-opacity-1 bg-slate-800 hover:bg-teal-700 focus:bg-slate-800
            md:bg-opacity-0 md:outline-0 hover:outline
            md:hover:outline-1 md:hover:border-teal-700
            md:hover:bg-opacity-40' onClick={() => {
                  setIsIframeLoaded(false)
                  handleNextSlide()
                }}
              > <VscArrowRight size={28} />
              </button>
            </motion.div>
            <div className=''>
              <PortfolioSliderCard slide={slides[slide]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
