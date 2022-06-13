import React from "react";
import "../components/ExpenseItem.css";
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>13 June 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">299$</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
