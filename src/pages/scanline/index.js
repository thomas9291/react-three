import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import ScanlineComponent from "@/components/scanlineComponent";

const Scanline = () => {
  return (
    <div className="container">
      <h2>Scanline</h2>
      <Link href={"/"}>back to the home page</Link>
      <p>scanline component de processing divise les element en ligne fine.</p>
      <p>le prop density permet de changer la densiter (epesseur) des ligne.</p>

      <div className="containerCanvas">
        <Canvas
          shadows
          camera={{ fov: 45, near: 0.01, far: 100, position: [0, 2, 8] }}
        >
          <ScanlineComponent />
        </Canvas>
      </div>
    </div>
  );
};

export default Scanline;
