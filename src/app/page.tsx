'use client'
import { Hero } from '@/components/Hero'
import { PortfolioSlider } from '@/components/PortfolioSlider'

export default function App () {
  return (
    <main>
      <section className='text-[#e2e8f0] w-auto md:w-[912px]  gap-12 mx-4 md:mx-auto'>
        <Hero />
        <PortfolioSlider />
      </section>
    </main>
  )
}
