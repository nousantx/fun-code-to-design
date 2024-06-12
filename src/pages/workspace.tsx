import { CanvasContainer } from "@design/index";
import GenerateImage from "@utils/downloader";
import { styler } from "@styles/index";

const WorkSpace = () => {
  styler();
  return (
    <article className="pt-2rem">
      <CanvasContainer />
      <button
        onClick={() => {
          GenerateImage();
        }}
        className="btn btn-secondary mt-2rem text-base"
      >
        <span className="ms-sharp">download</span>
        Download
      </button>
    </article>
  );
};

export default WorkSpace;
