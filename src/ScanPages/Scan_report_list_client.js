import "./Scan_table.css";
import React from "react";
import Header from "../Header";
import Scan_table from "./Scan_table";
const Scan_report_list_client = () => {
  return (
    <>
      <Header title="SCANNer 리포트" img="./img/header_scan.png" />
      <div className="Scan_all_inner">
        <Scan_table table_name="report_client" />
      </div>
    </>
  );
};

export default Scan_report_list_client;
