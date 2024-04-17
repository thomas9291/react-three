import React, { useRef, Suspense } from "react";
import { useHelper, Grid, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const AlienComponent = () => {
  const lightRef = useRef();

  const alien = useLoader(GLTFLoader, "/models/alien.glb");
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <OrbitControls />
      <Grid
        args={[30, 30]}
        cellSize={0.25}
        cellColor={"#6f6f6f"}
        sectionSize={1}
        sectionThickness={1}
        sectionColor={"#6364A6"}
        fadeDistance={20}
        fadeStrength={0.75}
      />
      <ambientLight />
      <directionalLight
        ref={lightRef}
        castShadow
        position={[5, 6, 10]}
        intensity={5}
        color={"geld"}
      />
      <group>
        <Suspense fallback={null}>
          <primitive
            object={alien.scene}
            castShadow
            rotation-y={3}
            position-y={0}
          />
        </Suspense>
      </group>
    </>
  );
};

export default AlienComponent;
