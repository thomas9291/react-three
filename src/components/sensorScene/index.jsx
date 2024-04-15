import SensorComponent from "../sensorComponent";
import { OrbitControls } from "@react-three/drei";
const SensorScene = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={4} />
      <directionalLight position={[2, 2, 3]} castShadow/>
      <SensorComponent />
    </>
  );
};

export default SensorScene;
