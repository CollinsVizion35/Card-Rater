import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import usePromise from "react-promise-suspense";
export default ({ time, ...props }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  usePromise(ms => new Promise(res => setTimeout(res, ms)), [time]);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
      castShadow receiveShadow
    >
        
      <planeGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
};
