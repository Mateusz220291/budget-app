import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">Nasze finanse</div>
      <nav className="menu">
        <ul>
          <li className="menu-item active">Przegląd</li>
          <li className="menu-item">Wydatki</li>
          <li className="menu-item">Budżet</li>
          <li className="menu-item">Oszczędności</li>
          <li className="menu-item">Rachunki Cykliczne</li>
        </ul>
      </nav>
      <button className="minimize-btn">zwiń Menu</button>
    </aside>
  );
};

export default Sidebar;
