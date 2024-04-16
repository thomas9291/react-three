import React from 'react'
import { OrbitControls } from "@react-three/drei";
import DotScreenScene from './dotScreenScene';

const DotScreenComponent = () => {
  return (
    <>
    <OrbitControls />
    <ambientLight intensity={2} />
    <directionalLight position={[2, 2, 3]} castShadow />
    <DotScreenScene />
  </>
  )
}

export default DotScreenComponent