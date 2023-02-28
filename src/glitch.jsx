import react, { useState, useRef } from 'react'
import { Effects } from '@react-three/drei'
import { WaterPass, GlitchPass } from 'three-stdlib'
import { Canvas, extend, useFrame } from '@react-three/fiber'

extend({ WaterPass, GlitchPass })

export function Glitch() {
    const ref = useRef()
    useFrame((state) => (ref.current.time = state.clock.elapsedTime * 2))
    return (
      <Effects>
        <waterPass ref={ref} factor={0.1} />
        <glitchPass />
      </Effects>
    )
  }