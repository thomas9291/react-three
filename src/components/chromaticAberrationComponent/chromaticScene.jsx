import React from 'react'
import EffectChromatic from './effectChromatic'

const ChromaticScene = () => {
  return (
    <>
    <EffectChromatic />
    <mesh position-x={1}>
      <boxGeometry />
      <meshBasicMaterial color={"orange"} />
    </mesh>
    <mesh position-x={-1}>
      <boxGeometry />
      <meshBasicMaterial color={"blue"} />
    </mesh>
  </>
  )
}

export default ChromaticScene