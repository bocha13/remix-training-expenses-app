import { prisma } from "./database.server";

export type expenseType = {
  title: string;
  amount: string;
  date: string;
};

export async function addExpense(expenseData: expenseType) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getExpenses() {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: { date: "desc" },
    });
    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExpense(id: string) {
  try {
    const expense = await prisma.expense.findFirst({ where: id });
    return expense;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
