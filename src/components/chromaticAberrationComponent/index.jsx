import React from "react";
import { OrbitControls } from "@react-three/drei";
import ChromaticScene from "./chromaticScene";

const ChromaticAberrationComponent = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 3]} castShadow />
      <ChromaticScene />
    </>
  );
};

export default ChromaticAberrationComponent;
