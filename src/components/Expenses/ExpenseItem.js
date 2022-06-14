import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, amount, date }) => {
  const [name, setName] = useState(title);

  const clickHandler = () => {
    setName("Updated");
    console.log("hello");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
