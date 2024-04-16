import React from 'react'
import { EffectComposer, Noise } from "@react-three/postprocessing";

const EffectNoise = () => {
  return (
    <EffectComposer>
      <Noise />
    </EffectComposer>
  )
}

export default EffectNoise