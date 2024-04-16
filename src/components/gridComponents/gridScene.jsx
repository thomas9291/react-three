import React from "react";
import EffectGrid from "./effectGrid";

const GridScene = () => {
  return (
    <>
      <EffectGrid />
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

export default GridScene;
