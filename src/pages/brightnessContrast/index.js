import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import BrightnessContrastComponent from "@/components/brightnessContrastComponents";

const brightnessContrast = () => {
  return (
    <div className="container">
      <h2>Brightness Contrast</h2>
      <Link href={"/"}>back to the home page</Link>
      <p>le component BrightnessContrast de PostProcessing permet de changer le contrats et le brightness de la scene</p>
      <p>le component accept deux prop brightness et contrast,par default ils sont 0.ils vont de 0 a 1.</p>
      <p>on peut utiliser leva pour trouver plus facilement l´effect desirer.</p>
      <div className="containerCanvas">
        <Canvas
          shadows
          camera={{ fov: 45, near: 0.01, far: 100, position: [0, 2, 8] }}
        >
            
            <BrightnessContrastComponent/>
        </Canvas>
      </div>
    </div>
  );
};

export default brightnessContrast;
