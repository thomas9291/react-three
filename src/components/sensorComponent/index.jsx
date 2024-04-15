import React, { useRef, useState } from "react";
import { RigidBody, CuboidCollider, Physics } from "@react-three/rapier";
import { Text3D } from "@react-three/drei";

const SensorComponent = () => {
  const sphereRef = useRef();
  const [touch, setTouch] = useState(false);
  const sphereHandler = () => {
    sphereRef.current.applyImpulse({ x: 0, y: 2.25, z: -2.25 });
  };
  return (
    <>
      <Physics debug>
        <RigidBody ref={sphereRef} position={[0, 2.5, 5]} colliders="hull">
          <mesh castShadow onClick={sphereHandler}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial color={"#CC3941"} />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed" position={[0, 0.175, -5]}>
          <CuboidCollider
            args={[2, 1, 1]}
            sensor
            onIntersectionEnter={() => setTouch(true)}
            onIntersectionExit={() => setTouch(false)}
          />
        </RigidBody>
        <RigidBody type="fixed" restitution={0.4}>
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color={"#C7CAC7"} />
          </mesh>
        </RigidBody>
      </Physics>
      {touch && (
      <Text3D position={[-1.75, 3, -5]} font={"/font/2.json"}>
        Goal
        <meshNormalMaterial />
      </Text3D>

      )}
    </>
  );
};

export default SensorComponent;
