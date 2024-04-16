import React from 'react'
import {
    EffectComposer,
    ChromaticAberration
  } from "@react-three/postprocessing";


const EffectChromatic = () => {
  return (
    <EffectComposer>
    <ChromaticAberration offset={[0.01,0.01]}/>
  </EffectComposer>
  )
}

export default EffectChromatic