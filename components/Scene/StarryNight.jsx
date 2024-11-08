import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import DreamRoom from "./DreamRoom";
import { TextGenerateEffect } from "../global/text-generate-effect";



function Light() {
  const ref = useRef();
  useFrame((state) => (ref.current.rotation.x = state.clock.elapsedTime));
  
  return (
    <group ref={ref}>
      <rectAreaLight
        width={15}
        height={100}
        position={[20, 7, -20]}
        intensity={5}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </group>
  );
}

const StarryNight = () => {
  return (
    <>
        <Canvas
          className="canvas-container"
          style={{
            height: "37.5rem",
            width: "100%",
            position: "relative",
            backgroundColor: '#000',
            borderRadius: 20
          }}
          camera={{ position: [20, 5, -25], fov: 30 }}
        >
          <Suspense fallback={null}>
            <Environment preset="dawn" />
            <group position-y={-1}>
              <ContactShadows
                opacity={0.42}
                scale={10}
                blur={1}
                far={10}
                resolution={256}
                color="#000000"
              />
              <DreamRoom />
              <Light />
            </group>
          </Suspense>
        </Canvas>
        <div style={{ position: 'absolute', top: '20%', left: '40%', transform: 'translate(-50%, -50%)', textAlign:"left" }}>
        <TextGenerateEffect 
          words="The Screen you see is Designed in Blender, animated using Adobe Mixamo and Rendered in React using 3D engine." 
          duration={0.5} 
          className="text-left" 
        />
      </div>
    </>
  );
};

export default StarryNight;