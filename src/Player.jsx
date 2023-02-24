import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";



export function Player() {
    const gltf = useLoader(
        GLTFLoader,
        "models/player/scene.gltf"
    );

    useEffect(() => {
      gltf.scene.scale.set(0.015, 0.015, 0.015)
      gltf.scene.position.set(1.9, 0, 1.2)
      gltf.scene.rotation.set(19)
      gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
            object.material.envMapIntensity = 20
        }
      });
    }, [gltf]);
    
    return <primitive object={gltf.scene}/>;
}
