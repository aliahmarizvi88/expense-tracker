import React from 'react';

import { GlobalContext } from '../context/GlobalState';

const IncomeExpense = () => {
  const { transactions } = React.useContext(GlobalContext);

  const income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${Math.abs(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
