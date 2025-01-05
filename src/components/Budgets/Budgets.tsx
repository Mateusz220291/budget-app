import "./Budgets.css";
const Budgets = () => {
  return (
    <section className="budgets">
      <h2>Budgets</h2>
      <div className="budget-overview">
        <div className="budget-item">
          <span>Entertainment</span>
          <span className="amount">$50.00</span>
        </div>
        <div className="budget-item">
          <span>Bills</span>
          <span className="amount">$750.00</span>
        </div>
        <div className="budget-item">
          <span>Dining Out</span>
          <span className="amount">$75.00</span>
        </div>
        <div className="budget-item">
          <span>Personal Care</span>
          <span className="amount">$100.00</span>
        </div>
      </div>
    </section>
  );
};

export default Budgets;
