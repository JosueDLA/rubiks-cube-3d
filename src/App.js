import "./style/App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;
