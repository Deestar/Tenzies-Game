import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect } from "react";
import { useCallback } from "react";
import { Main } from "./components/main";
import "./css/index.css";
let App = () => {
  return <Main />;
};
let root = ReactDOM.createRoot(document.querySelector(".app"));
root.render(<App />);
