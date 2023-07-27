import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'

export const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row mt-[56px] lg:mt-[72px]'>
      <header className='min-w-auto md:min-w-[524px]'>

        <div>

          <h1 className='text-4xl sm:text-5xl text-slate-200 font-[600] tracking-tight leading-4'>Onar Berrade</h1>
          <h2 className='text-lg pt-2 text-slate-200 lg:leading-[1.4rem] pt-5 lg:pt-1'>Javascript developer <br />specialised in React/Node</h2>
          <h3 className=' pt-3 font-[400] pt-3'>I love to make websites and platforms work.</h3>
        </div>
        <div>
          <ul className='flex gap-2 mt-5'>
            <li><AiFillGithub size={32} /></li>
            <li><AiFillLinkedin size={32} /></li>
            <li><AiFillTwitterSquare size={32} /></li>
          </ul>
        </div>
      </header>
      <div className=' grow  text-[#94a3b8]   px-0  lg:px-4 lg:mt-0 mt-[200px]'>
        <h4 className='block lg:hidden text-base font-[700] my-10'>ABOUT</h4>
        <p className='mt-0 lg:mt-2'>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.</p>
        <br />
        <p>  My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.</p>
        <br />
        <p>When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds</p>
      </div>
    </section>
  )
}
