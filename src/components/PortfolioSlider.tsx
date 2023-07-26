import { useState } from 'react'
import { PhoneModel } from './PhoneModel'

export const PortfolioSlider = () => {
  const [websiteURL, setWebsiteURL] = useState('https://www.mayeutica.io')
  return (
    <section className='flex h-[100vh] bg-pink-900 gap-2'>
      <section className='grow gap-2 grid grid-cols-1 md:grid-cols-2'>
        <section className='flex flex-col justify-center pl-0 md:pl-6'>
          <h1 className='text-5xl xl:text-8xl font-bold text-white' onClick={() => setWebsiteURL('https://www.todoist.com')}>Mayeutica.io</h1>
          <h2 className='mt-4 text-base xl:text-xl text-white'>A cool project based on AI. Each day, Mayeutica do a review of the most important topics of the day about Spain and then generates by itself an article. It also generates the sources of the news and images using MidJourney. A beautiful newspaper to read all news in one.</h2>
          <h3 className='mt-4 text-base  xl:text-lg font-semibold text-white'>Technologies:</h3>
          <h2 className='text-base xl:text-xl text-white'>NextJS |Typescript |NodeJS |Strapi | React</h2>
        </section>
        <section className='flex flex-col justify-center  grow '>
          <div className=' grow max-h-[100%] md:max-h-[600px] xl:max-h-[800px]'>
            <PhoneModel websiteURL={websiteURL} />
          </div>
        </section>
      </section>
    </section>
  )
}
