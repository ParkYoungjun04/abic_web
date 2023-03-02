import React from "react";
import Header from "../Header";
import Focus_table from "./Focus_table";
const Focus_report_list_writer = () => {
  return (
    <>
      <Header title="FOCUSer 리포트 업로드" img="./img/focus_icon.png" />
      <div className="Scan_all_inner">
        <Focus_table
          table_name="report_writer"
          url="/Focus_report_list_writer"
        />
      </div>
    </>
  );
};

export default Focus_report_list_writer;
