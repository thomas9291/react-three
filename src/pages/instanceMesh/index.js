import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { OrbitControls } from "@react-three/drei";
import InstanceMeshComponent from "../../components/instanceMeshComponent";

const InstanceMesh = () => {
  return (
    <div className="container">
      <h2>Instance Mesh</h2>
      <Link href={"/"}>back to the home page</Link>
      <p>Avec instanceMesh on peut creer multiple mesh a partir d´une mesh (exemple plein de cube) mais avec des props diferente genre la position.</p>
      <p>dans le array args le 1 argument est la gemoetry, le 2 est le material et le 3 et le count.</p>
      <div className="containerCanvas">
        <Canvas camera={{ fov: 45, near: 0.01, far: 100, position: [0, 2, 8] }}>
          <OrbitControls />
        
          <ambientLight intensity={2} />
          <directionalLight position={[2, 2, 3]} castShadow />
          <InstanceMeshComponent />
        </Canvas>
      </div>
    </div>
  );
};

export default InstanceMesh;
