import "./Pots.css";

const Pots = () => {
  return (
    <section className="pots">
      <h2>Oszczędności</h2>
      <div className="pots-overview">
        <div className="pot-item">
          <span>Akcje</span>
          <span className="amount">9059 PLN</span>
        </div>
        <div className="pot-item">
          <span>Obligacje</span>
          <span className="amount">$110</span>
        </div>
        <div className="pot-item">
          <span>Konta oszczędnościowe</span>
          <span className="amount">$40</span>
        </div>
      </div>
    </section>
  );
};

export default Pots;
