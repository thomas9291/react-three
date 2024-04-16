import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import GodRaysComponents from "@/components/godRaysComponents";

const GodRays = () => {
  return (
    <div className="container">
      <h2>GodRays</h2>
      <Link href={"/"}>back to the home page</Link>
      <p>
        pour utiliser se component il faut creer un mesh qui servira de point
        d´origin du rays
      </p>
      <p>le mesh sera comme un soleil. </p>
      <p>
        pour se faire il faut passer le mesh dans la props sun du component.
      </p>
      <p>
        vue que le mesh est dans la scene, il faut faire un drilling pour
        pouvoir utiliser le mesh dans le component effect.
      </p>
      <p>
        pour pouvoir faire le drilling,premier: utilise useRef pour avoir une
        ref du mesh.deuxiem: utiliser forwardRef pour recuperer le ref dans le
        component parent (children).
      </p>
      <p>on wrap le component children avec forwardRef est on passe du argument,props et ref,enssuite on rajout la props ref dans le component effect de la scene et on y passe la reference de la mesh.</p>
    <p>on peut changer la force de la lumier avec le props density, le default value est 0.96 </p>
    <p>si on change le mesh color sa change la color de lumier.</p>

      <div className="containerCanvas">
        <Canvas
          shadows
          camera={{ fov: 45, near: 0.01, far: 100, position: [0, 2, 8] }}
        >
          <GodRaysComponents />
        </Canvas>
      </div>
    </div>
  );
};

export default GodRays;
