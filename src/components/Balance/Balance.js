import React from 'react'

export const Balance = (props) => {
  var data = props.balance
  // if 
  var money = data.reduce((totalCalories, data) => parseInt(data.Amount) + parseInt(totalCalories), 0)
  console.log(data.length)

  return (
    <>
      <h4>Your Balance</h4>
      {/* {data.length===0 && <h1>Mad</h1>} */}
      <h1 id="balance">Rs. {money}</h1>
    </>
  )
}

export default Balance;