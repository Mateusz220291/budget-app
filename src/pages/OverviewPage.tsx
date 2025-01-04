import Sidebar from "../components/Sidebar/Sidebar";
import HeaderOverview from "../components/HeaderOverview/HeaderOverview";
// import Pots from '../components/Pots/Pots';
// import Budgets from '../components/Budgets/Budgets';
import Transactions from "../components/Transactions/Transactions";
import RecurringBills from "../components/RecurringBills/RecurringBills";

const OverviewPage = () => {
  return (
    <div className="overview-page">
      <Sidebar />
      <div className="main-content">
        <HeaderOverview />
        <div className="sections">
          {/* <Pots />
                    <Budgets /> */}
          <Transactions />
          <RecurringBills />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
