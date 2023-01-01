import React ,{useState} from 'react'

const DefineLength = (props) => {
  const [input,setInput]= useState(10);
  const onClick = ()=>{
    props.initLen(input)
    props.unmountDefineLength(false);
  }
  return (
    <div className='defineLength'>
        <input type="number" min={2} defaultValue={10} onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit' onClick={onClick}>Generate</button>
    </div>
  )
}

export default DefineLength