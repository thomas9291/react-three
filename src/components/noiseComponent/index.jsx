import React from 'react'
import { OrbitControls } from "@react-three/drei";
import NoiseScene from './noiseScene';


const NoiseComponent = () => {
  return (
    <>
    <OrbitControls />
    <ambientLight intensity={2} />
    <directionalLight position={[2, 2, 3]} castShadow />
    <NoiseScene />
  </>
  )
}

export default NoiseComponent