import React, { useCallback, useEffect } from "react";
import { Dice } from "./Dice";
import { useState } from "react";
import { useRef } from "react";
export let Main = () => {
  //sets the default random numbers
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
  //The state for the numbers which is based on the function to generate a random array for default value
  const [allArray, setAllArray] = useState(() => {
    return AllArrayNo();
  });
  const [bestTime, setBestTime] = useState(0);
  const [countNo, setCountNo] = useState(0);
  const [lose, setLose] = useState(false);
  const [winGame, setWin] = useState(false);
  const [startcount, setStartCount] = useState(false);
  const intervalid = useRef();
  //get an existing besttime from local storage if it exists
  let getBestTime = () => localStorage.getItem("besttime") || 0;
  //Set best time using the besttime setter for everysecond
  useEffect(() => {
    intervalid.current = setInterval(() => {
      setBestTime((prev) => prev + 1);
    }, 1000);
  }, [startcount]);
  //save besttime to local storage if user wins
  useEffect(() => {
    if (winGame || lose) {
      bestTime < parseInt(getBestTime())
        ? localStorage.setItem("besttime", bestTime)
        : "";
      clearInterval(intervalid.current);
    }
  }, [winGame]);
  //lose after 15 trials
  useEffect(() => {
    if (countNo > 15) {
      setAllArray(AllArrayNo());
      setLose(true);
      clearInterval(intervalid.current);
    }
  }, [countNo]);
  //This gets a new random element when roll button is clicked but doesnt change any dice who has been held ==> refer to hold dice function
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

  //Function to change the truthy or falsy value of each button if user has held the dice
  let holdDice = (ind) => {
    setAllArray((prev) =>
      prev.map((ele, i) => ({
        ...ele,
        isheld: ind === i ? !ele.isheld : ele.isheld,
      }))
    );
  };
  //fuction to reset the game
  const resetGame = () => {
    setAllArray(AllArrayNo());
    setWin(false);
    setLose(false);
    setCountNo(0);
    setBestTime(0);
    setStartCount((prev) => !prev);
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
      <h1 style={{ color: "red" }}>{bestTime}</h1>
      <div className="btn_cont">{Dies()}</div>
      <button onClick={handleClick} className="roll">
        Roll
      </button>

      {
        //prettier-ignore
        (winGame || lose) &&
        <div className="win_cont">
        <h1 className="win">{winGame?<p>YAYY!!<br/>YOU WIN <br/>BEST TIME {getBestTime()}</p>:<span style={{color:
        'rgba(27, 90, 119, 0.822)'}}>YOU LOSE<br/>BETTER LUCK NEXT TIME</span>}</h1>
        <button onClick={resetGame}>Play Again</button>
      </div>
      }
    </div>
  );
};
