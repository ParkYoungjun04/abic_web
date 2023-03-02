import "./Scan_table.css";
import React from "react";
import Header from "../Header";
import Scan_table from "./Scan_table";
const Scan_all_client = () => {
  return (
    <>
      <Header title="SCANNer 진행현황" img="./img/header_scan.png" />
      <div className="Scan_all_inner">
        <Scan_table table_name="all_client" url="/Scan_all_client" />
      </div>
    </>
  );
};

export default Scan_all_client;
