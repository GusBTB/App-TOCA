import React from "react";
import ReactDOM from "react-dom/client";
import "./Reset/reset.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AsideArea from "./components/AsideArea";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
