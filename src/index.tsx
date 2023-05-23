import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";

const render = ReactDOM.createRoot(
  document.getElementById("rootContainer") as Element
);
render.render(<App />);
