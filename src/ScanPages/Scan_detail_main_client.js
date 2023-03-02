import "./Scan_table.css";
import React from "react";
import Header from "../Header";
import Scan_table from "./Scan_table";
const Scan_detail_main_client = () => {
  return (
    <>
      <Header title="SCANNer 세부스캔" img="./img/header_scan.png" />
      <div className="Scan_all_inner">
        <Scan_table table_name="detail_client" url="/Scan_detail_main_client" />
      </div>
    </>
  );
};

export default Scan_detail_main_client;
