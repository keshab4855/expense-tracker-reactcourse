import "./App.css";
import "./components/ExpenseItem";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car insurance", amount: 294.98, date: new Date(2021, 2, 28) },
    { title: "House maintanence", amount: 506.22, date: new Date(2018, 5, 5) },
    { title: "Education", amount: 300.52, date: new Date(2020, 1, 22) },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
