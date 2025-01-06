import "./RecurringBills.css";

const RecurringBills = () => {
  return (
    <section className="recurring-bills">
      <h2>Rachunki cykliczne</h2>
      <div className="bills-overview">
        <div className="bill-item">
          <span>Czynsz</span>
          <span className="amount">530 PLN</span>
        </div>
        <div className="bill-item">
          <span>Prąd</span>
          <span className="amount">230 PLN</span>
        </div>
        <div className="bill-item">
          <span>Internet + TV</span>
          <span className="amount">60 PLN</span>
        </div>
      </div>
    </section>
  );
};

export default RecurringBills;
