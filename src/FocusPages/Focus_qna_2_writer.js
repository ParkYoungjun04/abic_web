import "../ScanPages/Scan_report_writer.css";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Axios from "axios";
import Header from "../Header";
import Loading from "../Loading";
const Focus_qna_2_writer = () => {
  const [isLoad, setIsLoad] = useState(false);
  const location = useLocation({});

  const business_name = location.state.business_name;

  const client_name = location.state.client_name;

  const [writerState, setWriterState] = useState("");

  useEffect(() => {
    Axios.get("http://34.68.101.191:8000/get/Focus_state", {
      params: { business_name: business_name },
    }).then((response) => {
      setWriterState(response.data[0]);
    });
  }, [business_name, client_name]);

  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [question4, setQuestion4] = useState([]);

  // as-is, 키워드 변수
  const [writerList, setWriterList] = useState({});

  const getValue = (e) => {
    const { name, value } = e.target;
    setWriterList({
      ...writerList,
      [name]: value,
    });
  };

  //   기본질문 조회
  useEffect(() => {
    let answer = "";
    Axios.get("http://34.68.101.191:8000/get/Focus_qna_client", {
      params: { business_name: business_name },
    }).then((response) => {
      answer = response.data[0];
      //   밸류체인;
      if (writerState.QUESTION_TYPE === "b") {
        setQuestion1([
          {
            key: "1_1",
            question: "사업 개시 후 1~2년 내 목표로 하는 시장은 어디입니까?",
            answer: answer["1_1"],
            file: answer["F_1_1"],
          },
          {
            key: "1_2",
            question:
              "목표 시장에서 구체적으로 어떤 고객을 대상으로 사업을 하십니까?",
            answer: answer["1_2"],
            file: answer["F_1_2"],
          },
          {
            key: "1_3",
            question:
              "사업개시 후 1~2년 내 목표로 하고 있는 시장은 다른 인접시장으로 진출하기 유리한 시장입니까?",
            answer: answer["1_3"],
            file: answer["F_1_3"],
          },
        ]);
        setQuestion2([
          {
            key: "2_1",
            question:
              "사업을 통해 고객에게 무엇을 제공(오퍼링/offering)합니까?",
            answer: answer["2_1"],
            file: answer["F_2_1"],
          },
          {
            key: "2_2",
            question:
              "고객들은 어떤 애로사항이나 니즈를 해결하려고 상기의 오퍼링을 구매합니까?",
            answer: answer["2_2"],
            file: answer["F_2_2"],
          },
          {
            key: "2_3",
            question:
              "사업 개시 후 1~2년 내 목표로 하고 있는 시장에서 고객들은 동일한 애로사항이나 니즈를 해결하기 위해서 우리회사와 비슷한 오퍼링을 구매합니까? 아니면 전혀 다른 대안 오퍼링을 구매합니까?",
            answer: answer["2_3"],
            file: answer["F_2_3"],
          },
          {
            key: "2_4",
            question:
              "사업 개시 후 1~2년 내 다른 경쟁자와는 어떻게 차별화할 것입니까? 다시 말해 고객들이 우리 회사의 오퍼링을 구매할 수 밖에 없는 이유는 무엇입니까?",
            answer: answer["2_4"],
            file: answer["F_2_4"],
          },
          {
            key: "2_5",
            question:
              "우리회사가 제공하는 오퍼링은 직접개발해서 판매하는 것인가요? 아니면 다른 공급처에서 구매하여 유통하는 것입니까?",
            answer: answer["2_5"],
            file: answer["F_2_5"],
          },
          {
            key: "2_6",
            question: "완성품을 단기간 내에 생산하여 출시하는 것이 가능합니까?",
            answer: answer["2_6"],
            file: answer["F_2_6"],
          },
          {
            key: "2_7",
            question:
              "완성품을 생산하여 출시하는 데 있어 협력업체의 역할은 얼마나 큽니까?",
            answer: answer["2_7"],
            file: answer["F_2_7"],
          },
          {
            key: "2_8",
            question:
              "사업 개시 후 1~2년 내 목표로 하는 시장에서 우리보다 훨씬 뛰어난 경쟁력을 가진 경쟁자가 있습니까? 아니면 우리만의 독점적 시장입니까?",
            answer: answer["2_8"],
            file: answer["F_2_8"],
          },
        ]);
        setQuestion3([
          {
            key: "3_1",
            question:
              "사업 개시 후 1~2년 내 목표시장에서는 어떤 유통채널을 통해 오퍼링을 고객에게 판매하실 생각이십니까?",
            answer: answer["3_1"],
            file: answer["F_3_1"],
          },
          {
            key: "3_2",
            question:
              "간접 유통의 경우, 유통채널을 대상으로 영업은 어떻게 진행할 것인가요?",
            answer: answer["3_2"],
            file: answer["F_3_2"],
          },
          {
            key: "3_3",
            question:
              "직접 유통의 경우, 목표고객에게 어떻게 접근할 수 있을까요?",
            answer: answer["3_3"],
            file: answer["F_3_3"],
          },
          {
            key: "3_4",
            question:
              "1~2년 내 공략할 목표시장의 유통채널이나 고객들에게 우리회사를 알리기 위해 마케팅을 어떻게 하실 것인가요?",
            answer: answer["3_4"],
            file: answer["F_3_4"],
          },
        ]);
        setQuestion4([
          {
            key: "4_1",
            question: "수익은 어떻게 창출할 계획입니까? (수익창출 방식)",
            answer: answer["4_1"],
            file: answer["F_4_1"],
          },
          {
            key: "4_2",
            question: "사업 개시 후 1~2년 내 예상하는 수익은 어느 정도입니까? ",
            answer: answer["4_2"],
            file: answer["F_4_2"],
          },
        ]);
      } else if (writerState.QUESTION_TYPE === "p") {
        // 플랫폼
        setQuestion1([
          {
            key: "1_1",
            question: "사업 개시 후 1~2년 내 목표로 하는 시장은 어디입니까?",
            answer: answer["1_1"],
            file: answer["F_1_1"],
          },
          {
            key: "1_2",
            question:
              "목표 시장에서 구체적으로 어떤 고객을 대상으로 사업을 하십니까?",
            answer: answer["1_2"],
            file: answer["F_1_2"],
          },
          {
            key: "1_3",
            question:
              "사업개시 후 1~2년 내 목표로 하고 있는 시장은 다른 인접시장으로 진출하기 유리한 시장입니까?",
            answer: answer["1_3"],
            file: answer["F_1_3"],
          },
          {
            key: "1_4",
            question:
              "사업개시 후 1~2년 내 목표로 하고 있는 시장은 다른 인접시장으로 진출하기 유리한 시장입니까?",
            answer: answer["1_4"],
            file: answer["F_1_4"],
          },
        ]);
        setQuestion2([
          {
            key: "2_1",
            question: "플랫폼에서 공급자는 고객에게 무엇을 제공합니까?",
            answer: answer["2_1"],
            file: answer["F_2_1"],
          },
          {
            key: "2_2",
            question:
              "고객들은 어떤 애로사항이나 필요사항을 해결하려고 본 플랫폼을 이용합니까",
            answer: answer["2_2"],
            file: answer["F_2_2"],
          },
          {
            key: "2_3",
            question:
              "사업 개시 후 1~2년 내 다른 경쟁자와는 어떻게 차별화할 것입니까? 다시 말해 고객들이 우리 플랫폼을 활용할 수 밖에 없는 이유는 무엇입니까?",
            answer: answer["2_3"],
            file: answer["F_2_3"],
          },
          {
            key: "2_4",
            question:
              "플랫폼에서 제공하고자 하는 것들은 단시간 내에 출시 가능합니까? 아니면 오랜 시간을 투자하여 개발해야 합니까?",
            answer: answer["2_4"],
            file: answer["F_2_4"],
          },
          {
            key: "2_5",
            question:
              "사업 개시 후 1~2년 내 목표로 하는 시장에서 우리보다 훨씬 뛰어난 경쟁력을 가진 경쟁자가 있습니까? 아니면 우리만의 독점적 시장입니까?",
            answer: answer["2_5"],
            file: answer["F_2_5"],
          },
        ]);
        setQuestion3([
          {
            key: "3_1",
            question:
              "플랫폼에서 고객과 공급자가 서로 신뢰하면서 편리하게 거래나 상담을 할 수 있도록 하기 위해 어떤 방안을 활용하고 있습니까?",
            answer: answer["3_1"],
            file: answer["F_3_1"],
          },
          {
            key: "3_2",
            question:
              "사업 개시 후 1~2년 이내 고객과 공급자 중 어느 쪽을 먼저 유입시키는 것이 유리합니까?",
            answer: answer["3_2"],
            file: answer["F_3_2"],
          },
          {
            key: "3_3",
            question:
              "어떤 유입방안을 통해 플랫폼으로 참여자들을 유입할 것인가요?",
            answer: answer["3_3"],
            file: answer["F_3_3"],
          },
        ]);
        setQuestion4([
          {
            key: "4_1",
            question: "어떤 방식으로 수익을 창출할 수 있습니까?",
            answer: answer["4_1"],
            file: answer["F_4_1"],
          },
          {
            key: "4_2",
            question:
              "회원 가입이 어느 정도 수준이 되면 수익을 창출할 수 있다고 보는지요? 그렇다면 사업 개시 후 1~2년 내 예상하는 수익은 어느 정도입니까?",
            answer: answer["4_2"],
            file: answer["F_4_2"],
          },
        ]);
      }
    });
  }, [writerState]);
  // as-is이슈, 키워드, 추가질문 조회
  useEffect(() => {
    let writerList = "";
    // as-is이슈, 키워드 조회
    Axios.get("http://34.68.101.191:8000/get/Focus_report_writer", {
      params: { business_name: business_name },
    }).then((response) => {
      writerList = response.data[0];

      setWriterList({
        as_is1_1: writerList.AS_1_1 ? writerList.AS_1_1 : "",
        as_is1_2: writerList.AS_1_2 ? writerList.AS_1_2 : "",
        as_is1_3: writerList.AS_1_3 ? writerList.AS_1_3 : "",
        as_is1_4: writerList.AS_1_4 ? writerList.AS_1_4 : "",

        as_is2_1: writerList.AS_2_1 ? writerList.AS_2_1 : "",
        as_is2_2: writerList.AS_2_2 ? writerList.AS_2_2 : "",
        as_is2_3: writerList.AS_2_3 ? writerList.AS_2_3 : "",
        as_is2_4: writerList.AS_2_4 ? writerList.AS_2_4 : "",
        as_is2_5: writerList.AS_2_5 ? writerList.AS_2_5 : "",
        as_is2_6: writerList.AS_2_6 ? writerList.AS_2_6 : "",
        as_is2_7: writerList.AS_2_7 ? writerList.AS_2_7 : "",
        as_is2_8: writerList.AS_2_8 ? writerList.AS_2_8 : "",

        as_is3_1: writerList.AS_3_1 ? writerList.AS_3_1 : "",
        as_is3_2: writerList.AS_3_2 ? writerList.AS_3_2 : "",
        as_is3_3: writerList.AS_3_3 ? writerList.AS_3_3 : "",
        as_is3_4: writerList.AS_3_4 ? writerList.AS_3_4 : "",

        as_is4_1: writerList.AS_4_1 ? writerList.AS_4_1 : "",
        as_is4_2: writerList.AS_4_2 ? writerList.AS_4_2 : "",

        keyword1_1: writerList.KW_1_1 ? writerList.KW_1_1 : "",
        keyword1_2: writerList.KW_1_2 ? writerList.KW_1_2 : "",
        keyword1_3: writerList.KW_1_3 ? writerList.KW_1_3 : "",
        keyword1_4: writerList.KW_1_4 ? writerList.KW_1_4 : "",

        keyword2_1: writerList.KW_2_1 ? writerList.KW_2_1 : "",
        keyword2_2: writerList.KW_2_2 ? writerList.KW_2_2 : "",
        keyword2_3: writerList.KW_2_3 ? writerList.KW_2_3 : "",
        keyword2_4: writerList.KW_2_4 ? writerList.KW_2_4 : "",
        keyword2_5: writerList.KW_2_5 ? writerList.KW_2_5 : "",
        keyword2_6: writerList.KW_2_6 ? writerList.KW_2_6 : "",
        keyword2_7: writerList.KW_2_7 ? writerList.KW_2_7 : "",
        keyword2_8: writerList.KW_2_8 ? writerList.KW_2_8 : "",

        keyword3_1: writerList.KW_3_1 ? writerList.KW_3_1 : "",
        keyword3_2: writerList.KW_3_2 ? writerList.KW_3_2 : "",
        keyword3_3: writerList.KW_3_3 ? writerList.KW_3_3 : "",
        keyword3_4: writerList.KW_3_4 ? writerList.KW_3_4 : "",

        keyword4_1: writerList.KW_4_1 ? writerList.KW_4_1 : "",
        keyword4_2: writerList.KW_4_2 ? writerList.KW_4_2 : "",
      });
    });
    // 추가 질문 조회
    Axios.get("http://34.68.101.191:8000/get/Focus_qna_2_write", {
      params: { business_name: business_name },
    }).then((response) => {
      let data = response.data[0];

      // 1-1
      if (data["1_1_5"] !== "" && data["1_1_5"] !== null) {
        setQuestion1_1([
          ...question1_1,
          { question: data["1_1_1"] },
          { question: data["1_1_2"] },
          { question: data["1_1_3"] },
          { question: data["1_1_4"] },
          { question: data["1_1_5"] },
        ]);
      } else if (data["1_1_4"] !== "" && data["1_1_4"] !== null) {
        setQuestion1_1([
          ...question1_1,
          { question: data["1_1_1"] },
          { question: data["1_1_2"] },
          { question: data["1_1_3"] },
          { question: data["1_1_4"] },
        ]);
      } else if (data["1_1_3"] !== "" && data["1_1_3"] !== null) {
        setQuestion1_1([
          ...question1_1,
          { question: data["1_1_1"] },
          { question: data["1_1_2"] },
          { question: data["1_1_3"] },
        ]);
      } else if (data["1_1_2"] !== "" && data["1_1_2"] !== null) {
        setQuestion1_1([
          ...question1_1,
          { question: data["1_1_1"] },
          { question: data["1_1_2"] },
        ]);
      } else if (data["1_1_1"] !== "" && data["1_1_1"] !== null) {
        setQuestion1_1([...question1_1, { question: data["1_1_1"] }]);
      }
      // 1-2
      if (data["1_2_5"] !== "" && data["1_2_5"] !== null) {
        setQuestion1_2([
          ...question1_2,
          { question: data["1_2_1"] },
          { question: data["1_2_2"] },
          { question: data["1_2_3"] },
          { question: data["1_2_4"] },
          { question: data["1_2_5"] },
        ]);
      } else if (data["1_2_4"] !== "" && data["1_2_4"] !== null) {
        setQuestion1_2([
          ...question1_2,
          { question: data["1_2_1"] },
          { question: data["1_2_2"] },
          { question: data["1_2_3"] },
          { question: data["1_2_4"] },
        ]);
      } else if (data["1_2_3"] !== "" && data["1_2_3"] !== null) {
        setQuestion1_2([
          ...question1_2,
          { question: data["1_2_1"] },
          { question: data["1_2_2"] },
          { question: data["1_2_3"] },
        ]);
      } else if (data["1_2_2"] !== "" && data["1_2_2"] !== null) {
        setQuestion1_2([
          ...question1_2,
          { question: data["1_2_1"] },
          { question: data["1_2_2"] },
        ]);
      } else if (data["1_2_1"] !== "" && data["1_2_1"] !== null) {
        setQuestion1_2([...question1_2, { question: data["1_2_1"] }]);
      }
      // 1-3
      if (data["1_3_5"] !== "" && data["1_3_5"] !== null) {
        setQuestion1_3([
          ...question1_3,
          { question: data["1_3_1"] },
          { question: data["1_3_2"] },
          { question: data["1_3_3"] },
          { question: data["1_3_4"] },
          { question: data["1_3_5"] },
        ]);
      } else if (data["1_3_4"] !== "" && data["1_3_4"] !== null) {
        setQuestion1_3([
          ...question1_3,
          { question: data["1_3_1"] },
          { question: data["1_3_2"] },
          { question: data["1_3_3"] },
          { question: data["1_3_4"] },
        ]);
      } else if (data["1_3_3"] !== "" && data["1_3_3"] !== null) {
        setQuestion1_3([
          ...question1_3,
          { question: data["1_3_1"] },
          { question: data["1_3_2"] },
          { question: data["1_3_3"] },
        ]);
      } else if (data["1_3_2"] !== "" && data["1_3_2"] !== null) {
        setQuestion1_3([
          ...question1_3,
          { question: data["1_3_1"] },
          { question: data["1_3_2"] },
        ]);
      } else if (data["1_3_1"] !== "" && data["1_3_1"] !== null) {
        setQuestion1_3([...question1_3, { question: data["1_3_1"] }]);
      }
      // 1-4
      if (data["1_4_5"] !== "" && data["1_4_5"] !== null) {
        setQuestion1_4([
          ...question1_4,
          { question: data["1_4_1"] },
          { question: data["1_4_2"] },
          { question: data["1_4_3"] },
          { question: data["1_4_4"] },
          { question: data["1_4_5"] },
        ]);
      } else if (data["1_4_4"] !== "" && data["1_4_4"] !== null) {
        setQuestion1_4([
          ...question1_4,
          { question: data["1_4_1"] },
          { question: data["1_4_2"] },
          { question: data["1_4_3"] },
          { question: data["1_4_4"] },
        ]);
      } else if (data["1_4_3"] !== "" && data["1_4_3"] !== null) {
        setQuestion1_4([
          ...question1_4,
          { question: data["1_4_1"] },
          { question: data["1_4_2"] },
          { question: data["1_4_3"] },
        ]);
      } else if (data["1_4_2"] !== "" && data["1_4_2"] !== null) {
        setQuestion1_4([
          ...question1_4,
          { question: data["1_4_1"] },
          { question: data["1_4_2"] },
        ]);
      } else if (data["1_4_1"] !== "" && data["1_4_1"] !== null) {
        setQuestion1_4([...question1_4, { question: data["1_4_1"] }]);
      }
      // 2-1
      if (data["2_1_5"] !== "" && data["2_1_5"] !== null) {
        setQuestion2_1([
          ...question2_1,
          { question: data["2_1_1"] },
          { question: data["2_1_2"] },
          { question: data["2_1_3"] },
          { question: data["2_1_4"] },
          { question: data["2_1_5"] },
        ]);
      } else if (data["2_1_4"] !== "" && data["2_1_4"] !== null) {
        setQuestion2_1([
          ...question2_1,
          { question: data["2_1_1"] },
          { question: data["2_1_2"] },
          { question: data["2_1_3"] },
          { question: data["2_1_4"] },
        ]);
      } else if (data["2_1_3"] !== "" && data["2_1_3"] !== null) {
        setQuestion2_1([
          ...question2_1,
          { question: data["2_1_1"] },
          { question: data["2_1_2"] },
          { question: data["2_1_3"] },
        ]);
      } else if (data["2_1_2"] !== "" && data["2_1_2"] !== null) {
        setQuestion2_1([
          ...question2_1,
          { question: data["2_1_1"] },
          { question: data["2_1_2"] },
        ]);
      } else if (data["2_1_1"] !== "" && data["2_1_1"] !== null) {
        setQuestion2_1([...question2_1, { question: data["2_1_1"] }]);
      }
      // 2-2
      if (data["2_2_5"] !== "" && data["2_2_5"] !== null) {
        setQuestion2_2([
          ...question2_2,
          { question: data["2_2_1"] },
          { question: data["2_2_2"] },
          { question: data["2_2_3"] },
          { question: data["2_2_4"] },
          { question: data["2_2_5"] },
        ]);
      } else if (data["2_2_4"] !== "" && data["2_2_4"] !== null) {
        setQuestion2_2([
          ...question2_2,
          { question: data["2_2_1"] },
          { question: data["2_2_2"] },
          { question: data["2_2_3"] },
          { question: data["2_2_4"] },
        ]);
      } else if (data["2_2_3"] !== "" && data["2_2_3"] !== null) {
        setQuestion2_2([
          ...question2_2,
          { question: data["2_2_1"] },
          { question: data["2_2_2"] },
          { question: data["2_2_3"] },
        ]);
      } else if (data["2_2_2"] !== "" && data["2_2_2"] !== null) {
        setQuestion2_2([
          ...question2_2,
          { question: data["2_2_1"] },
          { question: data["2_2_2"] },
        ]);
      } else if (data["2_2_1"] !== "" && data["2_2_1"] !== null) {
        setQuestion2_2([...question2_2, { question: data["2_2_1"] }]);
      }
      // 2-3
      if (data["2_3_5"] !== "" && data["2_3_5"] !== null) {
        setQuestion2_3([
          ...question2_3,
          { question: data["2_3_1"] },
          { question: data["2_3_2"] },
          { question: data["2_3_3"] },
          { question: data["2_3_4"] },
          { question: data["2_3_5"] },
        ]);
      } else if (data["2_3_4"] !== "" && data["2_3_4"] !== null) {
        setQuestion2_3([
          ...question2_3,
          { question: data["2_3_1"] },
          { question: data["2_3_2"] },
          { question: data["2_3_3"] },
          { question: data["2_3_4"] },
        ]);
      } else if (data["2_3_3"] !== "" && data["2_3_3"] !== null) {
        setQuestion2_3([
          ...question2_3,
          { question: data["2_3_1"] },
          { question: data["2_3_2"] },
          { question: data["2_3_3"] },
        ]);
      } else if (data["2_3_2"] !== "" && data["2_3_2"] !== null) {
        setQuestion2_3([
          ...question2_3,
          { question: data["2_3_1"] },
          { question: data["2_3_2"] },
        ]);
      } else if (data["2_3_1"] !== "" && data["2_3_1"] !== null) {
        setQuestion2_3([...question2_3, { question: data["2_3_1"] }]);
      }
      // 2-4
      if (data["2_4_5"] !== "" && data["2_4_5"] !== null) {
        setQuestion2_4([
          ...question2_4,
          { question: data["2_4_1"] },
          { question: data["2_4_2"] },
          { question: data["2_4_3"] },
          { question: data["2_4_4"] },
          { question: data["2_4_5"] },
        ]);
      } else if (data["2_4_4"] !== "" && data["2_4_4"] !== null) {
        setQuestion2_4([
          ...question2_4,
          { question: data["2_4_1"] },
          { question: data["2_4_2"] },
          { question: data["2_4_3"] },
          { question: data["2_4_4"] },
        ]);
      } else if (data["2_4_3"] !== "" && data["2_4_3"] !== null) {
        setQuestion2_4([
          ...question2_4,
          { question: data["2_4_1"] },
          { question: data["2_4_2"] },
          { question: data["2_4_3"] },
        ]);
      } else if (data["2_4_2"] !== "" && data["2_4_2"] !== null) {
        setQuestion2_4([
          ...question2_4,
          { question: data["2_4_1"] },
          { question: data["2_4_2"] },
        ]);
      } else if (data["2_4_1"] !== "" && data["2_4_1"] !== null) {
        setQuestion2_4([...question2_4, { question: data["2_4_1"] }]);
      }
      // 2-5
      if (data["2_5_5"] !== "" && data["2_5_5"] !== null) {
        setQuestion2_5([
          ...question2_5,
          { question: data["2_5_1"] },
          { question: data["2_5_2"] },
          { question: data["2_5_3"] },
          { question: data["2_5_4"] },
          { question: data["2_5_5"] },
        ]);
      } else if (data["2_5_4"] !== "" && data["2_5_4"] !== null) {
        setQuestion2_5([
          ...question2_5,
          { question: data["2_5_1"] },
          { question: data["2_5_2"] },
          { question: data["2_5_3"] },
          { question: data["2_5_4"] },
        ]);
      } else if (data["2_5_3"] !== "" && data["2_5_3"] !== null) {
        setQuestion2_5([
          ...question2_5,
          { question: data["2_5_1"] },
          { question: data["2_5_2"] },
          { question: data["2_5_3"] },
        ]);
      } else if (data["2_5_2"] !== "" && data["2_5_2"] !== null) {
        setQuestion2_5([
          ...question2_5,
          { question: data["2_5_1"] },
          { question: data["2_5_2"] },
        ]);
      } else if (data["2_5_1"] !== "" && data["2_5_1"] !== null) {
        setQuestion2_5([...question2_5, { question: data["2_5_1"] }]);
      }
      // 2-6
      if (data["2_6_5"] !== "" && data["2_6_5"] !== null) {
        setQuestion2_6([
          ...question2_6,
          { question: data["2_6_1"] },
          { question: data["2_6_2"] },
          { question: data["2_6_3"] },
          { question: data["2_6_4"] },
          { question: data["2_6_5"] },
        ]);
      } else if (data["2_6_4"] !== "" && data["2_6_4"] !== null) {
        setQuestion2_6([
          ...question2_6,
          { question: data["2_6_1"] },
          { question: data["2_6_2"] },
          { question: data["2_6_3"] },
          { question: data["2_6_4"] },
        ]);
      } else if (data["2_6_3"] !== "" && data["2_6_3"] !== null) {
        setQuestion2_6([
          ...question2_6,
          { question: data["2_6_1"] },
          { question: data["2_6_2"] },
          { question: data["2_6_3"] },
        ]);
      } else if (data["2_6_2"] !== "" && data["2_6_2"] !== null) {
        setQuestion2_6([
          ...question2_6,
          { question: data["2_6_1"] },
          { question: data["2_6_2"] },
        ]);
      } else if (data["2_6_1"] !== "" && data["2_6_1"] !== null) {
        setQuestion2_6([...question2_6, { question: data["2_6_1"] }]);
      }
      // 2-7
      if (data["2_7_5"] !== "" && data["2_7_5"] !== null) {
        setQuestion2_7([
          ...question2_7,
          { question: data["2_7_1"] },
          { question: data["2_7_2"] },
          { question: data["2_7_3"] },
          { question: data["2_7_4"] },
          { question: data["2_7_5"] },
        ]);
      } else if (data["2_7_4"] !== "" && data["2_7_4"] !== null) {
        setQuestion2_7([
          ...question2_7,
          { question: data["2_7_1"] },
          { question: data["2_7_2"] },
          { question: data["2_7_3"] },
          { question: data["2_7_4"] },
        ]);
      } else if (data["2_7_3"] !== "" && data["2_7_3"] !== null) {
        setQuestion2_7([
          ...question2_7,
          { question: data["2_7_1"] },
          { question: data["2_7_2"] },
          { question: data["2_7_3"] },
        ]);
      } else if (data["2_7_2"] !== "" && data["2_7_2"] !== null) {
        setQuestion2_7([
          ...question2_7,
          { question: data["2_7_1"] },
          { question: data["2_7_2"] },
        ]);
      } else if (data["2_7_1"] !== "" && data["2_7_1"] !== null) {
        setQuestion2_7([...question2_7, { question: data["2_7_1"] }]);
      }
      // 2-8
      if (data["2_8_5"] !== "" && data["2_8_5"] !== null) {
        setQuestion2_8([
          ...question2_8,
          { question: data["2_8_1"] },
          { question: data["2_8_2"] },
          { question: data["2_8_3"] },
          { question: data["2_8_4"] },
          { question: data["2_8_5"] },
        ]);
      } else if (data["2_8_4"] !== "" && data["2_8_4"] !== null) {
        setQuestion2_8([
          ...question2_8,
          { question: data["2_8_1"] },
          { question: data["2_8_2"] },
          { question: data["2_8_3"] },
          { question: data["2_8_4"] },
        ]);
      } else if (data["2_8_3"] !== "" && data["2_8_3"] !== null) {
        setQuestion2_8([
          ...question2_8,
          { question: data["2_8_1"] },
          { question: data["2_8_2"] },
          { question: data["2_8_3"] },
        ]);
      } else if (data["2_8_2"] !== "" && data["2_8_2"] !== null) {
        setQuestion2_8([
          ...question2_8,
          { question: data["2_8_1"] },
          { question: data["2_8_2"] },
        ]);
      } else if (data["2_8_1"] !== "" && data["2_8_1"] !== null) {
        setQuestion2_8([...question2_8, { question: data["2_8_1"] }]);
      }
      // 3-1
      if (data["3_1_5"] !== "" && data["3_1_5"] !== null) {
        setQuestion3_1([
          ...question3_1,
          { question: data["3_1_1"] },
          { question: data["3_1_2"] },
          { question: data["3_1_3"] },
          { question: data["3_1_4"] },
          { question: data["3_1_5"] },
        ]);
      } else if (data["3_1_4"] !== "" && data["3_1_4"] !== null) {
        setQuestion3_1([
          ...question3_1,
          { question: data["3_1_1"] },
          { question: data["3_1_2"] },
          { question: data["3_1_3"] },
          { question: data["3_1_4"] },
        ]);
      } else if (data["3_1_3"] !== "" && data["3_1_3"] !== null) {
        setQuestion3_1([
          ...question3_1,
          { question: data["3_1_1"] },
          { question: data["3_1_2"] },
          { question: data["3_1_3"] },
        ]);
      } else if (data["3_1_2"] !== "" && data["3_1_2"] !== null) {
        setQuestion3_1([
          ...question3_1,
          { question: data["3_1_1"] },
          { question: data["3_1_2"] },
        ]);
      } else if (data["3_1_1"] !== "" && data["3_1_1"] !== null) {
        setQuestion3_1([...question3_1, { question: data["3_1_1"] }]);
      }
      // 3-2
      if (data["3_2_5"] !== "" && data["3_2_5"] !== null) {
        setQuestion3_2([
          ...question3_2,
          { question: data["3_2_1"] },
          { question: data["3_2_2"] },
          { question: data["3_2_3"] },
          { question: data["3_2_4"] },
          { question: data["3_2_5"] },
        ]);
      } else if (data["3_2_4"] !== "" && data["3_2_4"] !== null) {
        setQuestion3_2([
          ...question3_2,
          { question: data["3_2_1"] },
          { question: data["3_2_2"] },
          { question: data["3_2_3"] },
          { question: data["3_2_4"] },
        ]);
      } else if (data["3_2_3"] !== "" && data["3_2_3"] !== null) {
        setQuestion3_2([
          ...question3_2,
          { question: data["3_2_1"] },
          { question: data["3_2_2"] },
          { question: data["3_2_3"] },
        ]);
      } else if (data["3_2_2"] !== "" && data["3_2_2"] !== null) {
        setQuestion3_2([
          ...question3_2,
          { question: data["3_2_1"] },
          { question: data["3_2_2"] },
        ]);
      } else if (data["3_2_1"] !== "" && data["3_2_1"] !== null) {
        setQuestion3_2([...question3_2, { question: data["3_2_1"] }]);
      }
      // 3-3
      if (data["3_3_5"] !== "" && data["3_3_5"] !== null) {
        setQuestion3_3([
          ...question3_3,
          { question: data["3_3_1"] },
          { question: data["3_3_2"] },
          { question: data["3_3_3"] },
          { question: data["3_3_4"] },
          { question: data["3_3_5"] },
        ]);
      } else if (data["3_3_4"] !== "" && data["3_3_4"] !== null) {
        setQuestion3_3([
          ...question3_3,
          { question: data["3_3_1"] },
          { question: data["3_3_2"] },
          { question: data["3_3_3"] },
          { question: data["3_3_4"] },
        ]);
      } else if (data["3_3_3"] !== "" && data["3_3_3"] !== null) {
        setQuestion3_3([
          ...question3_3,
          { question: data["3_3_1"] },
          { question: data["3_3_2"] },
          { question: data["3_3_3"] },
        ]);
      } else if (data["3_3_2"] !== "" && data["3_3_2"] !== null) {
        setQuestion3_3([
          ...question3_3,
          { question: data["3_3_1"] },
          { question: data["3_3_2"] },
        ]);
      } else if (data["3_3_1"] !== "" && data["3_3_1"] !== null) {
        setQuestion3_3([...question3_3, { question: data["3_3_1"] }]);
      }
      // 3-4
      if (data["3_4_5"] !== "" && data["3_4_5"] !== null) {
        setQuestion3_4([
          ...question3_4,
          { question: data["3_4_1"] },
          { question: data["3_4_2"] },
          { question: data["3_4_3"] },
          { question: data["3_4_4"] },
          { question: data["3_4_5"] },
        ]);
      } else if (data["3_4_4"] !== "" && data["3_4_4"] !== null) {
        setQuestion3_4([
          ...question3_4,
          { question: data["3_4_1"] },
          { question: data["3_4_2"] },
          { question: data["3_4_3"] },
          { question: data["3_4_4"] },
        ]);
      } else if (data["3_4_3"] !== "" && data["3_4_3"] !== null) {
        setQuestion3_4([
          ...question3_4,
          { question: data["3_4_1"] },
          { question: data["3_4_2"] },
          { question: data["3_4_3"] },
        ]);
      } else if (data["3_4_2"] !== "" && data["3_4_2"] !== null) {
        setQuestion3_4([
          ...question3_4,
          { question: data["3_4_1"] },
          { question: data["3_4_2"] },
        ]);
      } else if (data["3_4_1"] !== "" && data["3_4_1"] !== null) {
        setQuestion3_4([...question3_4, { question: data["3_4_1"] }]);
      }

      // 4-1
      if (data["4_1_5"] !== "" && data["4_1_5"] !== null) {
        setQuestion4_1([
          ...question4_1,
          { question: data["4_1_1"] },
          { question: data["4_1_2"] },
          { question: data["4_1_3"] },
          { question: data["4_1_4"] },
          { question: data["4_1_5"] },
        ]);
      } else if (data["4_1_4"] !== "" && data["4_1_4"] !== null) {
        setQuestion4_1([
          ...question4_1,
          { question: data["4_1_1"] },
          { question: data["4_1_2"] },
          { question: data["4_1_3"] },
          { question: data["4_1_4"] },
        ]);
      } else if (data["4_1_3"] !== "" && data["4_1_3"] !== null) {
        setQuestion4_1([
          ...question4_1,
          { question: data["4_1_1"] },
          { question: data["4_1_2"] },
          { question: data["4_1_3"] },
        ]);
      } else if (data["4_1_2"] !== "" && data["4_1_2"] !== null) {
        setQuestion4_1([
          ...question4_1,
          { question: data["4_1_1"] },
          { question: data["4_1_2"] },
        ]);
      } else if (data["4_1_1"] !== "" && data["4_1_1"] !== null) {
        setQuestion4_1([...question4_1, { question: data["4_1_1"] }]);
      }
      // 4-2
      if (data["4_2_5"] !== "" && data["4_2_5"] !== null) {
        setQuestion4_2([
          ...question4_2,
          { question: data["4_2_1"] },
          { question: data["4_2_2"] },
          { question: data["4_2_3"] },
          { question: data["4_2_4"] },
          { question: data["4_2_5"] },
        ]);
      } else if (data["4_2_4"] !== "" && data["4_2_4"] !== null) {
        setQuestion4_2([
          ...question4_2,
          { question: data["4_2_1"] },
          { question: data["4_2_2"] },
          { question: data["4_2_3"] },
          { question: data["4_2_4"] },
        ]);
      } else if (data["4_2_3"] !== "" && data["4_2_3"] !== null) {
        setQuestion4_2([
          ...question4_2,
          { question: data["4_2_1"] },
          { question: data["4_2_2"] },
          { question: data["4_2_3"] },
        ]);
      } else if (data["4_2_2"] !== "" && data["4_2_2"] !== null) {
        setQuestion4_2([
          ...question4_2,
          { question: data["4_2_1"] },
          { question: data["4_2_2"] },
        ]);
      } else if (data["4_2_1"] !== "" && data["4_2_1"] !== null) {
        setQuestion4_2([...question4_2, { question: data["4_2_1"] }]);
      }
    });
  }, []);

  const questionInputs = () => {
    let arr = [];
    let key = 0;
    for (let i = 1; i <= 6; i++) {
      arr.push(
        <input
          key={(key = key + 1)}
          className="Scan_detail_qna_client_kategorie_checkbox"
          id={`kategorie${i}`}
          type="checkbox"
          defaultChecked
        />
      );
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

  const handleQuestChange = (e, index, num) => {
    const { name, value } = e.target;
    if (num === 1_1) {
      const list = [...question1_1];
      list[index][name] = value;
      setQuestion1_1(list);
    } else if (num === 1_2) {
      const list = [...question1_2];
      list[index][name] = value;
      setQuestion1_2(list);
    } else if (num === 1_3) {
      const list = [...question1_3];
      list[index][name] = value;
      setQuestion1_3(list);
    } else if (num === 1_4) {
      const list = [...question1_4];
      list[index][name] = value;
      setQuestion1_4(list);
    } else if (num === 2_1) {
      const list = [...question2_1];
      list[index][name] = value;
      setQuestion2_1(list);
    } else if (num === 2_2) {
      const list = [...question2_2];
      list[index][name] = value;
      setQuestion2_2(list);
    } else if (num === 2_3) {
      const list = [...question2_3];
      list[index][name] = value;
      setQuestion2_3(list);
    } else if (num === 2_4) {
      const list = [...question2_4];
      list[index][name] = value;
      setQuestion2_4(list);
    } else if (num === 2_5) {
      const list = [...question2_5];
      list[index][name] = value;
      setQuestion2_5(list);
    } else if (num === 2_6) {
      const list = [...question2_6];
      list[index][name] = value;
      setQuestion2_6(list);
    } else if (num === 2_7) {
      const list = [...question2_7];
      list[index][name] = value;
      setQuestion2_7(list);
    } else if (num === 2_8) {
      const list = [...question2_8];
      list[index][name] = value;
      setQuestion2_8(list);
    } else if (num === 3_1) {
      const list = [...question3_1];
      list[index][name] = value;
      setQuestion3_1(list);
    } else if (num === 3_2) {
      const list = [...question3_2];
      list[index][name] = value;
      setQuestion3_2(list);
    } else if (num === 3_3) {
      const list = [...question3_3];
      list[index][name] = value;
      setQuestion3_3(list);
    } else if (num === 3_4) {
      const list = [...question3_4];
      list[index][name] = value;
      setQuestion3_4(list);
    } else if (num === 4_1) {
      const list = [...question4_1];
      list[index][name] = value;
      setQuestion4_1(list);
    } else if (num === 4_2) {
      const list = [...question4_2];
      list[index][name] = value;
      setQuestion4_2(list);
    }
  };

  const handleQuestAdd = (num) => {
    if (num === 1_1) {
      setQuestion1_1([...question1_1, { question: "" }]);
    } else if (num === 1_2) {
      setQuestion1_2([...question1_2, { question: "" }]);
    } else if (num === 1_3) {
      setQuestion1_3([...question1_3, { question: "" }]);
    } else if (num === 1_4) {
      setQuestion1_4([...question1_4, { question: "" }]);
    } else if (num === 2_1) {
      setQuestion2_1([...question2_1, { question: "" }]);
    } else if (num === 2_2) {
      setQuestion2_2([...question2_2, { question: "" }]);
    } else if (num === 2_3) {
      setQuestion2_3([...question2_3, { question: "" }]);
    } else if (num === 2_4) {
      setQuestion2_4([...question2_4, { question: "" }]);
    } else if (num === 2_5) {
      setQuestion2_5([...question2_5, { question: "" }]);
    } else if (num === 2_6) {
      setQuestion2_6([...question2_6, { question: "" }]);
    } else if (num === 2_7) {
      setQuestion2_7([...question2_7, { question: "" }]);
    } else if (num === 2_8) {
      setQuestion2_8([...question2_8, { question: "" }]);
    } else if (num === 3_1) {
      setQuestion3_1([...question3_1, { question: "" }]);
    } else if (num === 3_2) {
      setQuestion3_2([...question3_2, { question: "" }]);
    } else if (num === 3_3) {
      setQuestion3_3([...question3_3, { question: "" }]);
    } else if (num === 3_4) {
      setQuestion3_4([...question3_4, { question: "" }]);
    } else if (num === 4_1) {
      setQuestion4_1([...question4_1, { question: "" }]);
    } else if (num === 4_2) {
      setQuestion4_2([...question4_2, { question: "" }]);
    }
  };

  const handleQuestRemove = (index, num) => {
    if (num === 1_1) {
      const list = [...question1_1];
      list.splice(index, 1);
      setQuestion1_1(list);
    } else if (num === 1_2) {
      const list = [...question1_2];
      list.splice(index, 1);
      setQuestion1_2(list);
    } else if (num === 1_3) {
      const list = [...question1_3];
      list.splice(index, 1);
      setQuestion1_3(list);
    } else if (num === 1_4) {
      const list = [...question1_4];
      list.splice(index, 1);
      setQuestion1_4(list);
    } else if (num === 2_1) {
      const list = [...question2_1];
      list.splice(index, 1);
      setQuestion2_1(list);
    } else if (num === 2_2) {
      const list = [...question2_2];
      list.splice(index, 1);
      setQuestion2_2(list);
    } else if (num === 2_3) {
      const list = [...question2_3];
      list.splice(index, 1);
      setQuestion2_3(list);
    } else if (num === 2_4) {
      const list = [...question2_4];
      list.splice(index, 1);
      setQuestion2_4(list);
    } else if (num === 2_5) {
      const list = [...question2_5];
      list.splice(index, 1);
      setQuestion2_5(list);
    } else if (num === 2_6) {
      const list = [...question2_6];
      list.splice(index, 1);
      setQuestion2_6(list);
    } else if (num === 2_7) {
      const list = [...question2_7];
      list.splice(index, 1);
      setQuestion2_7(list);
    } else if (num === 2_8) {
      const list = [...question2_8];
      list.splice(index, 1);
      setQuestion2_8(list);
    } else if (num === 3_1) {
      const list = [...question3_1];
      list.splice(index, 1);
      setQuestion3_1(list);
    } else if (num === 3_2) {
      const list = [...question3_2];
      list.splice(index, 1);
      setQuestion3_2(list);
    } else if (num === 3_3) {
      const list = [...question3_3];
      list.splice(index, 1);
      setQuestion3_3(list);
    } else if (num === 3_4) {
      const list = [...question3_4];
      list.splice(index, 1);
      setQuestion3_4(list);
    } else if (num === 4_1) {
      const list = [...question4_1];
      list.splice(index, 1);
      setQuestion4_1(list);
    } else if (num === 4_2) {
      const list = [...question4_2];
      list.splice(index, 1);
      setQuestion4_2(list);
    }
  };
  const downloadFile = (url, fileName) => {
    fetch(url, { method: "GET" })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout((_) => {
          window.URL.revokeObjectURL(url);
        }, 10000);
        a.remove();
      })
      .catch((err) => {
        console.error("err: ", err);
      });
  };
  const questionList = {
    // 1-1
    question1_1_1: question1_1[0] ? question1_1[0].question : "",
    question1_1_2: question1_1[1] ? question1_1[1].question : "",
    question1_1_3: question1_1[2] ? question1_1[2].question : "",
    question1_1_4: question1_1[3] ? question1_1[3].question : "",
    question1_1_5: question1_1[4] ? question1_1[4].question : "",
    // 1-2
    question1_2_1: question1_2[0] ? question1_2[0].question : "",
    question1_2_2: question1_2[1] ? question1_2[1].question : "",
    question1_2_3: question1_2[2] ? question1_2[2].question : "",
    question1_2_4: question1_2[3] ? question1_2[3].question : "",
    question1_2_5: question1_2[4] ? question1_2[4].question : "",
    // 1-3
    question1_3_1: question1_3[0] ? question1_3[0].question : "",
    question1_3_2: question1_3[1] ? question1_3[1].question : "",
    question1_3_3: question1_3[2] ? question1_3[2].question : "",
    question1_3_4: question1_3[3] ? question1_3[3].question : "",
    question1_3_5: question1_3[4] ? question1_3[4].question : "",
    // 1-4
    question1_4_1: question1_4[0] ? question1_4[0].question : "",
    question1_4_2: question1_4[1] ? question1_4[1].question : "",
    question1_4_3: question1_4[2] ? question1_4[2].question : "",
    question1_4_4: question1_4[3] ? question1_4[3].question : "",
    question1_4_5: question1_4[4] ? question1_4[4].question : "",

    // 2-1
    question2_1_1: question2_1[0] ? question2_1[0].question : "",
    question2_1_2: question2_1[1] ? question2_1[1].question : "",
    question2_1_3: question2_1[2] ? question2_1[2].question : "",
    question2_1_4: question2_1[3] ? question2_1[3].question : "",
    question2_1_5: question2_1[4] ? question2_1[4].question : "",
    // 2-2
    question2_2_1: question2_2[0] ? question2_2[0].question : "",
    question2_2_2: question2_2[1] ? question2_2[1].question : "",
    question2_2_3: question2_2[2] ? question2_2[2].question : "",
    question2_2_4: question2_2[3] ? question2_2[3].question : "",
    question2_2_5: question2_2[4] ? question2_2[4].question : "",
    // 2-3
    question2_3_1: question2_3[0] ? question2_3[0].question : "",
    question2_3_2: question2_3[1] ? question2_3[1].question : "",
    question2_3_3: question2_3[2] ? question2_3[2].question : "",
    question2_3_4: question2_3[3] ? question2_3[3].question : "",
    question2_3_5: question2_3[4] ? question2_3[4].question : "",
    // 2-4
    question2_4_1: question2_4[0] ? question2_4[0].question : "",
    question2_4_2: question2_4[1] ? question2_4[1].question : "",
    question2_4_3: question2_4[2] ? question2_4[2].question : "",
    question2_4_4: question2_4[3] ? question2_4[3].question : "",
    question2_4_5: question2_4[4] ? question2_4[4].question : "",
    // 2-5
    question2_5_1: question2_5[0] ? question2_5[0].question : "",
    question2_5_2: question2_5[1] ? question2_5[1].question : "",
    question2_5_3: question2_5[2] ? question2_5[2].question : "",
    question2_5_4: question2_5[3] ? question2_5[3].question : "",
    question2_5_5: question2_5[4] ? question2_5[4].question : "",
    // 2-6
    question2_6_1: question2_6[0] ? question2_6[0].question : "",
    question2_6_2: question2_6[1] ? question2_6[1].question : "",
    question2_6_3: question2_6[2] ? question2_6[2].question : "",
    question2_6_4: question2_6[3] ? question2_6[3].question : "",
    question2_6_5: question2_6[4] ? question2_6[4].question : "",
    // 2-7
    question2_7_1: question2_7[0] ? question2_7[0].question : "",
    question2_7_2: question2_7[1] ? question2_7[1].question : "",
    question2_7_3: question2_7[2] ? question2_7[2].question : "",
    question2_7_4: question2_7[3] ? question2_7[3].question : "",
    question2_7_5: question2_7[4] ? question2_7[4].question : "",
    // 2-8
    question2_8_1: question2_8[0] ? question2_8[0].question : "",
    question2_8_2: question2_8[1] ? question2_8[1].question : "",
    question2_8_3: question2_8[2] ? question2_8[2].question : "",
    question2_8_4: question2_8[3] ? question2_8[3].question : "",
    question2_8_5: question2_8[4] ? question2_8[4].question : "",

    // 3-1
    question3_1_1: question3_1[0] ? question3_1[0].question : "",
    question3_1_2: question3_1[1] ? question3_1[1].question : "",
    question3_1_3: question3_1[2] ? question3_1[2].question : "",
    question3_1_4: question3_1[3] ? question3_1[3].question : "",
    question3_1_5: question3_1[4] ? question3_1[4].question : "",
    // 3-2
    question3_2_1: question3_2[0] ? question3_2[0].question : "",
    question3_2_2: question3_2[1] ? question3_2[1].question : "",
    question3_2_3: question3_2[2] ? question3_2[2].question : "",
    question3_2_4: question3_2[3] ? question3_2[3].question : "",
    question3_2_5: question3_2[4] ? question3_2[4].question : "",
    // 3-3
    question3_3_1: question3_3[0] ? question3_3[0].question : "",
    question3_3_2: question3_3[1] ? question3_3[1].question : "",
    question3_3_3: question3_3[2] ? question3_3[2].question : "",
    question3_3_4: question3_3[3] ? question3_3[3].question : "",
    question3_3_5: question3_3[4] ? question3_3[4].question : "",
    // 3-4
    question3_4_1: question3_4[0] ? question3_4[0].question : "",
    question3_4_2: question3_4[1] ? question3_4[1].question : "",
    question3_4_3: question3_4[2] ? question3_4[2].question : "",
    question3_4_4: question3_4[3] ? question3_4[3].question : "",
    question3_4_5: question3_4[4] ? question3_4[4].question : "",

    // 4-1
    question4_1_1: question4_1[0] ? question4_1[0].question : "",
    question4_1_2: question4_1[1] ? question4_1[1].question : "",
    question4_1_3: question4_1[2] ? question4_1[2].question : "",
    question4_1_4: question4_1[3] ? question4_1[3].question : "",
    question4_1_5: question4_1[4] ? question4_1[4].question : "",
    // 4-2
    question4_2_1: question4_2[0] ? question4_2[0].question : "",
    question4_2_2: question4_2[1] ? question4_2[1].question : "",
    question4_2_3: question4_2[2] ? question4_2[2].question : "",
    question4_2_4: question4_2[3] ? question4_2[3].question : "",
    question4_2_5: question4_2[4] ? question4_2[4].question : "",
  };

  //제출하기 버튼 클릭 시 유효성 검사
  const onClickSubmitModal = () => {
    if (
      questionList.question1_1_1 !== "" ||
      questionList.question1_2_1 !== "" ||
      questionList.question1_3_1 !== "" ||
      questionList.question1_4_1 !== "" ||
      questionList.question2_1_1 !== "" ||
      questionList.question2_2_1 !== "" ||
      questionList.question2_3_1 !== "" ||
      questionList.question2_4_1 !== "" ||
      questionList.question2_5_1 !== "" ||
      questionList.question2_6_1 !== "" ||
      questionList.question2_7_1 !== "" ||
      questionList.question2_8_1 !== "" ||
      questionList.question3_1_1 !== "" ||
      questionList.question3_2_1 !== "" ||
      questionList.question3_3_1 !== "" ||
      questionList.question3_4_1 !== "" ||
      questionList.question4_1_1 !== "" ||
      questionList.question4_2_1 !== ""
    ) {
      setSubmitModal(true);
    } else {
      setNoWriteModal(true);
    }
  };
  const onClickSubmit = async (key) => {
    let state = "";
    if (key === "save") {
      state =
        writerState.STATE_NAME === "추가포커스 밸류체인 작성중"
          ? "FOCUS_A1"
          : "FOCUS_A3";
      setSaveModal(true);
    } else if (key == "submit") {
      state =
        writerState.STATE_NAME === "추가포커스 밸류체인 작성중"
          ? "FOCUS_A2"
          : "FOCUS_A4";
      setIsLoad(true);
    } else if (key === "report") {
      state = "FOCUS_A5";
    }
    await Axios.put("http://34.68.101.191:8000/put/Focus_qna_2_write", {
      business_name,
      writerList,
      state,
      questionList,
    }).then((response) => {
      console.log(response.data);
      if (state === "FOCUS_A2" || state === "FOCUS_A4") {
        window.location.href = "/Home_writer";
      }
    });
  };
  // 제출하기 클릭
  const [submitModal, setSubmitModal] = useState(false);
  // 저장하기 클릭
  const [saveModal, setSaveModal] = useState(false);
  // 내용작성 하지 않고 제출하기 클릭
  const [noWriteModal, setNoWriteModal] = useState(false);
  // 리포트 업로드 이동
  const [reportModal, setReportModal] = useState(false);
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
      if (
        setReportModal &&
        modalOutSide.current &&
        !modalOutSide.current.contains(e.target)
      ) {
        setReportModal(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);
  console.log(writerState);
  return (
    <>
      {questionInputs()}
      <Header title="SCANNer 진행 현황" img="./img/focus_icon.png" />
      {isLoad && <Loading />}
      <div className="Scan_top">
        <p>회원명 : {client_name}</p>
        <p className="Scan_top_boder_left">
          사업명 : {writerState.BUSINESS_NAME}
        </p>
        <p className="Scan_top_boder">제출일시 : {writerState.CREATED_DATE}</p>
        <p>현재상태 : {writerState.STATE_NAME}</p>
      </div>

      <div className="Scan_report_writer_inner">
        {/* 1번째 카테고리 */}
        <div className="Scan_report_writer_inner_content">
          <div className="Scan_report_writer_inner_content_title">
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
          <div className="Scan_report_writer_inner_content_box con1">
            {question1.map((item, index) => (
              <div key={index}>
                <div>
                  <div className="Scan_report_writer_inner_content_group_box">
                    <>
                      <div className="Scan_report_writer_inner_content_box_content">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>
                            {`1-${index + 1}`}.{" "}
                            <input type="text" value={item.question} disabled />
                          </p>
                          {item.file !== "" ? (
                            <div className="Scan_report_writer_inner_content_box_file">
                              <img src="./img/upload.png" alt="img" />
                              <p
                                onClick={() => {
                                  downloadFile(
                                    `http://34.68.101.191:8000/file/${item.file}`,
                                    item.file
                                  );
                                }}
                              >
                                첨부파일
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="Scan_report_writer_inner_content_box_text">
                          <textarea value={item.answer} disabled />
                        </div>
                      </div>
                      <div className="Scan_report_writer_inner_content_box1">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>AS - IS 이슈</p>
                        </div>
                        <div className="Scan_report_writer_inner_content_box_text">
                          <textarea
                            name={`as_is1_${index + 1}`}
                            onChange={getValue}
                            value={
                              item.key === "1_1"
                                ? writerList.as_is1_1
                                : item.key === "1_2"
                                ? writerList.as_is1_2
                                : item.key === "1_3"
                                ? writerList.as_is1_3
                                : item.key === "1_4"
                                ? writerList.as_is1_4
                                : ""
                            }
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                          />
                        </div>
                      </div>
                      <div className="Scan_report_writer_inner_content_box2">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>키워드</p>
                        </div>
                        <div className="Scan_report_writer_inner_content_box_text">
                          <textarea
                            name={`keyword1_${index + 1}`}
                            onChange={getValue}
                            value={
                              item.key === "1_1"
                                ? writerList.keyword1_1
                                : item.key === "1_2"
                                ? writerList.keyword1_2
                                : item.key === "1_3"
                                ? writerList.keyword1_3
                                : item.key === "1_4"
                                ? writerList.keyword1_4
                                : ""
                            }
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                          />
                        </div>
                      </div>
                    </>
                  </div>
                </div>
                {item.key === "1_1" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question1_1.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(1_1);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question1_1.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 1_1);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 1_1);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question1_1.length - 1 === index &&
                              question1_1.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(1_1);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "1_2" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question1_2.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(1_2);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question1_2.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 1_2);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 1_2);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question1_2.length - 1 === index &&
                              question1_2.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(1_2);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "1_3" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question1_3.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(1_3);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question1_3.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 1_3);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 1_3);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question1_3.length - 1 === index &&
                              question1_3.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(1_3);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "1_4" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question1_4.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(1_4);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question1_4.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 1_4);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 1_4);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question1_4.length - 1 === index &&
                              question1_4.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(1_4);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        {/* 2번째 카테고리 */}
        <div className="Scan_report_writer_inner_content">
          <div className="Scan_report_writer_inner_content_title">
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
          <div className="Scan_report_writer_inner_content_box con2">
            {question2.map((item, index) => (
              <div key={index}>
                <div className="Scan_report_writer_inner_content_group_box">
                  <>
                    <div className="Scan_report_writer_inner_content_box_content">
                      <div className="Scan_report_writer_inner_content_box_title">
                        <p>
                          {`2-${index + 1}`}.{" "}
                          <input type="text" value={item.question} disabled />
                        </p>
                        {item.file !== "" ? (
                          <div className="Scan_report_writer_inner_content_box_file">
                            <img src="./img/upload.png" alt="img" />
                            <p
                              onClick={() => {
                                downloadFile(
                                  `http://34.68.101.191:8000/file/${item.file}`,
                                  item.file
                                );
                              }}
                            >
                              첨부파일
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="Scan_report_writer_inner_content_box_text">
                        <textarea value={item.answer} disabled />
                      </div>
                    </div>
                    <div className="Scan_report_writer_inner_content_box1">
                      <div className="Scan_report_writer_inner_content_box_title">
                        <p>AS - IS 이슈</p>
                      </div>
                      <div className="Scan_report_writer_inner_content_box_text">
                        <textarea
                          name={`as_is2_${index + 1}`}
                          onChange={getValue}
                          value={
                            item.key === "2_1"
                              ? writerList.as_is2_1
                              : item.key === "2_2"
                              ? writerList.as_is2_2
                              : item.key === "2_3"
                              ? writerList.as_is2_3
                              : item.key === "2_4"
                              ? writerList.as_is2_4
                              : item.key === "2_5"
                              ? writerList.as_is2_5
                              : item.key === "2_6"
                              ? writerList.as_is2_6
                              : item.key === "2_7"
                              ? writerList.as_is2_7
                              : item.key === "2_8"
                              ? writerList.as_is2_8
                              : ""
                          }
                          disabled={
                            writerState.STATE_NAME.slice(-4) === "제출완료"
                              ? true
                              : false
                          }
                        />
                      </div>
                    </div>
                    <div className="Scan_report_writer_inner_content_box2">
                      <div className="Scan_report_writer_inner_content_box_title">
                        <p>키워드</p>
                      </div>
                      <div className="Scan_report_writer_inner_content_box_text">
                        <textarea
                          name={`keyword2_${index + 1}`}
                          onChange={getValue}
                          value={
                            item.key === "2_1"
                              ? writerList.keyword2_1
                              : item.key === "2_2"
                              ? writerList.keyword2_2
                              : item.key === "2_3"
                              ? writerList.keyword2_3
                              : item.key === "2_4"
                              ? writerList.keyword2_4
                              : item.key === "2_5"
                              ? writerList.keyword2_5
                              : item.key === "2_6"
                              ? writerList.keyword2_6
                              : item.key === "2_7"
                              ? writerList.keyword2_7
                              : item.key === "2_8"
                              ? writerList.keyword2_8
                              : ""
                          }
                          disabled={
                            writerState.STATE_NAME.slice(-4) === "제출완료"
                              ? true
                              : false
                          }
                        />
                      </div>
                    </div>
                  </>
                </div>
                {item.key === "2_1" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question2_1.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(2_1);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question2_1.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 2_1);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 2_1);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question2_1.length - 1 === index &&
                              question2_1.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(2_1);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "2_2" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question2_2.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(2_2);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question2_2.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 2_2);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 2_2);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question2_2.length - 1 === index &&
                              question2_2.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(2_2);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "2_3" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question2_3.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(2_3);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question2_3.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 2_3);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 2_3);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question2_3.length - 1 === index &&
                              question2_3.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(2_3);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "2_4" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question2_4.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(2_4);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question2_4.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 2_4);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 2_4);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question2_4.length - 1 === index &&
                              question2_4.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(2_4);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "2_5" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question2_5.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(2_5);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question2_5.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 2_5);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 2_5);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question2_5.length - 1 === index &&
                              question2_5.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(2_5);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "2_6" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question2_6.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(2_6);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question2_6.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 2_6);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 2_6);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question2_6.length - 1 === index &&
                              question2_6.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(2_6);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "2_7" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question2_7.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(2_7);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question2_7.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 2_7);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 2_7);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question2_7.length - 1 === index &&
                              question2_7.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(2_7);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "2_8" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question2_8.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(2_8);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question2_8.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 2_8);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 2_8);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question2_8.length - 1 === index &&
                              question2_8.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(2_8);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        {/* 3번째 카테고리 */}
        <div className="Scan_report_writer_inner_content">
          <div className="Scan_report_writer_inner_content_title">
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
          <div className="Scan_report_writer_inner_content_box con3">
            {question3.map((item, index) => (
              <div key={index}>
                <div className="Scan_report_writer_inner_content_group_box">
                  <>
                    <div className="Scan_report_writer_inner_content_box_content">
                      <div className="Scan_report_writer_inner_content_box_title">
                        <p>
                          {`3-${index + 1}`}.{" "}
                          <input type="text" value={item.question} disabled />
                        </p>
                        {item.file !== "" ? (
                          <div className="Scan_report_writer_inner_content_box_file">
                            <img src="./img/upload.png" alt="img" />
                            <p
                              onClick={() => {
                                downloadFile(
                                  `http://34.68.101.191:8000/file/${item.file}`,
                                  item.file
                                );
                              }}
                            >
                              첨부파일
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="Scan_report_writer_inner_content_box_text">
                        <textarea value={item.answer} disabled />
                      </div>
                    </div>
                    <div className="Scan_report_writer_inner_content_box1">
                      <div className="Scan_report_writer_inner_content_box_title">
                        <p>AS - IS 이슈</p>
                      </div>
                      <div className="Scan_report_writer_inner_content_box_text">
                        <textarea
                          name={`as_is3_${index + 1}`}
                          onChange={getValue}
                          value={
                            item.key === "3_1"
                              ? writerList.as_is3_1
                              : item.key === "3_2"
                              ? writerList.as_is3_2
                              : item.key === "3_3"
                              ? writerList.as_is3_3
                              : item.key === "3_4"
                              ? writerList.as_is3_4
                              : ""
                          }
                          disabled={
                            writerState.STATE_NAME.slice(-4) === "제출완료"
                              ? true
                              : false
                          }
                        />
                      </div>
                    </div>
                    <div className="Scan_report_writer_inner_content_box2">
                      <div className="Scan_report_writer_inner_content_box_title">
                        <p>키워드</p>
                      </div>
                      <div className="Scan_report_writer_inner_content_box_text">
                        <textarea
                          name={`keyword3_${index + 1}`}
                          onChange={getValue}
                          value={
                            item.key === "3_1"
                              ? writerList.keyword3_1
                              : item.key === "3_2"
                              ? writerList.keyword3_2
                              : item.key === "3_3"
                              ? writerList.keyword3_3
                              : item.key === "3_4"
                              ? writerList.keyword3_4
                              : ""
                          }
                          disabled={
                            writerState.STATE_NAME.slice(-4) === "제출완료"
                              ? true
                              : false
                          }
                        />
                      </div>
                    </div>
                  </>
                </div>
                {item.key === "3_1" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question3_1.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(3_1);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question3_1.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 3_1);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 3_1);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question3_1.length - 1 === index &&
                              question3_1.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(3_1);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "3_2" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question3_2.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(3_2);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question3_2.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 3_2);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 3_2);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question3_2.length - 1 === index &&
                              question3_2.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(3_2);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "3_3" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question3_3.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(3_3);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question3_3.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 3_3);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 3_3);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question3_3.length - 1 === index &&
                              question3_3.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(3_3);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "3_4" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question3_4.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(3_4);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question3_4.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 3_4);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 3_4);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question3_4.length - 1 === index &&
                              question3_4.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(3_4);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        {/* 4번째 카테고리 */}
        <div className="Scan_report_writer_inner_content">
          <div className="Scan_report_writer_inner_content_title">
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
          <div className="Scan_report_writer_inner_content_box con4">
            {question4.map((item, index) => (
              <div key={index}>
                <div className="Scan_report_writer_inner_content_group_box">
                  <>
                    <div className="Scan_report_writer_inner_content_box_content">
                      <div className="Scan_report_writer_inner_content_box_title">
                        <p>
                          {`4-${index + 1}`}.{" "}
                          <input type="text" value={item.question} disabled />
                        </p>
                        {item.file !== "" ? (
                          <div className="Scan_report_writer_inner_content_box_file">
                            <img src="./img/upload.png" alt="img" />
                            <p
                              onClick={() => {
                                downloadFile(
                                  `http://34.68.101.191:8000/file/${item.file}`,
                                  item.file
                                );
                              }}
                            >
                              첨부파일
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="Scan_report_writer_inner_content_box_text">
                        <textarea value={item.answer} disabled />
                      </div>
                    </div>
                    <div className="Scan_report_writer_inner_content_box1">
                      <div className="Scan_report_writer_inner_content_box_title">
                        <p>AS - IS 이슈</p>
                      </div>
                      <div className="Scan_report_writer_inner_content_box_text">
                        <textarea
                          name={`as_is4_${index + 1}`}
                          onChange={getValue}
                          value={
                            item.key === "4_1"
                              ? writerList.as_is4_1
                              : item.key === "4_2"
                              ? writerList.as_is4_2
                              : ""
                          }
                        />
                      </div>
                    </div>
                    <div className="Scan_report_writer_inner_content_box2">
                      <div className="Scan_report_writer_inner_content_box_title">
                        <p>키워드</p>
                      </div>
                      <div className="Scan_report_writer_inner_content_box_text">
                        <textarea
                          name={`keyword4_${index + 1}`}
                          onChange={getValue}
                          value={
                            item.key === "4_1"
                              ? writerList.keyword4_1
                              : item.key === "4_2"
                              ? writerList.keyword4_2
                              : ""
                          }
                        />
                      </div>
                    </div>
                  </>
                </div>
                {item.key === "4_1" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question4_1.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(4_1);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question4_1.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 4_1);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 4_1);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question4_1.length - 1 === index &&
                              question4_1.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(4_1);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : item.key === "4_2" ? (
                  <>
                    {writerState.STATE_NAME.slice(-4) === "제출완료"
                      ? ""
                      : question4_2.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(4_2);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question4_2.map((item, index) => (
                      <div
                        key={index}
                        className="Scan_qna2_writer_inner_content_box"
                      >
                        <div className="Scan_qna2_writer_inner_content_box_text1">
                          <input
                            type="text"
                            name="question"
                            id="question_qna2"
                            value={item.question}
                            onChange={(e) => {
                              handleQuestChange(e, index, 4_2);
                            }}
                            disabled={
                              writerState.STATE_NAME.slice(-4) === "제출완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 4_2);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME.slice(-4) === "제출완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question4_2.length - 1 === index &&
                              question4_2.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(4_2);
                                  }}
                                >
                                  <img src="./img/scan_ii_plus.png" alt="img" />
                                </button>
                              )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        {writerState.STATE_NAME === "추가포커스 플랫폼 제출완료" ||
        writerState.STATE_NAME === "추가포커스 밸류체인 제출완료" ? (
          ""
        ) : (
          <div className="Scan_report_writer_inner_btn writer_qna_2_btn">
            <button
              className="Scan_report_writer_inner_btn_save"
              onClick={() => {
                setReportModal(true);
              }}
            >
              리포트 업로드로 돌아가기
            </button>
            <button
              className="Scan_report_writer_inner_btn_save"
              onClick={() => {
                onClickSubmit("save");
              }}
            >
              저장하기
            </button>
            <button
              className="Scan_report_writer_inner_btn_submit"
              onClick={onClickSubmitModal}
            >
              제출하기
            </button>
          </div>
        )}
      </div>
      {submitModal && (
        <div ref={modalOutSide} className="submit_Modal">
          <img src="./img/popup_18.png" alt="img" />
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
      {reportModal && (
        <div ref={modalOutSide} className="submit_Modal">
          <img src="./img/popup_13.png" alt="img" />
          <div className="submit_Modal_btn">
            <button
              onClick={() => {
                setReportModal(false);
              }}
            ></button>
            <NavLink
              onClick={() => {
                onClickSubmit("report");
              }}
              to="/Focus_report_writer"
              state={{ writerData: writerState, client_name: client_name }}
            >
              <button style={{ width: "180px" }}></button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Focus_qna_2_writer;
