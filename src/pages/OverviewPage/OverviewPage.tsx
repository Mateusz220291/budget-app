import { useState, useEffect } from "react";
import HeaderOverview from "../../components/HeaderOverview/HeaderOverview";
import Pots from "../../components/Pots/Pots";
import Budgets from "../../components/Budgets/Budgets";
import Transactions from "../../components/Transactions/Transactions";
import RecurringBills from "../../components/RecurringBills/RecurringBills";
import { Transaction } from "../../pages/TransactionsPage/types";
import "./OverviewPage.css";

const OverviewPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);
  return (
    <div className="overview-page">
      <div className="main-content">
        <h1>Przegląd finansów</h1>
        <HeaderOverview />
        <div className="sections">
          <div className="left-column">
            <Pots />
            <Transactions transactions={transactions} />
          </div>
          <div className="right-column">
            <Budgets />
            <RecurringBills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
