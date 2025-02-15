import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import Datas from "./Datas";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
<Datas/>
    </BrowserRouter>
);
reportWebVitals();
