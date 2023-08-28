import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Environment, useGLTF, ContactShadows } from '@react-three/drei'
import { Loading } from '../Loading'

function Model (props: any) {
  const group = useRef<THREE.Group>(null!)
  const iframeRef = useRef(null!)

  const { nodes, materials } = useGLTF('/mac-draco.glb') as any
  const rotationXFactor = 1 / 20
  const rotationYFactor = 1 / 20
  const rotationZFactor = 1 / 20
  const positionYFactor = 1 / 2
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime() / 2

    const rotationX = Math.cos(t / 2) * rotationXFactor + 0.25
    const rotationY = Math.sin(t / 4) * rotationYFactor
    const rotationZ = Math.sin(t / 8) * rotationZFactor
    const positionY = (-2 + Math.sin(t / 2)) * positionYFactor

    group.current.rotation.x = rotationX
    group.current.rotation.y = rotationY
    group.current.rotation.z = rotationZ
    group.current.position.y = positionY
  })

  return (
    // position={[4, -5, 0]} desktop
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes.Cube008.geometry} />
          <mesh material={materials['matte.001']} geometry={nodes.Cube008_1.geometry} />
          <mesh geometry={nodes.Cube008_2.geometry}>
            <Html rotation-x={-Math.PI / 2} scale={[0.28, 0.28, 0.28]} position={props.iframePos} transform occlude>
              {/* onPointerDown={(e) => { e.stopPropagation() }} */}
              <div className='here'>

                {!props.isIframeLoaded && <Loading />}
                <iframe
                  ref={iframeRef}
                  title='Web en el MAC'
                  src={props.websiteUrl}
                  onLoad={props.handleIframeLoading}
                  style={{
                    visibility: props.isIframeLoaded ? 'visible' : 'hidden',
                    display: props.isIframeLoaded ? 'block' : 'none',
                    width: '1200px',
                    height: '768px',
                    backgroundColor: 'white',
                    WebkitUserSelect: 'none',
                    WebkitTouchCallout: 'none',
                    MozUserSelect: 'none',
                    userSelect: 'none',
                    color: '#cc0000'
                  }}
                />
              </div>
            </Html>

          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes.Cube002.geometry} />
        <mesh material={materials.trackpad} geometry={nodes.Cube002_1.geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}

export default function MacModel ({ websiteUrl, isIframeLoaded, handleIframeLoading }: any) {
  const group = useRef<THREE.Group>(null!)
  const [modelPosition, setModelPosition] = useState([-0.6, 0, 0]) as any
  const [iframePos, setIframePos] = useState([0, 0.04, -0.4]) as any
  const [modelFOV, setModelFOV] = useState(42)
  useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth > 500) {
        setModelPosition([-0.6, 0, 0])
        setModelFOV(42)
        setIframePos([0, 0.04, -0.09])
      } else {
        setModelPosition([0, 0, 0])
        setModelFOV(60)
        setIframePos([0, 0.04, 0.34])
      }
    }

    // Ejecuta la función al montar el componente y cuando cambia el tamaño de la pantalla

    window.addEventListener('resize', updatePosition)
    updatePosition()
    return () => window.removeEventListener('resize', updatePosition)
  }, [])
  return (
    <Canvas camera={{ position: [-5, 0, -15], fov: modelFOV }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group ref={group} rotation={[0, Math.PI, 0]} position={modelPosition}>
          <Model websiteUrl={websiteUrl} iframePos={iframePos} isIframeLoaded={isIframeLoaded} handleIframeLoading={handleIframeLoading} />
        </group>
        <Environment preset='city' />
      </Suspense>
      <ContactShadows position={[0, -3.6, -1.2]} scale={20} blur={3} far={4.5} />
    </Canvas>
  )
}
