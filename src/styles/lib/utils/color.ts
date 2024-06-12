import generateColor from "@utils/colorGenerator";

/**
 * All colors variables from /styles/css/color.css
 * It will geberate color classes like `text-slate-100` or `bg-red-500`, and so on.
 * Will generate all color variables from 100 to 900.
 */

export const color = generateColor([
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "primary",
  "accent",
]);
