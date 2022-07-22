import React from 'react';
import Transactions from '../Transaction/Transactions';

function TransactionList(props) {

  function deletehandle(deletedata) {
    props.data.splice(props.data.findIndex(a => a.Name === deletedata.Name) , 1)
    props.onSave(props.data)
  }

  return (
    <div>
      <h3>History</h3>
      {props.data.length===0 && <p>Nothing to Show here.</p>}
      <ul id="list" className="list">
        {props.data.map((item) => (
          <Transactions name={item.Name} amount={item.Amount} onSave={deletehandle}></Transactions>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
