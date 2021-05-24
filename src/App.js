import "./style/App.css";
import { Suspense } from "react";
import Rubiks from "./components/Rubiks";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Rubiks />
          <OrbitControls />
          <Environment preset="city" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
