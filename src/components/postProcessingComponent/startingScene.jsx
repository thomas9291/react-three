import React from "react";
import Effect from "./effect";

const StartingScene = () => {
  return (
    <>
      <Effect />
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

export default StartingScene;
