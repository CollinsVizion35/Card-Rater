import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Floor from "./Floor";
import { Link, useNavigate } from "react-router-dom";
import { Glitch } from "./glitch";
import 'animate.css';

function ManShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <Glitch />

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

      <Floor />
    </>
  );
}

function Start() {
  useEffect(() => {
    document.title = "VCR";
  }, []);
  const navigate = useNavigate();

  const handleEditBtn = () => {
    navigate("/home");
  };
  return (
    <div className="h-[100vh]">
      <Suspense fallback={null}>
        <Canvas shadows>
          <ManShow />

          <Html className="text-white w-max absolute flex justify-center items-center flex-col ml-[-22vh] mt-[-30vh] ">
            <div className=" mb-[-2em] animate__animated animate__lightSpeedInRight">
              <span className="text-[5em]">VCR</span>
              <span className="text-[7em] text-[#34FEF8]">23</span>
            </div>
            <div className="text-[0.8em] animate__animated animate__lightSpeedInLeft">Vizion Card Rater</div>

            <button
              onClick={() => {
                handleEditBtn();
              }}
              className=" w-max h-[4rem] bg-[#01112B] rounded-tl-[20px] rounded-br-[20px] text-base border-[3px] border-[#34FEF8] text-[#34FEF8] mt-10 p-3 pl-4 pt-0 cursor-pointer animate__animated animate__tada"
              

            >
              Start
            </button>
            <div className="text-[0.8em] mt-[20vh] animate__animated animate__fadeIn">©Vizion Ltd</div>
          </Html>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Start;
