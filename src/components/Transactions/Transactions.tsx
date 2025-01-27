import { Link } from "react-router-dom";
import { Transaction } from "../../pages/TransactionsPage/types";
import "./Transactions.css";

interface TransactionsProps {
  transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  const recentTransactions = transactions.slice(-4).reverse();

  return (
    <section className="transactions">
      <h2>Ostatnie transakcje</h2>
      <ul>
        {recentTransactions.map((transaction) => (
          <li className="transaction-item" key={transaction.id}>
            <span className="name">{transaction.name}</span>
            <span className="amount ">{transaction.amount} PLN</span>
          </li>
        ))}
      </ul>
      <Link to="/transactions" className="see-more">
        Zobacz więcej szczegółów
      </Link>
    </section>
  );
};

export default Transactions;
