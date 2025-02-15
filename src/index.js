import React from "react";
// import ReactDOM from "react-dom/client";
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from "react-router-dom";
import Application from "./Application";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// <BrowserRouter>
// <Application />
// </BrowserRouter>

// );
// reportWebVitals();

import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter >
      <Application />
    </BrowserRouter>
);