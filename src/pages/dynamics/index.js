import React from 'react'
import { Canvas } from '@react-three/fiber'
import Link from "next/link"
import DynamicsComponent from '@/components/dynamicsComponents'


const Dynamics = () => {
   
  return (
    <div className='container'>
        <h2>Dynamics</h2>
        <Link href={"/"}>back to the home page</Link>
       {/*  <p>by default the type of the rigidBody is dynamic</p>
        <p>with the type fixed,the rigidBody is not affected bei the mass of the another body</p>
        <p>the method setNextKineticTranslation is responsibly for moving the rigidBody.</p>
        <p>The method setNextKinematicRotation is responsibly for rotate the rigidBody.</p>
        <p>The helper from drei keywordControls need to wrap the component (scene) to be activ.</p>
        <p>the second step is to writ the map atribut on the keywordControls,is an array of object with the name of the keys and the keyword value. </p>
        <p>le hook useKeyboardControls de drei allow to now wish kewword is press from the key array.</p> */}
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