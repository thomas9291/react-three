import React from "react";
import EffectBrightness from "./effectBrightness";

const BrignessScene = () => {
  return (
    <>
      <EffectBrightness />
      <mesh position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color={"orange"} />
      </mesh>
      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color={"blue"} />
      </mesh>
    </>
  );
};

export default BrignessScene;
