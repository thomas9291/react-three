import React from 'react'
import { Canvas } from '@react-three/fiber'
import Link from "next/link"
import DynamicsComponent from '@/components/dynamicsComponents'


const Dynamics = () => {
   
  return (
    <div className='container'>
        <h2>Dynamics</h2>
        <Link href={"/"}>back to the home page</Link>
        <p>by default the type of the rigidBody is dynamic</p>
        <p>with the type fixed,the rigidBody is not affected bei the mass of the another body</p>
       <div className={"containerCanvas"}>
        <Canvas shadows camera={{
                fov: 45,
                near:0.1,
                far:100,
                position: [0,3,13]
        }}>
            <DynamicsComponent/>
        </Canvas>
       </div>


    </div>
  )
}

export default Dynamics