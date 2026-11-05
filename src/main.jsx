import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/polish.css";
document.documentElement.classList.add("js");
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
