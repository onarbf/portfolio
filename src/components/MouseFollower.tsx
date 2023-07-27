'use client'
import { useEffect, useState } from 'react'

export const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.addEventListener('mousemove', updateMousePosition)
    }
  }, [])
  console.log(mousePos)
  const backgroundPos = `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.10), transparent 80%)`
  return (
    <div
      className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute' style={{
        background: backgroundPos
      }}
    />
  )
}
