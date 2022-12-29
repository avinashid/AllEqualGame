import React, {useState} from "react";
import Heading from "./components/Heading";
import DiceContainer from "./components/DiceContainer";
import DefineLength from "./components/DefineLength";

const App = () => {

  const [nums,setNums] = useState([]);
  let numLen;
  const initLen = (e)=>{
    numLen = e;
    for(;numLen>0;numLen--){
      let m = Math.ceil(Math.random()*6);
      setNums(prevNums=>[...prevNums,m]);
    }
  }
  return (
    <>
      <div className="main">
        <Heading />
        <DefineLength 
          initLen={initLen}
        />
        <DiceContainer 
          nums = {nums}
        />
      </div>
    </>
  );
};

export default App;
