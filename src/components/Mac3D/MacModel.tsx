import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { Loading } from "../Loading";

const Model = React.memo(function Model(props: any) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF("/mac-draco.glb") as any;

  const animationFactors = useMemo(
    () => ({
      rotationXFactor: 1 / 20,
      rotationYFactor: 1 / 20,
      rotationZFactor: 1 / 20,
      positionYFactor: 1 / 2,
    }),
    []
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime() / 4;
    const {
      rotationXFactor,
      rotationYFactor,
      rotationZFactor,
      positionYFactor,
    } = animationFactors;

    group.current.rotation.x = Math.cos(t / 2) * rotationXFactor + 0.25;
    group.current.rotation.y = Math.sin(t / 4) * rotationYFactor;
    group.current.rotation.z = Math.sin(t / 8) * rotationZFactor;
    group.current.position.y = (-2 + Math.sin(t / 2)) * positionYFactor;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes.Cube008.geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes.Cube008_1.geometry}
          />
          <mesh geometry={nodes.Cube008_2.geometry}>
            <Html
              rotation-x={-Math.PI / 2}
              scale={[0.28, 0.28, 0.28]}
              position={props.iframePos}
              transform
              occlude
            >
              <div className="here">
                {!props.isIframeLoaded && <Loading />}
                <iframe
                  title="Web en el MAC"
                  src={props.websiteUrl}
                  onLoad={props.handleIframeLoading}
                  style={{
                    visibility: props.isIframeLoaded ? "visible" : "hidden",
                    display: props.isIframeLoaded ? "block" : "none",
                    width: "1200px",
                    height: "768px",
                    backgroundColor: "white",
                    WebkitUserSelect: "none",
                    WebkitTouchCallout: "none",
                    MozUserSelect: "none",
                    userSelect: "none",
                    color: "#cc0000",
                  }}
                />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes.Cube002.geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes.Cube002_1.geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
});

export default function MacModel({
  websiteUrl,
  isIframeLoaded,
  handleIframeLoading,
}: any) {
  const [modelPosition, setModelPosition] = useState(
    new THREE.Vector3(-0.6, 0, 0)
  );
  const [iframePos, setIframePos] = useState(new THREE.Vector3(0, 0.04, -0.4));
  const [modelFOV, setModelFOV] = useState(42);

  useEffect(() => {
    const updatePosition = () => {
      const isWideScreen = window.innerWidth > 500;
      setModelPosition(
        isWideScreen
          ? new THREE.Vector3(-0.6, 0, 0)
          : new THREE.Vector3(0, 0, 0)
      );
      setModelFOV(isWideScreen ? 42 : 60);
      setIframePos(
        isWideScreen
          ? new THREE.Vector3(0, 0.04, -0.09)
          : new THREE.Vector3(0, 0.04, 0)
      );
    };

    window.addEventListener("resize", updatePosition);
    updatePosition();
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <Canvas camera={{ position: [-5, 0, -15], fov: modelFOV }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <group rotation={[0, Math.PI, 0]} position={modelPosition}>
        <Model
          websiteUrl={websiteUrl}
          iframePos={iframePos}
          isIframeLoaded={isIframeLoaded}
          handleIframeLoading={handleIframeLoading}
        />
      </group>
      <Environment preset="city" />
      <ContactShadows
        position={[0, -3.6, -1.2]}
        scale={20}
        blur={3}
        far={4.5}
      />
    </Canvas>
  );
}

useGLTF.preload("/mac-draco.glb");
