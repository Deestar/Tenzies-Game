import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components/main";
let App = () => {
  return <Main />;
};
let root = ReactDOM.createRoot(document.querySelector(".app"));
root.render(<App />);
