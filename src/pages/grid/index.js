import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import GridComponent from "@/components/gridComponents";

const Grid = () => {
  return (
    <div className="container">
      <h2>Grid</h2>
      <Link href={"/"}>back to the home page</Link>
    <p>le component Grid de postprocessing decoup les element de la scene en systeme de grille.</p>
    <p>il acepte deux props scale et linewidth.</p>

      <div className="containerCanvas">
        <Canvas
          shadows
          camera={{ fov: 45, near: 0.01, far: 100, position: [0, 2, 8] }}
        >
          <GridComponent />
        </Canvas>
      </div>
    </div>
  );
};

export default Grid;
