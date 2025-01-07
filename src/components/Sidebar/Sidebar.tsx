import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FaChartPie } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="logo">{isCollapsed ? "NF" : "Nasze finanse"}</div>
      <nav className="menu">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              {isCollapsed ? <FaHome /> : "Przegląd"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              {isCollapsed ? <HiMiniArrowsUpDown /> : "Wydatki"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/budget"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              {isCollapsed ? <FaChartPie /> : "Budżet"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pots"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              {isCollapsed ? <FaPiggyBank /> : "Oszczędności"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recurringBills"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              {isCollapsed ? <RiBillLine /> : "Rachunki cykliczne"}
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="minimize-btn" onClick={toggleSidebar}>
        {isCollapsed ? <FaChevronRight /> : "Zwiń Menu"}
      </button>
    </aside>
  );
};

export default Sidebar;
