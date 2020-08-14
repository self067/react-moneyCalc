import React from 'react';
import { iTransactionProps } from '../../types';

const HistoryItem:React.FC<iTransactionProps> = ({ transaction, delTransaction }) => {
  let className = 'history__item';
  let sg;
  if( transaction.sign) { className += ' history__item-plus'; sg = '+'}
  else { className += ' history__item-minus'; sg = '-'}
  return (
    <li className={className}>{transaction.description}
      <span className="history__money">{sg}{transaction.amount} ₽</span>
      <button 
        className="history__delete"
        onClick={() => delTransaction(transaction.id)}
        >x</button>
    </li>

  )
}
export default HistoryItem;
