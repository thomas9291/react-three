import React from "react";
import { EffectComposer, Glitch } from "@react-three/postprocessing";

const EffectGlitch = () => {
  return (
    <EffectComposer>
      <Glitch  delay={[1.5, 3.5]} // min and max glitch delay
    duration={[0.6, 1.0]} // min and max glitch duration
    strength={[0.3, 1.0]} // min and max glitch strength
    />
    </EffectComposer>
  );
};

export default EffectGlitch;
