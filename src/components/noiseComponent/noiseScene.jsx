import React from "react";
import EffectNoise from "./effectNoise";

const NoiseScene = () => {
  return (
    <>
      <EffectNoise />
      <mesh position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color={"orange"} />
      </mesh>
      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color={"green"} />
      </mesh>
    </>
  );
};

export default NoiseScene;
