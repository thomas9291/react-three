import React, { useRef } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";

const DynamicsScene = () => {
  const cubeRef = useRef();
  const spinner = useRef();
  const isJump = useRef(false);
  const allKeys = useKeyboardControls((keys) => keys);
  console.log("allkeys: ", allKeys);
  const cubeHandler = () => {
    cubeRef.current.applyImpulse({ x: -25, y: 0, z: 0 });
  };
  const cubeMovementHandler = () => {
      if (isJump.current === true) {
        if (allKeys.jump) {
          cubeRef.current.applyImpulse({ x: 0, y: 40, z: 0 });
          isJump.current = false;
        }
      }
    if (allKeys.forward) {
      cubeRef.current.applyImpulse({ x: 0, y: 0, z: -0.3 });
    }
    if (allKeys.backward) {
      cubeRef.current.applyImpulse({ x: 0, y: 0, z: 0.3 });
    }
    if (allKeys.leftward) {
      cubeRef.current.applyImpulse({ x: -0.3, y: 0, z: 0 });
    }
    if (allKeys.rightward) {
      cubeRef.current.applyImpulse({ x: 0.3, y: 0, z: 0 });
    }
    //le problem avec jump ces que le fait d´etre dans le frame,sa fait que meme si on apuis que une fois sur le button pour sauter sa active la fonction plusieur fois.
    //la solution est de checker si le cube est sur le sol activer la function.on peut le faire grace a l´atribut onCollisionEnter.
  };
  useFrame((state) => {
    const getElapsedTime = state.clock.getElapsedTime();
    //Math.abs permet d´avoir un nombre qui reste positiv.(pour rester sur le plane)
    //Math.sin fait un va et vient entre -1 et 1
    //setNextKinematicTranslation({x:0,y:0,z:0})//moving
    //setNextKinematicRotation(quaternion)//rotating
    spinner.current?.setNextKinematicTranslation({
      x: 0,
      y: Math.abs(Math.sin(getElapsedTime)),
      z: 0,
    });
    const eulerRotationAngle = new THREE.Euler(0, getElapsedTime, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotationAngle);
    spinner.current?.setNextKinematicRotation(quaternionRotation);
    cubeMovementHandler();
  });
  return (
    <>
      <Physics>
        <RigidBody
          ref={cubeRef}
          position={[2.5, 2.5, 0]}
          onCollisionEnter={() => (isJump.current = true)}
          onCollisionExit={() => (isJump.current = false)}
        >
          <mesh castShadow onClick={cubeHandler}>
            <boxGeometry args={[1.75, 1.75, 1.75]} />
            <meshStandardMaterial color={"#CC3941"} />
          </mesh>
        </RigidBody>
        <RigidBody ref={spinner} position-y={-0.65} type="kinematicPosition">
          <mesh castShadow>
            <boxGeometry args={[1, 0.35, 15]} />
            <meshStandardMaterial color={"orange"} />
          </mesh>
        </RigidBody>
        <RigidBody
          type="fixed"
          position-y={-1}
          rotation-x={-Math.PI * 0.5}
          restitution={0.5}
        >
          <mesh receiveShadow>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color={"#C7CAC7"} />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default DynamicsScene;
