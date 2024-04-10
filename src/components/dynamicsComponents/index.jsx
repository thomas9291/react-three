import React from "react";
import { OrbitControls, KeyboardControls } from "@react-three/drei";
import DynamicsScene from "../dynamicsScene";

const DynamicsComponent = () => {
  //in the keys array on peut enter multiple keyword pour faire une action.
  //vue que les clavier peuve etre de diferent langue et les touches a de difernent position,pour etre sur d´avoir la bonne touch pour chaque clavier on ecrit key puis la touche en majuscule.
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 3]} castShadow />

      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <DynamicsScene />
      </KeyboardControls>
    </>
  );
};

export default DynamicsComponent;
