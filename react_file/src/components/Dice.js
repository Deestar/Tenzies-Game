import React from "react";
export let Dices = (prop) => {
  return (
    <button
      className={prop.held ? "held" : ""}
      onClick={() => {
        prop.handleHold(prop.id);
      }}
    >
      {prop.value}
    </button>
  );
};
