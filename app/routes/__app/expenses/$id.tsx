import type { LoaderArgs } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { getExpense } from "~/data/expenses.server";

export async function loader({ params }: LoaderArgs) {
  const expenseId = params.id || "";
  const expense = await getExpense(expenseId);
  return expense;
}

export default function UpdateExpensesPage() {
  const navigation = useNavigate();

  function closeHandler() {
    navigation("..");
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}
