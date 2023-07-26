export const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row mt-[32px] lg:mt-[72px]'>
      <header className=' md:min-w-[400px]'>

        <div>

          <h1 className='text-[2rem] lg:text-[2.4rem] font-[600] tracking-tight leading-[2.1rem]'>Onar Berrade</h1>
          <h2 className='text-[1rem] pt-2'>Javascript developer <br />specialised in React/Node</h2>
          <h3 className='text-[0.8rem] pt-3 font-[400] text-[#94a3b8]'>I love to make websites and platforms work.</h3>
        </div>
      </header>
      <div className=' grow  text-[#94a3b8] font-[300] text-[0.80rem] mt-[72px] lg:mt-0 px-0 lg:px-4'>
        <h4 className='block lg:hidden text-[0.8rem] font-[400] text-[#94a3b8] pt-2'>ABOUT</h4>
        <p className=''>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.</p>
        <br />
        <p>  My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.</p>
        <br />
        <p>When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds</p>
      </div>
    </section>
  )
}
