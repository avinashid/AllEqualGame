import React, { useState } from "react";

const Dice = (props) => {
  const [diceColor, setDiceColor] = useState(false);
  const changeColor = () => {
    setDiceColor(!diceColor);
    props.isFreeze(props.id);
  };
  
  return (
    <div>
      <div
        className="dice"
        onClick={changeColor}
        style={{
          backgroundColor: diceColor ? "yellow" : "red",
          color: diceColor ? "black" : "white",
        }}
      >
        {props.num}
      </div>
    </div>
  );
};

export default Dice;
