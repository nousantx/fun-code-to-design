import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import WorkSpace from "../pages/workspace";
import Design, { CanvasContainer } from "../design";
import Typography from "../design/typography";
import { styler } from "../styles";

const Root = () => {
  styler();
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workspace" element={<WorkSpace />} />
          <Route path="/design" element={<CanvasContainer />} />
          <Route path="/design/output" element={<Design />} />
          <Route path="/typography" element={<Typography />} />
        </Routes>
      </main>
    </>
  );
};

export default Root;
