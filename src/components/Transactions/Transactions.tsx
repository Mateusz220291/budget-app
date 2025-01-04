// import './Transactions.css';

const Transactions = () => {
  const transactions = [
    { name: "Emma Richardson", amount: "+$75.50", date: "19 Aug 2024" },
    { name: "Savory Bites Bistro", amount: "-$55.50", date: "19 Aug 2024" },
    { name: "Daniel Carter", amount: "-$42.30", date: "18 Aug 2024" },
    { name: "Sun Park", amount: "+$120.00", date: "17 Aug 2024" },
    { name: "Urban Services Hub", amount: "-$65.00", date: "17 Aug 2024" },
  ];

  return (
    <div className="transactions">
      <h3>Transactions</h3>
      <ul>
        {transactions.map((txn, index) => (
          <li key={index}>
            <div>{txn.name}</div>
            <div>{txn.amount}</div>
            <div>{txn.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
