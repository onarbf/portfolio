import { useState } from 'react'
import MacModel from './Mac3D/MacModel'
import { PortfolioSliderCard } from './PortfolioSliderCard'
import { Slide } from '@/types/types'
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc'
import PROJECTS from '@/db/projects'
const slides: Slide[] = PROJECTS
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
    <section className='relative h-[600px] md:h-[600px] my-[48px] w-auto md:w-[1112px]  mx-6 md:mx-auto'>
      <div className='relative z-0 h-full '>
        <MacModel websiteUrl={slides[slide].websiteUrl} isIframeLoaded={isIframeLoaded} handleIframeLoading={handleIframeLoading} />
      </div>
      <div className='absolute pointer-events-none bottom-0 left-0 z-50 w-full h-full flex items-end '>
        <div className='w-full md:w-[45%] pb-6'>
          <div className='flex gap-4 py-1 text-teal-400  pointer-events-auto '>
            <button
              className='p-1 rounded-full transition ease-in-out delay-50 duration-5
            hover:bg-teal-700 outline outline-0 hover:outline hover:outline-1 hover:border-teal-700 hover:bg-opacity-40' onClick={() => {
                setIsIframeLoaded(false)
                handlePreviousSlide()
              }}
            > <VscArrowLeft size={28} />
            </button>
            <button
              className='p-1 rounded-full transition ease-in-out delay-50 duration-5
            hover:bg-teal-700 outline outline-0 hover:outline hover:outline-1 hover:border-teal-700 hover:bg-opacity-40' onClick={() => {
                setIsIframeLoaded(false)
                handleNextSlide()
              }}
            > <VscArrowRight size={28} />
            </button>
          </div>
          <PortfolioSliderCard slide={slides[slide]} />
        </div>
      </div>
    </section>
  )
}
