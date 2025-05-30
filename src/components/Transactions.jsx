import React, { useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transactions = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = React.useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Transactions</h3>
      <form action="POST" className="form">
        <div className="form-control">
          <label htmlFor="Text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="Amount">
            Amount
            <br />
            (negative-expense positive-income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" type="submit" onClick={onSubmit}>
          ADD TRANSACTION
        </button>
      </form>
    </div>
  );
};

export default Transactions;
