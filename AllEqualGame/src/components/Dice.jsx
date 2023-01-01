import React,{useState} from 'react'

const Dice = (props) => {
  const [diceColor,setDiceColor] = useState(false);
  const changeColor=()=>{
    props.isFreeze(props.id);
    setDiceColor(!diceColor);
  }
  return (
    <div>
        <div className='dice' onClick={changeColor } style={{backgroundColor:diceColor?"yellow":"red"}}>
            {props.num}
        </div>
    </div>
  )
}

export default Dice