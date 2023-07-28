import JOBS from '@/db/jobs'
import { ListCard } from './ListCard'

export const List = () => {
  const jobs = JOBS
  return (
    <div className='mx-6 w-auto lg:w-[1114px] flex flex-col justify-center lg:mx-auto'>
      <div className='flex items-center gap-1 mt-4'>
        <div className='h-[1px] w-[32px] bg-white' />
        <h4 className='text-xl text-white '>2023</h4>
      </div>
      <div className='grow gap-2 grid grid-cols-1 md:grid-cols-2 w-full mt-2'>
        <ListCard job={jobs[0]} />
        <ListCard job={jobs[0]} />
      </div>
      <div className='flex items-center gap-1 mt-4'>
        <div className='h-[1px] w-[32px] bg-white' />
        <h4 className='text-xl text-white '>2022</h4>
      </div>
      <div className='grow gap-2 grid grid-cols-1 md:grid-cols-2 w-full mt-2'>
        <ListCard job={jobs[0]} />
        <ListCard job={jobs[0]} />
      </div>
      <div className='flex items-center gap-1 mt-4'>
        <div className='h-[1px] w-[32px] bg-white' />
        <h4 className='text-xl text-white '>2021</h4>
      </div>
      <div className='grow gap-2 grid grid-cols-1 md:grid-cols-2 w-full mt-2'>
        <ListCard job={jobs[0]} />
      </div>
    </div>
  )
}
