export default function generateColor(colors: string[]) {
  // store the classname
  const genColor: { [key: string]: string } = {};

  // handle all defined color from `colors` parameter into className
  colors.forEach(category => {
    for (let i = 100; i <= 900; i += 100) {
      // handle text-color class property
      const textClassName = `.text-${category}-${i}`;

      /**
       * Generate color and its opacity.
       *
       * In CSS, it will look like this :
       * `color: rgb(var(--color) / var(--text-opacity, 1));`
       */

      const textColorValue = `tc-[rgb(var(--tx_${category}-${i})\\_/\\_var(--text-opacity,\\_1))]`;

      genColor[textClassName] = textColorValue;

      // handle background color class
      const bgClassName = `.bg-${category}-${i}`;

      // generated background color and opacity
      // `background-color: rgb(var(--color) / var(--bg-opacity, 1));`
      const bgColorValue = `bg-color-[rgb(var(--tx_${category}-${i})\\_/\\_var(--bg-opacity,\\_1))]`;

      genColor[bgClassName] = bgColorValue;

      // handle border color class
      const bcClassName = `.border-${category}-${i}`;
      const bcColorValue = `bc-[rgb(var(--tx_${category}-${i})\\_/\\_var(--border-opacity,\\_1))]`;
      genColor[bcClassName] = bcColorValue;
    }
  });
  // finally, return generated class name
  return genColor;
}

//? All colors drfined under `/src/styles/lib/utils/color.ts`
