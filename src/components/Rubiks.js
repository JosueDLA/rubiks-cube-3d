import { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Rubiks = () => {
  const gltf = useLoader(GLTFLoader, "./models/rubik/scene.gltf");

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} scale={0.003} />
    </Suspense>
  );
};

export default Rubiks;
