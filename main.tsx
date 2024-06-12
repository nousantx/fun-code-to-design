import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Root from "@/layout/root.tsx";
// stylesheet
import "@css/color.css";
import "@css/index.css";
import "@css/fonts/google-fonts.css";
import "@css/fonts/google-icons.css";
import "nosant-icon";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
