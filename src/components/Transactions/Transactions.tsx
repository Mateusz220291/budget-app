import "./Transactions.css";

const Transactions = () => {
  return (
    <section className="transactions">
      <h2>Transactions</h2>
      <ul>
        <li className="transaction-item">
          <span className="name">Emma Richardson</span>
          <span className="amount positive">+$75.50</span>
        </li>
        <li className="transaction-item">
          <span className="name">Savory Bites Bistro</span>
          <span className="amount negative">-$55.50</span>
        </li>
        <li className="transaction-item">
          <span className="name">Urban Services Hub</span>
          <span className="amount negative">-$65.00</span>
        </li>
      </ul>
    </section>
  );
};

export default Transactions;
