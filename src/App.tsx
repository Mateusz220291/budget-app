import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import OverviewPage from "./pages/OverviewPage/OverviewPage";
import PotsPage from "./pages/PotsPage/PotsPage";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";
import RecurringBillsPage from "./pages/RecurringBillsPage/RecurringBillsPage";
import BudgetPage from "./pages/BudgetPage/BudgetPage";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div style={{ flex: 1, overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="/pots" element={<PotsPage />} />
            <Route path="/recurringBills" element={<RecurringBillsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
