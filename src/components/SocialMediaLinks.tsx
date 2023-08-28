import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'
export const SocialMediaLinks = () => {
  return (
    <ul className='flex gap-2'>
      <li className='transition hover:text-white cursor-pointer'><a href='https://github.com/onarbf'><AiFillGithub size={32} /></a></li>
      <li className='transition hover:text-white cursor-pointer'><a href='https://www.linkedin.com/in/onarbf/'><AiFillLinkedin size={32} /></a></li>
      <li className='transition hover:text-white cursor-pointer'><a href='https://twitter.com/onarconene'><AiFillTwitterSquare size={32} /></a></li>
    </ul>
  )
}
