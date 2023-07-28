'use client'
import { List } from '@/components/List'
import { Hero } from '@/components/Hero'

import { MouseFollower } from '@/components/MouseFollower'
import { PortfolioSlider } from '@/components/PortfolioSlider'

export default function App () {
  return (
    <main className='antialiased text-slate-400'>
      <MouseFollower />
      <Hero />
      <PortfolioSlider />
      <List />
    </main>
  )
}
