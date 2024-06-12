import Canvas from "../components/Canvas";
import { styler } from "../styles";

const CanvasContainer = () => {
  return (
    <Canvas theme="light" width="1440px" className="p-0 font-poppins">
      <Design />
    </Canvas>
  );
};

const Design = () => {
  styler();
  return (
    <>
      <header className="w-full p-8px mx-auto w-mx-1440px">
        <div className="bg-[linear-gradient(145deg,\_var(--amber-200)\_0%,\_var(--fuchsia-300)\_68%,\_var(--purple-500)] br-1.5rem max-md:p-2rem md:p-4rem lg:px-6rem py-2rem relative">
          <nav className="w-full flex ai-center space sticky">
            <header className="flex-center gap-1.5rem">
              <a href="#" className="">
                <h1 className="text-lg font-semibold flex-center gap-4px">
                  <span className="ms-sharp text-2xl">offline_bolt</span>
                  EnerG
                </h1>
              </a>
              <p className="text-xs bg-fuchsia-600 bg-opacity-0.2 px-8px rounded-full max-lg:d-none lg:d-block">
                Built fast with TenoxUI CSS Framework.
              </p>
            </header>
            <div className="flex-center gap-1rem">
              <a href="#" className="text-base font-medium">
                Home
              </a>
              <a href="#" className="text-base font-medium">
                FAQ
              </a>
              <a href="#" className="text-base font-medium">
                Contact
              </a>
            </div>
          </nav>
          <header className="my-5rem ta-justify">
            <h1 className="text-7xl font-medium ls--0.040rem">Hello World!</h1>
            <p className="text-lg lh-1.4em mt-6px mb-1.5rem w-mx-600px">
              Dynamic changes happen in real-time in response to user actions or other events. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>

            <div className="flex ai-center jc-[flex-start] gap-1rem">
              <a href="#" className="btn btn-secondary-dark rounded-full">
                Get Started
              </a>
              <a href="#" className="btn btn-ghost rounded-full">
                Learn More
              </a>
            </div>
          </header>
        </div>
      </header>
      <main className="bg-red p-2rem"></main>
    </>
  );
};

export { CanvasContainer, Design as default };
