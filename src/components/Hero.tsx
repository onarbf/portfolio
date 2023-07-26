import { VscChevronDown } from 'react-icons/vsc'
export const Hero = () => {
  return (
    <section className=' h-[100vh] bg-[#0B1121] flex flex-col items-center justify-center'>
      <section className='flex flex-col items-center text-white '>
        <h2>Hi! I am</h2>
        <h1 className='text-9xl font-bold'>Onar Berrade</h1>
        <h2>A JS Developer specialised in React and Node</h2>
      </section>

      <section className='flex flex-col items-center justify-center text-white mt-6'>
        <h3 className='text-xs'>Projects</h3>
        <div className='max-w-[20px]'><VscChevronDown /></div>
      </section>
    </section>
  )
}
