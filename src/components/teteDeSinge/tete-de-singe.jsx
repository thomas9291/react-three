/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 tete-de-singe.glb 
*/

import React, { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const TeteSingeDe = (props) => {
  const { nodes, materials } = useGLTF("/models/tete-de-singe.glb");

  return (
    <group {...props} dispose={null} position-y={-1}>
      <mesh
        geometry={nodes.tete.geometry}
        material={materials.tete_color}
        position={[0, 1.007, 0]}
      />
      <mesh
        geometry={nodes.oeils.geometry}
        position={[0.331, 1.275, 0.499]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.279}
      >
        {props.eyesMaterial && (
          <meshStandardMaterial color={props.eyesMaterial} />
        )}
      </mesh>
    </group>
  );
};
useGLTF.preload("/models/tete-de-singe.glb");

export default TeteSingeDe;
