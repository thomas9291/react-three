import React from 'react'
import { OrbitControls } from '@react-three/drei'
import BrignessScene from './brignessScene'

const BrightnessContrastComponent = () => {
  return (
    <>
    <OrbitControls/>
    <ambientLight intensity={2}/>
     <directionalLight position={[2,2,3]} castShadow/>
  <BrignessScene/>
        </>
  )
}

export default BrightnessContrastComponent