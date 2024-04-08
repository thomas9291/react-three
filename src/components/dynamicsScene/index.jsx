import React,{useRef} from 'react'
import {Physics,RigidBody} from "@react-three/rapier"

const DynamicsScene = () => {
    const cubeRef = useRef();
    const cubeHandler = ()=> {
        cubeRef.current.applyImpulse({x:-25,y:0,z:0})
    }
  return (
    <>
    <Physics>
        <RigidBody ref={cubeRef} position={[2.5,2.5,0]} >
            <mesh castShadow onClick={cubeHandler}>
                 <boxGeometry args={[1.75,1.75,1.75]}/>
                 <meshStandardMaterial color={"#CC3941"}/>
                 </mesh>
        </RigidBody>
        <RigidBody position-y={-0.65}>
            <mesh castShadow>
                <boxGeometry args={[1,0.35,15]}/>
                <meshStandardMaterial color={"orange"}/>
            </mesh>
        </RigidBody>
        <RigidBody
        type='fixed'
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        restitution={0.5}
        >
            <mesh receiveShadow>
            <boxGeometry args={[15,15,0.35]}/>
            <meshStandardMaterial color={"#C7CAC7"}/>

            </mesh>
        </RigidBody>
    </Physics>
    </>
  )
}

export default DynamicsScene