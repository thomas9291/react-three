import React, { useMemo } from "react";
import { Physics, RigidBody, InstancedRigidBodies } from "@react-three/rapier";

const InstanceMeshComponent = () => {
  let count = 10;

  const cubesTransformations = useMemo(() => {
    const cubesPosition = [];
    const cubesRotation = [];
    const cubesScales = [];
    for (let i = 0; i < count; i++) {
      cubesPosition.push([
        (Math.random() - 0.5) * 5,
        Math.random() * 20,
        (Math.random() - 0.5) * 5,
      ]);
      cubesRotation.push([0, 0, 0]);
      cubesScales.push([0.5, 0.5, 0.5]);
    }
    return {
      position: cubesPosition,
      rotation: cubesRotation,
      scales: cubesScales,
    };
  }, [count]);
  return (
    <>
      {" "}
      <Physics>
        {/* <RigidBody>
        <mesh castShadow position={[0, 1.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color={"#CC3941"} />
        </mesh>
      </RigidBody> */}
        <RigidBody type="fixed">
          <mesh position-y={-1} rotation-x={Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[8, 8, 0.35]} />
            <meshStandardMaterial color={"#C7CAC7"} />
          </mesh>
        </RigidBody>
        <InstancedRigidBodies
          positions={cubesTransformations.position}
          rotation={cubesTransformations.rotation}
          scales={cubesTransformations.scales}
        >
          <instancedMesh args={[null, null, count]} castShadow>
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </instancedMesh>
        </InstancedRigidBodies>
      </Physics>
    </>
  );
};

export default InstanceMeshComponent;
