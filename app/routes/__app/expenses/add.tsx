import { useNavigate } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import type { expenseType } from "~/data/expenses.server";
import { addExpense } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";

export default function ExpensesAddPage() {
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

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData) as expenseType;
  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpense(expenseData);
  return redirect("/expenses");
}
