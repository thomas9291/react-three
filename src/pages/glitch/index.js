import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import GlitchComponent from "@/components/glitchComponent";
const Glitch = () => {
  return (
    <div className="container">
      <h2>Glitch</h2>
      <Link href={"/"}>back to the home page</Link>
      <p>le component glitch de postprocessing fait un effect distorsion.</p>
      <p>il accept trois props,delay,duration et strength.se sont des array.</p>

      <div className="containerCanvas">
        <Canvas
          shadows
          camera={{ fov: 45, near: 0.01, far: 100, position: [0, 2, 8] }}
        >
          <GlitchComponent />
        </Canvas>
      </div>
    </div>
  );
};

export default Glitch;
