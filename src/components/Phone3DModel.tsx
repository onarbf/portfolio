import React, { forwardRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'
/* eslint-disable */
export const Phone3DModel = forwardRef((props: any, ref: any) => {
  
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={0.01}>
        <group scale={100}>
          <mesh
            geometry={nodes.Frame_Frame_0.geometry}
            material={materials.Frame}
          />
          <mesh
            geometry={nodes.Frame_Frame2_0.geometry}
            material={materials.Frame2}
          />
          <mesh
            geometry={nodes.Frame_Port_0.geometry}
            material={materials.Port}
          />
          <mesh
            geometry={nodes.Frame_Antenna_0.geometry}
            material={materials.Antenna}
          />
          <mesh
            geometry={nodes.Frame_Mic_0.geometry}
            material={materials.material}
          />
          <mesh
            geometry={nodes.Body_Mic_0.geometry}
            material={materials.material}
          />
          <mesh
            geometry={nodes.Body_Bezel_0.geometry}
            material={materials.Bezel}
          />
          <mesh
            geometry={nodes.Body_Body_0.geometry}
            material={materials.Body}
          />
          <mesh
            geometry={nodes.Body_Wallpaper_0.geometry}
            material={materials.Wallpaper}
          >
            <Html rotation-y={Math.PI} position={[0, -0.00, -0.02]} transform scale={[0.05, 0.051, 0.05]}>
              <iframe
                title='Web en el iPhone'
                src={props.websiteUrl} // Reemplaza esta URL con la URL de la web que quieras mostrar
                style={{
                  width: '360px',
                  height: '750px',
                  borderRadius: '50px',
                  backgroundColor: 'white',
                  WebkitUserSelect: 'none',
                  WebkitTouchCallout: 'none',
                  MozUserSelect: 'none',
                  userSelect: 'none',
                  color: '#cc0000'
                }}
              />
            </Html>
          </mesh>
          <mesh
            geometry={nodes.Body_Camera_Glass_0.geometry}
            material={materials.Camera_Glass}
          />
          <mesh
            geometry={nodes.Body_Lens_0.geometry}
            material={materials.Lens}
          />
          <mesh
            geometry={nodes.Body_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes.Camera_Body_0.geometry}
            material={materials.Body}
          />
          <mesh
            geometry={nodes.Camera_Glass_0.geometry}
            material={materials.Glass}
          />
          <mesh
            geometry={nodes.Camera_Camera_Frame001_0.geometry}
            material={materials['Camera_Frame.001']}
          />
          <mesh
            geometry={nodes.Camera_Mic_0.geometry}
            material={materials.material}
          />
          <mesh
            geometry={nodes.Body001_Screen_Glass_0.geometry}
            material={materials.Screen_Glass}
          />
          <mesh
            geometry={nodes.Button_Frame_0.geometry}
            material={materials.Frame}
          />
          <mesh
            geometry={nodes.Circle003_Frame_0.geometry}
            material={materials.Frame}
          />
          <mesh
            geometry={nodes.Apple_Logo_Logo_0.geometry}
            material={materials.Logo}
          />
          <mesh
            geometry={nodes.Camera001_Body_0.geometry}
            material={materials.Body}
          />
          <mesh
            geometry={nodes.Camera001_Gray_Glass_0.geometry}
            material={materials.Gray_Glass}
          />
          <mesh
            geometry={nodes.Camera001_Flash_0.geometry}
            material={materials.Flash}
          />
          <mesh
            geometry={nodes.Camera001_Port_0.geometry}
            material={materials.Port}
          />
          <mesh
            geometry={nodes.Camera001_Camera_Frame_0.geometry}
            material={materials.Camera_Frame}
          />
          <mesh
            geometry={nodes.Camera001_Camera_Glass_0.geometry}
            material={materials.Camera_Glass}
          />
          <mesh
            geometry={nodes.Camera001_Lens_0.geometry}
            material={materials.Lens}
          />
          <mesh
            geometry={nodes.Camera001_Black_Glass_0.geometry}
            material={materials.Black_Glass}
          />
          <mesh
            geometry={nodes.Camera003_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
      </group>
    </group>
  )
})

useGLTF.preload('/scene.gltf')
