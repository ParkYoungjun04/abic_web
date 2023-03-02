import React from "react";
import Header from "../Header";
import Focus_table from "./Focus_table";
const Focus_detail_client = () => {
  return (
    <>
      <Header title="FOCUSer 질문 작성" img="./img/focus_icon.png" />
      <div className="Scan_all_inner">
        <Focus_table table_name="detail_client" url="/Focus_detail_client" />
      </div>
    </>
  );
};

export default Focus_detail_client;
