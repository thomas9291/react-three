import React,{useRef} from "react";
import EffectGodRays from "./effectGodRays";

const GodRaysScene = () => {
    const circleRef = useRef();
  return (
    <>
      <EffectGodRays ref={circleRef} />
      <mesh position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color={"orange"} />
      </mesh>
      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color={"green"} />
      </mesh>
      <mesh position-z={-12} ref={circleRef}>
        <circleGeometry args={[7,64]}/>
        <meshBasicMaterial color={"orange"}/>
      </mesh>
    </>
  );
};

export default GodRaysScene;
