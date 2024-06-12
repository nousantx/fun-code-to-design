import Canvas from "../components/Canvas";
import { styler } from "../styles";
const Design = () => {
  styler();
  return (
    <Canvas theme="light" width="200px" className="p-2rem font-poppins">
    Hello World
    </Canvas>
  );
};

export default Design;
