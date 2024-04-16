import React from 'react'
import { OrbitControls } from '@react-three/drei'
import StartingScene from './startingScene'


const PostStartingComponent = () => {
  return (
    <>
    <OrbitControls/>
    <ambientLight intensity={2}/>
     <directionalLight position={[2,2,3]} castShadow/>
     <StartingScene/>
        </>
  )
}

export default PostStartingComponent