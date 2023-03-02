import "./ScanNew_ScanDetailStart.css";
import React from "react";
import Header from "../Header";
import { NavLink } from "react-router-dom";
const Scan_new_client = () => {
  return (
    <>
      <Header title="SCANNer 기본스캔" img="./img/header_scan.png" />
      <div className="Scan_new_inner">
        <img className="Scan_frame_img" src="./img/frame.png" alt="img" />

        <div className="Scan_new_content">
          <div className="Scan_new_title">
            <p>SCANNer 기본스캔 작성요령</p>
          </div>
          <div className="Scan_new_content_text">
            <img src="./img/check.png" alt="img" />
            <p>
              정확한 리포트 작성을 위해 <b>가능한 세부적으로 답변 </b>
              부탁드립니다.
            </p>
          </div>
          <div className="Scan_new_text_line" />
          <div className="Scan_new_content_text">
            <img src="./img/check.png" alt="img" />
            <p>
              간단한 <b>회사소개서와 함께 첨부</b> 해주시면 더 자세하고 정확한
              리포트 작성이 가능합니다.
            </p>
          </div>
          <div className="Scan_new_text_line" />
          <div className="Scan_new_content_text">
            <img src="./img/check.png" alt="img" />
            <p>
              첨부해주신 회사소개 및 작성 내용은 내부 리포트 작성외에
              <b>다른 용도로 사용 되지 않습니다.</b>
            </p>
          </div>
          <div className="Scan_new_text_line" />
          <div className="Scan_new_content_text">
            <img src="./img/check.png" alt="img" />
            <p>
              서비스 사용시 질문사항 및 건의사항이 있으시면
              <b>QnA 게시판</b>을 이용 부탁드립니다.
            </p>
          </div>
          <div className="Scan_new_text_line" />
          <div className="Scan_new_content_text">
            <img src="./img/check.png" alt="img" />
            <p>
              ABIC 서비스를 이용해주셔서 <b>감사합니다.</b>
            </p>
          </div>
          <div className="Scan_new_text_line" />
        </div>
        <NavLink to="/Scan_qna_client">
          <div className="Scan_new_btn">
            <img
              className="Scan_new_btn_arrow"
              src="./img/arrow_1.png"
              alt="img"
            />
            <div className="Scan_new_btn_hover">
              <p>기본스캔 시작하기</p>
              <img src="./img/add_button.png" alt="img" />
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Scan_new_client;
