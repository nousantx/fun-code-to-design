import React from "react";
import { styler } from "../styles";

interface CanvasProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
  width?: string;
  height?: string;
  className?: string;
}

const Canvas: React.FC<CanvasProps> = ({ children, theme = "light", className, width, height }) => {
  styler()
  const themeClass = theme === "dark" ? "theme--dark" : "theme--light";

  return (
    <div className={`flex-center w-[calc(${width}\\_+\\_50px)]`}>
      <div id="content" className={`${themeClass} ${className} w-${width} h-${height}`}>
        {children}
      </div>
    </div>
  );
};

export default Canvas;
