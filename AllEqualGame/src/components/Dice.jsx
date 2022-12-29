import React from 'react'

const Dice = (props) => {
  return (
    <div>
        <div className='dice'>
            {props.num}
        </div>
    </div>
  )
}

export default Dice