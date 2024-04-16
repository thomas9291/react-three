import React from "react";
import EffectScanline from "./effectScanline";

const ScanlineScene = () => {
  return (
    <>
      <EffectScanline />
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

export default ScanlineScene;
