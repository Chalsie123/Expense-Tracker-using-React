import React from 'react';

function Transactions(props) {

    function deletehandler(event) {
        event.preventDefault();
        const deletedata = {
            Name: props.name,
            Amount: props.amount
        }
        console.log(deletedata)
        props.onSave(deletedata)
    }

    return (
        <>
            <li className={(props.amount > 0) ? "plus" : "minus"}>
                {props.name}
                <span>Rs.{props.amount}</span>
                <buttton className="delete-btn" onClick={deletehandler} >x</buttton>
            </li>
        </>
    );
}

export default Transactions;
