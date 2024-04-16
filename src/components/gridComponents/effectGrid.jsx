import React, { useRef } from "react";
import { EffectComposer, Grid } from "@react-three/postprocessing";

const EffectGrid = () => {
  return (
    <EffectComposer>
      <Grid scale={0.25} lineWidth={0.1} />
    </EffectComposer>
  );
};

export default EffectGrid;
