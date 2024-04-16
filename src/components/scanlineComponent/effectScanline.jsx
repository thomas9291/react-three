import React, { useRef } from "react";
import { EffectComposer, Scanline } from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";

const EffectScanline = () => {
  const scanline = useRef();
  useFrame((_, delta) => {
    scanline.current.density += delta * 0.5;
  });
  return (
    <EffectComposer>
      <Scanline density={7} ref={scanline} />
    </EffectComposer>
  );
};

export default EffectScanline;
