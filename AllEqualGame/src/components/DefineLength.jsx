import React, { useState } from "react";

const DefineLength = (props) => {
  let input = 10;
  const onClick = (value) => {
    console.log(value);
    props.initLen(value);
    props.unmountDefineLength(false);
  };
  return (
    <div className="defineLength">
      <div className="difficultyContainer">
        <button onClick={() => onClick(8)}>Easy</button>
        <button onClick={() => onClick(16)}>Medium</button>
        <button onClick={() => onClick(32)}>Hard</button>
      </div>
      <div className="customDifficulty">
        <input
          type="number"
          min={2}
          defaultValue={10}
          onChange={(e) => (input = e.target.value)}
        />
        <button type="submit" onClick={() => onClick(input)}>
          Custom
        </button>
      </div>
    </div>
  );
};

export default DefineLength;
