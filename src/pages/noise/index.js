import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import NoiseComponent from "@/components/noiseComponent";

const Noise = () => {
  return (
    <div className="container">
      <h2>Noise</h2>
      <Link href={"/"}>back to the home page</Link>
      <p>
        se component de postprocessing fait un effect crypter en mode canal +
        sans decodeur.
      </p>
      <div className="containerCanvas">
        <Canvas
          shadows
          camera={{ fov: 45, near: 0.01, far: 100, position: [0, 2, 8] }}
        >
          <NoiseComponent />
        </Canvas>
      </div>
    </div>
  );
};

export default Noise;
