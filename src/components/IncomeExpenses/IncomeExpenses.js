import React from 'react';

function IncomeExpenses(props) {
  let data = props.plusminus
  // let money = 0
  let expense = 0
  let income = 0
  // const moni = data.reduce((totalCalories, data) => (data.Amount>0)? (parseInt(data.Amount) + parseInt(totalCalories), 0));
  data.map(item => {
    if (item.Amount > 0) {
      income = parseInt(income) + parseInt(item.Amount)
    }
    else {
      expense = parseInt(expense) + parseInt(item.Amount)
    }
  })
  // console.log(moni)

  return (
    <div className='inc-exp-container'>
      <div >
        <h4>Income</h4>
        <p className="money plus">Rs. {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">Rs. {expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;