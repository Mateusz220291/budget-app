import HeaderOverview from "../../components/HeaderOverview/HeaderOverview";
import Pots from "../../components/Pots/Pots";
import Budgets from "../../components/Budgets/Budgets";
import Transactions from "../../components/Transactions/Transactions";
import RecurringBills from "../../components/RecurringBills/RecurringBills";
import "./OverviewPage.css";

const OverviewPage = () => {
  return (
    <div className="overview-page">
      <div className="main-content">
        <h1>Przegląd finansów</h1>
        <HeaderOverview />
        <div className="sections">
          <div className="left-column">
            <Pots />
            <Transactions />
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
