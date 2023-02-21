import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Floor from "./Floor";
import Cube from "./HomeButtons/HomeButton1";

function ManShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0.001]} attach="background" />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[10, 10, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={5}
        angle={0.6}
        penumbra={0.5}
        position={[-10, 10, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Floor/>
    </>
  );
}

function Home() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <ManShow />
        <Cube
          position={[-1.2, 1, 2]}
          onClick={() => window.History.push("/page2")}
        />
      </Canvas>
    </Suspense>
  );
}

export default Home;
