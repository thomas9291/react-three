import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Sky } from "@react-three/drei";
import Link from "next/link";
import { HabitacionComponent } from "@/components/habitacionComponent";

const HabitacionModel = () => {
  return (
    <div className="container">
      <h2>Room Model</h2>
      <Link href={"/"}>back to the home page</Link>
      <div className="containerCanvas">
        <Canvas
          camera={{ fov: 45, near: 0.01, far: 100, position: [4, 6, 25] }}
        >
          <OrbitControls />
          <ambientLight intensity={4} />
          <directionalLight position={[2, 2, 3]} />
          <Sky sunPosition={[2.2,-0.2,-6.16]}/>
          <HabitacionComponent />
        </Canvas>
      </div>
    </div>
  );
};

export default HabitacionModel;
