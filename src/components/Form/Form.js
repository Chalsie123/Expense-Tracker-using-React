import React, { useRef } from 'react';

function Form(props) {
    const name = useRef("");
    const amount = useRef("");

    function submitHandler(event) {
        event.preventDefault();
        const data = {
            Name: name.current.value,
            Amount: amount.current.value
        }
        props.onSave(data);
        name.current.value=""
        amount.current.value=""
        console.log(data)
    }
    return (
        <div className='container'>
            <h3>Add New Transaction</h3>
            <form id="form" onSubmit={submitHandler}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' id='text' placeholder='Enter Text....' ref={name} required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>Amount<br></br>
                        (Negative - Expense, Positive - Income)</label>
                    <input type='number' id='amount' placeholder='0' ref={amount} required></input>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    );
}

export default Form;
