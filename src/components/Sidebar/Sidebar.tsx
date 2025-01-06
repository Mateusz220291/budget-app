import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">Nasze finanse</div>
      <nav className="menu">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Przegląd
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Wydatki
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/budget"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Budżet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pots"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Oszczędności
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recurringBills"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Rachunki cykliczne
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="minimize-btn">zwiń Menu</button>
    </aside>
  );
};

export default Sidebar;
