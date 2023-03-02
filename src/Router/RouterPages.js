import { Routes, Route } from "react-router-dom";
//
import Crawling from "../Crawling";
import Login from "../Login";
import SignUp from "../SignUp";
// 스캐너(고객)
import Home_client from "../Home_client";
import Scan_all_client from "../ScanPages/Scan_all_client";
import Scan_defalt_client from "../ScanPages/Scan_defalt_client";
import Scan_detail_main_client from "../ScanPages/Scan_detail_main_client";
import Scan_new_client from "../ScanPages/Scan_new_client";
import Scan_qna_client from "../ScanPages/Scan_qna_client";
import Scan_qna_viewer_client from "../ScanPages/Scan_qna_viewer_client";
import Scan_detail_start_client from "../ScanPages/Scan_detail_start_client";
import Scan_detail_qna_client from "../ScanPages/Scan_detail_qna_client";
import Scan_detail_qna_2_client from "../ScanPages/Scan_detail_qna_2_client";
import Scan_report_list_client from "../ScanPages/Scan_report_list_client";
import Scan_report_client from "../ScanPages/Scan_report_client";

// 포커스(고객)
import Focus_all_client from "../FocusPages/Focus_all_client";
import Focus_detail_client from "../FocusPages/Focus_detail_client";
import Focus_report_list_client from "../FocusPages/Focus_report_list_client";

import Focus_qna_client from "../FocusPages/Focus_qna_client";

import Focus_qna_b_client from "../FocusPages/Focus_qna_b_client";
import Focus_qna_p_client from "../FocusPages/Focus_qna_p_client";

import Focus_qna_b_viewer_client from "../FocusPages/Focus_qna_b_viewer_client";
import Focus_qna_p_viewer_client from "../FocusPages/Focus_qna_p_viewer_client";

import Focus_qna2_client from "../FocusPages/Focus_qna2_client";

import Focus_report_view_client from "../FocusPages/Focus_report_view_client";

// 스캐너(컨설턴트)
import Home_writer from "../Home_writer";
import Scan_all_writer from "../ScanPages/Scan_all_writer";
import Scan_detail_writer from "../ScanPages/Scan_detail_writer";
import Scan_report_list_writer from "../ScanPages/Scan_report_list_writer";
import Scan_qna_writer from "../ScanPages/Scan_qna_writer";
import Scan_qna_2_writer from "../ScanPages/Scan_qna_2_writer";
import Scan_qna_viewer_writer from "../ScanPages/Scan_qna_viewer_writer";
import Scan_report_writer from "../ScanPages/Scan_report_writer";

// 포커스(컨설턴트)
import Focus_all_writer from "../FocusPages/Focus_all_writer";
import Focus_report_list_writer from "../FocusPages/Focus_report_list_writer";

import Focus_report_writer from "../FocusPages/Focus_report_writer";
import Focus_qna_2_writer from "../FocusPages/Focus_qna_2_writer";

const RouterPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/Crawling" element={<Crawling />}></Route>
      {/* ----------고객---------- */}

      {/* 테이블 */}
      <Route path="/Home_client" element={<Home_client />}></Route>
      <Route path="/Scan_all_client" element={<Scan_all_client />}></Route>
      <Route
        path="/Scan_defalt_client"
        element={<Scan_defalt_client />}
      ></Route>
      <Route
        path="/Scan_detail_main_client"
        element={<Scan_detail_main_client />}
      ></Route>

      {/* 기본스캔 */}
      <Route path="/Scan_new_client" element={<Scan_new_client />}></Route>
      <Route path="/Scan_qna_client" element={<Scan_qna_client />}></Route>
      <Route
        path="/Scan_qna_viewer_client"
        element={<Scan_qna_viewer_client />}
      ></Route>

      {/* 세부스캔 */}
      <Route
        path="/Scan_detail_start_client"
        element={<Scan_detail_start_client />}
      ></Route>
      <Route
        path="/Scan_detail_qna_client"
        element={<Scan_detail_qna_client />}
      ></Route>
      <Route
        path="/Scan_detail_qna_2_client"
        element={<Scan_detail_qna_2_client />}
      ></Route>
      {/* 리포트 */}
      <Route
        path="/Scan_report_list_client"
        element={<Scan_report_list_client />}
      ></Route>
      <Route
        path="/Scan_report_client"
        element={<Scan_report_client />}
      ></Route>
      {/* 포커스 테이블*/}
      <Route path="/Focus_all_client" element={<Focus_all_client />}></Route>
      <Route
        path="/Focus_detail_client"
        element={<Focus_detail_client />}
      ></Route>
      <Route
        path="/Focus_report_list_client"
        element={<Focus_report_list_client />}
      ></Route>
      {/* 포커스 질문 */}
      <Route path="/Focus_qna_client" element={<Focus_qna_client />}></Route>
      <Route
        path="/Focus_qna_b_client"
        element={<Focus_qna_b_client />}
      ></Route>
      <Route
        path="/Focus_qna_p_client"
        element={<Focus_qna_p_client />}
      ></Route>
      <Route
        path="/Focus_qna_b_viewer_client"
        element={<Focus_qna_b_viewer_client />}
      ></Route>

      <Route
        path="/Focus_qna_p_viewer_client"
        element={<Focus_qna_p_viewer_client />}
      ></Route>

      <Route path="/Focus_qna2_client" element={<Focus_qna2_client />}></Route>

      <Route
        path="/Focus_report_view_client"
        element={<Focus_report_view_client />}
      ></Route>
      {/* ----------컨설턴트---------- */}

      {/* 테이블 */}
      <Route path="/Home_writer" element={<Home_writer />}></Route>
      <Route path="/Scan_all_writer" element={<Scan_all_writer />}></Route>
      <Route
        path="/Scan_detail_writer"
        element={<Scan_detail_writer />}
      ></Route>
      <Route
        path="/Scan_report_list_writer"
        element={<Scan_report_list_writer />}
      ></Route>

      {/* 세부스캔 */}
      <Route path="/Scan_qna_writer" element={<Scan_qna_writer />}></Route>
      <Route
        path="/Scan_qna_viewer_writer"
        element={<Scan_qna_viewer_writer />}
      ></Route>

      <Route path="/Scan_qna_2_writer" element={<Scan_qna_2_writer />}></Route>

      {/* 리포트 */}
      <Route
        path="/Scan_report_writer"
        element={<Scan_report_writer />}
      ></Route>

      {/* 포커스 테이블 */}
      <Route path="/Focus_all_writer" element={<Focus_all_writer />}></Route>
      <Route
        path="/Focus_report_list_writer"
        element={<Focus_report_list_writer />}
      ></Route>
      {/* 포커스 추가질문, 리포트 */}
      <Route
        path="/Focus_report_writer"
        element={<Focus_report_writer />}
      ></Route>
      <Route
        path="/Focus_qna_2_writer"
        element={<Focus_qna_2_writer />}
      ></Route>
    </Routes>
  );
};
export default RouterPages;
