import React from 'react'
import { OrbitControls } from '@react-three/drei'
import DynamicsScene from '../dynamicsScene'
 
const DynamicsComponent = () => {
  return (
   <>
   <OrbitControls/>
   <ambientLight intensity={2}/>
   <directionalLight position={[2,2,3]} castShadow/>
   <DynamicsScene/>
   </>
  )
}

export default DynamicsComponent