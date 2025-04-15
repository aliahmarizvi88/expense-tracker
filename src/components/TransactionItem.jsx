import React from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionItem = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const { deleteTransaction } = React.useContext(GlobalContext);
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sign}
        {Math.abs(transaction.amount)}$
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
};

export default TransactionItem;
