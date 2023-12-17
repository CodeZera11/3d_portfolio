import PlaneScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();

  const { scene, animations } = useGLTF(PlaneScene);

  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
