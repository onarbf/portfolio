import { SocialMediaLinks } from './SocialMediaLinks'

export const Footer = () => {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-2 w-auto md:w-[1112px] md:mx-auto min-h-[124px] mt-[72px] px-6'>
      <div className=' grow h-full'>
        <SocialMediaLinks />
      </div>
      <div className='flex md:justify-end'>
        <p className='w-full md:w-[70%]'>This website has been developed by yours truly, using NextJS, TailwindCSS and React Three. </p>
      </div>
    </footer>
  )
}
