import "../ScanPages/Scan_report_client.css";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { printPlugin } from "@react-pdf-viewer/print";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/print/lib/styles/index.css";
import Axios from "axios";
import Header from "../Header";
const Focus_report_view_client = () => {
  //pdf 프린터 기능
  const printPluginInstance = printPlugin();
  const { print } = printPluginInstance;

  //pdf 저장 기능
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  const location = useLocation({});

  const clientData = location.state.clientData;

  // 기본질문
  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [question4, setQuestion4] = useState([]);

  // 추가질문
  const [question1_1, setAuestion1_1] = useState([]);
  const [question1_2, setAuestion1_2] = useState([]);
  const [question1_3, setAuestion1_3] = useState([]);
  const [question1_4, setAuestion1_4] = useState([]);

  const [question2_1, setAuestion2_1] = useState([]);
  const [question2_2, setAuestion2_2] = useState([]);
  const [question2_3, setAuestion2_3] = useState([]);
  const [question2_4, setAuestion2_4] = useState([]);
  const [question2_5, setAuestion2_5] = useState([]);
  const [question2_6, setAuestion2_6] = useState([]);
  const [question2_7, setAuestion2_7] = useState([]);
  const [question2_8, setAuestion2_8] = useState([]);

  const [question3_1, setAuestion3_1] = useState([]);
  const [question3_2, setAuestion3_2] = useState([]);
  const [question3_3, setAuestion3_3] = useState([]);
  const [question3_4, setAuestion3_4] = useState([]);

  const [question4_1, setAuestion4_1] = useState([]);
  const [question4_2, setAuestion4_2] = useState([]);

  useEffect(() => {
    let answer = "";
    let question2 = "";
    let answer2 = "";
    Axios.get("http://34.68.101.191:8000/get/Focus_qna_client", {
      params: { business_name: clientData.BUSINESS_NAME },
    }).then((response) => {
      answer = response.data[0];

      //  밸류체인
      if (clientData.QUESTION_TYPE === "b") {
        setQuestion1([
          {
            key: "1_1",
            question: "사업 개시 후 1~2년 내 목표로 하는 시장은 어디입니까?",
            answer: answer["1_1"],
          },
          {
            key: "1_2",
            question:
              "목표 시장에서 구체적으로 어떤 고객을 대상으로 사업을 하십니까?",
            answer: answer["1_2"],
          },
          {
            key: "1_3",
            question:
              "사업개시 후 1~2년 내 목표로 하고 있는 시장은 다른 인접시장으로 진출하기 유리한 시장입니까?",
            answer: answer["1_3"],
          },
        ]);
        setQuestion2([
          {
            key: "2_1",
            question:
              "사업을 통해 고객에게 무엇을 제공(오퍼링/offering)합니까?",
            answer: answer["2_1"],
          },
          {
            key: "2_2",
            question:
              "고객들은 어떤 애로사항이나 니즈를 해결하려고 상기의 오퍼링을 구매합니까?",
            answer: answer["2_2"],
          },
          {
            key: "2_3",
            question:
              "사업 개시 후 1~2년 내 목표로 하고 있는 시장에서 고객들은 동일한 애로사항이나 니즈를 해결하기 위해서 우리회사와 비슷한 오퍼링을 구매합니까? 아니면 전혀 다른 대안 오퍼링을 구매합니까?",
            answer: answer["2_3"],
          },
          {
            key: "2_4",
            question:
              "사업 개시 후 1~2년 내 다른 경쟁자와는 어떻게 차별화할 것입니까? 다시 말해 고객들이 우리 회사의 오퍼링을 구매할 수 밖에 없는 이유는 무엇입니까?",
            answer: answer["2_4"],
          },
          {
            key: "2_5",
            question:
              "우리회사가 제공하는 오퍼링은 직접개발해서 판매하는 것인가요? 아니면 다른 공급처에서 구매하여 유통하는 것입니까?",
            answer: answer["2_5"],
          },
          {
            key: "2_6",
            question: "완성품을 단기간 내에 생산하여 출시하는 것이 가능합니까?",
            answer: answer["2_6"],
          },
          {
            key: "2_7",
            question:
              "완성품을 생산하여 출시하는 데 있어 협력업체의 역할은 얼마나 큽니까?",
            answer: answer["2_7"],
          },
          {
            key: "2_8",
            question:
              "사업 개시 후 1~2년 내 목표로 하는 시장에서 우리보다 훨씬 뛰어난 경쟁력을 가진 경쟁자가 있습니까? 아니면 우리만의 독점적 시장입니까?",
            answer: answer["2_8"],
          },
        ]);
        setQuestion3([
          {
            key: "3_1",
            question:
              "사업 개시 후 1~2년 내 목표시장에서는 어떤 유통채널을 통해 오퍼링을 고객에게 판매하실 생각이십니까?",
            answer: answer["3_1"],
          },
          {
            key: "3_2",
            question:
              "간접 유통의 경우, 유통채널을 대상으로 영업은 어떻게 진행할 것인가요?",
            answer: answer["3_2"],
          },
          {
            key: "3_3",
            question:
              "직접 유통의 경우, 목표고객에게 어떻게 접근할 수 있을까요?",
            answer: answer["3_3"],
          },
          {
            key: "3_4",
            question:
              "1~2년 내 공략할 목표시장의 유통채널이나 고객들에게 우리회사를 알리기 위해 마케팅을 어떻게 하실 것인가요?",
            answer: answer["3_4"],
          },
        ]);
        setQuestion4([
          {
            key: "4_1",
            question: "수익은 어떻게 창출할 계획입니까? (수익창출 방식)",
            answer: answer["4_1"],
          },
          {
            key: "4_2",
            question: "사업 개시 후 1~2년 내 예상하는 수익은 어느 정도입니까? ",
            answer: answer["4_2"],
          },
        ]);
      } else if (clientData.QUESTION_TYPE === "p") {
        // 플랫폼
        setQuestion1([
          {
            key: "1_1",
            question: "사업 개시 후 1~2년 내 목표로 하는 시장은 어디입니까?",
            answer: answer["1_1"],
          },
          {
            key: "1_2",
            question:
              "목표 시장에서 구체적으로 어떤 고객을 대상으로 사업을 하십니까?",
            answer: answer["1_2"],
          },
          {
            key: "1_3",
            question:
              "사업개시 후 1~2년 내 목표로 하고 있는 시장은 다른 인접시장으로 진출하기 유리한 시장입니까?",
            answer: answer["1_3"],
          },
          {
            key: "1_4",
            question:
              "사업개시 후 1~2년 내 목표로 하고 있는 시장은 다른 인접시장으로 진출하기 유리한 시장입니까?",
            answer: answer["1_4"],
          },
        ]);
        setQuestion2([
          {
            key: "2_1",
            question: "플랫폼에서 공급자는 고객에게 무엇을 제공합니까?",
            answer: answer["2_1"],
          },
          {
            key: "2_2",
            question:
              "고객들은 어떤 애로사항이나 필요사항을 해결하려고 본 플랫폼을 이용합니까",
            answer: answer["2_2"],
          },
          {
            key: "2_3",
            question:
              "사업 개시 후 1~2년 내 다른 경쟁자와는 어떻게 차별화할 것입니까? 다시 말해 고객들이 우리 플랫폼을 활용할 수 밖에 없는 이유는 무엇입니까?",
            answer: answer["2_3"],
          },
          {
            key: "2_4",
            question:
              "플랫폼에서 제공하고자 하는 것들은 단시간 내에 출시 가능합니까? 아니면 오랜 시간을 투자하여 개발해야 합니까?",
            answer: answer["2_4"],
          },
          {
            key: "2_5",
            question:
              "사업 개시 후 1~2년 내 목표로 하는 시장에서 우리보다 훨씬 뛰어난 경쟁력을 가진 경쟁자가 있습니까? 아니면 우리만의 독점적 시장입니까?",
            answer: answer["2_5"],
          },
        ]);
        setQuestion3([
          {
            key: "3_1",
            question:
              "플랫폼에서 고객과 공급자가 서로 신뢰하면서 편리하게 거래나 상담을 할 수 있도록 하기 위해 어떤 방안을 활용하고 있습니까?",
            answer: answer["3_1"],
          },
          {
            key: "3_2",
            question:
              "사업 개시 후 1~2년 이내 고객과 공급자 중 어느 쪽을 먼저 유입시키는 것이 유리합니까?",
            answer: answer["3_2"],
          },
          {
            key: "3_3",
            question:
              "어떤 유입방안을 통해 플랫폼으로 참여자들을 유입할 것인가요?",
            answer: answer["3_3"],
          },
        ]);
        setQuestion4([
          {
            key: "4_1",
            question: "어떤 방식으로 수익을 창출할 수 있습니까?",
            answer: answer["4_1"],
          },
          {
            key: "4_2",
            question:
              "회원 가입이 어느 정도 수준이 되면 수익을 창출할 수 있다고 보는지요? 그렇다면 사업 개시 후 1~2년 내 예상하는 수익은 어느 정도입니까?",
            answer: answer["4_2"],
          },
        ]);
      }
    });

    // 추가질문
    Axios.get("http://34.68.101.191:8000/get/Focus_qna_2_write", {
      params: { business_name: clientData.BUSINESS_NAME },
    }).then((response) => {
      question2 = response.data[0];
      Axios.get("http://34.68.101.191:8000/get/Focus_qna_2_client", {
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

        setAuestion2_5([
          ...question2_5,
          {
            question: question2["2_5_1"] ? question2["2_5_1"] : "",
            answer: answer2["2_5_1"] ? answer2["2_5_1"] : "",
          },
          {
            question: question2["2_5_2"] ? question2["2_5_2"] : "",
            answer: answer2["2_5_2"] ? answer2["2_5_2"] : "",
          },
          {
            question: question2["2_5_3"] ? question2["2_5_3"] : "",
            answer: answer2["2_5_3"] ? answer2["2_5_3"] : "",
          },
          {
            question: question2["2_5_4"] ? question2["2_5_4"] : "",
            answer: answer2["2_5_4"] ? answer2["2_5_4"] : "",
          },
          {
            question: question2["2_5_5"] ? question2["2_5_5"] : "",
            answer: answer2["2_5_5"] ? answer2["2_5_5"] : "",
          },
        ]);

        setAuestion2_6([
          ...question2_6,
          {
            question: question2["2_6_1"] ? question2["2_6_1"] : "",
            answer: answer2["2_6_1"] ? answer2["2_6_1"] : "",
          },
          {
            question: question2["2_6_2"] ? question2["2_6_2"] : "",
            answer: answer2["2_6_2"] ? answer2["2_6_2"] : "",
          },
          {
            question: question2["2_6_3"] ? question2["2_6_3"] : "",
            answer: answer2["2_6_3"] ? answer2["2_6_3"] : "",
          },
          {
            question: question2["2_6_4"] ? question2["2_6_4"] : "",
            answer: answer2["2_6_4"] ? answer2["2_6_4"] : "",
          },
          {
            question: question2["2_6_5"] ? question2["2_6_5"] : "",
            answer: answer2["2_6_5"] ? answer2["2_6_5"] : "",
          },
        ]);

        setAuestion2_7([
          ...question2_7,
          {
            question: question2["2_7_1"] ? question2["2_7_1"] : "",
            answer: answer2["2_7_1"] ? answer2["2_7_1"] : "",
          },
          {
            question: question2["2_7_2"] ? question2["2_7_2"] : "",
            answer: answer2["2_7_2"] ? answer2["2_7_2"] : "",
          },
          {
            question: question2["2_7_3"] ? question2["2_7_3"] : "",
            answer: answer2["2_7_3"] ? answer2["2_7_3"] : "",
          },
          {
            question: question2["2_7_4"] ? question2["2_7_4"] : "",
            answer: answer2["2_7_4"] ? answer2["2_7_4"] : "",
          },
          {
            question: question2["2_7_5"] ? question2["2_7_5"] : "",
            answer: answer2["2_7_5"] ? answer2["2_7_5"] : "",
          },
        ]);

        setAuestion2_8([
          ...question2_8,
          {
            question: question2["2_8_1"] ? question2["2_8_1"] : "",
            answer: answer2["2_8_1"] ? answer2["2_8_1"] : "",
          },
          {
            question: question2["2_8_2"] ? question2["2_8_2"] : "",
            answer: answer2["2_8_2"] ? answer2["2_8_2"] : "",
          },
          {
            question: question2["2_8_3"] ? question2["2_8_3"] : "",
            answer: answer2["2_8_3"] ? answer2["2_8_3"] : "",
          },
          {
            question: question2["2_8_4"] ? question2["2_8_4"] : "",
            answer: answer2["2_8_4"] ? answer2["2_8_4"] : "",
          },
          {
            question: question2["2_8_5"] ? question2["2_8_5"] : "",
            answer: answer2["2_8_5"] ? answer2["2_8_5"] : "",
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
      });
    });
    // 리포트 파일
    Axios.get("http://34.68.101.191:8000/get/Focus_report_writer", {
      params: { business_name: clientData.BUSINESS_NAME },
    }).then((response) => {
      let data = response.data[0];
      setWriterPdf(data.FILE_NAME);
    });
  }, []);

  const [qnaListModal, setQnaListModal] = useState(false);
  const [writerPdf, setWriterPdf] = useState("");

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

  return (
    <>
      {questionInputs()}
      <Header title="FOCUSer 리포트" img="./img/focus_icon.png" />
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
        {writerPdf && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            <Viewer
              fileUrl={`http://34.68.101.191:8000/file/${writerPdf}`}
              defaultScale={SpecialZoomLevel.PageFit}
              plugins={[printPluginInstance, getFilePluginInstance]}
            />
          </Worker>
        )}
      </div>
      {qnaListModal && (
        <div className="Scan_report_client_qna_list_inner">
          <img
            className="Scan_report_client_qna_list_close"
            src="./img/close.png"
            alt="img"
            onClick={() => {
              setQnaListModal(false);
            }}
          />
          <p className="Scan_report_client_qna_list_title">질의응답 내역</p>
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
                        <input type="text" value={item.question} disabled />
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
                        <input type="text" value={item.question} disabled />
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
                    : item.key === "2_5"
                    ? question2_5.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                2-5-{String.fromCharCode(65 + index)}.{" "}
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
                    : item.key === "2_6"
                    ? question2_6.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                2-6-{String.fromCharCode(65 + index)}.{" "}
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
                    : item.key === "2_7"
                    ? question2_7.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                2-7-{String.fromCharCode(65 + index)}.{" "}
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
                    : item.key === "2_8"
                    ? question2_8.map((item, index) =>
                        item.answer !== "" ? (
                          <div
                            key={index}
                            className="Scan_report_client_qna2_box"
                          >
                            <div className="Scan_report_client_qna2_box_title">
                              <p>
                                2-8-{String.fromCharCode(65 + index)}.{" "}
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
                        <input type="text" value={item.question} disabled />
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
                        <input type="text" value={item.question} disabled />
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

export default Focus_report_view_client;
