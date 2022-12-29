import React ,{useState} from 'react'

const DefineLength = (props) => {
  const [input,setInput]= useState(10);
  const onClick = ()=>{
    props.initLen(input)
  }
  return (
    <div className='defineLength'>
        <input type="number" defaultValue={10} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={onClick}>Generate</button>
    </div>
  )
}

export default DefineLength