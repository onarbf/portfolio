import { Job } from '@/types/types'

interface Props{
  job: Job
}

export const ListCard = ({ job }: Props) => {
  return (
    <div className='flex flex-col justify-between pointer-events-auto bg-slate-700 bg-opacity-100 md:bg-opacity-40 p-4 rounded min-h-[220px] gap-4'>
      <div>
        <h1
          className='text-white text-lg font-semibold flex gap-1 items-end'
        >{job.company} <span className='text-slate-400 font-light'>|</span><span className='text-slate-400 font-normal text-base'>{job.period}</span>
        </h1>
        <h2 className='text-[1rem] font-[400] text-slate-200 md:text-slate-400 '>
          {job.position}

        </h2>
        <div className='grow  text-slate-300 font-[400] text-[0.9rem]'>
          {job.description}
        </div>
      </div>
      <div className='flex flex-col grow'>
        <div>
          <h4 className='text-base text-bold text-white'>
            Highlights
          </h4>
        </div>
        <ul className='flex flex-col gap-1 px-3 grow mt-1'>
          {job.highlights.map((highlight, id) =>
            <li className='text-[0.8rem] list-disc  rounded text-slate-200' key={id}>{highlight}</li>
          )}
        </ul>
      </div>
    </div>
  )
}
