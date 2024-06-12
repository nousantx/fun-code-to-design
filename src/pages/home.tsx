import { Link } from "react-router-dom";
import { styler } from "../styles";

const Home = () => {
  styler();
  return (
    <article className="p-2rem">
      <header>
        <h1>Welcome to TenoxUI Workspace!</h1>
        <p className="font-medium">Hope you can buy more proper device 😘!</p>

        <div className="flex gap-1rem flex-wrap">
          <Link to="/workspace" className="btn btn-secondary-dark mt-2rem gap-4px text-sm">
            <span className="ms-sharp">widgets</span>
            Workspace
          </Link>
          <Link to="/design" className="btn btn-secondary-dark mt-2rem gap-4px text-sm">
            <span className="ms-sharp">draw</span>
            Design
          </Link>
          <Link to="/design/output" className="btn btn-secondary-dark mt-2rem gap-4px text-sm">
            <span className="ms-sharp">devices</span>
            Web
          </Link>
        </div>
      </header>
      <footer></footer>
    </article>
  );
};

export default Home;
