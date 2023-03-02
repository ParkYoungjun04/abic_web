import "./ScanNew_ScanDetailStart.css";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Header from "../Header";
const Scan_detail_start_client = () => {
  const location = useLocation({});
  // 고객 정보
  const clientData = location.state.clientData;
  console.log(clientData);
  return (
    <>
      <Header title="SCANNer 세부스캔" img="./img/header_scan.png" />
      <div className="Scan_top">
        <p>사업명 : {clientData.BUSINESS_NAME}</p>
        <p className="Scan_top_boder">제출일시 : {clientData.CREATED_DATE}</p>
        <p>현재상태 : {clientData.STATE_NAME}</p>
      </div>
      <div className="Scan_detail_start_inner">
        <img className="Scan_frame_img" src="./img/frame.png" alt="img" />

        <div className="Scan_new_content">
          <div className="Scan_detail_title">
            <p>SCANNer 세부스캔 작성요령</p>
          </div>
          <div className="Scan_new_content_text">
            <img src="./img/check.png" alt="img" />
            <p>
              세부스캔은 창업자의 사업 아이디어 (
              <b>
                1.고객 2.제품/서비스 3.유통/마케팅 방안 4.수익창줄방식
                <br />
              </b>
            </p>
          </div>
          <div className="Scan_new_text_line" />
          <div className="Scan_new_content_text2">
            <img src="./img/check.png" alt="img" />
            <p>
              <b>5.창업배경과 비전 </b>등 알아보기 위한 질의 응답입니다.
            </p>
          </div>
          <div className="Scan_new_text_line" />
          <div className="Scan_new_content_text">
            <img src="./img/check.png" alt="img" />
            <p>
              정확한 리포트 작성을 위해 <b>가능한 세부적으로 답변</b>{" "}
              부탁드립니다.
            </p>
          </div>
          <div className="Scan_new_text_line" />
          <div className="Scan_new_content_text">
            <img src="./img/check.png" alt="img" />
            <p>
              아직 사업 아이디어가 숙성되지 않아{" "}
              <b>명확하게 답변할 수 없는 항목</b>의 경우
            </p>
          </div>
          <div className="Scan_new_text_line" />
          <div className="Scan_new_content_text2">
            <img src="./img/check.png" alt="img" />
            <p>
              <b>'아직 명확한 답변이 어렵다'</b>고 적어주시면 해당 부분 감안하여
              적절한 다음 단계로 안내 드리겠습니다.
            </p>
          </div>
          <div className="Scan_new_text_line" />
          <div className="Scan_new_content_text">
            <img src="./img/check.png" alt="img" />
            <p>
              민간함 사업 아이디어를 제공하기 어려운 경우, 진단에 필요하지 않은{" "}
              <b>세부 기술, 지적자산 등에 관한</b>
            </p>
          </div>
          <div className="Scan_new_text_line" />
          <div className="Scan_new_content_text2">
            <img src="./img/check.png" alt="img" />
            <p>
              <b>내용은 제외 가능하며, </b>혹 작성 하더라도 모든 질의응답에 관한
              내용은
            </p>
          </div>
          <div className="Scan_new_text_line" />
          <div className="Scan_new_content_text2">
            <img src="./img/check.png" alt="img" />
            <p>
              <b>내부 리포트 작성 외에 다른 용도로 사용되지 않습니다.</b>
            </p>
          </div>
          <div className="Scan_new_text_line" />
        </div>
        <NavLink
          to="/Scan_detail_qna_client"
          state={{ clientData: clientData }}
        >
          <div className="Scan_new_btn">
            <img
              className="Scan_new_btn_arrow"
              src="./img/arrow_1.png"
              alt="img"
            />
            <div className="Scan_new_btn_hover">
              <p>세부스캔 시작하기</p>
              <img src="./img/add_button.png" alt="img" />
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Scan_detail_start_client;
