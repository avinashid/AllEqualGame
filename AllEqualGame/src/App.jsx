import React, { useState } from "react";
import Heading from "./components/Heading";
import DiceContainer from "./components/DiceContainer";
import DefineLength from "./components/DefineLength";
import RandomButton from "./components/RandomButton";
import { nanoid } from "nanoid";

const App = () => {
  const [nums, setNums] = useState([]);
  const [showComponent, setShowComponent] = useState({
    defineLength: true,
    randomButton: false,
  });
  let numLen;
  const initLen = (e) => {
    numLen = e;
    for (; numLen > 0; numLen--) {
      let temp = {
        id: nanoid(),
        num: Math.ceil(Math.random() * 6),
        freeze: false,
      };
      setNums((e) => [...e, temp]);
    }
  };
  const unmountDefineLength = (e) => {
    setShowComponent({ randomButton: true, defineLength: false });
  };
  const setRandom = () => {
    setNums((e) =>
      e.map((n) => {
        return { ...n, num: Math.ceil(Math.random() * 6) };
      })
    );
  };
  const isFreeze = (id) => {};
  console.log(nums);
  return (
    <>
      <div className="main">
        <Heading />
        {showComponent.defineLength && (
          <DefineLength
            initLen={initLen}
            unmountDefineLength={unmountDefineLength}
          />
        )}
        {<DiceContainer nums={nums} isFreeze={isFreeze} />}
        {showComponent.randomButton && <RandomButton setRandom={setRandom} />}
      </div>
    </>
  );
};
export default App;
