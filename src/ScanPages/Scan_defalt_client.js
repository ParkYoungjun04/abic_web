import "./Scan_table.css";
import React from "react";
import Header from "../Header";
import Scan_table from "./Scan_table";
const Scan_defalt_client = () => {
  return (
    <>
      <Header title="SCANNer 기본스캔" img="./img/header_scan.png" />
      <div className="Scan_all_inner">
        <Scan_table table_name="defalt_client" url="/Scan_defalt_client" />
      </div>
    </>
  );
};

export default Scan_defalt_client;
