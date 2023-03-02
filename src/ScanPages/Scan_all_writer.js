import "./Scan_table.css";
import React from "react";
import Header from "../Header";
import Scan_table from "./Scan_table";
const Scan_all_writer = () => {
  return (
    <>
      <Header title="SCANNer 스캔 진행 현황" img="./img/header_scan.png" />
      <div className="Scan_all_inner">
        <Scan_table table_name="all_writer" />
      </div>
    </>
  );
};

export default Scan_all_writer;
