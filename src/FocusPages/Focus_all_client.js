import React from "react";
import Header from "../Header";
import Focus_table from "./Focus_table";
const Focus_all_client = () => {
  return (
    <>
      <Header title="FOCUSer 진행현황" img="./img/focus_icon.png" />
      <div className="Scan_all_inner">
        <Focus_table table_name="all_client" url="/Focus_all_client" />
      </div>
    </>
  );
};

export default Focus_all_client;
