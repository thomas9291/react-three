import React, { useRef, Suspense, useEffect } from "react";
import { useHelper, Grid, CameraControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const AlienComponent = () => {
  const lightRef = useRef();
  const lightRef2 = useRef();
  const cameraControlRef = useRef();
  /*  const { DEG2RAD } = THREE.MathUtils; */
  const alien = useLoader(GLTFLoader, "/models/alien.glb");
  const barilla = useLoader(GLTFLoader, "/models/barille.glb");
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);
  useHelper(lightRef2, THREE.DirectionalLightHelper, 1);
  useEffect(() => {
    cameraControlRef.current.setLookAt(0, 4, 12, 0.5, 0.5, 1, true);
  }, []);

  return (
    <>
      <CameraControls ref={cameraControlRef} smoothTime={4} />

      <Grid
        args={[60, 60]}
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
      <directionalLight
        ref={lightRef2}
        castShadow
        position={[-5, 6, -10]}
        intensity={3}
        color={"geld"}
      />
      <group>
        <Suspense fallback={null}>
          <primitive
            object={barilla.scene}
            castShadow
            position-x={-4}
            position-z={2}
            scale={0.5}
          />
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
