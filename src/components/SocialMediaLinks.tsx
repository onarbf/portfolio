import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'
export const SocialMediaLinks = () => {
  return (
    <ul className='flex gap-2'>
      <li className='transition hover:text-white cursor-pointer'><AiFillGithub size={32} /></li>
      <li className='transition hover:text-white cursor-pointer'><AiFillLinkedin size={32} /></li>
      <li className='transition hover:text-white cursor-pointer'><AiFillTwitterSquare size={32} /></li>
    </ul>
  )
}
