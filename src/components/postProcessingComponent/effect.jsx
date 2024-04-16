import React from "react";
import {
  EffectComposer,
  Pixelation,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
//pas besoin de installer postprocessing il est deja dans le npm @react-three/postprocessing
const Effect = () => {
    console.log("blend function: ", BlendFunction);
  return (
    <EffectComposer>
      {/* <Pixelation granularity={10} /> */}
      <Vignette
        offset={0.2}
        darkness={1.4}
        eskill={false}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
};

export default Effect;
