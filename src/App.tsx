import React, { useState } from 'react';
import Header from './components/header/Header';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

import { iTransaction } from './types';
interface iTransactions {
  transaction: iTransaction[];
}


let inc = 0;
let exp = 0;


const App = () => {
  const [transactions, setTransactions] = useState<iTransaction[]|[]>( []);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const addTransaction = (sign: boolean)=> {
    if (amount === 0 || description === '') return;
    const transaction = {
      id: `cmr${(+new Date()).toString(16)}`,
      description: description,
      amount: +amount,
      sign,
    };

    if (sign) inc += +amount;
    else exp += +amount;
    setTransactions([...transactions, transaction]);
    setDescription('');
    setAmount(0);
  };

  const addDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const addAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Total inc={inc} exp={exp}/>
          <History transactions={transactions}/>
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
