import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
function App() {
  const expenses = [
    { title: "Car insurance", amount: 294.98, date: new Date(2021, 2, 28) },
    { title: "House maintanence", amount: 506.22, date: new Date(2018, 5, 5) },
    { title: "Education", amount: 300.52, date: new Date(2020, 1, 22) },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
