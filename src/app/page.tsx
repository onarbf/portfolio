'use client'
import { Hero } from '@/components/Hero'
import { MouseFollower } from '@/components/MouseFollower'
import { PortfolioSlider } from '@/components/PortfolioSlider'

export default function App () {
  return (
    <main>
      <MouseFollower />
      <section
        className='text-slate-400 w-auto md:w-[1112px]  gap-12 mx-6 md:mx-auto'
      >
        <div className='relative z-10'>
          <Hero />
          <PortfolioSlider />
        </div>
      </section>
    </main>
  )
}
