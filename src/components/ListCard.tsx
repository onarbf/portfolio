import { Job } from '@/types/types'

interface Props{
  job: Job
}

export const ListCard = ({ job }: Props) => {
  return (
    <div className='pointer-events-auto bg-slate-700 bg-opacity-100 md:bg-opacity-40 p-4 rounded min-h-[250px]'>
      <h1
        className='text-white text-lg font-semibold'
      >{job.company}
      </h1>
      <h2 className='text-base font-[400] text-slate-200 md:text-slate-400'>{job.position}</h2>
      <div className='grow  text-slate-300 font-[400] text-[0.80rem]'>
        {job.description}
      </div>
      <ul className='flex flex-wrap gap-2 pt-3'>
        {job.technologies}
      </ul>
    </div>
  )
}
