import React from "react";
import { EffectComposer, DotScreen } from "@react-three/postprocessing";

const EffectDotScreen = () => {
  return (
    <EffectComposer>
      <DotScreen scale={0.5} angle={Math.PI * 0.25} />
    </EffectComposer>
  );
};

export default EffectDotScreen;
