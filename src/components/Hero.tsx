import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'

export const Hero = () => {
  const bioData = {
    name: 'Onar Berrade',
    position: (<>Javascript developer <br /><br /> specialised in React/Node</>),
    tagline: 'I love to make websites and platforms work',
    description: (
      <>First time I wrote code was in college, studying <span className='font-[500] text-white transition hover:text-teal-300'>Marketing</span>, back in 2012, and from that moment, I knew I wanted to dedicate myself to it.
        <br />
        Today, marketing is more technical than ever. From a simple email <br /> to an internal tool to manage all campaigns, code is necessary.
        <br /><br />
        Throughout my career, I've been involved in projects both in <span className='font-[500] text-white transition hover:text-teal-300'>Front-end</span> and <span className='font-[500] text-white transition hover:text-teal-300'>Back-end</span> for a university, a
        <a className='font-[500] text-white transition hover:text-teal-300' href='https://www.prodigiosovolcan.com'> marketing agency</a>
        , a major pharmaceutical company, a promising startup, and currently, McAfee.
        <br /><br />
        Currently, my goal is to specialize as a web developer, applying all the knowledge and experience I've gained over the years.
        <br /><br />
        When I'm not in front of VS Code, you can find me
        <a className='font-[500] text-white transition hover:text-teal-300' href='https://www.prodigiosovolcan.com'>  reading a book </a>
        or playing a
        <a className='font-[500] text-white transition hover:text-teal-300' href='https://www.prodigiosovolcan.com'> good video game</a>.
      </>)
  }
  return (
    <section className='flex flex-col md:flex-row pt-[56px] lg:pt-[72px]  w-auto md:w-[1112px]  mx-6 md:mx-auto'>
      <header className='min-w-auto md:min-w-[524px]'>

        <div>

          <h1 className='text-4xl sm:text-5xl text-slate-200 font-[600] tracking-tight leading-4'>{bioData.name}</h1>
          <h2 className='text-lg  text-slate-200 lg:leading-[0.8rem] pt-5 lg:pt-3'>{bioData.position}</h2>
          <h3 className=' font-[400] pt-3'>{bioData.tagline}</h3>
        </div>
        <div>
          <ul className='flex gap-2 mt-5'>
            <li className='transition hover:text-white'><AiFillGithub size={32} /></li>
            <li className='transition hover:text-white'><AiFillLinkedin size={32} /></li>
            <li className='transition hover:text-white'><AiFillTwitterSquare size={32} /></li>
          </ul>
        </div>
      </header>
      <div className=' grow  text-[#94a3b8]   px-0  lg:px-4 lg:mt-0 mt-[200px]'>
        <h4 className='block lg:hidden text-base font-[700] my-10'>ABOUT</h4>
        <p className='mt-0 lg:mt-2'>
          {bioData.description}
        </p>
      </div>
    </section>
  )
}
