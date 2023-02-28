import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';


export function Ball() {
    // gltf from sketchFab
    const gltf2 = useLoader (
        GLTFLoader,
        "models/ball/scene.gltf"
      );

      useEffect(() => {
        gltf2.scene.scale.set(2, 2, 2);
        gltf2.scene.position.set(2, 0.2, 1.2);
        // gltf2.scene.rotation.y = 150
        gltf2.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
      }, [gltf2]);
      
  return <primitive object={gltf2.scene}/>
}