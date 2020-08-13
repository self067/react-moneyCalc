import React from 'react';

const HistoryItem = ({ transaction }) => {
  let className = 'history__item';
  let sg;
  if( transaction.sign) { className += ' history__item-plus'; sg = '+'}
  else { className += ' history__item-minus'; sg = '-'}
  return (
    <li className={className}>{transaction.description}
      <span className="history__money">{sg}{transaction.amount} ₽</span>
      <button className="history__delete">x</button>
    </li>

  )
}
export default HistoryItem;
