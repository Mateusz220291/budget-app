// import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>finance</h2>
      <ul>
        <li className="active">Overview</li>
        <li>Transactions</li>
        <li>Budgets</li>
        <li>Pots</li>
        <li>Recurring Bills</li>
      </ul>
      <button className="minimize-btn">Minimize Menu</button>
    </div>
  );
};

export default Sidebar;
