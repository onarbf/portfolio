import { Canvas } from '@react-three/fiber'
import { Phone3DModel } from './Phone3DModel'
import { Suspense, useEffect, useRef, useState } from 'react'
export const PhoneModel = ({ websiteURL }) => {
  const meshRef = useRef(null!)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (event) => {
      const normalizedPosX = (2 * event.clientX / window.innerWidth - 1) * 0.1
      const normalizedPosY = (2 * event.clientY / window.innerWidth - 1) * 0.1
      setMousePos({ x: normalizedPosX, y: normalizedPosY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )
    }
  }, [])
  return (
    <Canvas camera={{ fov: 28, position: [1.2, -0.1, 2.2] }}>
      <ambientLight intensity={1.25} />
      <directionalLight position={[1, 0, 0]} />
      <Suspense fallback={null}>
        <Phone3DModel ref={meshRef} rotation={[Math.PI + mousePos.y, 0 - mousePos.x, Math.PI]} websiteUrl={websiteURL} />
      </Suspense>
    </Canvas>
  )
}
