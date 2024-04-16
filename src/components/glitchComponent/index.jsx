import React from "react";
import { OrbitControls } from "@react-three/drei";
import GlitchScene from "./glitchScene";

const GlitchComponent = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 3]} castShadow />
      <GlitchScene />
    </>
  );
};

export default GlitchComponent;
