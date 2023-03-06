import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import usePromise from "react-promise-suspense";
import { Text } from "@react-three/drei";
export default ({ time, ...props }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  usePromise(ms => new Promise(res => setTimeout(res, ms)), [time]);
  // Set up state for the hovered and active state
  
  const boxRef = useRef();
  const [hovered, setHover] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
useFrame(() => {
  if (hovered) {
    boxRef.current.scale.set(1.2, 1.2, 1.2)
  } else {
    boxRef.current.scale.set(1, 1, 1)
  }
});


  return (
    <>
    
    <ambientLight intensity={0.1} />
    <mesh
      {...props}
      ref={boxRef}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
      castShadow receiveShadow
    ><Text 
    scale = {[.25,.25,.25]}
    color="white"
    anchorX="center"
    anchorY="middle"
     font="/Inter-Regular.woff"
    >CrEatE TEam LiNEUp </Text>
        
      <planeGeometry attach="geometry" args={[3, .5, 1]}/>
      <meshStandardMaterial
        attach="material"
        color={[0.1, 0.1, .6]}
      />
    </mesh></>
  );
};