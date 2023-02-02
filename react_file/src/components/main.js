import React, { useEffect } from "react";
import { Dice } from "./Dice";
import { useState } from "react";
export let Main = () => {
  let AllArrayNo = () => {
    let arr = [];
    for (let index = 0; index < 10; index++) {
      arr.push(Math.floor(Math.random() * 6 + 1));
    }

    return arr;
  };
  const [allArray, setAllArray] = useState(AllArrayNo());
  let handleClick = () => {
    setAllArray(() => allArray.map(() => Math.floor(Math.random() * 6 + 1)));
  };

  const Dies = () =>
    allArray.map((ele, ind) => <Dice key={ind + 1} value={ele} />);
  return (
    <div className="main_cont">
      <div className="btn_cont">{Dies()}</div>
      <button onClick={handleClick} className="roll">
        Roll
      </button>
    </div>
  );
};
