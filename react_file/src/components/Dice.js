import React from "react";
export let Dices = (prop) => {
  const styles = prop.held
    ? {
        backgroundImage: `url(./css/img/img_${prop.value}.png)`,
        filter: "invert(0.4)",
        backgroundPosition: "center",
        backgroundSize: "80%",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundImage: `url(./css/img/img_${prop.value}.png)`,
        backgroundPosition: "center",
        backgroundSize: "80%",
        backgroundRepeat: "no-repeat",
      };
  return (
    <button
      style={styles}
      className={prop.held ? `held_${prop.value}` : `img_${prop.value}`}
      onClick={() => {
        prop.handleHold(prop.id);
      }}
    >
      {/* {prop.value} */}
    </button>
  );
};
