import React from "react";
import {
  EffectComposer,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { useControls } from "leva";

const EffectBrightness = () => {
  const { brightness, contrast } = useControls({
    brightness: { value: 0, min: -1, max: 1, step: 0.01 },
    contrast: { value: 0, min: -1, max: 1, step: 0.01 },
  });
  return (
    <EffectComposer>
      <BrightnessContrast brightness={brightness} contrast={contrast} />
    </EffectComposer>
  );
};

export default EffectBrightness;
