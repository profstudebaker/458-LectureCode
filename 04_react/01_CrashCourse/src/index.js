import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

/* 
  This JS file
  attaches to the element with the ID "root"
  and builds all component based DOM elements after the initial load
  (when we use NextJS, a framework on top of React, it functions a little differently)
*/
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
