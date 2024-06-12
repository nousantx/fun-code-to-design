import { Link } from "react-router-dom";
import { styler } from "../styles";

const Home = () => {
  styler();
  return (
    <article>
      <header>
        <h1>Hello World!</h1>
        <p className="text-rose-500">Hello World!</p>

        <Link to="/workspace" className="btn btn-secondary-dark mt-2rem gap-4px text-sm">
          <span className="ms-sharp">widgets</span>
          Open Workspace
        </Link>
      </header>
      <footer></footer>
    </article>
  );
};

export default Home;
