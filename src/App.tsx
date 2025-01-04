// import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import Overview from "./components/Overview/Overview";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Overview />
        <div className="details-section"></div>
      </main>
    </div>
  );
};

export default App;
