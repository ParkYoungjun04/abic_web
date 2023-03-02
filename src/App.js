import "./App.css";
import Sidebar from "./Sidebar";
import SidebarAdmin from "./SidebarAdmin";
import RouterPages from "./Router/RouterPages";
import React, { useState, useEffect } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("grade") === "client") {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }, []);
  return (
    <>
      <input type="checkbox" id="control" checked={sidebar} disabled />

      <div className="App">
        <div className="Sidebar_component">
          <Sidebar />
        </div>
        <div className="SidebarAdmin_component">
          <SidebarAdmin />
        </div>
        <div className="contents">
          <div className="Router_box">
            <RouterPages />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
