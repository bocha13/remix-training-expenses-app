export function loader() {
  return [
    {
      id: "e1",
      title: "First expense",
      amount: 12.99,
      date: new Date().toISOString(),
    },
    {
      id: "e2",
      title: "Second expense",
      amount: 15.0,
      date: new Date().toISOString(),
    },
    {
      id: "e3",
      title: "Third expense",
      amount: 69.0,
      date: new Date().toISOString(),
    },
  ];
}
