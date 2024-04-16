import React, { forwardRef, useEffect } from "react";
import { EffectComposer, GodRays } from "@react-three/postprocessing";

const EffectGodRays = forwardRef(function EffectGodRays(props, ref) {
  useEffect(() => {
    console.log(ref);
  }, [ref]);
  //il faut faire lapel du sun conditionelement parsque au premier render le sun est undefine,ces pour sa quon utilise useEffect
  return (
    <EffectComposer>
      {ref.current && (
        <GodRays
          sun={ref.current}
          samples={60} // The number of samples per pixel.
          density={0.4} // The density of the light rays.
          
        />
      )}
    </EffectComposer>
  );
});

export default EffectGodRays;
