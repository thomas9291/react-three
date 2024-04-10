import React from 'react'
import { Canvas } from '@react-three/fiber'
import Link from "next/link"
import Habitacion3d from '@/components/habitacion'


const HabitacionModel = () => {
  return (
    <div className='container'>
        <h2>Room Model</h2>
        <Link href={"/"}>back to the home page</Link>
        <div className='containerCanvas'>
            <Canvas
          camera={{fov:45,near:0.01,far:100, position:[1,2,10]}}
            >
         
           <ambientLight intensity={4}/>
           <directionalLight position={[2,2,3]}/>
            <Habitacion3d/>

            </Canvas>
        </div>
    </div>
  )
}

export default HabitacionModel