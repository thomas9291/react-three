import React from "react";
import { OrbitControls } from "@react-three/drei";
import GodRaysScene from "./godRaysScene";

const GodRaysComponents = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 3]} castShadow />
      <GodRaysScene />
    </>
  );
};

export default GodRaysComponents;
