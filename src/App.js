import './App.css';
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses';
import TransactionList from './components/TransactionList/TransactionList';
import Form from './components/Form/Form'
import React, { useState } from 'react';
import Footer from './components/Footer/Footer';

const dummyData = [
  // {
  //   Name: "Salary",
  //   Amount: 10000
  // },
  // {
  //   Name: "Elecrticity",
  //   Amount: -300
  // }
];


function App() {
  console.log(dummyData.length)
  const [data, setTaskdata] = useState([]);

  function saveHandler(inputData) {
    setTaskdata((previousState) => {
      return [inputData, ...previousState];
    });
  }

  function deletehandle(updateddata) {
    setTaskdata(updateddata)
  }

  return (
    <div>
      <Header></Header>
      <div className="container">
        <Balance balance={data}></Balance>
        <IncomeExpenses plusminus={data}></IncomeExpenses>
        <TransactionList onSave={deletehandle} data={data}></TransactionList>
        <Form onSave={saveHandler}></Form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
