import property from "@tenoxui/property";
export const props = [
  property,
  {
    text: "color",
    "text-opacity": "--text-opacity",
    "bg-opacity": "--bg-opacity",
    "border-opacity": "--border-opacity"
  }
];

/**
 * All Selector and its Styles.
 *
 * Make it easier to manage re-usable class name and styles.
 */

export const styles = {
  //? global styles
  body: "bg-$neutral-100 tc-$neutral-900",
  button: "outline-none border-none bg-none tc-inherit",

  //   "h2,h2,h3": ".tracking-tight",
  //   h1: ".text-4xl .font-bold",
  //   h2: ".text-3xl .font-bold",
  //   h3: ".text-2xl .font-semibold",
  //   h4: ".text-xl .font-medium",
  h1: "fs-2.5rem ls--0.030em .leading-10 .font-extrabold",
  h2: "fs-2.25rem ls--0.025em .font-bold",
  h3: "fs-1.75rem ls--0.025em .font-bold",
  h4: "fs-1.25rem ls--0.025em .font-semibold",

  a: "tc-inherit td-none",
  p: ".text-base tc-$neutral-700",
  span: "fs-inherit",
  div: "bg-color-unset",

  //? design property

  // theme
  ".theme--dark": {
    "": "bg-$neutral-950 text-$neutral-100",
    p: "text-$neutral-300"
  },
  ".theme--light": {
    "": "bg-$neutral-50 text-$neutral-950",
    p: "text-$neutral-700"
  },

  // position
  ".top": "t-0",
  ".top-left": "t-0 l-0",
  ".top-right": "t-0 r-0",
  ".bottom": "b-0",
  ".bottom-left": "b-0 l-0",
  ".bottom-right": "b-0 r-0",

  // fonts
  // sans
  ".font-montserrat": "family-[Montserrat,sans-serif]",
  ".font-geologica": "family-[Geologica,sans-serif]",
  ".font-poppins": { "": "family-[Poppins,sans-serif]", p: ".font-medium" },
  ".font-inter": "family-[Inter,sans-serif]",
  ".font-gabarito": "family-[Gabarito,sans-serif]",
  // mono
  ".font-fira-code": "family-['fira\\_code',monospace]",
  ".font-source-code": "family-['source\\_code\\_pro',monospace]",
  // serif
  ".font-lora": "family-[lora,serif]",

  //? utility classes

  ".w-full,.w-max": "w-100%",
  ".h-full,.h-max": "h-100%",
  ".flex-center": "d-flex flex-parent-center",
  ".flex-wrap": "d-flex flex-wrap-wrap",
  ".wrap": "flex-wrap-wrap",
  ".center": "flex-parent-center",
  ".col": "fd-column",
  ".space": "jc-[space-between]",
  // transition
  ".transition-color": "tr-prop-[color,\\_background-color,\\_border-color]",

  //? components

  // button
  ".btn":
    ".text-base .font-medium .rounded-md .inline-flex .center gap-2px white-space-nowrap h-36px px-12px .transition-color tr-time-150ms",
  ".btn.icons": "box-36px",
  ".btn span[class*='ms-'], .btn i.ti": ".text-lg",
  ".btn-secondary": "tc-$neutral-950 bg-$neutral-50 hover:bg-$neutral-300",
  // ".btn-secondary": "tc-$neutral-50 bg-$neutral-800 hover:bg-$neutral-900",
  ".btn-secondary-dark": "tc-$neutral-50 bg-$neutral-950 hover:bg-$neutral-800",
  ".btn-ghost": "bw-2px bs-solid bc-$neutral-900 hover:bg-$neutral-900 hover:tc-$neutral-50",
  ".btn-primary": "bg-$blue-600 hover:bg-$blue-800",

  // display
  ".flex": "d-flex",
  ".inline-flex": "d-[inline-flex]",
  // position
  ".static": "position-static",
  ".fixed": "position-fixed",
  ".absolute": "position-absolute",
  ".relative": "position-relative",
  ".sticky": "position-sticky",
  // text align
  ".text-left": "ta-left",
  ".text-center": "ta-center",
  ".text-right": "ta-right",
  ".text-justify": "ta-justify",
  ".text-start": "ta-start",
  ".text-end": "ta-end",
  // text transform
  ".uppercase": "tn-uppercase",
  ".lowercase": "tn-lowercase",
  ".capitalize": "tn-capitalize",
  ".normal-case": "tn-none",
  // text overflow
  ".truncate": "over-hidden text-over-ellipsis white-space-nowrap",
  ".text-ellipsis": "text-over-ellipsis",
  ".text-clip": "text-over-clip",
  // text wrap
  ".text-wrap": "tw-wrap",
  ".text-nowrap": "tw-nowrap",
  ".text-balance": "tw-balance",
  ".text-pretty": "tw-pretty",
  // text indent
  ".indent-0": "ti-0px",
  ".indent-px": "ti-1px",
  ".indent-0\\.5": "ti-0.125rem",
  ".indent-1": "ti-0.25rem",
  ".indent-1\\.5": "ti-0.375rem",
  ".indent-2": "ti-0.5rem",
  ".indent-2\\.5": "ti-0.625rem",
  ".indent-3": "ti-0.75rem",
  ".indent-3\\.5": "ti-0.875rem",
  ".indent-4": "ti-1rem",
  ".indent-5": "ti-1.25rem",
  ".indent-6": "ti-1.5rem",
  ".indent-7": "ti-1.75rem",
  ".indent-8": "ti-2rem",
  ".indent-9": "ti-2.25rem",
  ".indent-10": "ti-2.5rem",
  ".indent-11": "ti-2.75rem",
  ".indent-12": "ti-3rem",
  ".indent-14": "ti-3.5rem",
  ".indent-16": "ti-4rem",
  ".indent-20": "ti-5rem",
  ".indent-24": "ti-6rem",
  ".indent-28": "ti-7rem",
  ".indent-32": "ti-8rem",
  ".indent-36": "ti-9rem",
  ".indent-40": "ti-10rem",
  ".indent-44": "ti-11rem",
  ".indent-48": "ti-12rem",
  ".indent-52": "ti-13rem",
  ".indent-56": "ti-14rem",
  ".indent-60": "ti-15rem",
  ".indent-64": "ti-16rem",
  ".indent-72": "ti-18rem",
  ".indent-80": "ti-20rem",
  ".indent-96": "ti-24rem",
  // line height
  ".leading-3": "lh-0.75rem",
  ".leading-4": "lh-1rem",
  ".leading-5": "lh-1.25rem",
  ".leading-6": "lh-1.5rem",
  ".leading-7": "lh-1.75rem",
  ".leading-8": "lh-2rem",
  ".leading-9": "lh-2.25rem",
  ".leading-10": "lh-2.5rem",
  ".leading-none": "lh-1",
  ".leading-tight": "lh-1.25",
  ".leading-snug": "lh-1.375",
  ".leading-normal": "lh-1.5",
  ".leading-relaxed": "lh-1.625",
  ".leading-loose": "lh-2",
  // line spacing
  ".tracking-tighter": "ls--0.05em",
  ".tracking-tight": "ls--0.025em",
  ".tracking-normal": "ls-0em",
  ".tracking-wide": "ls-0.025em",
  ".tracking-wider": "ls-0.05em",
  ".tracking-widest": "ls-0.1em",
  // font size
  ".text-xs": "fs-0.75rem lh-1rem",
  ".text-sm": "fs-0.875rem lh-1.25rem",
  ".text-base": "fs-1rem lh-1.5rem",
  ".text-lg": "fs-1.125rem lh-1.75rem",
  ".text-xl": "fs-1.25rem lh-1.75rem",
  ".text-2xl": "fs-1.5rem lh-2rem",
  ".text-3xl": "fs-1.875rem lh-2.25rem",
  ".text-4xl": "fs-2.25rem lh-2.5rem",
  ".text-5xl": "fs-3rem lh-1",
  ".text-6xl": "fs-3.75rem lh-1",
  ".text-7xl": "fs-4.5rem lh-1",
  ".text-8xl": "fs-6rem lh-1",
  ".text-9xl": "fs-8rem lh-1",
  // font style
  ".italic": "font-s-italic",
  ".not-italic": "font-s-normal",
  // font weight
  ".font-thin": "fw-100",
  ".font-extralight": "fw-200",
  ".font-light": "fw-300",
  ".font-normal": "fw-400",
  ".font-medium": "fw-500",
  ".font-semibold": "fw-600",
  ".font-bold": "fw-700",
  ".font-extrabold": "fw-800",
  ".font-black": "fw-900",
  // border-radius
  ".rounded-none": "br-0px",
  ".rounded-sm": "br-0.125rem",
  ".rounded": "br-0.25rem",
  ".rounded-md": "br-0.375rem",
  ".rounded-lg": "br-0.5rem",
  ".rounded-xl": "br-0.75rem",
  ".rounded-2xl": "br-1rem",
  ".rounded-3xl": "br-1.5rem",
  ".rounded-full": "br-9999px"
};
