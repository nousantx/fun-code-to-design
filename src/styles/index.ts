import React from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import { props, styles } from "./lib";
import { color } from "./lib/utils/color";

export const styler = () => {
  React.useLayoutEffect(() => {
    use({ property: props });
    makeStyles( styles, color);
    tenoxui();
  }, []);
};
