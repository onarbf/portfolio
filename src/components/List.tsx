import JOBS from '@/db/jobs'
import { ListCard } from './ListCard'
import { ListTitle } from './ListTitle'
export const List = () => {
  const jobs = JOBS
  const years = jobs.map(({ year }) => year)
  const uniqueYears = [...new Set(years)]
  const jobSections = []

  for (const year of uniqueYears) {
    const jobsPerYear = jobs.filter(job => job.year === year)
    jobSections.push(
      <div key={year}>
        <ListTitle content={year} />
        <div className='grow gap-2 grid grid-cols-1 md:grid-cols-2 w-full mt-2'>
          {jobsPerYear.map((job, key) => <ListCard key={key} job={job} />)}
        </div>
      </div>
    )
  }

  return (
    <div className='mx-6 w-auto lg:w-[1114px] flex flex-col justify-center lg:mx-auto'>
      <div className='mb-[32px]'>
        <h2 id='experience' className='text-2xl text-white mdmt-[72px] '>Experience</h2>
        <p className='max-w-full md:max-w-[30%] mt-2'>Here you can find all the places I've been working.<a className='text-white font-bold' href='#'> Check my resume</a> to find my full experience</p>
      </div>
      {jobSections}
    </div>
  )
}
