import React from 'react'
import EffectGlitch from './effectGlitch'

const GlitchScene = () => {
  return (
    <>
    <EffectGlitch />
    <mesh position-x={1}>
      <boxGeometry />
      <meshBasicMaterial color={"orange"} />
    </mesh>
    <mesh position-x={-1}>
      <boxGeometry />
      <meshBasicMaterial color={"green"} />
    </mesh>
  </>
  )
}

export default GlitchScene