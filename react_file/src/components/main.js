import React, { useEffect } from "react";
import { Dice } from "./Dice";
import { useState } from "react";
export let Main = () => {
  const [countNo, setCountNo] = useState(0);
  const [lose, setLose] = useState(false);
  let AllArrayNo = () => {
    let arr = [];
    for (let index = 0; index < 10; index++) {
      arr.push({
        rand: Math.floor(Math.random() * 6 + 1),
        isheld: false,
      });
    }

    return arr;
  };
  //lose after 12 trials
  useEffect(() => {
    if (countNo > 10) {
      setAllArray(AllArrayNo());
      setLose(true);
    }
  }, [countNo]);
  const [allArray, setAllArray] = useState(AllArrayNo());
  const [winGame, setWin] = useState(false);
  let handleClick = () => {
    setCountNo((prev) => prev + 1);
    setAllArray((prev) =>
      prev.map((ele) => ({
        ...ele,
        rand: ele.isheld ? ele.rand : Math.floor(Math.random() * 6 + 1),
      }))
    );
  };
  //To check for a win
  useEffect(() => {
    const ifheld = allArray.every((ele, i) => ele.isheld === true);
    const alltrue = allArray.every((ele, ind, arr) => ele.rand === arr[0].rand);
    //prettier-ignore
    setWin((ifheld && alltrue  )? true : false);
  }, [allArray]);

  //Function to change the truthy or falsy value of each button
  let holdDice = (ind) => {
    setAllArray((prev) =>
      prev.map((ele, i) => ({
        ...ele,
        isheld: ind === i ? true : ele.isheld,
      }))
    );
  };

  const resetGame = () => {
    setAllArray(AllArrayNo());
    setWin(false);
    setLose(false);
    setCountNo(0);
  };
  const Dies = () =>
    //rendering the dice component for each element in allArray state
    allArray.map((ele, ind) => (
      <Dice
        key={ind + 1}
        id={ind}
        held={ele.isheld}
        handleHold={holdDice}
        value={ele.rand}
      />
    ));
  return (
    <div className="main_cont">
      <h1 className="title">TENZIES GAME</h1>
      <h1>Match all the numbers by</h1>
      <div className="btn_cont">{Dies()}</div>
      <button onClick={handleClick} className="roll">
        Roll
      </button>

      {
        //prettier-ignore
        (winGame || lose) &&
        <div className="win_cont">
        <h1 className="win">{winGame?"YOU WIN":"YOU LOSE"}</h1>
        <button onClick={resetGame}>Play Again</button>
      </div>
      }
    </div>
  );
};
