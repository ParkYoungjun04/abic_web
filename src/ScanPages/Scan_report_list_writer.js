import "./Scan_table.css";
import React from "react";
import Header from "../Header";
import Scan_table from "./Scan_table";
const Scan_report_list_writer = () => {
  return (
    <>
      <Header title="SCANNer 리포트 업로드" img="./img/header_scan.png" />
      <div className="Scan_all_inner">
        <Scan_table table_name="report_writer" />
      </div>
    </>
  );
};

export default Scan_report_list_writer;
