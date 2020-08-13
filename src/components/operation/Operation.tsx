import React from 'react';

const Operation = (props: 
  {addTransaction: (sign: boolean) => void, 
    addDescription:  (e: React.ChangeEvent<HTMLInputElement>) => void, 
    addAmount:  (e: React.ChangeEvent<HTMLInputElement>) => void, 
    description: string, amount: number}) => {
  const {addTransaction, addDescription, addAmount, description, amount} = props;
  return (
    <section className="operation">
      <h3>Новая операция</h3>
      <form id="form">
        <label>
          <input 
            type="text" 
            className="operation__fields operation__name" 
            placeholder="Наименование операции"
            onChange={addDescription}
            value={description}
          />
        </label>
        <label>
          <input 
            type="number" 
            className="operation__fields operation__amount" 
            placeholder="Введите сумму"
            onChange={addAmount}
            value={amount}
          />
        </label>
        <div className="operation__btns">
          <button type="button" 
            onClick={() => addTransaction(false)} 
            className="operation__btn operation__btn-subtract"
          >
            РАСХОД</button>
          <button type="button" 
            onClick={() => addTransaction(true)} 
            className="operation__btn operation__btn-add"
          >
            ДОХОД</button>
        </div>

      </form>
    </section>
  );
};
export default Operation;
