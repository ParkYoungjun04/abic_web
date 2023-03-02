import "./Scan_report_client.css";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { printPlugin } from "@react-pdf-viewer/print";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/print/lib/styles/index.css";
import Axios from "axios";
import Header from "../Header";
const Scan_report_client = () => {
  //pdf 프린터 기능
  const printPluginInstance = printPlugin();
  const { print } = printPluginInstance;

  //pdf 저장 기능
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  const location = useLocation({});
  // 고객 정보
  const clientData = location.state.clientData;

  // 기본질문
  const [content1, setContent1] = useState([]);
  const [content2, setContent2] = useState([]);
  // 세부질문
  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [question4, setQuestion4] = useState([]);
  const [question5, setQuestion5] = useState([]);
  const [question6, setQuestion6] = useState([]);

  // 세부질문 II
  const [question1_1, setAuestion1_1] = useState([]);
  const [question1_2, setAuestion1_2] = useState([]);
  const [question1_3, setAuestion1_3] = useState([]);
  const [question1_4, setAuestion1_4] = useState([]);

  const [question2_1, setAuestion2_1] = useState([]);
  const [question2_2, setAuestion2_2] = useState([]);
  const [question2_3, setAuestion2_3] = useState([]);
  const [question2_4, setAuestion2_4] = useState([]);

  const [question3_1, setAuestion3_1] = useState([]);
  const [question3_2, setAuestion3_2] = useState([]);
  const [question3_3, setAuestion3_3] = useState([]);
  const [question3_4, setAuestion3_4] = useState([]);

  const [question4_1, setAuestion4_1] = useState([]);
  const [question4_2, setAuestion4_2] = useState([]);
  const [question4_3, setAuestion4_3] = useState([]);
  const [question4_4, setAuestion4_4] = useState([]);

  const [question5_1, setAuestion5_1] = useState([]);
  const [question5_2, setAuestion5_2] = useState([]);
  const [question5_3, setAuestion5_3] = useState([]);
  const [question5_4, setAuestion5_4] = useState([]);

  const [question6_1, setAuestion6_1] = useState([]);
  const [question6_2, setAuestion6_2] = useState([]);
  useEffect(() => {
    let question = "";
    let answer = "";
    let question2 = "";
    let answer2 = "";
    // 기본스캔 답변
    Axios.get("http://34.68.101.191:8000/get/Scan_qna_client", {
      params: { business_name: clientData.BUSINESS_NAME },
    }).then((response) => {
      let data = response.data[0];
      setContent1([
        {
          title: "A",
          text:
            data["A"] === "A_1"
              ? "사업 초기 단계부터 목표고객이 명확하고 제품/서비스를 판매하는것이 중요합니다."
              : "사업 초기 단계에서는 회원 가입수를 늘이는 것이 중요합니다.",
        },
        {
          title: "B",
          text:
            data["B"] === "B_1"
              ? "고객 가치는 개발/제조/생산 혹은 유통을 통해 판매하는 제품/서비스만을 통해 창출됩니다."
              : "고객 가치는 수요측 참여자와 공급측 참여자를 연결, 추천, 구독 등을 통해 창출됩니다.",
        },

        {
          title: "C",
          text:
            data["C"] === "C_1"
              ? "초기 거점시장에서 사업 성공을 위해 온/오프라인 유통망을 구축하는 것이 중요합니다."
              : "초기 거점시장에서 사업 성공을 위해 다양한 인지도 마케팅을 통해 고객을 유입하는 것이 중요합니다.",
        },

        {
          title: "D",
          text:
            data["D"] === "D_1"
              ? "장기적 관점에서 사업의 핵심 성공 요인은 온/오프라인 플랫폼에서 지속적인\n네트워크효과가 발생하는 것입니다."
              : "장기적 관점에서 사업의 핵심 성공 요인은 제품/서비스의 차별적 우위 (특허 기술이나 밀착된 고객 서비스 등)를\n계속 유지할 수 있는 역량입니다.",
        },
        {
          title: "E",
          text:
            data["E"] === "E_1"
              ? "초기 거점시장에서 사업 성공을 위해 온/오프라인 유통망을 구축하는 것이 중요합니다."
              : "초기 거점시장에서 사업 성공을 위해 다양한 인지도 마케팅을 통해 고객을 유입하는 것이 중요합니다.",
        },
      ]);
      setContent2(data);
    });
    // 세부스캔 질문
    Axios.get("http://34.68.101.191:8000/get/Scan_qna_writer", {
      params: { business_name: clientData.BUSINESS_NAME },
    }).then((response) => {
      question = response.data[0];
      // 세부스캔 답변
      Axios.get("http://34.68.101.191:8000/get/Scan_detail_qna_client", {
        params: { business_name: clientData.BUSINESS_NAME },
      }).then((response) => {
        answer = response.data[0];
        setQuestion1([
          { key: "1_1", question: question["1_1"], answer: answer["1_1"] },
          { key: "1_2", question: question["1_2"], answer: answer["1_2"] },
          { key: "1_3", question: question["1_3"], answer: answer["1_3"] },
          { key: "1_4", question: question["1_4"], answer: answer["1_4"] },
        ]);
        setQuestion2([
          { key: "2_1", question: question["2_1"], answer: answer["2_1"] },
          { key: "2_2", question: question["2_2"], answer: answer["2_2"] },
          { key: "2_3", question: question["2_3"], answer: answer["2_3"] },
          { key: "2_4", question: question["2_4"], answer: answer["2_4"] },
        ]);
        setQuestion3([
          { key: "3_1", question: question["3_1"], answer: answer["3_1"] },
          { key: "3_2", question: question["3_2"], answer: answer["3_2"] },
          { key: "3_3", question: question["3_3"], answer: answer["3_3"] },
          { key: "3_4", question: question["3_4"], answer: answer["3_4"] },
        ]);
        setQuestion4([
          { key: "4_1", question: question["4_1"], answer: answer["4_1"] },
          { key: "4_2", question: question["4_2"], answer: answer["4_2"] },
          { key: "4_3", question: question["4_3"], answer: answer["4_3"] },
          { key: "4_4", question: question["4_4"], answer: answer["4_4"] },
        ]);
        setQuestion5([
          { key: "5_1", question: question["5_1"], answer: answer["5_1"] },
          { key: "5_2", question: question["5_2"], answer: answer["5_2"] },
          { key: "5_3", question: question["5_3"], answer: answer["5_3"] },
          { key: "5_4", question: question["5_4"], answer: answer["5_4"] },
        ]);
        setQuestion6([
          {
            key: "6_1",
            question: "특별히 이 분야에 집중하게 된 계기가 있는지?",
            answer: answer["6_1"],
          },
          {
            key: "6_2",
            question: "창업자로서 향후 비전은?",
            answer: answer["6_2"],
          },
        ]);
      });
    });

    // 세부스캔 질문 II
    Axios.get("http://34.68.101.191:8000/get/Scan_qna_2_write", {
      params: { business_name: clientData.BUSINESS_NAME, key: "writer" },
    }).then((response) => {
      question2 = response.data[0];
      // 세부스캔 II답변
      Axios.get("http://34.68.101.191:8000/get/Scan_detail_qna_2_client", {
        params: { business_name: clientData.BUSINESS_NAME },
      }).then((response) => {
        answer2 = response.data[0];
        setAuestion1_1([
          ...question1_1,
          {
            question: question2["1_1_1"] ? question2["1_1_1"] : "",
            answer: answer2["1_1_1"] ? answer2["1_1_1"] : "",
          },
          {
            question: question2["1_1_2"] ? question2["1_1_2"] : "",
            answer: answer2["1_1_2"] ? answer2["1_1_2"] : "",
          },
          {
            question: question2["1_1_3"] ? question2["1_1_3"] : "",
            answer: answer2["1_1_3"] ? answer2["1_1_3"] : "",
          },
          {
            question: question2["1_1_4"] ? question2["1_1_4"] : "",
            answer: answer2["1_1_4"] ? answer2["1_1_4"] : "",
          },
          {
            question: question2["1_1_5"] ? question2["1_1_5"] : "",
            answer: answer2["1_1_5"] ? answer2["1_1_5"] : "",
          },
        ]);

        setAuestion1_2([
          ...question1_2,
          {
            question: question2["1_2_1"] ? question2["1_2_1"] : "",
            answer: answer2["1_2_1"] ? answer2["1_2_1"] : "",
          },
          {
            question: question2["1_2_2"] ? question2["1_2_2"] : "",
            answer: answer2["1_2_2"] ? answer2["1_2_2"] : "",
          },
          {
            question: question2["1_2_3"] ? question2["1_2_3"] : "",
            answer: answer2["1_2_3"] ? answer2["1_2_3"] : "",
          },
          {
            question: question2["1_2_4"] ? question2["1_2_4"] : "",
            answer: answer2["1_2_4"] ? answer2["1_2_4"] : "",
          },
          {
            question: question2["1_2_5"] ? question2["1_2_5"] : "",
            answer: answer2["1_2_5"] ? answer2["1_2_5"] : "",
          },
        ]);

        setAuestion1_3([
          ...question1_3,
          {
            question: question2["1_3_1"] ? question2["1_3_1"] : "",
            answer: answer2["1_3_1"] ? answer2["1_3_1"] : "",
          },
          {
            question: question2["1_3_2"] ? question2["1_3_2"] : "",
            answer: answer2["1_3_2"] ? answer2["1_3_2"] : "",
          },
          {
            question: question2["1_3_3"] ? question2["1_3_3"] : "",
            answer: answer2["1_3_3"] ? answer2["1_3_3"] : "",
          },
          {
            question: question2["1_3_4"] ? question2["1_3_4"] : "",
            answer: answer2["1_3_4"] ? answer2["1_3_4"] : "",
          },
          {
            question: question2["1_3_5"] ? question2["1_3_5"] : "",
            answer: answer2["1_3_5"] ? answer2["1_3_5"] : "",
          },
        ]);

        setAuestion1_4([
          ...question1_4,
          {
            question: question2["1_4_1"] ? question2["1_4_1"] : "",
            answer: answer2["1_4_1"] ? answer2["1_4_1"] : "",
          },
          {
            question: question2["1_4_2"] ? question2["1_4_2"] : "",
            answer: answer2["1_4_2"] ? answer2["1_4_2"] : "",
          },
          {
            question: question2["1_4_3"] ? question2["1_4_3"] : "",
            answer: answer2["1_4_3"] ? answer2["1_4_3"] : "",
          },
          {
            question: question2["1_4_4"] ? question2["1_4_4"] : "",
            answer: answer2["1_4_4"] ? answer2["1_4_4"] : "",
          },
          {
            question: question2["1_4_5"] ? question2["1_4_5"] : "",
            answer: answer2["1_4_5"] ? answer2["1_4_5"] : "",
          },
        ]);

        setAuestion2_1([
          ...question2_1,
          {
            question: question2["2_1_1"] ? question2["2_1_1"] : "",
            answer: answer2["2_1_1"] ? answer2["2_1_1"] : "",
          },
          {
            question: question2["2_1_2"] ? question2["2_1_2"] : "",
            answer: answer2["2_1_2"] ? answer2["2_1_2"] : "",
          },
          {
            question: question2["2_1_3"] ? question2["2_1_3"] : "",
            answer: answer2["2_1_3"] ? answer2["2_1_3"] : "",
          },
          {
            question: question2["2_1_4"] ? question2["2_1_4"] : "",
            answer: answer2["2_1_4"] ? answer2["2_1_4"] : "",
          },
          {
            question: question2["2_1_5"] ? question2["2_1_5"] : "",
            answer: answer2["2_1_5"] ? answer2["2_1_5"] : "",
          },
        ]);

        setAuestion2_2([
          ...question2_2,
          {
            question: question2["2_2_1"] ? question2["2_2_1"] : "",
            answer: answer2["2_2_1"] ? answer2["2_2_1"] : "",
          },
          {
            question: question2["2_2_2"] ? question2["2_2_2"] : "",
            answer: answer2["2_2_2"] ? answer2["2_2_2"] : "",
          },
          {
            question: question2["2_2_3"] ? question2["2_2_3"] : "",
            answer: answer2["2_2_3"] ? answer2["2_2_3"] : "",
          },
          {
            question: question2["2_2_4"] ? question2["2_2_4"] : "",
            answer: answer2["2_2_4"] ? answer2["2_2_4"] : "",
          },
          {
            question: question2["2_2_5"] ? question2["2_2_5"] : "",
            answer: answer2["2_2_5"] ? answer2["2_2_5"] : "",
          },
        ]);

        setAuestion2_3([
          ...question2_3,
          {
            question: question2["2_3_1"] ? question2["2_3_1"] : "",
            answer: answer2["2_3_1"] ? answer2["2_3_1"] : "",
          },
          {
            question: question2["2_3_2"] ? question2["2_3_2"] : "",
            answer: answer2["2_3_2"] ? answer2["2_3_2"] : "",
          },
          {
            question: question2["1_3_3"] ? question2["2_3_3"] : "",
            answer: answer2["1_3_3"] ? answer2["2_3_3"] : "",
          },
          {
            question: question2["2_3_4"] ? question2["2_3_4"] : "",
            answer: answer2["2_3_4"] ? answer2["2_3_4"] : "",
          },
          {
            question: question2["2_3_5"] ? question2["2_3_5"] : "",
            answer: answer2["2_3_5"] ? answer2["2_3_5"] : "",
          },
        ]);

        setAuestion2_4([
          ...question2_4,
          {
            question: question2["2_4_1"] ? question2["2_4_1"] : "",
            answer: answer2["2_4_1"] ? answer2["2_4_1"] : "",
          },
          {
            question: question2["2_4_2"] ? question2["2_4_2"] : "",
            answer: answer2["2_4_2"] ? answer2["2_4_2"] : "",
          },
          {
            question: question2["2_4_3"] ? question2["2_4_3"] : "",
            answer: answer2["2_4_3"] ? answer2["2_4_3"] : "",
          },
          {
            question: question2["2_4_4"] ? question2["2_4_4"] : "",
            answer: answer2["2_4_4"] ? answer2["2_4_4"] : "",
          },
          {
            question: question2["2_4_5"] ? question2["2_4_5"] : "",
            answer: answer2["2_4_5"] ? answer2["2_4_5"] : "",
          },
        ]);

        setAuestion3_1([
          ...question3_1,
          {
            question: question2["3_1_1"] ? question2["3_1_1"] : "",
            answer: answer2["3_1_1"] ? answer2["3_1_1"] : "",
          },
          {
            question: question2["3_1_2"] ? question2["3_1_2"] : "",
            answer: answer2["3_1_2"] ? answer2["3_1_2"] : "",
          },
          {
            question: question2["3_1_3"] ? question2["3_1_3"] : "",
            answer: answer2["3_1_3"] ? answer2["3_1_3"] : "",
          },
          {
            question: question2["3_1_4"] ? question2["3_1_4"] : "",
            answer: answer2["3_1_4"] ? answer2["3_1_4"] : "",
          },
          {
            question: question2["3_1_5"] ? question2["3_1_5"] : "",
            answer: answer2["3_1_5"] ? answer2["3_1_5"] : "",
          },
        ]);

        setAuestion3_2([
          ...question3_2,
          {
            question: question2["3_2_1"] ? question2["3_2_1"] : "",
            answer: answer2["3_2_1"] ? answer2["3_2_1"] : "",
          },
          {
            question: question2["3_2_2"] ? question2["3_2_2"] : "",
            answer: answer2["3_2_2"] ? answer2["3_2_2"] : "",
          },
          {
            question: question2["3_2_3"] ? question2["3_2_3"] : "",
            answer: answer2["3_2_3"] ? answer2["3_2_3"] : "",
          },
          {
            question: question2["3_2_4"] ? question2["3_2_4"] : "",
            answer: answer2["3_2_4"] ? answer2["3_2_4"] : "",
          },
          {
            question: question2["3_2_5"] ? question2["3_2_5"] : "",
            answer: answer2["3_2_5"] ? answer2["3_2_5"] : "",
          },
        ]);

        setAuestion3_3([
          ...question3_3,
          {
            question: question2["3_3_1"] ? question2["3_3_1"] : "",
            answer: answer2["3_3_1"] ? answer2["3_3_1"] : "",
          },
          {
            question: question2["3_3_2"] ? question2["3_3_2"] : "",
            answer: answer2["3_3_2"] ? answer2["3_3_2"] : "",
          },
          {
            question: question2["3_3_3"] ? question2["3_3_3"] : "",
            answer: answer2["3_3_3"] ? answer2["3_3_3"] : "",
          },
          {
            question: question2["3_3_4"] ? question2["3_3_4"] : "",
            answer: answer2["3_3_4"] ? answer2["3_3_4"] : "",
          },
          {
            question: question2["3_3_5"] ? question2["3_3_5"] : "",
            answer: answer2["3_3_5"] ? answer2["3_3_5"] : "",
          },
        ]);

        setAuestion3_4([
          ...question3_4,
          {
            question: question2["3_4_1"] ? question2["3_4_1"] : "",
            answer: answer2["3_4_1"] ? answer2["3_4_1"] : "",
          },
          {
            question: question2["3_4_2"] ? question2["3_4_2"] : "",
            answer: answer2["3_4_2"] ? answer2["3_4_2"] : "",
          },
          {
            question: question2["3_4_3"] ? question2["3_4_3"] : "",
            answer: answer2["3_4_3"] ? answer2["3_4_3"] : "",
          },
          {
            question: question2["3_4_4"] ? question2["3_4_4"] : "",
            answer: answer2["3_4_4"] ? answer2["3_4_4"] : "",
          },
          {
            question: question2["3_4_5"] ? question2["3_4_5"] : "",
            answer: answer2["3_4_5"] ? answer2["3_4_5"] : "",
          },
        ]);

        setAuestion4_1([
          ...question4_1,
          {
            question: question2["4_1_1"] ? question2["4_1_1"] : "",
            answer: answer2["4_1_1"] ? answer2["4_1_1"] : "",
          },
          {
            question: question2["4_1_2"] ? question2["4_1_2"] : "",
            answer: answer2["4_1_2"] ? answer2["4_1_2"] : "",
          },
          {
            question: question2["4_1_3"] ? question2["4_1_3"] : "",
            answer: answer2["4_1_3"] ? answer2["4_1_3"] : "",
          },
          {
            question: question2["4_1_4"] ? question2["4_1_4"] : "",
            answer: answer2["4_1_4"] ? answer2["4_1_4"] : "",
          },
          {
            question: question2["4_1_5"] ? question2["4_1_5"] : "",
            answer: answer2["4_1_5"] ? answer2["4_1_5"] : "",
          },
        ]);

        setAuestion4_2([
          ...question4_2,
          {
            question: question2["4_2_1"] ? question2["4_2_1"] : "",
            answer: answer2["4_2_1"] ? answer2["4_2_1"] : "",
          },
          {
            question: question2["4_2_2"] ? question2["4_2_2"] : "",
            answer: answer2["4_2_2"] ? answer2["4_2_2"] : "",
          },
          {
            question: question2["4_2_3"] ? question2["4_2_3"] : "",
            answer: answer2["4_2_3"] ? answer2["4_2_3"] : "",
          },
          {
            question: question2["4_2_4"] ? question2["4_2_4"] : "",
            answer: answer2["4_2_4"] ? answer2["4_2_4"] : "",
          },
          {
            question: question2["4_2_5"] ? question2["4_2_5"] : "",
            answer: answer2["4_2_5"] ? answer2["4_2_5"] : "",
          },
        ]);

        setAuestion4_3([
          ...question4_3,
          {
            question: question2["4_3_1"] ? question2["4_3_1"] : "",
            answer: answer2["4_3_1"] ? answer2["4_3_1"] : "",
          },
          {
            question: question2["4_3_2"] ? question2["4_3_2"] : "",
            answer: answer2["4_3_2"] ? answer2["4_3_2"] : "",
          },
          {
            question: question2["4_3_3"] ? question2["4_3_3"] : "",
            answer: answer2["4_3_3"] ? answer2["4_3_3"] : "",
          },
          {
            question: question2["4_3_4"] ? question2["4_3_4"] : "",
            answer: answer2["4_3_4"] ? answer2["4_3_4"] : "",
          },
          {
            question: question2["4_3_5"] ? question2["4_3_5"] : "",
            answer: answer2["4_3_5"] ? answer2["4_3_5"] : "",
          },
        ]);

        setAuestion4_4([
          ...question4_4,
          {
            question: question2["4_4_1"] ? question2["4_4_1"] : "",
            answer: answer2["4_4_1"] ? answer2["4_4_1"] : "",
          },
          {
            question: question2["4_4_2"] ? question2["4_4_2"] : "",
            answer: answer2["4_4_2"] ? answer2["4_4_2"] : "",
          },
          {
            question: question2["4_4_3"] ? question2["4_4_3"] : "",
            answer: answer2["4_4_3"] ? answer2["4_4_3"] : "",
          },
          {
            question: question2["4_4_4"] ? question2["4_4_4"] : "",
            answer: answer2["4_4_4"] ? answer2["4_4_4"] : "",
          },
          {
            question: question2["4_4_5"] ? question2["4_4_5"] : "",
            answer: answer2["4_4_5"] ? answer2["4_4_5"] : "",
          },
        ]);

        setAuestion5_1([
          ...question5_1,
          {
            question: question2["5_1_1"] ? question2["5_1_1"] : "",
            answer: answer2["5_1_1"] ? answer2["5_1_1"] : "",
          },
          {
            question: question2["5_1_2"] ? question2["5_1_2"] : "",
            answer: answer2["5_1_2"] ? answer2["5_1_2"] : "",
          },
          {
            question: question2["5_1_3"] ? question2["5_1_3"] : "",
            answer: answer2["5_1_3"] ? answer2["5_1_3"] : "",
          },
          {
            question: question2["5_1_4"] ? question2["5_1_4"] : "",
            answer: answer2["5_1_4"] ? answer2["5_1_4"] : "",
          },
          {
            question: question2["5_1_5"] ? question2["5_1_5"] : "",
            answer: answer2["5_1_5"] ? answer2["5_1_5"] : "",
          },
        ]);

        setAuestion5_2([
          ...question5_2,
          {
            question: question2["5_2_1"] ? question2["5_2_1"] : "",
            answer: answer2["5_2_1"] ? answer2["5_2_1"] : "",
          },
          {
            question: question2["5_2_2"] ? question2["5_2_2"] : "",
            answer: answer2["5_2_2"] ? answer2["5_2_2"] : "",
          },
          {
            question: question2["5_2_3"] ? question2["5_2_3"] : "",
            answer: answer2["5_2_3"] ? answer2["5_2_3"] : "",
          },
          {
            question: question2["5_2_4"] ? question2["5_2_4"] : "",
            answer: answer2["5_2_4"] ? answer2["5_2_4"] : "",
          },
          {
            question: question2["5_2_5"] ? question2["5_2_5"] : "",
            answer: answer2["5_2_5"] ? answer2["5_2_5"] : "",
          },
        ]);

        setAuestion5_3([
          ...question5_3,
          {
            question: question2["5_3_1"] ? question2["5_3_1"] : "",
            answer: answer2["5_3_1"] ? answer2["5_3_1"] : "",
          },
          {
            question: question2["5_3_2"] ? question2["5_3_2"] : "",
            answer: answer2["5_3_2"] ? answer2["5_3_2"] : "",
          },
          {
            question: question2["5_3_3"] ? question2["5_3_3"] : "",
            answer: answer2["5_3_3"] ? answer2["5_3_3"] : "",
          },
          {
            question: question2["5_3_4"] ? question2["5_3_4"] : "",
            answer: answer2["5_3_4"] ? answer2["5_3_4"] : "",
          },
          {
            question: question2["5_3_5"] ? question2["5_3_5"] : "",
            answer: answer2["5_3_5"] ? answer2["5_3_5"] : "",
          },
        ]);

        setAuestion5_4([
          ...question5_4,
          {
            question: question2["5_4_1"] ? question2["5_4_1"] : "",
            answer: answer2["5_4_1"] ? answer2["5_4_1"] : "",
          },
          {
            question: question2["5_4_2"] ? question2["5_4_2"] : "",
            answer: answer2["5_4_2"] ? answer2["5_4_2"] : "",
          },
          {
            question: question2["5_4_3"] ? question2["5_4_3"] : "",
            answer: answer2["5_4_3"] ? answer2["5_4_3"] : "",
          },
          {
            question: question2["5_4_4"] ? question2["5_4_4"] : "",
            answer: answer2["5_4_4"] ? answer2["5_4_4"] : "",
          },
          {
            question: question2["5_4_5"] ? question2["5_4_5"] : "",
            answer: answer2["5_4_5"] ? answer2["5_4_5"] : "",
          },
        ]);

        setAuestion6_1([
          ...question6_1,
          {
            question: question2["6_1_1"] ? question2["6_1_1"] : "",
            answer: answer2["6_1_1"] ? answer2["6_1_1"] : "",
          },
          {
            question: question2["6_1_2"] ? question2["6_1_2"] : "",
            answer: answer2["6_1_2"] ? answer2["6_1_2"] : "",
          },
          {
            question: question2["6_1_3"] ? question2["6_1_3"] : "",
            answer: answer2["6_1_3"] ? answer2["6_1_3"] : "",
          },
          {
            question: question2["6_1_4"] ? question2["6_1_4"] : "",
            answer: answer2["6_1_4"] ? answer2["6_1_4"] : "",
          },
          {
            question: question2["6_1_5"] ? question2["6_1_5"] : "",
            answer: answer2["6_1_5"] ? answer2["6_1_5"] : "",
          },
        ]);

        setAuestion6_2([
          ...question6_2,
          {
            question: question2["6_2_1"] ? question2["6_2_1"] : "",
            answer: answer2["6_2_1"] ? answer2["6_2_1"] : "",
          },
          {
            question: question2["6_2_2"] ? question2["6_2_2"] : "",
            answer: answer2["6_2_2"] ? answer2["6_2_2"] : "",
          },
          {
            question: question2["6_2_3"] ? question2["6_2_3"] : "",
            answer: answer2["6_2_3"] ? answer2["6_2_3"] : "",
          },
          {
            question: question2["6_2_4"] ? question2["6_2_4"] : "",
            answer: answer2["6_2_4"] ? answer2["6_2_4"] : "",
          },
          {
            question: question2["6_2_5"] ? question2["6_2_5"] : "",
            answer: answer2["6_2_5"] ? answer2["6_2_5"] : "",
          },
        ]);
      });
    });
    // 리포트
    Axios.get("http://34.68.101.191:8000/get/Scan_report_writer", {
      params: { business_name: clientData.BUSINESS_NAME },
    }).then((response) => {
      let data = response.data[0];
      setWriterPdf(data.FILE_NAME);
    });
  }, []);

  // 파일 미리보기 모달
  const [qnaListModal, setQnaListModal] = useState(false);
  // 첨부파일
  const [writerPdf, setWriterPdf] = useState("");

  // 카테고리, 답변 박스 input 생성
  const questionInputs = () => {
    let arr = [];
    let key = 0;
    for (let i = 1; i <= 6; i++) {
      arr.push(
        <input
          key={(key = key + 1)}
          className="Scan_report_client_kategorie_checkbox"
          id={`kategorie${i}`}
          type="checkbox"
        />
      );
    }

    return arr;
  };

  //모달 외부 클릭 시 닫힘
  const modalOutSide = useRef();
  useEffect(() => {
    const clickOutside = (e) => {
      // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
      if (
        !qnaListModal &&
        modalOutSide.current &&
        !modalOutSide.current.contains(e.target)
      ) {
        setQnaListModal(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <>
      <Header title="SCANNer 리포트" img="./img/header_scan.png" />
      {questionInputs()}
      <div className="Scan_top">
        <p>사업명 : {clientData.BUSINESS_NAME}</p>
        <p className="Scan_top_boder">제출일시 : {clientData.CREATED_DATE}</p>
        <p>현재상태 : {clientData.STATE_NAME}</p>
        <div className="Scan_top_right">
          <button
            className="Scan_report_client_qna_btn"
            onClick={() => {
              setQnaListModal(true);
            }}
          >
            질의응답 내역
          </button>
          <img src="./img/print.png" alt="img" onClick={print} />
          <Download>
            {(props) => (
              <img src="./img/save.png" alt="img" onClick={props.onClick} />
            )}
          </Download>
        </div>
      </div>
      <div className="Scan_report_client_inner">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
          <Viewer
            fileUrl={`http://34.68.101.191:8000/file/${writerPdf}`}
            defaultScale={SpecialZoomLevel.PageFit}
            plugins={[printPluginInstance, getFilePluginInstance]}
          />
        </Worker>
      </div>

      {qnaListModal && (
        <div ref={modalOutSide} className="Scan_report_client_qna_list_inner">
          <img
            className="Scan_report_client_qna_list_close"
            src="./img/close.png"
            alt="img"
            onClick={() => {
              setQnaListModal(false);
            }}
          />
          <p className="Scan_report_client_qna_list_title">질의응답 내역</p>
          <div>
            <table>
              <tbody>
                {content1.map((item, index) => (
                  <tr key={index}>
                    <td className="Scan_report_client_qna_list_table_title">
                      {item.title}
                    </td>
                    <td className="Scan_report_client_qna_list_table_check">
                      <img src="./img/check.png" alt="img" />
                    </td>
                    <td className="Scan_report_client_qna_list_table_text">
                      <p>{item.text}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="Scan_report_client_qna_list_cont1_market">
              <div className="Scan_report_client_qna_list_cont1_market_box">
                <p className="Scan_report_client_qna_list_cont1_market_title">
                  {content2.DT_1_NAME && content2.DT_1_NAME.slice(0, -2)}
                  {content2.DT_1_1 === 1 && " / B2B"}
                  {content2.DT_1_2 === 1 && " / B2C"}
                  {content2.DT_1_3 === 1 && " / 하드웨어"}
                  {content2.DT_1_4 === 1 && " / 소프트웨어"}
                  {content2.DT_1_5 === 1 && " / 서비스"}
                </p>
                <div className="Scan_report_client_qna_list_cont1_market_text">
                  <p>{content2.DT_1_TEXT}</p>
                </div>
              </div>
              {content2.DT_2_NAME ? (
                <div className="Scan_report_client_qna_list_cont1_market_box">
                  <p className="Scan_report_client_qna_list_cont1_market_title">
                    {content2.DT_2_NAME && content2.DT_2_NAME.slice(0, -2)}
                    {content2.DT_2_1 === 1 && " / B2B"}
                    {content2.DT_2_2 === 1 && " / B2C"}
                    {content2.DT_2_3 === 1 && " / 하드웨어"}
                    {content2.DT_2_4 === 1 && " / 소프트웨어"}
                    {content2.DT_2_5 === 1 && " / 서비스"}
                  </p>
                  <div className="Scan_report_client_qna_list_cont1_market_text">
                    <p>{content2.DT_2_TEXT}</p>
                  </div>
                </div>
              ) : (
                <div
                  style={{ opacity: 0 }}
                  className="Scan_report_client_qna_list_cont1_market_box"
                ></div>
              )}
            </div>
          </div>
          {/* 1번째 카테고리 */}
          <div className="Scan_report_client_qna_list_content">
            <div className="Scan_report_client_qna_list_content_title">
              <label htmlFor="kategorie1">
                <p>
                  <b>(1) 고객/시장 대상 (Who)</b>
                </p>
              </label>
              <label htmlFor="kategorie1">
                <img
                  className="arrow_down_img arrow1"
                  src="./img/arrow-down.png"
                  alt="img"
                />
              </label>
            </div>
            <div className="Scan_report_client_qna_list_content_box con1">
              {question1.map((item, index) => (
                <div key={index}>
                  {item.question !== "" ? (
                    <div className="Scan_report_client_qna_list_content_box_content">
                      <div className="Scan_report_client_qna_list_content_box_title">
                        <p>{item.question}</p>
                      </div>
                      <div className="Scan_report_client_qna_list_content_text">
                        <textarea value={item.answer} disabled />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {item.key === "1_1"
                    ? question1_1.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                1-1-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "1_2"
                    ? question1_2.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                1-2-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "1_3"
                    ? question1_3.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                1-3-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "1_4"
                    ? question1_4.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                1-4-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                </div>
              ))}
            </div>
          </div>
          {/* 2번째 카테고리 */}
          <div className="Scan_report_client_qna_list_content">
            <div className="Scan_report_client_qna_list_content_title">
              <label htmlFor="kategorie2">
                <p>
                  <b>(2) 제품/서비스/가치 (What)</b>
                </p>
              </label>
              <label htmlFor="kategorie2">
                <img
                  className="arrow_down_img arrow2"
                  src="./img/arrow-down.png"
                  alt="img"
                />
              </label>
            </div>
            <div className="Scan_report_client_qna_list_content_box con2">
              {question2.map((item, index) => (
                <div key={index}>
                  {item.question !== "" ? (
                    <div className="Scan_report_client_qna_list_content_box_content">
                      <div className="Scan_report_client_qna_list_content_box_title">
                        <p>{item.question}</p>
                      </div>
                      <div className="Scan_report_client_qna_list_content_text">
                        <textarea value={item.answer} disabled />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {item.key === "2_1"
                    ? question2_1.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                2-1-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "2_2"
                    ? question2_2.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                2-2-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "2_3"
                    ? question2_3.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                2-3-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "2_4"
                    ? question2_4.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                2-4-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                </div>
              ))}
            </div>
          </div>
          {/* 3번째 카테고리 */}
          <div className="Scan_report_client_qna_list_content">
            <div className="Scan_report_client_qna_list_content_title">
              <label htmlFor="kategorie3">
                <p>
                  <b>(3) 판매/제공 방법 (How)</b>
                </p>
              </label>
              <label htmlFor="kategorie3">
                <img
                  className="arrow_down_img arrow3"
                  src="./img/arrow-down.png"
                  alt="img"
                />
              </label>
            </div>
            <div className="Scan_report_client_qna_list_content_box con3">
              {question3.map((item, index) => (
                <div key={index}>
                  {item.question !== "" ? (
                    <div className="Scan_report_client_qna_list_content_box_content">
                      <div className="Scan_report_client_qna_list_content_box_title">
                        <p>{item.question}</p>
                      </div>
                      <div className="Scan_report_client_qna_list_content_text">
                        <textarea value={item.answer} disabled />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {item.key === "3_1"
                    ? question3_1.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                3-1-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "3_2"
                    ? question3_2.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                3-2-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "3_3"
                    ? question3_3.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                3-3-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "3_4"
                    ? question3_4.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                3-4-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                </div>
              ))}
            </div>
          </div>
          {/* 4번째 카테고리 */}
          <div className="Scan_report_client_qna_list_content">
            <div className="Scan_report_client_qna_list_content_title">
              <label htmlFor="kategorie4">
                <p>
                  <b>(4)기존 경쟁사 대비 우위사항 (Dominance)</b>
                </p>
              </label>
              <label htmlFor="kategorie4">
                <img
                  className="arrow_down_img arrow4"
                  src="./img/arrow-down.png"
                  alt="img"
                />
              </label>
            </div>
            <div className="Scan_report_client_qna_list_content_box con4">
              {question4.map((item, index) => (
                <div key={index}>
                  {item.question !== "" ? (
                    <div className="Scan_report_client_qna_list_content_box_content">
                      <div className="Scan_report_client_qna_list_content_box_title">
                        <p>{item.question}</p>
                      </div>
                      <div className="Scan_report_client_qna_list_content_text">
                        <textarea value={item.answer} disabled />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {item.key === "4_1"
                    ? question4_1.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                4-1-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "4_2"
                    ? question4_2.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                4-2-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "4_3"
                    ? question4_3.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                4-3-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "4_4"
                    ? question4_4.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                4-4-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                </div>
              ))}
            </div>
          </div>
          {/* 5번째 카테고리 */}
          <div className="Scan_report_client_qna_list_content">
            <div className="Scan_report_client_qna_list_content_title">
              <label htmlFor="kategorie5">
                <p>
                  <b>(5) 수익창출 방법 (profit)</b>
                </p>
              </label>
              <label htmlFor="kategorie5">
                <img
                  className="arrow_down_img arrow5"
                  src="./img/arrow-down.png"
                  alt="img"
                />
              </label>
            </div>
            <div className="Scan_report_client_qna_list_content_box con5">
              {question5.map((item, index) => (
                <div key={index}>
                  {item.question !== "" ? (
                    <div className="Scan_report_client_qna_list_content_box_content">
                      <div className="Scan_report_client_qna_list_content_box_title">
                        <p>{item.question}</p>
                      </div>
                      <div className="Scan_report_client_qna_list_content_text">
                        <textarea value={item.answer} disabled />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {item.key === "5_1"
                    ? question5_1.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                5-1-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "5_2"
                    ? question5_2.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                5-2-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "5_3"
                    ? question5_3.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                5-3-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "5_4"
                    ? question5_4.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                5-4-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                </div>
              ))}
            </div>
          </div>
          {/* 6번째 카테고리 */}
          <div className="Scan_report_client_qna_list_content">
            <div className="Scan_report_client_qna_list_content_title">
              <label htmlFor="kategorie6">
                <p>
                  <b>(6) 사업 구상 배경 (motivation)</b>
                </p>
              </label>
              <label htmlFor="kategorie6">
                <img
                  className="arrow_down_img arrow6"
                  src="./img/arrow-down.png"
                  alt="img"
                />
              </label>
            </div>
            <div className="Scan_report_client_qna_list_content_box con6">
              {question6.map((item, index) => (
                <div key={index}>
                  {item.question !== "" ? (
                    <div className="Scan_report_client_qna_list_content_box_content">
                      <div className="Scan_report_client_qna_list_content_box_title">
                        <p>{item.question}</p>
                      </div>
                      <div className="Scan_report_client_qna_list_content_text">
                        <textarea value={item.answer} disabled />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {item.key === "6_1"
                    ? question6_1.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                6-1-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : item.key === "6_2"
                    ? question6_2.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                6-2-{String.fromCharCode(65 + index)}.{" "}
                                {item.question}
                              </p>
                            </div>
                            <div className="Scan_report_client_qna2_box_text">
                              <textarea value={item.answer} disabled></textarea>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Scan_report_client;
