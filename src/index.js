import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Page1 from "./Pages/Page1";
// import MainRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
// import Page2 from "./Pages/Page2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Page1 />
    </BrowserRouter>
  </React.StrictMode>
);
