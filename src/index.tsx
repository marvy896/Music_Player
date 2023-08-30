import React from "react";
import { createRoot } from "react-dom/client";
window.React = React;
import "./index.css";
import App from "./app";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
