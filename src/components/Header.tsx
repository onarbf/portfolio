import { useState } from 'react'
interface SectionItemsProps{
  section: string
  isActive: boolean,
  id: number
  handleActiveSection: (id:number)=>void

}
const SectionItem = ({ section, isActive, id, handleActiveSection }: SectionItemsProps) => {
  const [isHover, setIsHover] = useState(false)
  const scrollToSection = () => {
    const targetElement = document.getElementById(`${section.toLowerCase()}`)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
      handleActiveSection(id)
    }
  }

  return (
    <li
      className='' onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
      onClick={(e) => {
        handleActiveSection(id)
        scrollToSection()
      }}
    >
      <button className='flex items-center gap-1 p-2'>
        <div
          style={{
            width: (isHover || isActive) ? '72px' : '24px',
            transition: 'width 0.4s ease'
          }}
          className='bg-white h-[1px]'
        />
        {section}
      </button>
    </li>

  )
}
export const Header = () => {
  const sections = ['Projects', 'Experience']
  const [activeSection, setActiveSection] = useState(0)

  const handleActiveSection = (id: number) => {
    setActiveSection(id)
  }
  return (
    <div>
      <ul className='text-white '>
        {sections.map((section, id) => (
          <SectionItem key={id} isActive={activeSection === id} id={id} handleActiveSection={handleActiveSection} section={section} />
        ))}
      </ul>
    </div>
  )
}
