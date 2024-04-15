import React from 'react'
import { OrbitControls } from "@react-three/drei";
import InstanceMeshComponent from '../instanceMeshComponent';

const InstanceScene = () => {
  return (
    <>
    <OrbitControls />
    <ambientLight intensity={4} />
    <directionalLight position={[2, 2, 3]} castShadow/>
    <InstanceMeshComponent />
  </>
  )
}

export default InstanceScene