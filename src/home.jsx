import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Floor from "./Floor";
import Plane1 from "./HomeButtons/HomeButton1";
import Plane2 from "./HomeButtons/HomeButton2";
import Plane3 from "./HomeButtons/HomeButton3";
import { Link, useNavigate } from 'react-router-dom';
import { Player } from "./Player";
import { Ball } from "./ball";
import { Glitch } from "./glitch";
import { MusicPass } from "./contexts/musicContext"
import 'animate.css';

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

  useEffect(() => {
    document.title = "VCR - Create your Idea Footballing Rater";
  }, []);

  
  const {
    golden,
  
            currentSongIndex,
            setCurrentSongIndex,
            nextSongIndex,
            setNextSongIndex,
            isPlaying,
            setIsPlaying,
            duration,
            setDuration,
            currentTime,
            setCurrentTime,
            percentage,
            setPercentage,
            volume,
            setVolume,
            repeat,
            setRepeat,
            shuffle,
            setShuffle,
            getCurrDuration,
            audioEl,
            // for goldenAge
            playerAudio6Ref,
            playerImage6Ref,
            playerName6Ref,
            playerArtist6Ref,
  } = MusicPass();

  const navigate = useNavigate();

    

    const handleEditBtn = () => {
        navigate('/comingsoon');
        setIsPlaying(!isPlaying)
    }
    const handleEditBtn2 = () => {
        navigate('/comingsoon');
        setIsPlaying(!isPlaying)
    }
    const handleEditBtn3 = () => {
        navigate('/footballRater');
        setIsPlaying(!isPlaying)
    }
  return (
    <div className="h-[100vh] cursor-zoom-in touch-pinch-zoom">
    <Suspense fallback={null}>
      <Canvas shadows>
        <ManShow />
        <Plane1
          position={[-1.2, .5, 2]}
          onClick={() => {handleEditBtn()}}
          className="cursor-pointer"
        />
        <Plane2
          position={[-1.2, 1.2, 2]}
          onClick={() => {handleEditBtn2()}}
          className="cursor-pointer"
        />
        <Plane3
          position={[-1.2, 1.9, 2]}
          onClick={() => {handleEditBtn3()}}
          className="cursor-pointer"
        />

        <Html className="text-white w-max absolute mt-[20vh] ml-[-15vh] animate__animated animate__zoomIn animate__infinite	animate__slow">
          <div>
            Zoom in For More View ---
          </div>
        </Html>
      </Canvas>
    </Suspense>
    </div>
  );
}

export default Home;
