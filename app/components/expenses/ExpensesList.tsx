import ExpenseListItem from "./ExpenseListItem";

type ExpenseType = {
  id: string;
  title: string;
  amount: number;
};

type ExpenseProp = {
  expenses: ExpenseType[];
};

function ExpensesList({ expenses }: ExpenseProp) {
  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
