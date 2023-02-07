import React from "react";
export let Dices = (prop) => {
  for (let index = 0; index < prop.value; index++) {}
  return (
    <button
      className={prop.held ? `held_${prop.value}` : `img_${prop.value}`}
      onClick={() => {
        prop.handleHold(prop.id);
      }}
    >
      {/* {prop.value} */}
    </button>
  );
};
