import React from "react";
import { Dice } from "./Dice";
export let Main = () => {
  return (
    <div className="main_cont">
      <div className="btn_cont">
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={100} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
      </div>
    </div>
  );
};
