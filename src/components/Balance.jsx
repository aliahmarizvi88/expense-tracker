import React from 'react';

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = React.useContext(GlobalContext);

  const amount = transactions.map((transactions) => transactions.amount);
  const balance = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">{balance}$</h1>
    </div>
  );
};

export default Balance;
