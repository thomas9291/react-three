import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import ChromaticAberrationComponent from "@/components/chromaticAberrationComponent";

const ChromaticAberration = () => {
  return (
    <div className="container">
      <h2>Chromatic Aberration</h2>
      <Link href={"/"}>back to the home page</Link>
      <p>cette effect divise la scene en trois colors.</p>
      <p>avec le offset attribut on peut acentuer l´effet.</p>
      <p>le props offset est un array,le premier index et pour le x axe et le deuxieme pour le y axe.</p>
      <p>aparament cette effect est tres utiliser dans les jeux video.</p>
      <div className="containerCanvas">
        <Canvas
          shadows
          camera={{ fov: 45, near: 0.01, far: 100, position: [0, 2, 8] }}
        >
          <ChromaticAberrationComponent />
        </Canvas>
      </div>
    </div>
  );
};

export default ChromaticAberration;
