import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import SensorScene from "../../components/sensorScene";

const Sensor = () => {
  return (
    <div className="container">
      <h2>Sensor</h2>
      <Link href={"/"}>go to the home page</Link>
      <p>
        pour utiliser le texte 3d il faut pas oublier de convertir le font en
        format json
      </p>
      <p>premier etape telecharge le font sur google font</p>
      <p>deuxiem, convertir en json sur le site facetype.js</p>
      <p>
        en m´etant l´attribut sensor d´un mesh sur true sa permet de passer a
        travers de l´obejct
      </p>
      <p>
        l´event onIntersectionEnter permet de passer une fonction quand un
        object traverse le mesh
      </p>
      <p>
        l´event on ItersectionExit permet de passer une fonction quand l´object
        sort du mesh.
      </p>
      <div className="containerCanvas">
        <Canvas
          shadows
          camera={{ fov: 45, near: 0.01, far: 100, position: [0, 3, 18] }}
        >
          <SensorScene />
        </Canvas>
      </div>
    </div>
  );
};

export default Sensor;
