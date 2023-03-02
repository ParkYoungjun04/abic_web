import "../ScanPages/Scan_report_writer.css";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/print/lib/styles/index.css";
import Axios from "axios";
import Header from "../Header";
const Focus_report_writer = () => {
  const location = useLocation({});

  const writerData = location.state.writerData;

  const client_name = location.state.client_name;

  const [writerState, setWriterState] = useState("");

  useEffect(() => {
    Axios.get("http://34.68.101.191:8000/get/Focus_state", {
      params: { business_name: writerData.BUSINESS_NAME },
    }).then((response) => {
      setWriterState(response.data[0]);
    });
  }, [writerData, client_name]);

  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [question4, setQuestion4] = useState([]);

  // as-is, 키워드 변수
  const [writerList, setWriterList] = useState({});

  const [pdfUrl, setPdfUrl] = useState("");

  // 첨부파일
  const [writerFile, setWriterFile] = useState("");
  const onChangeFile = (e) => {
    let file = e.target.files[0] === undefined ? "" : e.target.files[0];
    setWriterFile(file);
    let selectFile = e.target.files[0];
    const allowedFiles = ["application/pdf"];
    if (selectFile) {
      if (selectFile && allowedFiles.includes(selectFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectFile);
        reader.onloadend = (e) => {
          setPdfUrl(e.target.result);
        };
      }
    }
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setWriterList({
      ...writerList,
      [name]: value,
    });
  };

  useEffect(() => {
    let answer = "";
    let writerList = "";
    let question2 = "";
    let answer2 = "";
    Axios.get("http://34.68.101.191:8000/get/Focus_qna_client", {
      params: { business_name: writerData.BUSINESS_NAME },
    }).then((response) => {
      answer = response.data[0];

      Axios.get("http://34.68.101.191:8000/get/Focus_report_writer", {
        params: { business_name: writerData.BUSINESS_NAME },
      }).then((response) => {
        writerList = response.data[0];

        setWriterFile(
          writerList.FILE_NAME
            ? {
                name: writerList.FILE_NAME,
              }
            : ""
        );
        setPdfUrl(
          writerList.FILE_NAME
            ? "http://34.68.101.191:8000/file/" + writerList.FILE_NAME
            : ""
        );
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
        //  밸류체인
        if (writerData.QUESTION_TYPE === "b") {
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
              question:
                "완성품을 단기간 내에 생산하여 출시하는 것이 가능합니까?",
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
              question:
                "사업 개시 후 1~2년 내 예상하는 수익은 어느 정도입니까? ",
              answer: answer["4_2"],
              file: answer["F_4_2"],
            },
          ]);
        } else if (writerData.QUESTION_TYPE === "p") {
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
    });
    // 추가 질문, 답변
    Axios.get("http://34.68.101.191:8000/get/Focus_qna_2_write", {
      params: { business_name: writerData.BUSINESS_NAME },
    }).then((response) => {
      question2 = response.data[0];
      Axios.get("http://34.68.101.191:8000/get/Focus_qna_2_client", {
        params: { business_name: writerData.BUSINESS_NAME },
      }).then((response) => {
        answer2 = response.data[0];
        console.log(question2);
        console.log(answer2);
        setDetail2Button(answer2["1_1_1"] === null ? true : false);
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
        />
      );
    }

    return arr;
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

  //제출하기 버튼 클릭 시 유효성 검사
  const onClickSubmitModal = () => {
    if (writerFile) {
      setSubmitModal(true);
    } else {
      setNoWriteModal(true);
    }
  };

  const onClickSubmit = async (key) => {
    let state = "";
    if (key === "save") {
      state = "FOCUS_C3";
      // FOCUS_A5
      setSaveModal(true);
    } else if (key === "submit") {
      state = "FOCUS_C6";
      // FOCUS_A6

      setTimeout(() => (window.location.href = "/Home_writer"), 500);
    } else if (key === "qna2") {
      if (writerData.QUESTION_TYPE === "b") {
        state = "FOCUS_A1";
      } else if (writerData.QUESTION_TYPE === "p") {
        state = "FOCUS_A3";
      }
    }
    const formDate = new FormData();
    formDate.append("file", writerFile ? writerFile : "");
    formDate.append("fileName", writerFile ? writerFile.name : "");
    formDate.append("business_name", writerData.BUSINESS_NAME);
    formDate.append("writerList", JSON.stringify(writerList));
    formDate.append("state", state);
    await Axios.put(
      "http://34.68.101.191:8000/put/Focus_report_writer",
      formDate
    );
  };
  //파일미리 보기
  const [writerFileModal, setWriterFileModal] = useState(false);
  // 제출하기 클릭
  const [submitModal, setSubmitModal] = useState(false);
  // 저장하기 클릭
  const [saveModal, setSaveModal] = useState(false);
  // 내용작성 하지 않고 제출하기 클릭
  const [noWriteModal, setNoWriteModal] = useState(false);
  // 세부스캔 II 이동
  const [detailedModal, setDetailedModal] = useState(false);
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
        setDetailedModal &&
        modalOutSide.current &&
        !modalOutSide.current.contains(e.target)
      ) {
        setDetailedModal(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  // 세부스캔 II 질문 요청을 했으면 버튼 안보임
  const [detail2Button, setDetail2Button] = useState(true);
  // 세부스캔 II 질문, 답변
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

  return (
    <>
      {questionInputs()}
      <Header title="FOCUSer 리포트 업로드" img="./img/focus_icon.png" />
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
                <div className="Scan_report_writer_inner_content_group_box">
                  <>
                    <div className="Scan_report_writer_inner_content_box_content">
                      <div className="Scan_report_writer_inner_content_box_title">
                        <p>
                          {`1-${index + 1}`}{" "}
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
                            writerData.STATE_NAME === "리포트 제출완료"
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
                            writerData.STATE_NAME === "리포트 제출완료"
                              ? true
                              : false
                          }
                        />
                      </div>
                    </div>
                  </>
                </div>
                {item.key === "1_1"
                  ? question1_1.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              1-1-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              1-2-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              1-3-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              1-4-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          {`2-${index + 1}`}{" "}
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
                            writerData.STATE_NAME === "리포트 제출완료"
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
                            writerData.STATE_NAME === "리포트 제출완료"
                              ? true
                              : false
                          }
                        />
                      </div>
                    </div>
                  </>
                </div>
                {item.key === "2_1"
                  ? question2_1.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              2-1-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              2-2-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              2-3-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              2-4-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              2-5-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              2-6-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              2-7-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              2-8-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          {`3-${index + 1}`}{" "}
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
                            writerData.STATE_NAME === "리포트 제출완료"
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
                            writerData.STATE_NAME === "리포트 제출완료"
                              ? true
                              : false
                          }
                        />
                      </div>
                    </div>
                  </>
                </div>
                {item.key === "3_1"
                  ? question3_1.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              3-1-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              3-2-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              3-3-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              3-4-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          {`4-${index + 1}`}{" "}
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
                          disabled={
                            writerData.STATE_NAME === "리포트 제출완료"
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
                          name={`keyword4_${index + 1}`}
                          onChange={getValue}
                          value={
                            item.key === "4_1"
                              ? writerList.keyword4_1
                              : item.key === "4_2"
                              ? writerList.keyword4_2
                              : ""
                          }
                          disabled={
                            writerData.STATE_NAME === "리포트 제출완료"
                              ? true
                              : false
                          }
                        />
                      </div>
                    </div>
                  </>
                </div>
                {item.key === "4_1"
                  ? question4_1.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              4-1-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              4-2-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                          </div>
                          <div className="Scan_report_writer_qna2_box_text">
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
        <div
          style={{ marginTop: "250px" }}
          className="Scan_report_writer_inner_file"
        >
          <input
            type="file"
            id="report_file"
            onChange={onChangeFile}
            disabled={
              writerData.STATE_NAME === "리포트 제출완료" ? true : false
            }
          />
          <label htmlFor="report_file" className="file_content">
            <p>첨부파일</p>
            {writerFile ? (
              <p style={{ color: "black" }}>{writerFile.name}</p>
            ) : (
              <p>선택된 파일 없음</p>
            )}
          </label>
          <p
            onClick={() => {
              writerFile ? setWriterFileModal(true) : setWriterFileModal(false);
            }}
          >
            미리보기
          </p>
        </div>
        {writerData.STATE_NAME === "리포트 제출완료" ? (
          ""
        ) : (
          <div className="Scan_report_writer_inner_btn">
            {detail2Button && (
              <button
                className="Scan_report_writer_inner_btn_save"
                onClick={() => {
                  setDetailedModal(true);
                }}
              >
                추가포커스 요청하기
              </button>
            )}

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
      {writerFileModal && (
        <div className="Scan_report_writer_file_view_modal">
          <img
            src="./img/close.png"
            alt="img"
            className="Scan_report_writer_file_view_modal_close"
            onClick={() => {
              setWriterFileModal(false);
            }}
          />

          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfUrl} defaultScale={SpecialZoomLevel.PageFit} />
          </Worker>
        </div>
      )}
      {submitModal && (
        <div ref={modalOutSide} className="submit_Modal">
          <img src="./img/popup_10.png" alt="img" />
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
          <img src="./img/popup_9.png" alt="img" />
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
      {detailedModal && (
        <div ref={modalOutSide} className="submit_Modal">
          <img src="./img/popup_11.png" alt="img" />
          <div className="submit_Modal_btn">
            <button
              onClick={() => {
                setDetailedModal(false);
              }}
            ></button>
            <NavLink
              onClick={() => {
                onClickSubmit("qna2");
              }}
              to="/Focus_qna_2_writer"
              state={{
                business_name: writerData.BUSINESS_NAME,
                client_name: client_name,
              }}
            >
              <button style={{ width: "180px" }}></button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Focus_report_writer;
