import "./HeaderOverview.css";

import RecurringBills from "../../components/RecurringBills/RecurringBills";
import Transactions from "../../components/Transactions/Transactions";
import Tile from "../../components/Tile";

const Overview = () => {
  return (
    <div className="overview">
      <div className="balance-info">
        <Tile title="Current Balance:" price="$4,836.00" />
        <Tile title="Income:" price="$3,814.25" />
        <Tile title="Expenses:" price="$1,700.50" />
      </div>

      <div className="overview-main">
        <div className="overview-left-column">
          <div className="pots-section">
            <h3>Pots</h3>
            <p>Total Saved: $850</p>
            <ul>
              <li>Savings: $159</li>
              <li>Concert Ticket: $110</li>
              <li>New Laptop: $10</li>
            </ul>
          </div>
          <Transactions />
        </div>
        <div className="overview-right-column">
          <div className="budgets-section">
            <h3>Budgets</h3>
            <div className="budget-chart">
              <p>$338 of $975 limit</p>
            </div>
            <ul>
              <li>Entertainment: $50</li>
              <li>Bills: $750</li>
              <li>Dining Out: $75</li>
              <li>Personal Care: $100</li>
            </ul>
          </div>
          <RecurringBills />
        </div>
      </div>
    </div>
  );
};

export default Overview;
