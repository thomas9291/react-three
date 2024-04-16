import React from 'react'
import { OrbitControls } from "@react-three/drei";
import ScanlineScene from './scanlineScene';

const ScanlineComponent = () => {
  return (
    <>
    <OrbitControls />
    <ambientLight intensity={2} />
    <directionalLight position={[2, 2, 3]} castShadow />
    <ScanlineScene />
  </>
  )
}

export default ScanlineComponent