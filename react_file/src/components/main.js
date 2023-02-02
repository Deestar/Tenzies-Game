import React, { useEffect } from "react";
import { Dice } from "./Dice";
import { useState } from "react";
export let Main = () => {
  const [allArray, setAllArray] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  let AllArrayNo = () => {
    useEffect(
      () =>
        setAllArray(() =>
          allArray.map(() => Math.floor(Math.random() * 6 + 1))
        ),
      []
    );
    return allArray.map((ele, ind) => <Dice key={ind + 1} value={ele} />);
  };
  console.log(AllArrayNo());
  return (
    <div className="main_cont">
      <div className="btn_cont">
        {AllArrayNo()}
        <button>Roll</button>
      </div>
    </div>
  );
};
