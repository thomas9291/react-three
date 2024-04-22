import React from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import AlienComponent from "@/components/alienComponent";

const index = () => {
  return (
    <div className="container">
      <h2>Alien</h2>
      <Link href={"/"}>back to the home page</Link>
      <div className="containerCanvas">
        <Canvas shadows camera={{position:[-2,30,-42]}}>
           
          <AlienComponent />
        </Canvas>
      </div>
    </div>
  );
};

export default index;
