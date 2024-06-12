import { styler } from "../styles";

const Typography = () => {
  styler();
  return (
    <article className="p-2rem font-poppins">
      <header>
        <h1 className="flex-center jc-[start] gap-8px">
          Typography
          <span className="ms-round">border_color</span>
        </h1>
        <p className="mt-4px">Typesheets for tenoxui design workspace.</p>
      </header>
      <div className="my-2rem bg-$neutral-500 h-1px"></div>
      <section className="flex fd-column gap-2rem">
        <div className="flex-center space">
          <h1 className="fs-2.5rem ls--0.030em font-extrabold">Typography</h1>
          <p className="text-sm">h1</p>
        </div>
        <div className="flex-center space">
          <h2 className="fs-2.25rem ls--0.025em font-bold">Typography</h2>
          <p className="text-sm">h2</p>
        </div>
        <div className="flex-center space">
          <h3 className="fs-1.75rem ls--0.025em font-bold">Typography</h3>
          <p className="text-sm">h3</p>
        </div>
        <div className="flex-center space">
          <h4 className="fs-1.25rem ls--0.025em font-semibold">Typography</h4>
          <p className="text-sm">h4</p>
        </div>
        <div className="flex-center space">
          <p className="fs-1 ls--0.025em">Lorem ipsum dolor sit amet.</p>
          <p className="text-sm">text</p>
        </div>
        <div className="flex-center space">
          <p className="fs-1 ls--0.025em font-black">Lorem ipsum dolor sit amet.</p>
          <p className="text-sm">black</p>
        </div>
        <div className="flex-center space">
          <p className="fs-1 ls--0.025em font-extrabold">Lorem ipsum dolor sit amet.</p>
          <p className="text-sm">extrabold</p>
        </div>
        <div className="flex-center space">
          <p className="fs-1 ls--0.025em font-bold">Lorem ipsum dolor sit amet.</p>
          <p className="text-sm">bold</p>
        </div>
        <div className="flex-center space">
          <p className="fs-1 ls--0.025em font-semibold">Lorem ipsum dolor sit amet.</p>
          <p className="text-sm">semibold</p>
        </div>
        <div className="flex-center space">
          <p className="fs-1 ls--0.025em font-medium">Lorem ipsum dolor sit amet.</p>
          <p className="text-sm">medium</p>
        </div>
        <div className="flex-center space">
          <p className="fs-1 ls--0.025em font-normal">Lorem ipsum dolor sit amet.</p>
          <p className="text-sm">regular</p>
        </div>
        <div className="flex-center space">
          <p className="fs-1 ls--0.025em font-light">Lorem ipsum dolor sit amet.</p>
          <p className="text-sm">light</p>
        </div>
        <div className="flex-center space">
          <p className="fs-1 ls--0.025em font-extralight">Lorem ipsum dolor sit amet.</p>
          <p className="text-sm">extralight</p>
        </div>
        <div className="flex-center space">
          <p className="fs-1 ls--0.025em font-thin">Lorem ipsum dolor sit amet.</p>
          <p className="text-sm">thin</p>
        </div>
      </section>
    </article>
  );
};

export default Typography;
