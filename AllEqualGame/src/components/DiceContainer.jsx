import React from "react";
import Dice from "./Dice";

const DiceContainer = (props) => {
  const data = props.nums.map((e) => {
    return (
      <>
        <Dice num={e} />
      </>
    );
  });
  return (
    <div className="diceContainer">
      {data}
    </div>
  );
};

export default DiceContainer;
