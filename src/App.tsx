import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

import { iTransaction, fAddTransaction, fChangeEvent, fClickEvent } from './types';

const App: React.FC = () => {

  const getStorage = () => {
    const s: string = localStorage.getItem('calcMoney')||"";
    if (s) return JSON.parse( s );
    return [];
  }

  const [transactions, setTransactions] = useState<iTransaction[]|[]>( getStorage() );
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const addTransaction:fAddTransaction = (sign: boolean)=> {
    if (amount === 0 || description === '') return;
    const transaction = {
      id: `cmr${(+new Date()).toString(16)}`,
      description: description,
      amount: +amount,
      sign,
    }; 

    // if (sign) inc += +amount;
    // else exp += +amount;
    setTransactions([...transactions, transaction]);
    setDescription('');
    setAmount(0);
    
  };

  const delTransaction = (key:string) => {
    const newArr = transactions.filter(item => item.id !== key)
    setTransactions(newArr);
  }

  const addDescription:fChangeEvent = (e) => {
    setDescription(e.target.value);
  };

  const addAmount:fChangeEvent = (e) => {
    setAmount(+e.target.value);
  };

  const getIncome = () => {
    return transactions
      .filter((item) => {return item.sign})
      .reduce<number>((acc: number, item:iTransaction):number => acc + item.amount, 0)
  };

  const getExpenses = () => {
    return transactions
      .filter((item) => {return !item.sign})
      .reduce<number>((acc: number, item:iTransaction):number => acc + item.amount, 0)
  };
  
  useEffect(()=>{
    localStorage.setItem('calcMoney', JSON.stringify(transactions));
    setIncomes(getIncome());
    setExpenses(getExpenses());
  }, [transactions]);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Total inc={incomes} exp={expenses}/>
          <History 
            transactions={transactions}
            delTransaction={delTransaction}
            />
          <Operation 
            addTransaction={addTransaction}
            addDescription={addDescription}
            addAmount={addAmount}
            description={description}
            amount={amount}
            />
        </div>
      </main>
    </div>
  );
};

export default App;
