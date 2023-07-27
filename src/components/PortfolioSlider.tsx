import { useState } from 'react'
import { PhoneModel } from '../../deprecated/PhoneModel'
import MacModel from './Mac3D/MacModel'

export const PortfolioSlider = () => {
  const [websiteURL] = useState('https://www.mayeutica.io')
  return (
    <section className='grid  grid-cols-1 lg:grid-cols-8 mt-20 gap-4'>
      <div className=' col-span-1 lg:col-span-3 flex flex-col justify-between order-last lg:order-first py-0 lg:py-10'>
        <div className='hidden lg:block '>
          <h1 className='text-white text-xl'>Projects</h1>
          <div className='text-[#94a3b8] font-[300] text-[0.80rem]'>
            <p className=''>Here you can find my latest projects.</p>
            <p>You can check my Github if you prefer.</p>
          </div>
        </div>
        <div className=''>
          <div className='bg-slate-700 bg-opacity-40 p-4 rounded'>
            <h1 className='text-white'>Mayeutica.io</h1>
            <h2 className='text-[0.8rem] pt-1 font-[400] text-[#94a3b8]'>Frontend/Backend</h2>
            <div className='grow  text-[#94a3b8] font-[300] text-[0.80rem]'>
              <p className=''>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of </p>
              <br />
              <p>  My main focus these days is building products and leading projects for our .</p>
              <br />
            </div>
            <ul className='flex flex-wrap gap-2'>
              <li className='flex items-center rounded-full bg-teal-400/10 px-2 py-1 text-[0.6rem] font-medium leading-5 text-teal-300 '>NextJS</li>
              <li className='flex items-center rounded-full bg-teal-400/10 px-2 py-1 text-[0.6rem] font-medium leading-5 text-teal-300 '>Typescript</li>
              <li className='flex items-center rounded-full bg-teal-400/10 px-2 py-1 text-[0.6rem] font-medium leading-5 text-teal-300 '>NodeJS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:col-span-5  h-[300px] lg:h-[600px]'>
        <MacModel websiteURL={websiteURL} />
      </div>
    </section>
  )
}
