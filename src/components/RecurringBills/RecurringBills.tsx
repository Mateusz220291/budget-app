import "./RecurringBills.css";

const RecurringBills = () => {
  return (
    <section className="recurring-bills">
      <h2>Recurring Bills</h2>
      <div className="bills-overview">
        <div className="bill-item">
          <span>Paid Bills</span>
          <span className="amount">$190.00</span>
        </div>
        <div className="bill-item">
          <span>Total Upcoming</span>
          <span className="amount">$194.98</span>
        </div>
        <div className="bill-item">
          <span>Due Soon</span>
          <span className="amount">$59.98</span>
        </div>
      </div>
    </section>
  );
};

export default RecurringBills;
