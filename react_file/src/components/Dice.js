import React from "react";
import img1 from "../css/img/img_1.png";
import img2 from "../css/img/img_2.png";
import img3 from "../css/img/img_3.png";
import img4 from "../css/img/img_4.png";
import img5 from "../css/img/img_5.png";
import img6 from "../css/img/img_6.png";
export let Dices = (prop) => {
  const styles = prop.held
    ? {
        backgroundImage: `url(./img/img_${prop.value}.png)`,
        filter: "invert(0.4)",
        backgroundPosition: "center",
        backgroundSize: "80%",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundImage: `url(./img/img_${prop.value}.png)`,
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
