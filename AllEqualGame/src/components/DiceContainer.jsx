import React from "react";
import Dice from "./Dice";

const DiceContainer = (props) => {
  const isFreeze =(id)=>{
    console.log(id);
    props.isFreeze(id);
  }
  const data = props.nums.map((e) => {
    return (
      <>
        <Dice num={e.num} id = {e.id} isFreeze={isFreeze}/>
      </>
    );
  });
  return <div className="diceContainer">{data}</div>;
};

export default DiceContainer;
