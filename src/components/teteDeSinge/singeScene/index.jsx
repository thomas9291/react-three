import React, { useRef, useState, useEffect } from "react";
import TeteSingeDe from "@/components/teteDeSinge/tete-de-singe";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import classes from "./singeScene.module.css";

const SingeScene = () => {
  const lightRef = useRef();
  const [isColor, setIsColor] = useState("#9bdc28");

  return (
    <div className={classes.container}>
      <div className={classes.canvasContainer}>
        <Canvas shadows camera={{ position: [0.2, 0, 2] }}>
          <OrbitControls />
          <ambientLight />
          <directionalLight
            castShadow
            position={[-5, 6, -10]}
            intensity={3}
            color={"geld"}
          />
          <directionalLight
            ref={lightRef}
            castShadow
            position={[5, 6, 10]}
            intensity={5}
            color={"geld"}
          />
          <TeteSingeDe eyesMaterial={isColor} />
        </Canvas>
      </div>
      <div className={classes.cardHidden}>
        <h3>change the eyes color</h3>
        <div className={classes.color}>
          <h4>color: </h4>
          <span onClick={() => setIsColor("#9bdc28")}></span>
          <span onClick={() => setIsColor("#03a9f4")}></span>
          <span onClick={() => setIsColor("#e91e63")}></span>
        </div>
      </div>
    </div>
  );
};

export default SingeScene;
