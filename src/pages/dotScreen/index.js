import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import DotScreenComponent from "@/components/dotScreenComponent";

const DotScreen = () => {
  return (
    <div className="container">
      <h2>DotScreen</h2>
      <Link href={"/"}>back to the home page</Link>
      <p>le dotscreen divise les element avec des points.</p>
      <p>il accept deux props scale et angle.</p>

      <div className="containerCanvas">
        <Canvas
          shadows
          camera={{ fov: 45, near: 0.01, far: 100, position: [0, 2, 8] }}
        >
          <DotScreenComponent />
        </Canvas>
      </div>
    </div>
  );
};

export default DotScreen;
