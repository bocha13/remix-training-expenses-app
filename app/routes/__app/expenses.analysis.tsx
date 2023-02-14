import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";

const DUMMYEXPENSES = [
  {
    id: "e1",
    title: "First expense",
    amount: 12.99,
    date: new Date().toISOString()
  },
  {
    id: "e2",
    title: "Second expense",
    amount: 15.00,
    date: new Date().toISOString()
  },
  {
    id: "e3",
    title: "Third expense",
    amount: 69.00,
    date: new Date().toISOString()
  },
]

export default function UpdateAnalysisPage() {
  return <main>
    <Chart expenses={DUMMYEXPENSES}/>
    <ExpenseStatistics expenses={DUMMYEXPENSES} />
  </main>;
}
