import "./Scan_table.css";
import React from "react";
import Header from "../Header";
import Scan_table from "./Scan_table";
const Scan_detail_writer = () => {
  return (
    <>
      <Header title="SCANNer 세부스캔 질문 작성" img="./img/header_scan.png" />
      <div className="Scan_all_inner">
        <Scan_table table_name="detail_writer" />
      </div>
    </>
  );
};

export default Scan_detail_writer;
