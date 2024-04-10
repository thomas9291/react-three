import React,{useEffect} from 'react'
import { useGLTF,OrbitControls } from '@react-three/drei'

const Habitacion3d = () => {
    const model = useGLTF("/models/habitacion.glb")
  return (
    <>
    <OrbitControls/>
    <primitive object={model.scene} position-y={-1.7} rotation-y={-0.2} scale={0.5}/>
    </>
  )
}

useGLTF.preload("/models/habitacion.glb")

export default Habitacion3d