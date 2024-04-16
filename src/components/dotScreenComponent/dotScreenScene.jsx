import React from "react";
import EffectDotScreen from "./effectDotScreen";


const DotScreenScene = () => {
  return (
    <>
      <EffectDotScreen />
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

export default DotScreenScene;
