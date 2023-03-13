import "../ScanPages/Scan_detail_qna_client.css";
import "../ScanPages/Scan_detail_qna2_client.scss";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Axios from "axios";
import Header from "../Header";
import Loading from "../Loading";

const Focus_qna2_client = () => {
  const [isLoad, setIsLoad] = useState(false);
  const location = useLocation({});

  const clientData = location.state.clientData;

  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [question4, setQuestion4] = useState([]);

  useEffect(() => {
    let answer = "";
    let question2 = "";

    Axios.get("http://34.68.101.191:8000/get/Focus_qna_client", {
      params: { business_name: clientData.BUSINESS_NAME },
    }).then((response) => {
      answer = response.data[0];

      Axios.get("http://34.68.101.191:8000/get/Focus_qna_2_write", {
        params: { business_name: clientData.BUSINESS_NAME },
      }).then((response) => {
        question2 = response.data[0];

        //  밸류체인
        if (clientData.QUESTION_TYPE === "b") {
          setQuestion1([
            {
              key: "1_1",
              question: "사업 개시 후 1~2년 내 목표로 하는 시장은 어디입니까?",
              answer: answer["1_1"],
              question2:
                question2["1_1_1"] ||
                question2["1_1_2"] ||
                question2["1_1_3"] ||
                question2["1_1_4"]
                  ? true
                  : false,
            },
            {
              key: "1_2",
              question:
                "목표 시장에서 구체적으로 어떤 고객을 대상으로 사업을 하십니까?",
              answer: answer["1_2"],
              question2:
                question2["1_2_1"] ||
                question2["1_2_2"] ||
                question2["1_2_3"] ||
                question2["1_2_4"]
                  ? true
                  : false,
            },
            {
              key: "1_3",
              question:
                "사업개시 후 1~2년 내 목표로 하고 있는 시장은 다른 인접시장으로 진출하기 유리한 시장입니까?",
              answer: answer["1_3"],
              question2:
                question2["1_3_1"] ||
                question2["1_3_2"] ||
                question2["1_3_3"] ||
                question2["1_3_4"]
                  ? true
                  : false,
            },
          ]);
          setQuestion2([
            {
              key: "2_1",
              question:
                "사업을 통해 고객에게 무엇을 제공(오퍼링/offering)합니까?",
              answer: answer["2_1"],
              question2:
                question2["2_1_1"] ||
                question2["2_1_2"] ||
                question2["2_1_3"] ||
                question2["2_1_4"]
                  ? true
                  : false,
            },
            {
              key: "2_2",
              question:
                "고객들은 어떤 애로사항이나 니즈를 해결하려고 상기의 오퍼링을 구매합니까?",
              answer: answer["2_2"],
              question2:
                question2["2_2_1"] ||
                question2["2_2_2"] ||
                question2["2_2_3"] ||
                question2["2_2_4"]
                  ? true
                  : false,
            },
            {
              key: "2_3",
              question:
                "사업 개시 후 1~2년 내 목표로 하고 있는 시장에서 고객들은 동일한 애로사항이나 니즈를 해결하기 위해서 우리회사와 비슷한 오퍼링을 구매합니까? 아니면 전혀 다른 대안 오퍼링을 구매합니까?",
              answer: answer["2_3"],
              question2:
                question2["2_3_1"] ||
                question2["2_3_2"] ||
                question2["2_3_3"] ||
                question2["2_3_4"]
                  ? true
                  : false,
            },
            {
              key: "2_4",
              question:
                "사업 개시 후 1~2년 내 다른 경쟁자와는 어떻게 차별화할 것입니까? 다시 말해 고객들이 우리 회사의 오퍼링을 구매할 수 밖에 없는 이유는 무엇입니까?",
              answer: answer["2_4"],
              question2:
                question2["2_4_1"] ||
                question2["2_4_2"] ||
                question2["2_4_3"] ||
                question2["2_4_4"]
                  ? true
                  : false,
            },
            {
              key: "2_5",
              question:
                "우리회사가 제공하는 오퍼링은 직접개발해서 판매하는 것인가요? 아니면 다른 공급처에서 구매하여 유통하는 것입니까?",
              answer: answer["2_5"],
              question2:
                question2["2_5_1"] ||
                question2["2_5_2"] ||
                question2["2_5_3"] ||
                question2["2_5_4"]
                  ? true
                  : false,
            },
            {
              key: "2_6",
              question:
                "완성품을 단기간 내에 생산하여 출시하는 것이 가능합니까?",
              answer: answer["2_6"],
              question2:
                question2["2_6_1"] ||
                question2["2_6_2"] ||
                question2["2_6_3"] ||
                question2["2_6_4"]
                  ? true
                  : false,
            },
            {
              key: "2_7",
              question:
                "완성품을 생산하여 출시하는 데 있어 협력업체의 역할은 얼마나 큽니까?",
              answer: answer["2_7"],
              question2:
                question2["2_7_1"] ||
                question2["2_7_2"] ||
                question2["2_7_3"] ||
                question2["2_7_4"]
                  ? true
                  : false,
            },
            {
              key: "2_8",
              question:
                "사업 개시 후 1~2년 내 목표로 하는 시장에서 우리보다 훨씬 뛰어난 경쟁력을 가진 경쟁자가 있습니까? 아니면 우리만의 독점적 시장입니까?",
              answer: answer["2_8"],
              question2:
                question2["2_8_1"] ||
                question2["2_8_2"] ||
                question2["2_8_3"] ||
                question2["2_8_4"]
                  ? true
                  : false,
            },
          ]);
          setQuestion3([
            {
              key: "3_1",
              question:
                "사업 개시 후 1~2년 내 목표시장에서는 어떤 유통채널을 통해 오퍼링을 고객에게 판매하실 생각이십니까?",
              answer: answer["3_1"],
              question2:
                question2["3_1_1"] ||
                question2["3_1_2"] ||
                question2["3_1_3"] ||
                question2["3_1_4"]
                  ? true
                  : false,
            },
            {
              key: "3_2",
              question:
                "간접 유통의 경우, 유통채널을 대상으로 영업은 어떻게 진행할 것인가요?",
              answer: answer["3_2"],
              question2:
                question2["3_2_1"] ||
                question2["3_2_2"] ||
                question2["3_2_3"] ||
                question2["3_2_4"]
                  ? true
                  : false,
            },
            {
              key: "3_3",
              question:
                "직접 유통의 경우, 목표고객에게 어떻게 접근할 수 있을까요?",
              answer: answer["3_3"],
              question2:
                question2["3_3_1"] ||
                question2["3_3_2"] ||
                question2["3_3_3"] ||
                question2["3_3_4"]
                  ? true
                  : false,
            },
            {
              key: "3_4",
              question:
                "1~2년 내 공략할 목표시장의 유통채널이나 고객들에게 우리회사를 알리기 위해 마케팅을 어떻게 하실 것인가요?",
              answer: answer["3_4"],
              question2:
                question2["3_4_1"] ||
                question2["3_4_2"] ||
                question2["3_4_3"] ||
                question2["3_4_4"]
                  ? true
                  : false,
            },
          ]);
          setQuestion4([
            {
              key: "4_1",
              question: "수익은 어떻게 창출할 계획입니까? (수익창출 방식)",
              answer: answer["4_1"],
              question2:
                question2["4_1_1"] ||
                question2["4_1_2"] ||
                question2["4_1_3"] ||
                question2["4_1_4"]
                  ? true
                  : false,
            },
            {
              key: "4_2",
              question:
                "사업 개시 후 1~2년 내 예상하는 수익은 어느 정도입니까? ",
              answer: answer["4_2"],
              question2:
                question2["4_2_1"] ||
                question2["4_2_2"] ||
                question2["4_2_3"] ||
                question2["4_2_4"]
                  ? true
                  : false,
            },
          ]);
        } else if (clientData.QUESTION_TYPE === "p") {
          // 플랫폼
          setQuestion1([
            {
              key: "1_1",
              question: "사업 개시 후 1~2년 내 목표로 하는 시장은 어디입니까?",
              answer: answer["1_1"],
              question2:
                question2["1_1_1"] ||
                question2["1_1_2"] ||
                question2["1_1_3"] ||
                question2["1_1_4"]
                  ? true
                  : false,
            },
            {
              key: "1_2",
              question:
                "목표 시장에서 구체적으로 어떤 고객을 대상으로 사업을 하십니까?",
              answer: answer["1_2"],
              question2:
                question2["1_2_1"] ||
                question2["1_2_2"] ||
                question2["1_2_3"] ||
                question2["1_2_4"]
                  ? true
                  : false,
            },
            {
              key: "1_3",
              question:
                "사업개시 후 1~2년 내 목표로 하고 있는 시장은 다른 인접시장으로 진출하기 유리한 시장입니까?",
              answer: answer["1_3"],
              question2:
                question2["1_3_1"] ||
                question2["1_3_2"] ||
                question2["1_3_3"] ||
                question2["1_3_4"]
                  ? true
                  : false,
            },
            {
              key: "1_4",
              question:
                "사업개시 후 1~2년 내 목표로 하고 있는 시장은 다른 인접시장으로 진출하기 유리한 시장입니까?",
              answer: answer["1_4"],
              question2:
                question2["1_4_1"] ||
                question2["1_4_2"] ||
                question2["1_4_3"] ||
                question2["1_4_4"]
                  ? true
                  : false,
            },
          ]);
          setQuestion2([
            {
              key: "2_1",
              question: "플랫폼에서 공급자는 고객에게 무엇을 제공합니까?",
              answer: answer["2_1"],
              question2:
                question2["2_1_1"] ||
                question2["2_1_2"] ||
                question2["2_1_3"] ||
                question2["2_1_4"]
                  ? true
                  : false,
            },
            {
              key: "2_2",
              question:
                "고객들은 어떤 애로사항이나 필요사항을 해결하려고 본 플랫폼을 이용합니까",
              answer: answer["2_2"],
              question2:
                question2["2_2_1"] ||
                question2["2_2_2"] ||
                question2["2_2_3"] ||
                question2["2_2_4"]
                  ? true
                  : false,
            },
            {
              key: "2_3",
              question:
                "사업 개시 후 1~2년 내 다른 경쟁자와는 어떻게 차별화할 것입니까? 다시 말해 고객들이 우리 플랫폼을 활용할 수 밖에 없는 이유는 무엇입니까?",
              answer: answer["2_3"],
              question2:
                question2["2_3_1"] ||
                question2["2_3_2"] ||
                question2["2_3_3"] ||
                question2["2_3_4"]
                  ? true
                  : false,
            },
            {
              key: "2_4",
              question:
                "플랫폼에서 제공하고자 하는 것들은 단시간 내에 출시 가능합니까? 아니면 오랜 시간을 투자하여 개발해야 합니까?",
              answer: answer["2_4"],
              question2:
                question2["2_4_1"] ||
                question2["2_4_2"] ||
                question2["2_4_3"] ||
                question2["2_4_4"]
                  ? true
                  : false,
            },
            {
              key: "2_5",
              question:
                "사업 개시 후 1~2년 내 목표로 하는 시장에서 우리보다 훨씬 뛰어난 경쟁력을 가진 경쟁자가 있습니까? 아니면 우리만의 독점적 시장입니까?",
              answer: answer["2_5"],
              question2:
                question2["2_5_1"] ||
                question2["2_5_2"] ||
                question2["2_5_3"] ||
                question2["2_5_4"]
                  ? true
                  : false,
            },
          ]);
          setQuestion3([
            {
              key: "3_1",
              question:
                "플랫폼에서 고객과 공급자가 서로 신뢰하면서 편리하게 거래나 상담을 할 수 있도록 하기 위해 어떤 방안을 활용하고 있습니까?",
              answer: answer["3_1"],
              question2:
                question2["3_1_1"] ||
                question2["3_1_2"] ||
                question2["3_1_3"] ||
                question2["3_1_4"]
                  ? true
                  : false,
            },
            {
              key: "3_2",
              question:
                "사업 개시 후 1~2년 이내 고객과 공급자 중 어느 쪽을 먼저 유입시키는 것이 유리합니까?",
              answer: answer["3_2"],
              question2:
                question2["3_2_1"] ||
                question2["3_2_2"] ||
                question2["3_2_3"] ||
                question2["3_2_4"]
                  ? true
                  : false,
            },
            {
              key: "3_3",
              question:
                "어떤 유입방안을 통해 플랫폼으로 참여자들을 유입할 것인가요?",
              answer: answer["3_3"],
              question2:
                question2["3_3_1"] ||
                question2["3_3_2"] ||
                question2["3_3_3"] ||
                question2["3_3_4"]
                  ? true
                  : false,
            },
          ]);
          setQuestion4([
            {
              key: "4_1",
              question: "어떤 방식으로 수익을 창출할 수 있습니까?",
              answer: answer["4_1"],
              question2:
                question2["4_1_1"] ||
                question2["4_1_2"] ||
                question2["4_1_3"] ||
                question2["4_1_4"]
                  ? true
                  : false,
            },
            {
              key: "4_2",
              question:
                "회원 가입이 어느 정도 수준이 되면 수익을 창출할 수 있다고 보는지요? 그렇다면 사업 개시 후 1~2년 내 예상하는 수익은 어느 정도입니까?",
              answer: answer["4_2"],
              question2:
                question2["4_2_1"] ||
                question2["4_2_2"] ||
                question2["4_2_3"] ||
                question2["4_2_4"]
                  ? true
                  : false,
            },
          ]);
        }
        // 추가질문
        // 1-1
        if (question2["1_1_5"] !== "" && question2["1_1_5"] !== null) {
          setQuestion1_1([
            ...question1_1,
            { question: question2["1_1_1"], key: "1_1_1" },
            { question: question2["1_1_2"], key: "1_1_2" },
            { question: question2["1_1_3"], key: "1_1_3" },
            { question: question2["1_1_4"], key: "1_1_4" },
            { question: question2["1_1_5"], key: "1_1_5" },
          ]);
        } else if (question2["1_1_4"] !== "" && question2["1_1_4"] !== null) {
          setQuestion1_1([
            ...question1_1,
            { question: question2["1_1_1"], key: "1_1_1" },
            { question: question2["1_1_2"], key: "1_1_2" },
            { question: question2["1_1_3"], key: "1_1_3" },
            { question: question2["1_1_4"], key: "1_1_4" },
          ]);
        } else if (question2["1_1_3"] !== "" && question2["1_1_3"] !== null) {
          setQuestion1_1([
            ...question1_1,
            { question: question2["1_1_1"], key: "1_1_1" },
            { question: question2["1_1_2"], key: "1_1_2" },
            { question: question2["1_1_3"], key: "1_1_3" },
          ]);
        } else if (question2["1_1_2"] !== "" && question2["1_1_2"] !== null) {
          setQuestion1_1([
            ...question1_1,
            { question: question2["1_1_1"], key: "1_1_1" },
            { question: question2["1_1_2"], key: "1_1_2" },
          ]);
        } else if (question2["1_1_1"] !== "" && question2["1_1_1"] !== null) {
          setQuestion1_1([
            ...question1_1,
            { question: question2["1_1_1"], key: "1_1_1" },
          ]);
        }
        // 1-2
        if (question2["1_2_5"] !== "" && question2["1_2_5"] !== null) {
          setQuestion1_2([
            ...question1_2,
            { question: question2["1_2_1"], key: "1_2_1" },
            { question: question2["1_2_2"], key: "1_2_2" },
            { question: question2["1_2_3"], key: "1_2_3" },
            { question: question2["1_2_4"], key: "1_2_4" },
            { question: question2["1_2_5"], key: "1_2_5" },
          ]);
        } else if (question2["1_2_4"] !== "" && question2["1_2_4"] !== null) {
          setQuestion1_2([
            ...question1_2,
            { question: question2["1_2_1"], key: "1_2_1" },
            { question: question2["1_2_2"], key: "1_2_2" },
            { question: question2["1_2_3"], key: "1_2_3" },
            { question: question2["1_2_4"], key: "1_2_4" },
          ]);
        } else if (question2["1_2_3"] !== "" && question2["1_2_3"] !== null) {
          setQuestion1_2([
            ...question1_2,
            { question: question2["1_2_1"], key: "1_2_1" },
            { question: question2["1_2_2"], key: "1_2_2" },
            { question: question2["1_2_3"], key: "1_2_3" },
          ]);
        } else if (question2["1_2_2"] !== "" && question2["1_2_2"] !== null) {
          setQuestion1_2([
            ...question1_2,
            { question: question2["1_2_1"], key: "1_2_1" },
            { question: question2["1_2_2"], key: "1_2_2" },
          ]);
        } else if (question2["1_2_1"] !== "" && question2["1_2_1"] !== null) {
          setQuestion1_2([
            ...question1_2,
            { question: question2["1_2_1"], key: "1_2_1" },
          ]);
        }
        // 1-3
        if (question2["1_3_5"] !== "" && question2["1_3_5"] !== null) {
          setQuestion1_3([
            ...question1_3,
            { question: question2["1_3_1"], key: "1_3_1" },
            { question: question2["1_3_2"], key: "1_3_2" },
            { question: question2["1_3_3"], key: "1_3_3" },
            { question: question2["1_3_4"], key: "1_3_4" },
            { question: question2["1_3_5"], key: "1_3_5" },
          ]);
        } else if (question2["1_3_4"] !== "" && question2["1_3_4"] !== null) {
          setQuestion1_3([
            ...question1_3,
            { question: question2["1_3_1"], key: "1_3_1" },
            { question: question2["1_3_2"], key: "1_3_2" },
            { question: question2["1_3_3"], key: "1_3_3" },
            { question: question2["1_3_4"], key: "1_3_4" },
          ]);
        } else if (question2["1_3_3"] !== "" && question2["1_3_3"] !== null) {
          setQuestion1_3([
            ...question1_3,
            { question: question2["1_3_1"], key: "1_3_1" },
            { question: question2["1_3_2"], key: "1_3_2" },
            { question: question2["1_3_3"], key: "1_3_3" },
          ]);
        } else if (question2["1_3_2"] !== "" && question2["1_3_2"] !== null) {
          setQuestion1_3([
            ...question1_3,
            { question: question2["1_3_1"], key: "1_3_1" },
            { question: question2["1_3_2"], key: "1_3_2" },
          ]);
        } else if (question2["1_3_1"] !== "" && question2["1_3_1"] !== null) {
          setQuestion1_3([
            ...question1_3,
            { question: question2["1_3_1"], key: "1_3_1" },
          ]);
        }
        // 1-4
        if (question2["1_4_5"] !== "" && question2["1_4_5"] !== null) {
          setQuestion1_4([
            ...question1_4,
            { question: question2["1_4_1"], key: "1_4_1" },
            { question: question2["1_4_2"], key: "1_4_2" },
            { question: question2["1_4_3"], key: "1_4_3" },
            { question: question2["1_4_4"], key: "1_4_4" },
            { question: question2["1_4_5"], key: "1_4_5" },
          ]);
        } else if (question2["1_4_4"] !== "" && question2["1_4_4"] !== null) {
          setQuestion1_4([
            ...question1_4,
            { question: question2["1_4_1"], key: "1_4_1" },
            { question: question2["1_4_2"], key: "1_4_2" },
            { question: question2["1_4_3"], key: "1_4_3" },
            { question: question2["1_4_4"], key: "1_4_4" },
          ]);
        } else if (question2["1_4_3"] !== "" && question2["1_4_3"] !== null) {
          setQuestion1_4([
            ...question1_4,
            { question: question2["1_4_1"], key: "1_4_1" },
            { question: question2["1_4_2"], key: "1_4_2" },
            { question: question2["1_4_3"], key: "1_4_3" },
          ]);
        } else if (question2["1_4_2"] !== "" && question2["1_4_2"] !== null) {
          setQuestion1_4([
            ...question1_4,
            { question: question2["1_4_1"], key: "1_4_1" },
            { question: question2["1_4_2"], key: "1_4_2" },
          ]);
        } else if (question2["1_4_1"] !== "" && question2["1_4_1"] !== null) {
          setQuestion1_4([
            ...question1_4,
            { question: question2["1_4_1"], key: "1_4_1" },
          ]);
        }
        // 2-1
        if (question2["2_1_5"] !== "" && question2["2_1_5"] !== null) {
          setQuestion2_1([
            ...question2_1,
            { question: question2["2_1_1"], key: "2_1_1" },
            { question: question2["2_1_2"], key: "2_1_2" },
            { question: question2["2_1_3"], key: "2_1_3" },
            { question: question2["2_1_4"], key: "2_1_4" },
            { question: question2["2_1_5"], key: "2_1_5" },
          ]);
        } else if (question2["2_1_4"] !== "" && question2["2_1_4"] !== null) {
          setQuestion2_1([
            ...question2_1,
            { question: question2["2_1_1"], key: "2_1_1" },
            { question: question2["2_1_2"], key: "2_1_2" },
            { question: question2["2_1_3"], key: "2_1_3" },
            { question: question2["2_1_4"], key: "2_1_4" },
          ]);
        } else if (question2["2_1_3"] !== "" && question2["2_1_3"] !== null) {
          setQuestion2_1([
            ...question2_1,
            { question: question2["2_1_1"], key: "2_1_1" },
            { question: question2["2_1_2"], key: "2_1_2" },
            { question: question2["2_1_3"], key: "2_1_3" },
          ]);
        } else if (question2["2_1_2"] !== "" && question2["2_1_2"] !== null) {
          setQuestion2_1([
            ...question2_1,
            { question: question2["2_1_1"], key: "2_1_1" },
            { question: question2["2_1_2"], key: "2_1_2" },
          ]);
        } else if (question2["2_1_1"] !== "" && question2["2_1_1"] !== null) {
          setQuestion2_1([
            ...question2_1,
            { question: question2["2_1_1"], key: "2_1_1" },
          ]);
        }
        // 2-2
        if (question2["2_2_5"] !== "" && question2["2_2_5"] !== null) {
          setQuestion2_2([
            ...question2_2,
            { question: question2["2_2_1"], key: "2_2_1" },
            { question: question2["2_2_2"], key: "2_2_2" },
            { question: question2["2_2_3"], key: "2_2_3" },
            { question: question2["2_2_4"], key: "2_2_4" },
            { question: question2["2_2_5"], key: "2_2_5" },
          ]);
        } else if (question2["2_2_4"] !== "" && question2["2_2_4"] !== null) {
          setQuestion2_2([
            ...question2_2,
            { question: question2["2_2_1"], key: "2_2_1" },
            { question: question2["2_2_2"], key: "2_2_2" },
            { question: question2["2_2_3"], key: "2_2_3" },
            { question: question2["2_2_4"], key: "2_2_4" },
          ]);
        } else if (question2["2_2_3"] !== "" && question2["2_2_3"] !== null) {
          setQuestion2_2([
            ...question2_2,
            { question: question2["2_2_1"], key: "2_2_1" },
            { question: question2["2_2_2"], key: "2_2_2" },
            { question: question2["2_2_3"], key: "2_2_3" },
          ]);
        } else if (question2["2_2_2"] !== "" && question2["2_2_2"] !== null) {
          setQuestion2_2([
            ...question2_2,
            { question: question2["2_2_1"], key: "2_2_1" },
            { question: question2["2_2_2"], key: "2_2_2" },
          ]);
        } else if (question2["2_2_1"] !== "" && question2["2_2_1"] !== null) {
          setQuestion2_2([
            ...question2_2,
            { question: question2["2_2_1"], key: "2_2_1" },
          ]);
        }
        // 2-3
        if (question2["2_3_5"] !== "" && question2["2_3_5"] !== null) {
          setQuestion2_3([
            ...question2_3,
            { question: question2["2_3_1"], key: "2_3_1" },
            { question: question2["2_3_2"], key: "2_3_2" },
            { question: question2["2_3_3"], key: "2_3_3" },
            { question: question2["2_3_4"], key: "2_3_4" },
            { question: question2["2_3_5"], key: "2_3_5" },
          ]);
        } else if (question2["2_3_4"] !== "" && question2["2_3_4"] !== null) {
          setQuestion2_3([
            ...question2_3,
            { question: question2["2_3_1"], key: "2_3_1" },
            { question: question2["2_3_2"], key: "2_3_2" },
            { question: question2["2_3_3"], key: "2_3_3" },
            { question: question2["2_3_4"], key: "2_3_4" },
          ]);
        } else if (question2["2_3_3"] !== "" && question2["2_3_3"] !== null) {
          setQuestion2_3([
            ...question2_3,
            { question: question2["2_3_1"], key: "2_3_1" },
            { question: question2["2_3_2"], key: "2_3_2" },
            { question: question2["2_3_3"], key: "2_3_3" },
          ]);
        } else if (question2["2_3_2"] !== "" && question2["2_3_2"] !== null) {
          setQuestion2_3([
            ...question2_3,
            { question: question2["2_3_1"], key: "2_3_1" },
            { question: question2["2_3_2"], key: "2_3_2" },
          ]);
        } else if (question2["2_3_1"] !== "" && question2["2_3_1"] !== null) {
          setQuestion2_3([
            ...question2_3,
            { question: question2["2_3_1"], key: "2_3_1" },
          ]);
        }
        // 2-4
        if (question2["2_4_5"] !== "" && question2["2_4_5"] !== null) {
          setQuestion2_4([
            ...question2_4,
            { question: question2["2_4_1"], key: "2_4_1" },
            { question: question2["2_4_2"], key: "2_4_2" },
            { question: question2["2_4_3"], key: "2_4_3" },
            { question: question2["2_4_4"], key: "2_4_4" },
            { question: question2["2_4_5"], key: "2_4_5" },
          ]);
        } else if (question2["2_4_4"] !== "" && question2["2_4_4"] !== null) {
          setQuestion2_4([
            ...question2_4,
            { question: question2["2_4_1"], key: "2_4_1" },
            { question: question2["2_4_2"], key: "2_4_2" },
            { question: question2["2_4_3"], key: "2_4_3" },
            { question: question2["2_4_4"], key: "2_4_4" },
          ]);
        } else if (question2["2_4_3"] !== "" && question2["2_4_3"] !== null) {
          setQuestion2_4([
            ...question2_4,
            { question: question2["2_4_1"], key: "2_4_1" },
            { question: question2["2_4_2"], key: "2_4_2" },
            { question: question2["2_4_3"], key: "2_4_3" },
          ]);
        } else if (question2["2_4_2"] !== "" && question2["2_4_2"] !== null) {
          setQuestion2_4([
            ...question2_4,
            { question: question2["2_4_1"], key: "2_4_1" },
            { question: question2["2_4_2"], key: "2_4_2" },
          ]);
        } else if (question2["2_4_1"] !== "" && question2["2_4_1"] !== null) {
          setQuestion2_4([
            ...question2_4,
            { question: question2["2_4_1"], key: "2_4_1" },
          ]);
        }
        // 2-5
        if (question2["2_5_5"] !== "" && question2["2_5_5"] !== null) {
          setQuestion2_5([
            ...question2_5,
            { question: question2["2_5_1"], key: "2_5_1" },
            { question: question2["2_5_2"], key: "2_5_2" },
            { question: question2["2_5_3"], key: "2_5_3" },
            { question: question2["2_5_4"], key: "2_5_4" },
            { question: question2["2_5_5"], key: "2_5_5" },
          ]);
        } else if (question2["2_5_4"] !== "" && question2["2_5_4"] !== null) {
          setQuestion2_5([
            ...question2_5,
            { question: question2["2_5_1"], key: "2_5_1" },
            { question: question2["2_5_2"], key: "2_5_2" },
            { question: question2["2_5_3"], key: "2_5_3" },
            { question: question2["2_5_4"], key: "2_5_4" },
          ]);
        } else if (question2["2_5_3"] !== "" && question2["2_5_3"] !== null) {
          setQuestion2_5([
            ...question2_5,
            { question: question2["2_5_1"], key: "2_5_1" },
            { question: question2["2_5_2"], key: "2_5_2" },
            { question: question2["2_5_3"], key: "2_5_3" },
          ]);
        } else if (question2["2_5_2"] !== "" && question2["2_5_2"] !== null) {
          setQuestion2_5([
            ...question2_5,
            { question: question2["2_5_1"], key: "2_5_1" },
            { question: question2["2_5_2"], key: "2_5_2" },
          ]);
        } else if (question2["2_5_1"] !== "" && question2["2_5_1"] !== null) {
          setQuestion2_5([
            ...question2_5,
            { question: question2["2_5_1"], key: "2_5_1" },
          ]);
        }
        // 2-6
        if (question2["2_6_5"] !== "" && question2["2_6_5"] !== null) {
          setQuestion2_6([
            ...question2_6,
            { question: question2["2_6_1"], key: "2_6_1" },
            { question: question2["2_6_2"], key: "2_6_2" },
            { question: question2["2_6_3"], key: "2_6_3" },
            { question: question2["2_6_4"], key: "2_6_4" },
            { question: question2["2_6_5"], key: "2_6_5" },
          ]);
        } else if (question2["2_6_4"] !== "" && question2["2_6_4"] !== null) {
          setQuestion2_6([
            ...question2_6,
            { question: question2["2_6_1"], key: "2_6_1" },
            { question: question2["2_6_2"], key: "2_6_2" },
            { question: question2["2_6_3"], key: "2_6_3" },
            { question: question2["2_6_4"], key: "2_6_4" },
          ]);
        } else if (question2["2_6_3"] !== "" && question2["2_6_3"] !== null) {
          setQuestion2_6([
            ...question2_6,
            { question: question2["2_6_1"], key: "2_6_1" },
            { question: question2["2_6_2"], key: "2_6_2" },
            { question: question2["2_6_3"], key: "2_6_3" },
          ]);
        } else if (question2["2_6_2"] !== "" && question2["2_6_2"] !== null) {
          setQuestion2_6([
            ...question2_6,
            { question: question2["2_6_1"], key: "2_6_1" },
            { question: question2["2_6_2"], key: "2_6_2" },
          ]);
        } else if (question2["2_6_1"] !== "" && question2["2_6_1"] !== null) {
          setQuestion2_6([
            ...question2_6,
            { question: question2["2_6_1"], key: "2_6_1" },
          ]);
        }
        // 2-7
        if (question2["2_7_5"] !== "" && question2["2_7_5"] !== null) {
          setQuestion2_7([
            ...question2_7,
            { question: question2["2_7_1"], key: "2_7_1" },
            { question: question2["2_7_2"], key: "2_7_2" },
            { question: question2["2_7_3"], key: "2_7_3" },
            { question: question2["2_7_4"], key: "2_7_4" },
            { question: question2["2_7_5"], key: "2_7_5" },
          ]);
        } else if (question2["2_7_4"] !== "" && question2["2_7_4"] !== null) {
          setQuestion2_7([
            ...question2_7,
            { question: question2["2_7_1"], key: "2_7_1" },
            { question: question2["2_7_2"], key: "2_7_2" },
            { question: question2["2_7_3"], key: "2_7_3" },
            { question: question2["2_7_4"], key: "2_7_4" },
          ]);
        } else if (question2["2_7_3"] !== "" && question2["2_7_3"] !== null) {
          setQuestion2_7([
            ...question2_7,
            { question: question2["2_7_1"], key: "2_7_1" },
            { question: question2["2_7_2"], key: "2_7_2" },
            { question: question2["2_7_3"], key: "2_7_3" },
          ]);
        } else if (question2["2_7_2"] !== "" && question2["2_7_2"] !== null) {
          setQuestion2_7([
            ...question2_7,
            { question: question2["2_7_1"], key: "2_7_1" },
            { question: question2["2_7_2"], key: "2_7_2" },
          ]);
        } else if (question2["2_7_1"] !== "" && question2["2_7_1"] !== null) {
          setQuestion2_7([
            ...question2_7,
            { question: question2["2_7_1"], key: "2_7_1" },
          ]);
        }
        // 2-8
        if (question2["2_8_5"] !== "" && question2["2_8_5"] !== null) {
          setQuestion2_8([
            ...question2_8,
            { question: question2["2_8_1"], key: "2_8_1" },
            { question: question2["2_8_2"], key: "2_8_2" },
            { question: question2["2_8_3"], key: "2_8_3" },
            { question: question2["2_8_4"], key: "2_8_4" },
            { question: question2["2_8_5"], key: "2_8_5" },
          ]);
        } else if (question2["2_8_4"] !== "" && question2["2_8_4"] !== null) {
          setQuestion2_8([
            ...question2_8,
            { question: question2["2_8_1"], key: "2_8_1" },
            { question: question2["2_8_2"], key: "2_8_2" },
            { question: question2["2_8_3"], key: "2_8_3" },
            { question: question2["2_8_4"], key: "2_8_4" },
          ]);
        } else if (question2["2_8_3"] !== "" && question2["2_8_3"] !== null) {
          setQuestion2_8([
            ...question2_8,
            { question: question2["2_8_1"], key: "2_8_1" },
            { question: question2["2_8_2"], key: "2_8_2" },
            { question: question2["2_8_3"], key: "2_8_3" },
          ]);
        } else if (question2["2_8_2"] !== "" && question2["2_8_2"] !== null) {
          setQuestion2_8([
            ...question2_8,
            { question: question2["2_8_1"], key: "2_8_1" },
            { question: question2["2_8_2"], key: "2_8_2" },
          ]);
        } else if (question2["2_8_1"] !== "" && question2["2_8_1"] !== null) {
          setQuestion2_8([
            ...question2_8,
            { question: question2["2_8_1"], key: "2_8_1" },
          ]);
        }
        // 3-1
        if (question2["3_1_5"] !== "" && question2["3_1_5"] !== null) {
          setQuestion3_1([
            ...question3_1,
            { question: question2["3_1_1"], key: "3_1_1" },
            { question: question2["3_1_2"], key: "3_1_2" },
            { question: question2["3_1_3"], key: "3_1_3" },
            { question: question2["3_1_4"], key: "3_1_4" },
            { question: question2["3_1_5"], key: "3_1_5" },
          ]);
        } else if (question2["3_1_4"] !== "" && question2["3_1_4"] !== null) {
          setQuestion3_1([
            ...question3_1,
            { question: question2["3_1_1"], key: "3_1_1" },
            { question: question2["3_1_2"], key: "3_1_2" },
            { question: question2["3_1_3"], key: "3_1_3" },
            { question: question2["3_1_4"], key: "3_1_4" },
          ]);
        } else if (question2["3_1_3"] !== "" && question2["3_1_3"] !== null) {
          setQuestion3_1([
            ...question3_1,
            { question: question2["3_1_1"], key: "3_1_1" },
            { question: question2["3_1_2"], key: "3_1_2" },
            { question: question2["3_1_3"], key: "3_1_3" },
          ]);
        } else if (question2["3_1_2"] !== "" && question2["3_1_2"] !== null) {
          setQuestion3_1([
            ...question3_1,
            { question: question2["3_1_1"], key: "3_1_1" },
            { question: question2["3_1_2"], key: "3_1_2" },
          ]);
        } else if (question2["3_1_1"] !== "" && question2["3_1_1"] !== null) {
          setQuestion3_1([
            ...question3_1,
            { question: question2["3_1_1"], key: "3_1_1" },
          ]);
        }
        // 3-2
        if (question2["3_2_5"] !== "" && question2["3_2_5"] !== null) {
          setQuestion3_2([
            ...question3_2,
            { question: question2["3_2_1"], key: "3_2_1" },
            { question: question2["3_2_2"], key: "3_2_2" },
            { question: question2["3_2_3"], key: "3_2_3" },
            { question: question2["3_2_4"], key: "3_2_4" },
            { question: question2["3_2_5"], key: "3_2_5" },
          ]);
        } else if (question2["3_2_4"] !== "" && question2["3_2_4"] !== null) {
          setQuestion3_2([
            ...question3_2,
            { question: question2["3_2_1"], key: "3_2_1" },
            { question: question2["3_2_2"], key: "3_2_2" },
            { question: question2["3_2_3"], key: "3_2_3" },
            { question: question2["3_2_4"], key: "3_2_4" },
          ]);
        } else if (question2["3_2_3"] !== "" && question2["3_2_3"] !== null) {
          setQuestion3_2([
            ...question3_2,
            { question: question2["3_2_1"], key: "3_2_1" },
            { question: question2["3_2_2"], key: "3_2_2" },
            { question: question2["3_2_3"], key: "3_2_3" },
          ]);
        } else if (question2["3_2_2"] !== "" && question2["3_2_2"] !== null) {
          setQuestion3_2([
            ...question3_2,
            { question: question2["3_2_1"], key: "3_2_1" },
            { question: question2["3_2_2"], key: "3_2_2" },
          ]);
        } else if (question2["3_2_1"] !== "" && question2["3_2_1"] !== null) {
          setQuestion3_2([
            ...question3_2,
            { question: question2["3_2_1"], key: "3_2_1" },
          ]);
        }
        // 3-3
        if (question2["3_3_5"] !== "" && question2["3_3_5"] !== null) {
          setQuestion3_3([
            ...question3_3,
            { question: question2["3_3_1"], key: "3_3_1" },
            { question: question2["3_3_2"], key: "3_3_2" },
            { question: question2["3_3_3"], key: "3_3_3" },
            { question: question2["3_3_4"], key: "3_3_4" },
            { question: question2["3_3_5"], key: "3_3_5" },
          ]);
        } else if (question2["3_3_4"] !== "" && question2["3_3_4"] !== null) {
          setQuestion3_3([
            ...question3_3,
            { question: question2["3_3_1"], key: "3_3_1" },
            { question: question2["3_3_2"], key: "3_3_2" },
            { question: question2["3_3_3"], key: "3_3_3" },
            { question: question2["3_3_4"], key: "3_3_4" },
          ]);
        } else if (question2["3_3_3"] !== "" && question2["3_3_3"] !== null) {
          setQuestion3_3([
            ...question3_3,
            { question: question2["3_3_1"], key: "3_3_1" },
            { question: question2["3_3_2"], key: "3_3_2" },
            { question: question2["3_3_3"], key: "3_3_3" },
          ]);
        } else if (question2["3_3_2"] !== "" && question2["3_3_2"] !== null) {
          setQuestion3_3([
            ...question3_3,
            { question: question2["3_3_1"], key: "3_3_1" },
            { question: question2["3_3_2"], key: "3_3_2" },
          ]);
        } else if (question2["3_3_1"] !== "" && question2["3_3_1"] !== null) {
          setQuestion3_3([
            ...question3_3,
            { question: question2["3_3_1"], key: "3_3_1" },
          ]);
        }
        // 3-4
        if (question2["3_4_5"] !== "" && question2["3_4_5"] !== null) {
          setQuestion3_4([
            ...question3_4,
            { question: question2["3_4_1"], key: "3_4_1" },
            { question: question2["3_4_2"], key: "3_4_2" },
            { question: question2["3_4_3"], key: "3_4_3" },
            { question: question2["3_4_4"], key: "3_4_4" },
            { question: question2["3_4_5"], key: "3_4_5" },
          ]);
        } else if (question2["3_4_4"] !== "" && question2["3_4_4"] !== null) {
          setQuestion3_4([
            ...question3_4,
            { question: question2["3_4_1"], key: "3_4_1" },
            { question: question2["3_4_2"], key: "3_4_2" },
            { question: question2["3_4_3"], key: "3_4_3" },
            { question: question2["3_4_4"], key: "3_4_4" },
          ]);
        } else if (question2["3_4_3"] !== "" && question2["3_4_3"] !== null) {
          setQuestion3_4([
            ...question3_4,
            { question: question2["3_4_1"], key: "3_4_1" },
            { question: question2["3_4_2"], key: "3_4_2" },
            { question: question2["3_4_3"], key: "3_4_3" },
          ]);
        } else if (question2["3_4_2"] !== "" && question2["3_4_2"] !== null) {
          setQuestion3_4([
            ...question3_4,
            { question: question2["3_4_1"], key: "3_4_1" },
            { question: question2["3_4_2"], key: "3_4_2" },
          ]);
        } else if (question2["3_4_1"] !== "" && question2["3_4_1"] !== null) {
          setQuestion3_4([
            ...question3_4,
            { question: question2["3_4_1"], key: "3_4_1" },
          ]);
        }

        // 4-1
        if (question2["4_1_5"] !== "" && question2["4_1_5"] !== null) {
          setQuestion4_1([
            ...question4_1,
            { question: question2["4_1_1"], key: "4_1_1" },
            { question: question2["4_1_2"], key: "4_1_2" },
            { question: question2["4_1_3"], key: "4_1_3" },
            { question: question2["4_1_4"], key: "4_1_4" },
            { question: question2["4_1_5"], key: "4_1_5" },
          ]);
        } else if (question2["4_1_4"] !== "" && question2["4_1_4"] !== null) {
          setQuestion4_1([
            ...question4_1,
            { question: question2["4_1_1"], key: "4_1_1" },
            { question: question2["4_1_2"], key: "4_1_2" },
            { question: question2["4_1_3"], key: "4_1_3" },
            { question: question2["4_1_4"], key: "4_1_4" },
          ]);
        } else if (question2["4_1_3"] !== "" && question2["4_1_3"] !== null) {
          setQuestion4_1([
            ...question4_1,
            { question: question2["4_1_1"], key: "4_1_1" },
            { question: question2["4_1_2"], key: "4_1_2" },
            { question: question2["4_1_3"], key: "4_1_3" },
          ]);
        } else if (question2["4_1_2"] !== "" && question2["4_1_2"] !== null) {
          setQuestion4_1([
            ...question4_1,
            { question: question2["4_1_1"], key: "4_1_1" },
            { question: question2["4_1_2"], key: "4_1_2" },
          ]);
        } else if (question2["4_1_1"] !== "" && question2["4_1_1"] !== null) {
          setQuestion4_1([
            ...question4_1,
            { question: question2["4_1_1"], key: "4_1_1" },
          ]);
        }
        // 4-2
        if (question2["4_2_5"] !== "" && question2["4_2_5"] !== null) {
          setQuestion4_2([
            ...question4_2,
            { question: question2["4_2_1"], key: "4_2_1" },
            { question: question2["4_2_2"], key: "4_2_2" },
            { question: question2["4_2_3"], key: "4_2_3" },
            { question: question2["4_2_4"], key: "4_2_4" },
            { question: question2["4_2_5"], key: "4_2_5" },
          ]);
        } else if (question2["4_2_4"] !== "" && question2["4_2_4"] !== null) {
          setQuestion4_2([
            ...question4_2,
            { question: question2["4_2_1"], key: "4_2_1" },
            { question: question2["4_2_2"], key: "4_2_2" },
            { question: question2["4_2_3"], key: "4_2_3" },
            { question: question2["4_2_4"], key: "4_2_4" },
          ]);
        } else if (question2["4_2_3"] !== "" && question2["4_2_3"] !== null) {
          setQuestion4_2([
            ...question4_2,
            { question: question2["4_2_1"], key: "4_2_1" },
            { question: question2["4_2_2"], key: "4_2_2" },
            { question: question2["4_2_3"], key: "4_2_3" },
          ]);
        } else if (question2["4_2_2"] !== "" && question2["4_2_2"] !== null) {
          setQuestion4_2([
            ...question4_2,
            { question: question2["4_2_1"], key: "4_2_1" },
            { question: question2["4_2_2"], key: "4_2_2" },
          ]);
        } else if (question2["4_2_1"] !== "" && question2["4_2_1"] !== null) {
          setQuestion4_2([
            ...question4_2,
            { question: question2["4_2_1"], key: "4_2_1" },
          ]);
        }

        Axios.get("http://34.68.101.191:8000/get/Focus_qna_2_client", {
          params: { business_name: clientData.BUSINESS_NAME },
        }).then((response) => {
          let answer2 = response.data[0];

          setAnswerList2({
            ...answerList2,
            // 1
            answer1_1_1: question2["1_1_1"]
              ? answer2["1_1_1"]
                ? answer2["1_1_1"]
                : ""
              : " ",
            answer1_1_2: question2["1_1_2"]
              ? answer2["1_1_2"]
                ? answer2["1_1_2"]
                : ""
              : " ",
            answer1_1_3: question2["1_1_3"]
              ? answer2["1_1_3"]
                ? answer2["1_1_3"]
                : ""
              : " ",
            answer1_1_4: question2["1_1_4"]
              ? answer2["1_1_4"]
                ? answer2["1_1_4"]
                : ""
              : " ",
            answer1_1_5: question2["1_1_5"]
              ? answer2["1_1_5"]
                ? answer2["1_1_5"]
                : ""
              : " ",

            answer1_2_1: question2["1_2_1"]
              ? answer2["1_2_1"]
                ? answer2["1_2_1"]
                : ""
              : " ",
            answer1_2_2: question2["1_2_2"]
              ? answer2["1_2_2"]
                ? answer2["1_2_2"]
                : ""
              : " ",
            answer1_2_3: question2["1_2_3"]
              ? answer2["1_2_3"]
                ? answer2["1_2_3"]
                : ""
              : " ",
            answer1_2_4: question2["1_2_4"]
              ? answer2["1_2_4"]
                ? answer2["1_2_4"]
                : ""
              : " ",
            answer1_2_5: question2["1_2_5"]
              ? answer2["1_2_5"]
                ? answer2["1_2_5"]
                : ""
              : " ",

            answer1_3_1: question2["1_3_1"]
              ? answer2["1_3_1"]
                ? answer2["1_3_1"]
                : ""
              : " ",
            answer1_3_2: question2["1_3_2"]
              ? answer2["1_3_2"]
                ? answer2["1_3_2"]
                : ""
              : " ",
            answer1_3_3: question2["1_3_3"]
              ? answer2["1_3_3"]
                ? answer2["1_3_3"]
                : ""
              : " ",
            answer1_3_4: question2["1_3_4"]
              ? answer2["1_3_4"]
                ? answer2["1_3_4"]
                : ""
              : " ",
            answer1_3_5: question2["1_3_5"]
              ? answer2["1_3_5"]
                ? answer2["1_3_5"]
                : ""
              : " ",

            answer1_4_1: question2["1_4_1"]
              ? answer2["1_4_1"]
                ? answer2["1_4_1"]
                : ""
              : " ",
            answer1_4_2: question2["1_4_2"]
              ? answer2["1_4_2"]
                ? answer2["1_4_2"]
                : ""
              : " ",
            answer1_4_3: question2["1_4_3"]
              ? answer2["1_4_3"]
                ? answer2["1_4_3"]
                : ""
              : " ",
            answer1_4_4: question2["1_4_4"]
              ? answer2["1_4_4"]
                ? answer2["1_4_4"]
                : ""
              : " ",
            answer1_4_5: question2["1_4_5"]
              ? answer2["1_4_5"]
                ? answer2["1_4_5"]
                : ""
              : " ",

            // 2
            answer2_1_1: question2["2_1_1"]
              ? answer2["2_1_1"]
                ? answer2["2_1_1"]
                : ""
              : " ",
            answer2_1_2: question2["2_1_2"]
              ? answer2["2_1_2"]
                ? answer2["2_1_2"]
                : ""
              : " ",
            answer2_1_3: question2["2_1_3"]
              ? answer2["2_1_3"]
                ? answer2["2_1_3"]
                : ""
              : " ",
            answer2_1_4: question2["2_1_4"]
              ? answer2["2_1_4"]
                ? answer2["2_1_4"]
                : ""
              : " ",
            answer2_1_5: question2["2_1_5"]
              ? answer2["2_1_5"]
                ? answer2["2_1_5"]
                : ""
              : " ",
            answer2_2_1: question2["2_2_1"]
              ? answer2["2_2_1"]
                ? answer2["2_2_1"]
                : ""
              : " ",
            answer2_2_2: question2["2_2_2"]
              ? answer2["2_2_2"]
                ? answer2["2_2_2"]
                : ""
              : " ",
            answer2_2_3: question2["2_2_3"]
              ? answer2["2_2_3"]
                ? answer2["2_2_3"]
                : ""
              : " ",
            answer2_2_4: question2["2_2_4"]
              ? answer2["2_2_4"]
                ? answer2["2_2_4"]
                : ""
              : " ",
            answer2_2_5: question2["2_2_5"]
              ? answer2["2_2_5"]
                ? answer2["2_2_5"]
                : ""
              : " ",
            answer2_3_1: question2["2_3_1"]
              ? answer2["2_3_1"]
                ? answer2["2_3_1"]
                : ""
              : " ",
            answer2_3_2: question2["2_3_2"]
              ? answer2["2_3_2"]
                ? answer2["2_3_2"]
                : ""
              : " ",
            answer2_3_3: question2["2_3_3"]
              ? answer2["2_3_3"]
                ? answer2["2_3_3"]
                : ""
              : " ",
            answer2_3_4: question2["2_3_4"]
              ? answer2["2_3_4"]
                ? answer2["2_3_4"]
                : ""
              : " ",
            answer2_3_5: question2["2_3_5"]
              ? answer2["2_3_5"]
                ? answer2["2_3_5"]
                : ""
              : " ",
            answer2_4_1: question2["2_4_1"]
              ? answer2["2_4_1"]
                ? answer2["2_4_1"]
                : ""
              : " ",
            answer2_4_2: question2["2_4_2"]
              ? answer2["2_4_2"]
                ? answer2["2_4_2"]
                : ""
              : " ",
            answer2_4_3: question2["2_4_3"]
              ? answer2["2_4_3"]
                ? answer2["2_4_3"]
                : ""
              : " ",
            answer2_4_4: question2["2_4_4"]
              ? answer2["2_4_4"]
                ? answer2["2_4_4"]
                : ""
              : " ",
            answer2_4_5: question2["2_4_5"]
              ? answer2["2_4_5"]
                ? answer2["2_4_5"]
                : ""
              : " ",

            answer2_5_1: question2["2_5_1"]
              ? answer2["2_5_1"]
                ? answer2["2_5_1"]
                : ""
              : " ",
            answer2_5_2: question2["2_5_2"]
              ? answer2["2_5_2"]
                ? answer2["2_5_2"]
                : ""
              : " ",
            answer2_5_3: question2["2_5_3"]
              ? answer2["2_5_3"]
                ? answer2["2_5_3"]
                : ""
              : " ",
            answer2_5_4: question2["2_5_4"]
              ? answer2["2_5_4"]
                ? answer2["2_5_4"]
                : ""
              : " ",
            answer2_5_5: question2["2_5_5"]
              ? answer2["2_5_5"]
                ? answer2["2_5_5"]
                : ""
              : " ",

            answer2_6_1: question2["2_6_1"]
              ? answer2["2_6_1"]
                ? answer2["2_6_1"]
                : ""
              : " ",
            answer2_6_2: question2["2_6_2"]
              ? answer2["2_6_2"]
                ? answer2["2_6_2"]
                : ""
              : " ",
            answer2_6_3: question2["2_6_3"]
              ? answer2["2_6_3"]
                ? answer2["2_6_3"]
                : ""
              : " ",
            answer2_6_4: question2["2_6_4"]
              ? answer2["2_6_4"]
                ? answer2["2_6_4"]
                : ""
              : " ",
            answer2_6_5: question2["2_6_5"]
              ? answer2["2_6_5"]
                ? answer2["2_6_5"]
                : ""
              : " ",

            answer2_7_1: question2["2_7_1"]
              ? answer2["2_7_1"]
                ? answer2["2_7_1"]
                : ""
              : " ",
            answer2_7_2: question2["2_7_2"]
              ? answer2["2_7_2"]
                ? answer2["2_7_2"]
                : ""
              : " ",
            answer2_7_3: question2["2_7_3"]
              ? answer2["2_7_3"]
                ? answer2["2_7_3"]
                : ""
              : " ",
            answer2_7_4: question2["2_7_4"]
              ? answer2["2_7_4"]
                ? answer2["2_7_4"]
                : ""
              : " ",
            answer2_7_5: question2["2_7_5"]
              ? answer2["2_7_5"]
                ? answer2["2_7_5"]
                : ""
              : " ",

            answer2_8_1: question2["2_8_1"]
              ? answer2["2_8_1"]
                ? answer2["2_8_1"]
                : ""
              : " ",
            answer2_8_2: question2["2_8_2"]
              ? answer2["2_8_2"]
                ? answer2["2_8_2"]
                : ""
              : " ",
            answer2_8_3: question2["2_8_3"]
              ? answer2["2_8_3"]
                ? answer2["2_8_3"]
                : ""
              : " ",
            answer2_8_4: question2["2_8_4"]
              ? answer2["2_8_4"]
                ? answer2["2_8_4"]
                : ""
              : " ",
            answer2_8_5: question2["2_8_5"]
              ? answer2["2_8_5"]
                ? answer2["2_8_5"]
                : ""
              : " ",
            // 3
            answer3_1_1: question2["3_1_1"]
              ? answer2["3_1_1"]
                ? answer2["3_1_1"]
                : ""
              : " ",
            answer3_1_2: question2["3_1_2"]
              ? answer2["3_1_2"]
                ? answer2["3_1_2"]
                : ""
              : " ",
            answer3_1_3: question2["3_1_3"]
              ? answer2["3_1_3"]
                ? answer2["3_1_3"]
                : ""
              : " ",
            answer3_1_4: question2["3_1_4"]
              ? answer2["3_1_4"]
                ? answer2["3_1_4"]
                : ""
              : " ",
            answer3_1_5: question2["3_1_5"]
              ? answer2["3_1_5"]
                ? answer2["3_1_5"]
                : ""
              : " ",
            answer3_2_1: question2["3_2_1"]
              ? answer2["3_2_1"]
                ? answer2["3_2_1"]
                : ""
              : " ",
            answer3_2_2: question2["3_2_2"]
              ? answer2["3_2_2"]
                ? answer2["3_2_2"]
                : ""
              : " ",
            answer3_2_3: question2["3_2_3"]
              ? answer2["3_2_3"]
                ? answer2["3_2_3"]
                : ""
              : " ",
            answer3_2_4: question2["3_2_4"]
              ? answer2["3_2_4"]
                ? answer2["3_2_4"]
                : ""
              : " ",
            answer3_2_5: question2["3_2_5"]
              ? answer2["3_2_5"]
                ? answer2["3_2_5"]
                : ""
              : " ",
            answer3_3_1: question2["3_3_1"]
              ? answer2["3_3_1"]
                ? answer2["3_3_1"]
                : ""
              : " ",
            answer3_3_2: question2["3_3_2"]
              ? answer2["3_3_2"]
                ? answer2["3_3_2"]
                : ""
              : " ",
            answer3_3_3: question2["3_3_3"]
              ? answer2["3_3_3"]
                ? answer2["3_3_3"]
                : ""
              : " ",
            answer3_3_4: question2["3_3_4"]
              ? answer2["3_3_4"]
                ? answer2["3_3_4"]
                : ""
              : " ",
            answer3_3_5: question2["3_3_5"]
              ? answer2["3_3_5"]
                ? answer2["3_3_5"]
                : ""
              : " ",
            answer3_4_1: question2["3_4_1"]
              ? answer2["3_4_1"]
                ? answer2["3_4_1"]
                : ""
              : " ",
            answer3_4_2: question2["3_4_2"]
              ? answer2["3_4_2"]
                ? answer2["3_4_2"]
                : ""
              : " ",
            answer3_4_3: question2["3_4_3"]
              ? answer2["3_4_3"]
                ? answer2["3_4_3"]
                : ""
              : " ",
            answer3_4_4: question2["3_4_4"]
              ? answer2["3_4_4"]
                ? answer2["3_4_4"]
                : ""
              : " ",
            answer3_4_5: question2["3_4_5"]
              ? answer2["3_4_5"]
                ? answer2["3_4_5"]
                : ""
              : " ",
            // 4
            answer4_1_1: question2["4_1_1"]
              ? answer2["4_1_1"]
                ? answer2["4_1_1"]
                : ""
              : " ",
            answer4_1_2: question2["4_1_2"]
              ? answer2["4_1_2"]
                ? answer2["4_1_2"]
                : ""
              : " ",
            answer4_1_3: question2["4_1_3"]
              ? answer2["4_1_3"]
                ? answer2["4_1_3"]
                : ""
              : " ",
            answer4_1_4: question2["4_1_4"]
              ? answer2["4_1_4"]
                ? answer2["4_1_4"]
                : ""
              : " ",
            answer4_1_5: question2["4_1_5"]
              ? answer2["4_1_5"]
                ? answer2["4_1_5"]
                : ""
              : " ",
            answer4_2_1: question2["4_2_1"]
              ? answer2["4_2_1"]
                ? answer2["4_2_1"]
                : ""
              : " ",
            answer4_2_2: question2["4_2_2"]
              ? answer2["4_2_2"]
                ? answer2["4_2_2"]
                : ""
              : " ",
            answer4_2_3: question2["4_2_3"]
              ? answer2["4_2_3"]
                ? answer2["4_2_3"]
                : ""
              : " ",
            answer4_2_4: question2["4_2_4"]
              ? answer2["4_2_4"]
                ? answer2["4_2_4"]
                : ""
              : " ",
            answer4_2_5: question2["4_2_5"]
              ? answer2["4_2_5"]
                ? answer2["4_2_5"]
                : ""
              : " ",
          });
        });
      });
    });
  }, []);

  const questionInputs = () => {
    let arr = [];
    let key = 0;
    for (let i = 1; i <= 4; i++) {
      arr.push(
        <input
          key={(key = key + 1)}
          className="Scan_detail_qna_client_kategorie_checkbox"
          id={`kategorie${i}`}
          type="checkbox"
        />
      );
      for (let k = 1; k <= 8; k++) {
        arr.push(
          <input
            key={(key = key + 1)}
            className="Scan_detail_qna_client_kategorie_checkbox"
            id={`answer${i}_${k}`}
            type="checkbox"
            defaultChecked
          />
        );
        for (let j = 1; j <= 5; j++) {
          arr.push(
            <input
              key={(key = key + 1)}
              className="Scan_detail_qna_client_kategorie_checkbox"
              id={`answer${i}_${k}_${j}`}
              type="checkbox"
            />
          );
        }
      }
    }

    return arr;
  };
  // 1번째 카테고리 세부II 질문
  const [question1_1, setQuestion1_1] = useState([]);
  const [question1_2, setQuestion1_2] = useState([]);
  const [question1_3, setQuestion1_3] = useState([]);
  const [question1_4, setQuestion1_4] = useState([]);
  // 2번째 카테고리 세부II 질문
  const [question2_1, setQuestion2_1] = useState([]);
  const [question2_2, setQuestion2_2] = useState([]);
  const [question2_3, setQuestion2_3] = useState([]);
  const [question2_4, setQuestion2_4] = useState([]);
  const [question2_5, setQuestion2_5] = useState([]);
  const [question2_6, setQuestion2_6] = useState([]);
  const [question2_7, setQuestion2_7] = useState([]);
  const [question2_8, setQuestion2_8] = useState([]);
  // 3번째 카테고리 세부II 질문
  const [question3_1, setQuestion3_1] = useState([]);
  const [question3_2, setQuestion3_2] = useState([]);
  const [question3_3, setQuestion3_3] = useState([]);
  const [question3_4, setQuestion3_4] = useState([]);
  // 4번째 카테고리 세부II 질문
  const [question4_1, setQuestion4_1] = useState([]);
  const [question4_2, setQuestion4_2] = useState([]);
  // 세부 스캔 II 답변
  const [answerList2, setAnswerList2] = useState({
    // 1
    answer1_1_1: "",
    answer1_1_2: "",
    answer1_1_3: "",
    answer1_1_4: "",
    answer1_1_5: "",

    answer1_2_1: "",
    answer1_2_2: "",
    answer1_2_3: "",
    answer1_2_4: "",
    answer1_2_5: "",

    answer1_3_1: "",
    answer1_3_2: "",
    answer1_3_3: "",
    answer1_3_4: "",
    answer1_3_5: "",

    answer1_4_1: "",
    answer1_4_2: "",
    answer1_4_3: "",
    answer1_4_4: "",
    answer1_4_5: "",

    // 2
    answer2_1_1: "",
    answer2_1_2: "",
    answer2_1_3: "",
    answer2_1_4: "",
    answer2_1_5: "",

    answer2_2_1: "",
    answer2_2_2: "",
    answer2_2_3: "",
    answer2_2_4: "",
    answer2_2_5: "",

    answer2_3_1: "",
    answer2_3_2: "",
    answer2_3_3: "",
    answer2_3_4: "",
    answer2_3_5: "",

    answer2_4_1: "",
    answer2_4_2: "",
    answer2_4_3: "",
    answer2_4_4: "",
    answer2_4_5: "",

    answer2_5_1: "",
    answer2_5_2: "",
    answer2_5_3: "",
    answer2_5_4: "",
    answer2_5_5: "",

    answer2_6_1: "",
    answer2_6_2: "",
    answer2_6_3: "",
    answer2_6_4: "",
    answer2_6_5: "",

    answer2_7_1: "",
    answer2_7_2: "",
    answer2_7_3: "",
    answer2_7_4: "",
    answer2_7_5: "",

    answer2_8_1: "",
    answer2_8_2: "",
    answer2_8_3: "",
    answer2_8_4: "",
    answer2_8_5: "",

    // 3
    answer3_1_1: "",
    answer3_1_2: "",
    answer3_1_3: "",
    answer3_1_4: "",
    answer3_1_5: "",

    answer3_2_1: "",
    answer3_2_2: "",
    answer3_2_3: "",
    answer3_2_4: "",
    answer3_2_5: "",

    answer3_3_1: "",
    answer3_3_2: "",
    answer3_3_3: "",
    answer3_3_4: "",
    answer3_3_5: "",

    answer3_4_1: "",
    answer3_4_2: "",
    answer3_4_3: "",
    answer3_4_4: "",
    answer3_4_5: "",
    // 4
    answer4_1_1: "",
    answer4_1_2: "",
    answer4_1_3: "",
    answer4_1_4: "",
    answer4_1_5: "",

    answer4_2_1: "",
    answer4_2_2: "",
    answer4_2_3: "",
    answer4_2_4: "",
    answer4_2_5: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setAnswerList2({
      ...answerList2,
      [name]: value,
    });
  };

  //제출하기 버튼 클릭 시 유효성 검사
  const onClickSubmitModal = () => {
    if (
      // 1
      answerList2.answer1_1_1.length >= 1 &&
      answerList2.answer1_1_2.length >= 1 &&
      answerList2.answer1_1_3.length >= 1 &&
      answerList2.answer1_1_4.length >= 1 &&
      answerList2.answer1_1_5.length >= 1 &&
      answerList2.answer1_2_1.length >= 1 &&
      answerList2.answer1_2_2.length >= 1 &&
      answerList2.answer1_2_3.length >= 1 &&
      answerList2.answer1_2_4.length >= 1 &&
      answerList2.answer1_2_5.length >= 1 &&
      answerList2.answer1_3_1.length >= 1 &&
      answerList2.answer1_3_2.length >= 1 &&
      answerList2.answer1_3_3.length >= 1 &&
      answerList2.answer1_3_4.length >= 1 &&
      answerList2.answer1_3_5.length >= 1 &&
      answerList2.answer1_4_1.length >= 1 &&
      answerList2.answer1_4_2.length >= 1 &&
      answerList2.answer1_4_3.length >= 1 &&
      answerList2.answer1_4_4.length >= 1 &&
      answerList2.answer1_4_5.length >= 1 &&
      // 2
      answerList2.answer2_1_1.length >= 1 &&
      answerList2.answer2_1_2.length >= 1 &&
      answerList2.answer2_1_3.length >= 1 &&
      answerList2.answer2_1_4.length >= 1 &&
      answerList2.answer2_1_5.length >= 1 &&
      answerList2.answer2_2_1.length >= 1 &&
      answerList2.answer2_2_2.length >= 1 &&
      answerList2.answer2_2_3.length >= 1 &&
      answerList2.answer2_2_4.length >= 1 &&
      answerList2.answer2_2_5.length >= 1 &&
      answerList2.answer2_3_1.length >= 1 &&
      answerList2.answer2_3_2.length >= 1 &&
      answerList2.answer2_3_3.length >= 1 &&
      answerList2.answer2_3_4.length >= 1 &&
      answerList2.answer2_3_5.length >= 1 &&
      answerList2.answer2_4_1.length >= 1 &&
      answerList2.answer2_4_2.length >= 1 &&
      answerList2.answer2_4_3.length >= 1 &&
      answerList2.answer2_4_4.length >= 1 &&
      answerList2.answer2_4_5.length >= 1 &&
      answerList2.answer2_5_1.length >= 1 &&
      answerList2.answer2_5_2.length >= 1 &&
      answerList2.answer2_5_3.length >= 1 &&
      answerList2.answer2_5_4.length >= 1 &&
      answerList2.answer2_5_5.length >= 1 &&
      answerList2.answer2_6_1.length >= 1 &&
      answerList2.answer2_6_2.length >= 1 &&
      answerList2.answer2_6_3.length >= 1 &&
      answerList2.answer2_6_4.length >= 1 &&
      answerList2.answer2_6_5.length >= 1 &&
      answerList2.answer2_7_1.length >= 1 &&
      answerList2.answer2_7_2.length >= 1 &&
      answerList2.answer2_7_3.length >= 1 &&
      answerList2.answer2_7_4.length >= 1 &&
      answerList2.answer2_7_5.length >= 1 &&
      answerList2.answer2_8_1.length >= 1 &&
      answerList2.answer2_8_2.length >= 1 &&
      answerList2.answer2_8_3.length >= 1 &&
      answerList2.answer2_8_4.length >= 1 &&
      answerList2.answer2_8_5.length >= 1 &&
      // 3
      answerList2.answer3_1_1.length >= 1 &&
      answerList2.answer3_1_2.length >= 1 &&
      answerList2.answer3_1_3.length >= 1 &&
      answerList2.answer3_1_4.length >= 1 &&
      answerList2.answer3_1_5.length >= 1 &&
      answerList2.answer3_2_1.length >= 1 &&
      answerList2.answer3_2_2.length >= 1 &&
      answerList2.answer3_2_3.length >= 1 &&
      answerList2.answer3_2_4.length >= 1 &&
      answerList2.answer3_2_5.length >= 1 &&
      answerList2.answer3_3_1.length >= 1 &&
      answerList2.answer3_3_2.length >= 1 &&
      answerList2.answer3_3_3.length >= 1 &&
      answerList2.answer3_3_4.length >= 1 &&
      answerList2.answer3_3_5.length >= 1 &&
      answerList2.answer3_4_1.length >= 1 &&
      answerList2.answer3_4_2.length >= 1 &&
      answerList2.answer3_4_3.length >= 1 &&
      answerList2.answer3_4_4.length >= 1 &&
      answerList2.answer3_4_5.length >= 1 &&
      // 4
      answerList2.answer4_1_1.length >= 1 &&
      answerList2.answer4_1_2.length >= 1 &&
      answerList2.answer4_1_3.length >= 1 &&
      answerList2.answer4_1_4.length >= 1 &&
      answerList2.answer4_1_5.length >= 1 &&
      answerList2.answer4_2_1.length >= 1 &&
      answerList2.answer4_2_2.length >= 1 &&
      answerList2.answer4_2_3.length >= 1 &&
      answerList2.answer4_2_4.length >= 1 &&
      answerList2.answer4_2_5.length >= 1
    ) {
      setSubmitModal(true);
    } else {
      setNoWriteModal(true);
    }
  };
  const onClickSubmit = async (key) => {
    let state = "";
    if (key === "save") {
      if (clientData.STATE_NAME === "추가포커스 밸류체인 작성중") {
        state = "FOCUS_C4";
      } else if (clientData.STATE_NAME === "추가포커스 플랫폼 작성중") {
        state = "FOCUS_C5";
      }

      setSaveModal(true);
    } else if (key == "submit") {
      state = "FOCUS_C3";
      setIsLoad(true);
    }
    await Axios.put("http://34.68.101.191:8000/put/Focus_qna_2_client", {
      business_name: clientData.BUSINESS_NAME,
      answerList2,
      state,
    }).then((response) => {
      console.log(response.data);
      if (state === "FOCUS_C3") {
        window.location.href = "/Home_client";
      }
    });
  };
  // 제출하기 클릭
  const [submitModal, setSubmitModal] = useState(false);
  // 저장하기 클릭
  const [saveModal, setSaveModal] = useState(false);
  // 내용작성 하지 않고 제출하기 클릭
  const [noWriteModal, setNoWriteModal] = useState(false);

  //모달 외부 클릭 시 닫힘
  const modalOutSide = useRef();
  useEffect(() => {
    const clickOutside = (e) => {
      // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
      if (
        setSubmitModal &&
        modalOutSide.current &&
        !modalOutSide.current.contains(e.target)
      ) {
        setSubmitModal(false);
      }
      if (
        setNoWriteModal &&
        modalOutSide.current &&
        !modalOutSide.current.contains(e.target)
      ) {
        setNoWriteModal(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);
  return (
    <>
      {questionInputs()}
      <Header title="FOCUSer 추가포커스" img="./img/focus_icon.png" />
      {isLoad && <Loading />}
      <div className="Scan_top">
        <p>사업명 : {clientData.BUSINESS_NAME}</p>
        <p className="Scan_top_boder">제출일시 : {clientData.CREATED_DATE}</p>
        <p>현재상태 : {clientData.STATE_NAME}</p>
      </div>
      <div className="Scan_detail_qna_client_inner">
        <div className="Scan_detail_qna_client_inner_header">
          <img src="./img/report.png" alt="img" />
          <p>
            리포트 작성에 필요한 추가 질문 <b>추가 포커스 단계</b> 입니다.
          </p>
          <p>
            기존의 세부스캔 질문 중에 더 디테일 한 질의가 필요해서 요청 드렸으며
          </p>
          <p>추가 질문이 있는 문항만 표시되니 답변 후 제출 부탁드립니다.</p>
        </div>
        {/* 1번째 카테고리 */}
        {question1_1.length > 0 ||
        question1_2.length > 0 ||
        question1_3.length > 0 ||
        question1_4.length > 0 ? (
          <div className="Scan_detail_qna_client_inner_content">
            <div className="Scan_detail_qna_client_inner_content_title">
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
            <div className="Scan_detail_qna_client_inner_content_box con1">
              {question1.map((item, index) => (
                <div key={index}>
                  {item.question2 ? (
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_content  box1_${
                        index + 1
                      }`}
                    >
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_title anq2_p title1_${
                          index + 1
                        }`}
                      >
                        <p>
                          {`1-${index + 1}`}.{" "}
                          <input type="text" value={item.question} disabled />
                        </p>
                      </div>
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_text text1_${
                          index + 1
                        }`}
                      >
                        <textarea
                          className="anq2_p"
                          name={`answer1_${index + 1}`}
                          value={item.answer}
                          disabled
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {/* 세부스캔 질문 II 있는거만 보여줌 */}
                  {item.key === "1_1" && question1_1.length > 0
                    ? question1_1.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box1_1_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title1_1_${
                              index + 1
                            }`}
                          >
                            <p>
                              1-1-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer1_1_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text1_1_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer1_1_${index + 1}`}
                              value={
                                item.key === "1_1_1"
                                  ? answerList2.answer1_1_1
                                  : item.key === "1_1_2"
                                  ? answerList2.answer1_1_2
                                  : item.key === "1_1_3"
                                  ? answerList2.answer1_1_3
                                  : item.key === "1_1_4"
                                  ? answerList2.answer1_1_4
                                  : item.key === "1_1_5"
                                  ? answerList2.answer1_1_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "1_2" &&
                      item.question2 &&
                      question1_2.length > 0
                    ? question1_2.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box1_2_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title1_2_${
                              index + 1
                            }`}
                          >
                            <p>
                              1-2-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer1_2_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text1_2_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer1_2_${index + 1}`}
                              value={
                                item.key === "1_2_1"
                                  ? answerList2.answer1_2_1
                                  : item.key === "1_2_2"
                                  ? answerList2.answer1_2_2
                                  : item.key === "1_2_3"
                                  ? answerList2.answer1_2_3
                                  : item.key === "1_2_4"
                                  ? answerList2.answer1_2_4
                                  : item.key === "1_2_5"
                                  ? answerList2.answer1_2_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "1_3" &&
                      item.question2 &&
                      question1_3.length > 0
                    ? question1_3.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box1_3_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title1_3_${
                              index + 1
                            }`}
                          >
                            <p>
                              1-3-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer1_3_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text1_3_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer1_3_${index + 1}`}
                              value={
                                item.key === "1_3_1"
                                  ? answerList2.answer1_3_1
                                  : item.key === "1_3_2"
                                  ? answerList2.answer1_3_2
                                  : item.key === "1_3_3"
                                  ? answerList2.answer1_3_3
                                  : item.key === "1_3_4"
                                  ? answerList2.answer1_3_4
                                  : item.key === "1_3_5"
                                  ? answerList2.answer1_3_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "1_4" &&
                      item.question2 &&
                      question1_4.length > 0
                    ? question1_4.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box1_4_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title1_4_${
                              index + 1
                            }`}
                          >
                            <p>
                              1-4-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer1_4_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text1_4_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer1_4_${index + 1}`}
                              value={
                                item.key === "1_4_1"
                                  ? answerList2.answer1_4_1
                                  : item.key === "1_4_2"
                                  ? answerList2.answer1_4_2
                                  : item.key === "1_4_3"
                                  ? answerList2.answer1_4_3
                                  : item.key === "1_4_4"
                                  ? answerList2.answer1_4_4
                                  : item.key === "1_4_5"
                                  ? answerList2.answer1_4_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {/* 2번째 카테고리 */}
        {question2_1.length > 0 ||
        question2_2.length > 0 ||
        question2_3.length > 0 ||
        question2_4.length > 0 ||
        question2_5.length > 0 ||
        question2_6.length > 0 ||
        question2_7.length > 0 ||
        question2_8.length > 0 ? (
          <div className="Scan_detail_qna_client_inner_content">
            <div className="Scan_detail_qna_client_inner_content_title">
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
            <div className="Scan_detail_qna_client_inner_content_box con2">
              {question2.map((item, index) => (
                <div key={index}>
                  {item.question2 ? (
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_content  box2_${
                        index + 1
                      }`}
                    >
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_title anq2_p title2_${
                          index + 1
                        }`}
                      >
                        <p>
                          {`2-${index + 1}`}.{" "}
                          <input type="text" value={item.question} disabled />
                        </p>
                      </div>
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_text text2_${
                          index + 1
                        }`}
                      >
                        <textarea
                          className="anq2_p"
                          name={`answer2_${index + 1}`}
                          value={item.answer}
                          disabled
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {/* 세부스캔 질문 II 있는거만 보여줌 */}
                  {item.key === "2_1" && question2_1.length > 0
                    ? question2_1.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box2_1_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title2_1_${
                              index + 1
                            }`}
                          >
                            <p>
                              2-1-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer2_1_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text2_1_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer2_1_${index + 1}`}
                              value={
                                item.key === "2_1_1"
                                  ? answerList2.answer2_1_1
                                  : item.key === "2_1_2"
                                  ? answerList2.answer2_1_2
                                  : item.key === "2_1_3"
                                  ? answerList2.answer2_1_3
                                  : item.key === "2_1_4"
                                  ? answerList2.answer2_1_4
                                  : item.key === "2_1_5"
                                  ? answerList2.answer2_1_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "2_2" &&
                      item.question2 &&
                      question2_2.length > 0
                    ? question2_2.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box2_2_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title2_2_${
                              index + 1
                            }`}
                          >
                            <p>
                              2-2-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer2_2_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text2_2_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer2_2_${index + 1}`}
                              value={
                                item.key === "2_2_1"
                                  ? answerList2.answer2_2_1
                                  : item.key === "2_2_2"
                                  ? answerList2.answer2_2_2
                                  : item.key === "2_2_3"
                                  ? answerList2.answer2_2_3
                                  : item.key === "2_2_4"
                                  ? answerList2.answer2_2_4
                                  : item.key === "2_2_5"
                                  ? answerList2.answer2_2_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "2_3" &&
                      item.question2 &&
                      question2_3.length > 0
                    ? question2_3.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box2_3_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title2_3_${
                              index + 1
                            }`}
                          >
                            <p>
                              2-3-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer2_3_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text2_3_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer2_3_${index + 1}`}
                              value={
                                item.key === "2_3_1"
                                  ? answerList2.answer2_3_1
                                  : item.key === "2_3_2"
                                  ? answerList2.answer2_3_2
                                  : item.key === "2_3_3"
                                  ? answerList2.answer2_3_3
                                  : item.key === "2_3_4"
                                  ? answerList2.answer2_3_4
                                  : item.key === "2_3_5"
                                  ? answerList2.answer2_3_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "2_4" &&
                      item.question2 &&
                      question2_4.length > 0
                    ? question2_4.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box2_4_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title2_4_${
                              index + 1
                            }`}
                          >
                            <p>
                              2-4-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer2_4_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text2_4_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer2_4_${index + 1}`}
                              value={
                                item.key === "2_4_1"
                                  ? answerList2.answer2_4_1
                                  : item.key === "2_4_2"
                                  ? answerList2.answer2_4_2
                                  : item.key === "2_4_3"
                                  ? answerList2.answer2_4_3
                                  : item.key === "2_4_4"
                                  ? answerList2.answer2_4_4
                                  : item.key === "2_4_5"
                                  ? answerList2.answer2_4_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "2_5" &&
                      item.question2 &&
                      question2_5.length > 0
                    ? question2_5.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box2_5_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title2_5_${
                              index + 1
                            }`}
                          >
                            <p>
                              2-5-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer2_5_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text2_5_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer2_5_${index + 1}`}
                              value={
                                item.key === "2_5_1"
                                  ? answerList2.answer2_5_1
                                  : item.key === "2_5_2"
                                  ? answerList2.answer2_5_2
                                  : item.key === "2_5_3"
                                  ? answerList2.answer2_5_3
                                  : item.key === "2_5_4"
                                  ? answerList2.answer2_5_4
                                  : item.key === "2_5_5"
                                  ? answerList2.answer2_5_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "2_6" &&
                      item.question2 &&
                      question2_6.length > 0
                    ? question2_6.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box2_6_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title2_6_${
                              index + 1
                            }`}
                          >
                            <p>
                              2-6-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer2_6_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text2_6_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer2_6_${index + 1}`}
                              value={
                                item.key === "2_6_1"
                                  ? answerList2.answer2_6_1
                                  : item.key === "2_6_2"
                                  ? answerList2.answer2_6_2
                                  : item.key === "2_6_3"
                                  ? answerList2.answer2_6_3
                                  : item.key === "2_6_4"
                                  ? answerList2.answer2_6_4
                                  : item.key === "2_6_5"
                                  ? answerList2.answer2_6_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "2_7" &&
                      item.question2 &&
                      question2_7.length > 0
                    ? question2_7.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box2_7_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title2_7_${
                              index + 1
                            }`}
                          >
                            <p>
                              2-7-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer2_7_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text2_7_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer2_7_${index + 1}`}
                              value={
                                item.key === "2_7_1"
                                  ? answerList2.answer2_7_1
                                  : item.key === "2_7_2"
                                  ? answerList2.answer2_7_2
                                  : item.key === "2_7_3"
                                  ? answerList2.answer2_7_3
                                  : item.key === "2_7_4"
                                  ? answerList2.answer2_7_4
                                  : item.key === "2_7_5"
                                  ? answerList2.answer2_7_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "2_8" &&
                      item.question2 &&
                      question2_8.length > 0
                    ? question2_8.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box2_8_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title2_8_${
                              index + 1
                            }`}
                          >
                            <p>
                              2-8-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer2_8_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text2_8_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer2_8_${index + 1}`}
                              value={
                                item.key === "2_8_1"
                                  ? answerList2.answer2_8_1
                                  : item.key === "2_8_2"
                                  ? answerList2.answer2_8_2
                                  : item.key === "2_8_3"
                                  ? answerList2.answer2_8_3
                                  : item.key === "2_8_4"
                                  ? answerList2.answer2_8_4
                                  : item.key === "2_8_5"
                                  ? answerList2.answer2_8_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {/* 3번째 카테고리 */}
        {question3_1.length > 0 ||
        question3_2.length > 0 ||
        question3_3.length > 0 ||
        question3_4.length > 0 ? (
          <div className="Scan_detail_qna_client_inner_content">
            <div className="Scan_detail_qna_client_inner_content_title">
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
            <div className="Scan_detail_qna_client_inner_content_box con3">
              {question3.map((item, index) => (
                <div key={index}>
                  {item.question2 ? (
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_content  box3_${
                        index + 1
                      }`}
                    >
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_title anq2_p title3_${
                          index + 1
                        }`}
                      >
                        <p>
                          {`3-${index + 1}`}.{" "}
                          <input type="text" value={item.question} disabled />
                        </p>
                      </div>
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_text text3_${
                          index + 1
                        }`}
                      >
                        <textarea
                          className="anq2_p"
                          name={`answer3_${index + 1}`}
                          value={item.answer}
                          disabled
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {/* 세부스캔 질문 II 있는거만 보여줌 */}
                  {item.key === "3_1" && question3_1.length > 0
                    ? question3_1.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box3_1_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title3_1_${
                              index + 1
                            }`}
                          >
                            <p>
                              3-1-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer3_1_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text3_1_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer3_1_${index + 1}`}
                              value={
                                item.key === "3_1_1"
                                  ? answerList2.answer3_1_1
                                  : item.key === "3_1_2"
                                  ? answerList2.answer3_1_2
                                  : item.key === "3_1_3"
                                  ? answerList2.answer3_1_3
                                  : item.key === "3_1_4"
                                  ? answerList2.answer3_1_4
                                  : item.key === "3_1_5"
                                  ? answerList2.answer3_1_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "3_2" &&
                      item.question2 &&
                      question3_2.length > 0
                    ? question3_2.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box3_2_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title3_2_${
                              index + 1
                            }`}
                          >
                            <p>
                              3-2-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer3_2_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text3_2_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer3_2_${index + 1}`}
                              value={
                                item.key === "3_2_1"
                                  ? answerList2.answer3_2_1
                                  : item.key === "3_2_2"
                                  ? answerList2.answer3_2_2
                                  : item.key === "3_2_3"
                                  ? answerList2.answer3_2_3
                                  : item.key === "3_2_4"
                                  ? answerList2.answer3_2_4
                                  : item.key === "3_2_5"
                                  ? answerList2.answer3_2_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "3_3" &&
                      item.question2 &&
                      question3_3.length > 0
                    ? question3_3.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box3_3_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title3_3_${
                              index + 1
                            }`}
                          >
                            <p>
                              3-3-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer3_3_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text3_3_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer3_3_${index + 1}`}
                              value={
                                item.key === "3_3_1"
                                  ? answerList2.answer3_3_1
                                  : item.key === "3_3_2"
                                  ? answerList2.answer3_3_2
                                  : item.key === "3_3_3"
                                  ? answerList2.answer3_3_3
                                  : item.key === "3_3_4"
                                  ? answerList2.answer3_3_4
                                  : item.key === "3_3_5"
                                  ? answerList2.answer3_3_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "3_4" &&
                      item.question2 &&
                      question3_4.length > 0
                    ? question3_4.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box3_4_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title3_4_${
                              index + 1
                            }`}
                          >
                            <p>
                              3-4-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer3_4_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text3_4_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer3_4_${index + 1}`}
                              value={
                                item.key === "3_4_1"
                                  ? answerList2.answer3_4_1
                                  : item.key === "3_4_2"
                                  ? answerList2.answer3_4_2
                                  : item.key === "3_4_3"
                                  ? answerList2.answer3_4_3
                                  : item.key === "3_4_4"
                                  ? answerList2.answer3_4_4
                                  : item.key === "3_4_5"
                                  ? answerList2.answer3_4_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {/* 4번째 카테고리 */}
        {question4_1.length > 0 || question4_2.length > 0 ? (
          <div className="Scan_detail_qna_client_inner_content">
            <div className="Scan_detail_qna_client_inner_content_title">
              <label htmlFor="kategorie4">
                <p>
                  <b>(4) 수익창출 방법 (profit)</b>
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
            <div className="Scan_detail_qna_client_inner_content_box con4">
              {question4.map((item, index) => (
                <div key={index}>
                  {item.question2 ? (
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_content  box4_${
                        index + 1
                      }`}
                    >
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_title anq2_p title4_${
                          index + 1
                        }`}
                      >
                        <p>
                          {`4-${index + 1}`}.{" "}
                          <input type="text" value={item.question} disabled />
                        </p>
                      </div>
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_text text4_${
                          index + 1
                        }`}
                      >
                        <textarea
                          className="anq2_p"
                          name={`answer4_${index + 1}`}
                          value={item.answer}
                          disabled
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {/* 세부스캔 질문 II 있는거만 보여줌 */}
                  {item.key === "4_1" && question4_1.length > 0
                    ? question4_1.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box4_1_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title4_1_${
                              index + 1
                            }`}
                          >
                            <p>
                              4-1-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer4_1_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text4_1_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer4_1_${index + 1}`}
                              value={
                                item.key === "4_1_1"
                                  ? answerList2.answer4_1_1
                                  : item.key === "4_1_2"
                                  ? answerList2.answer4_1_2
                                  : item.key === "4_1_3"
                                  ? answerList2.answer4_1_3
                                  : item.key === "4_1_4"
                                  ? answerList2.answer4_1_4
                                  : item.key === "4_1_5"
                                  ? answerList2.answer4_1_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "4_2" &&
                      item.question2 &&
                      question4_2.length > 0
                    ? question4_2.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box4_2_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title4_2_${
                              index + 1
                            }`}
                          >
                            <p>
                              4-2-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer4_2_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text4_2_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer4_2_${index + 1}`}
                              value={
                                item.key === "4_2_1"
                                  ? answerList2.answer4_2_1
                                  : item.key === "4_2_2"
                                  ? answerList2.answer4_2_2
                                  : item.key === "4_2_3"
                                  ? answerList2.answer4_2_3
                                  : item.key === "4_2_4"
                                  ? answerList2.answer4_2_4
                                  : item.key === "4_2_5"
                                  ? answerList2.answer4_2_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        <div style={{ marginTop: "200px" }} className="Scan_content_box_btn">
          <button
            className="Scan_content_box_save"
            onClick={() => {
              onClickSubmit("save");
            }}
          >
            저장하기
          </button>
          <button
            className="Scan_content_box_submit"
            onClick={onClickSubmitModal}
          >
            제출하기
          </button>
        </div>
      </div>
      {submitModal && (
        <div ref={modalOutSide} className="submit_Modal">
          <img src="./img/popup_15.png" alt="img" />
          <div className="submit_Modal_btn">
            <button
              onClick={() => {
                setSubmitModal(false);
              }}
            ></button>
            <button
              onClick={() => {
                onClickSubmit("submit");
              }}
            ></button>
          </div>
        </div>
      )}
      {noWriteModal && (
        <div ref={modalOutSide} className="check_Modal">
          <img src="./img/popup_3.png" alt="img" />
          <div className="check_Modal_btn">
            <button
              onClick={() => {
                setNoWriteModal(false);
              }}
            ></button>
          </div>
        </div>
      )}
      {saveModal && (
        <div className="check_Modal">
          <img src="./img/popup_7.png" alt="img" />
          <div className="check_Modal_btn">
            <button
              onClick={() => {
                setSaveModal(false);
              }}
            ></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Focus_qna2_client;
