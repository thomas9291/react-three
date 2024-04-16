import React from "react";
import { OrbitControls } from "@react-three/drei";
import GridScene from "./gridScene";

const GridComponent = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 3]} castShadow />
      <GridScene />
    </>
  );
};

export default GridComponent;
