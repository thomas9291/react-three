import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import PostStartingComponent from "../../components/postProcessingComponent";

const PostStarting = () => {
  return (
    <div className="container">
      <h2>PostProcessing starting</h2>
      <Link href={"/"}>back to the home page</Link>
      <p>
        il faut creer un component extrat afin de gerer les effect de la scene
      </p>
      <p>
        le composent Pixelation de postprocessing pixelise la scene et accept
        une props granularity, le default value est 5.plus on increase et plus
        ces floue.
      </p>
      <p>
        le composent Vignette de postprocessing permet de retravailler la scen
        comme fotoshop, il accept 4 props, offset default = 0.3,darkness default
        = 0.9,eskill default = false et blendFunction default
        BlendFunction.NORMAL
      </p>
      <p>
        blendfunction a beaucoup de method,example: alpha,hue,saturation, ect...
      </p>
      <p>
        pour pouvoir voir l´effect de Vignette il faut changer le canvas
        background.on peut le changer avec le css ou avec le composant de color
        dans le canvas.
      </p>
      <div className="containerCanvas">
        <Canvas
          shadows
          camera={{ fov: 45, near: 0.01, far: 100, position: [0, 2, 8] }}
        >
          <color args={["#ffffff"]} attach={"background"} />
          <PostStartingComponent />
        </Canvas>
      </div>
    </div>
  );
};

export default PostStarting;
