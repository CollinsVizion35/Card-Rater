import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Floor from "./Floor";
import Plane1 from "./HomeButtons/HomeButton1";
import Plane2 from "./HomeButtons/HomeButton2";
import Plane3 from "./HomeButtons/HomeButton3";
import { Link, useNavigate } from 'react-router-dom';
import { Player } from "./Player";
import { Ball } from "./ball";
import { Glitch } from "./glitch";

function ManShow() {

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <Player/>
      <Ball/>
      <Glitch/>

      <color args={[0, 0, 0.001]} attach="background" />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, -5]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={5}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, -5]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Floor/>
    </>
  );
}

function Home() {
  const navigate = useNavigate();

    

    const handleEditBtn = () => {
        navigate('/');
    }
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <ManShow />
        <Plane1
          position={[-1.2, .5, 2]}
          onClick={() => {handleEditBtn()}}
        />
        <Plane2
          position={[-1.2, 1.2, 2]}
          onClick={() => {handleEditBtn()}}
        />
        <Plane3
          position={[-1.2, 1.9, 2]}
          onClick={() => {handleEditBtn()}}
        />
      </Canvas>
    </Suspense>
  );
}

export default Home;
