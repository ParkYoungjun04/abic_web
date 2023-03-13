import "./Scan_report_writer.css";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/print/lib/styles/index.css";
import Axios from "axios";
import Header from "../Header";
import Loading from "../Loading";
const Scan_report_writer = () => {
  const [isLoad, setIsLoad] = useState(false);

  const location = useLocation({});

  // 컨설턴트 정보
  const writerData = location.state.writerData;

  // 고객 이름
  const client_name = location.state.client_name;
  // 컨설턴트 상태
  const [writerState, setWriterState] = useState("");
  useEffect(() => {
    Axios.get("http://34.68.101.191:8000/get/Scan_state", {
      params: { business_name: writerData.BUSINESS_NAME, key: "writer" },
    }).then((response) => {
      setWriterState(response.data[0]);
    });
  }, [writerData]);
  // 카테고리
  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [question4, setQuestion4] = useState([]);
  const [question5, setQuestion5] = useState([]);
  const [question6, setQuestion6] = useState([]);

  // 세부질문 답변 파일
  const [files, setFiles] = useState({
    file1_1: "",
    file1_2: "",
    file1_3: "",
    file1_4: "",

    file2_1: "",
    file2_2: "",
    file2_3: "",
    file2_4: "",

    file3_1: "",
    file3_2: "",
    file3_3: "",
    file3_4: "",

    file4_1: "",
    file4_2: "",
    file4_3: "",
    file4_4: "",

    file5_1: "",
    file5_2: "",
    file5_3: "",
    file5_4: "",

    file6_1: "",
    file6_2: "",
  });
  // 세부질문 답변 리스트
  const [answerList, setAnswerList] = useState({
    answer1_1: "",
    answer1_2: "",
    answer1_3: "",
    answer1_4: "",

    answer2_1: "",
    answer2_2: "",
    answer2_3: "",
    answer2_4: "",

    answer3_1: "",
    answer3_2: "",
    answer3_3: "",
    answer3_4: "",

    answer4_1: "",
    answer4_2: "",
    answer4_3: "",
    answer4_4: "",

    answer5_1: "",
    answer5_2: "",
    answer5_3: "",
    answer5_4: "",

    answer6_1: "",
    answer6_2: "",
  });
  // 세부스캔 저장된 답변, 저장된 파일, 세부스캔 II질문, 세부스캔 II답변
  useEffect(() => {
    let question = "";
    let answer = "";
    let question2 = "";
    let answer2 = "";
    Axios.get("http://34.68.101.191:8000/get/Scan_detail_qna_client", {
      params: { business_name: writerData.BUSINESS_NAME },
    }).then((response) => {
      answer = response.data[0];
      Axios.get("http://34.68.101.191:8000/get/Scan_qna_writer", {
        params: { business_name: writerData.BUSINESS_NAME },
      }).then((response) => {
        question = response.data[0];
        setAnswerList({
          ...answerList,
          answer1_1: question["1_1"]
            ? answer["1_1"]
              ? answer["1_1"]
              : ""
            : " ",
          answer1_2: question["1_2"]
            ? answer["1_2"]
              ? answer["1_2"]
              : ""
            : " ",
          answer1_3: question["1_3"]
            ? answer["1_3"]
              ? answer["1_3"]
              : ""
            : " ",
          answer1_4: question["1_4"]
            ? answer["1_4"]
              ? answer["1_4"]
              : ""
            : " ",

          answer2_1: question["2_1"]
            ? answer["2_1"]
              ? answer["2_1"]
              : ""
            : " ",
          answer2_2: question["2_2"]
            ? answer["2_2"]
              ? answer["2_2"]
              : ""
            : " ",
          answer2_3: question["2_3"]
            ? answer["2_3"]
              ? answer["2_3"]
              : ""
            : " ",
          answer2_4: question["2_4"]
            ? answer["2_4"]
              ? answer["2_4"]
              : ""
            : " ",

          answer3_1: question["3_1"]
            ? answer["3_1"]
              ? answer["3_1"]
              : ""
            : " ",
          answer3_2: question["3_2"]
            ? answer["3_2"]
              ? answer["3_2"]
              : ""
            : " ",
          answer3_3: question["3_3"]
            ? answer["3_3"]
              ? answer["3_3"]
              : ""
            : " ",
          answer3_4: question["3_4"]
            ? answer["3_4"]
              ? answer["3_4"]
              : ""
            : " ",

          answer4_1: question["4_1"]
            ? answer["4_1"]
              ? answer["4_1"]
              : ""
            : " ",
          answer4_2: question["4_2"]
            ? answer["4_2"]
              ? answer["4_2"]
              : ""
            : " ",
          answer4_3: question["4_3"]
            ? answer["4_3"]
              ? answer["4_3"]
              : ""
            : " ",
          answer4_4: question["4_4"]
            ? answer["4_4"]
              ? answer["4_4"]
              : ""
            : " ",

          answer5_1: question["5_1"]
            ? answer["5_1"]
              ? answer["5_1"]
              : ""
            : " ",
          answer5_2: question["5_2"]
            ? answer["5_2"]
              ? answer["5_2"]
              : ""
            : " ",
          answer5_3: question["5_3"]
            ? answer["5_3"]
              ? answer["5_3"]
              : ""
            : " ",
          answer5_4: question["5_4"]
            ? answer["5_4"]
              ? answer["5_4"]
              : ""
            : " ",

          answer6_1: answer["6_1"] ? answer["6_1"] : "",
          answer6_2: answer["6_2"] ? answer["6_2"] : "",
        });

        setFiles({
          ...files,
          file1_1: answer["F_1_1"] ? { name: answer["F_1_1"] } : "",
          file1_2: answer["F_1_2"] ? { name: answer["F_1_2"] } : "",
          file1_3: answer["F_1_3"] ? { name: answer["F_1_3"] } : "",
          file1_4: answer["F_1_4"] ? { name: answer["F_1_4"] } : "",

          file2_1: answer["F_2_1"] ? { name: answer["F_2_1"] } : "",
          file2_2: answer["F_2_2"] ? { name: answer["F_2_2"] } : "",
          file2_3: answer["F_2_3"] ? { name: answer["F_2_3"] } : "",
          file2_4: answer["F_2_4"] ? { name: answer["F_2_4"] } : "",

          file3_1: answer["F_3_1"] ? { name: answer["F_3_1"] } : "",
          file3_2: answer["F_3_2"] ? { name: answer["F_3_2"] } : "",
          file3_3: answer["F_3_3"] ? { name: answer["F_3_3"] } : "",
          file3_4: answer["F_3_4"] ? { name: answer["F_3_4"] } : "",

          file4_1: answer["F_4_1"] ? { name: answer["F_4_1"] } : "",
          file4_2: answer["F_4_2"] ? { name: answer["F_4_2"] } : "",
          file4_3: answer["F_4_3"] ? { name: answer["F_4_3"] } : "",
          file4_4: answer["F_4_4"] ? { name: answer["F_4_4"] } : "",

          file5_1: answer["F_5_1"] ? { name: answer["F_5_1"] } : "",
          file5_2: answer["F_5_2"] ? { name: answer["F_5_2"] } : "",
          file5_3: answer["F_5_3"] ? { name: answer["F_5_3"] } : "",
          file5_4: answer["F_5_4"] ? { name: answer["F_5_4"] } : "",

          file6_1: answer["F_6_1"] ? { name: answer["F_6_1"] } : "",
          file6_2: answer["F_6_2"] ? { name: answer["F_6_2"] } : "",
        });
      });
    });
    Axios.get("http://34.68.101.191:8000/get/Scan_report_writer", {
      params: { business_name: writerData.BUSINESS_NAME },
    }).then((response) => {
      let data = response.data[0];
      console.log(data);
      setWriterList({
        ...writerList,
        as_is1_1: data.AS_1_1 ? data.AS_1_1 : "",
        as_is1_2: data.AS_1_2 ? data.AS_1_2 : "",
        as_is1_3: data.AS_1_3 ? data.AS_1_3 : "",
        as_is1_4: data.AS_1_4 ? data.AS_1_4 : "",

        as_is2_1: data.AS_2_1 ? data.AS_2_1 : "",
        as_is2_2: data.AS_2_2 ? data.AS_2_2 : "",
        as_is2_3: data.AS_2_3 ? data.AS_2_3 : "",
        as_is2_4: data.AS_2_4 ? data.AS_2_4 : "",

        as_is3_1: data.AS_3_1 ? data.AS_3_1 : "",
        as_is3_2: data.AS_3_2 ? data.AS_3_2 : "",
        as_is3_3: data.AS_3_3 ? data.AS_3_3 : "",
        as_is3_4: data.AS_3_4 ? data.AS_3_4 : "",

        as_is4_1: data.AS_4_1 ? data.AS_4_1 : "",
        as_is4_2: data.AS_4_2 ? data.AS_4_2 : "",
        as_is4_3: data.AS_4_3 ? data.AS_4_3 : "",
        as_is4_4: data.AS_4_4 ? data.AS_4_4 : "",

        as_is5_1: data.AS_5_1 ? data.AS_5_1 : "",
        as_is5_2: data.AS_5_2 ? data.AS_5_2 : "",
        as_is5_3: data.AS_5_3 ? data.AS_5_3 : "",
        as_is5_4: data.AS_5_4 ? data.AS_5_4 : "",

        as_is6_1: data.AS_6_1 ? data.AS_6_1 : "",
        as_is6_2: data.AS_6_2 ? data.AS_6_2 : "",

        keyword1_1: data.KW_1_1 ? data.KW_1_1 : "",
        keyword1_2: data.KW_1_2 ? data.KW_1_2 : "",
        keyword1_3: data.KW_1_3 ? data.KW_1_3 : "",
        keyword1_4: data.KW_1_4 ? data.KW_1_4 : "",

        keyword2_1: data.KW_2_1 ? data.KW_2_1 : "",
        keyword2_2: data.KW_2_2 ? data.KW_2_2 : "",
        keyword2_3: data.KW_2_3 ? data.KW_2_3 : "",
        keyword2_4: data.KW_2_4 ? data.KW_2_4 : "",

        keyword3_1: data.KW_3_1 ? data.KW_3_1 : "",
        keyword3_2: data.KW_3_2 ? data.KW_3_2 : "",
        keyword3_3: data.KW_3_3 ? data.KW_3_3 : "",
        keyword3_4: data.KW_3_4 ? data.KW_3_4 : "",

        keyword4_1: data.KW_4_1 ? data.KW_4_1 : "",
        keyword4_2: data.KW_4_2 ? data.KW_4_2 : "",
        keyword4_3: data.KW_4_3 ? data.KW_4_3 : "",
        keyword4_4: data.KW_4_4 ? data.KW_4_4 : "",

        keyword5_1: data.KW_5_1 ? data.KW_5_1 : "",
        keyword5_2: data.KW_5_2 ? data.KW_5_2 : "",
        keyword5_3: data.KW_5_3 ? data.KW_5_3 : "",
        keyword5_4: data.KW_5_4 ? data.KW_5_4 : "",

        keyword6_1: data.KW_6_1 ? data.KW_6_1 : "",
        keyword6_2: data.KW_6_2 ? data.KW_6_2 : "",
      });
      setWriterFile(
        data.FILE_NAME
          ? {
              name: data.FILE_NAME,
            }
          : ""
      );
      setPdfUrl(
        data.FILE_NAME ? "http://34.68.101.191:8000/file/" + data.FILE_NAME : ""
      );
    });

    // 세부스캔 II질문
    Axios.get("http://34.68.101.191:8000/get/Scan_qna_2_write", {
      params: { business_name: writerData.BUSINESS_NAME, key: "writer" },
    }).then((response) => {
      question2 = response.data[0];
      // 세부스캔 II답변
      Axios.get("http://34.68.101.191:8000/get/Scan_detail_qna_2_client", {
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
  }, []);

  // 세부스캔 질문
  useEffect(() => {
    let question = "";
    Axios.get("http://34.68.101.191:8000/get/Scan_qna_writer", {
      params: { business_name: writerData.BUSINESS_NAME },
    }).then((response) => {
      question = response.data[0];
      setQuestion1([
        { key: "1_1", title: question["1_1"], file: files.file1_1 },
        { key: "1_2", title: question["1_2"], file: files.file1_2 },
        { key: "1_3", title: question["1_3"], file: files.file1_3 },
        { key: "1_4", title: question["1_4"], file: files.file1_4 },
      ]);

      setQuestion2([
        { key: "2_1", title: question["2_1"], file: files.file2_1 },
        { key: "2_2", title: question["2_2"], file: files.file2_2 },
        { key: "2_3", title: question["2_3"], file: files.file2_3 },
        { key: "2_4", title: question["2_4"], file: files.file2_4 },
      ]);

      setQuestion3([
        { key: "3_1", title: question["3_1"], file: files.file3_1 },
        { key: "3_2", title: question["3_2"], file: files.file3_2 },
        { key: "3_3", title: question["3_3"], file: files.file3_3 },
        { key: "3_4", title: question["3_4"], file: files.file3_4 },
      ]);

      setQuestion4([
        { key: "4_1", title: question["4_1"], file: files.file4_1 },
        { key: "4_2", title: question["4_2"], file: files.file4_2 },
        { key: "4_3", title: question["4_3"], file: files.file4_3 },
        { key: "4_4", title: question["4_4"], file: files.file4_4 },
      ]);

      setQuestion5([
        { key: "5_1", title: question["5_1"], file: files.file5_1 },
        { key: "5_2", title: question["5_2"], file: files.file5_2 },
        { key: "5_3", title: question["5_3"], file: files.file5_3 },
        { key: "5_4", title: question["5_4"], file: files.file5_4 },
      ]);

      setQuestion6([
        {
          key: "6_1",
          title: "특별히 이 분야에 집중하게 된 계기가 있는지?",
          file: files.file6_1,
        },
        { key: "6_2", title: "창업자로서 향후 비전은?", file: files.file6_2 },
      ]);
    });
  }, [files]);

  // 세부질문 답변 파일 저장
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

  // 카테고리, 답변 박스 input 생성
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

  // as-is, 키워드 변수
  const [writerList, setWriterList] = useState({
    as_is1_1: "",
    as_is1_2: "",
    as_is1_3: "",
    as_is1_4: "",
    keyword1_1: "",
    keyword1_2: "",
    keyword1_3: "",
    keyword1_4: "",

    as_is2_1: "",
    as_is2_2: "",
    as_is2_3: "",
    as_is2_4: "",
    keyword2_1: "",
    keyword2_2: "",
    keyword2_3: "",
    keyword2_4: "",

    as_is3_1: "",
    as_is3_2: "",
    as_is3_3: "",
    as_is3_4: "",
    keyword3_1: "",
    keyword3_2: "",
    keyword3_3: "",
    keyword3_4: "",

    as_is4_1: "",
    as_is4_2: "",
    as_is4_3: "",
    as_is4_4: "",
    keyword4_1: "",
    keyword4_2: "",
    keyword4_3: "",
    keyword4_4: "",

    as_is5_1: "",
    as_is5_2: "",
    as_is5_3: "",
    as_is5_4: "",
    keyword5_1: "",
    keyword5_2: "",
    keyword5_3: "",
    keyword5_4: "",

    as_is6_1: "",
    as_is6_2: "",
    keyword6_1: "",
    keyword6_2: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setWriterList({
      ...writerList,
      [name]: value,
    });
  };
  // 첨부파일 경로
  const [pdfUrl, setPdfUrl] = useState("");

  // 첨부파일
  const [writerFile, setWriterFile] = useState("");
  // 첨부파일 저장 및 경로 설정
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
  //제출하기 버튼 클릭 시 유효성 검사
  const onClickSubmitModal = () => {
    if (writerFile) {
      setSubmitModal(true);
    } else {
      setNoWriteModal(true);
    }
  };

  // 저장, 제출하기
  const onClickSubmit = async (key) => {
    let state = "";
    if (key === "save") {
      state = "SCAN_C5";
      setSaveModal(true);
    } else if (key == "submit") {
      state = "SCAN_C6";
      setIsLoad(true);
    } else if (key == "qna2") {
      state = "SCAN_A3";
    }
    const formDate = new FormData();
    formDate.append("file", writerFile ? writerFile : "");
    formDate.append("fileName", writerFile ? writerFile.name : "");
    formDate.append("business_name", writerData.BUSINESS_NAME);
    formDate.append("writerList", JSON.stringify(writerList));
    formDate.append("state", state);
    await Axios.put(
      "http://34.68.101.191:8000/put/Scan_report_writer",
      formDate
    ).then((response) => {
      console.log(response.data);
      if (state === "SCAN_C6") {
        window.location.href = "/Home_writer";
      }
    });
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
    if (isLoad === false) {
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
    }
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
  return (
    <>
      {questionInputs()}
      <Header title="SCANNer 리포트 업로드" img="./img/header_scan.png" />
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
                <div className="Scan_report_writer_inner_content_group_box">
                  {item.title !== "" ? (
                    <>
                      <div className="Scan_report_writer_inner_content_box_content">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>
                            {`1-${index + 1}`} {item.title}
                          </p>
                          {item.file !== "" ? (
                            <div className="Scan_report_writer_inner_content_box_file">
                              <img src="./img/upload.png" alt="img" />
                              <p
                                onClick={() => {
                                  downloadFile(
                                    `http://34.68.101.191:8000/file/${item.file.name}`,
                                    item.file.name
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
                          <textarea
                            value={
                              item.key === "1_1"
                                ? answerList.answer1_1
                                : item.key === "1_2"
                                ? answerList.answer1_2
                                : item.key === "1_3"
                                ? answerList.answer1_3
                                : answerList.answer1_4
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="Scan_report_writer_inner_content_box1">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>AS - IS 이슈</p>
                        </div>
                        <div className="Scan_report_writer_inner_content_box_text">
                          <textarea
                            value={
                              item.key === "1_1"
                                ? writerList.as_is1_1
                                : item.key === "1_2"
                                ? writerList.as_is1_2
                                : item.key === "1_3"
                                ? writerList.as_is1_3
                                : writerList.as_is1_4
                            }
                            name={`as_is1_${index + 1}`}
                            onChange={getValue}
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
                            value={
                              item.key === "1_1"
                                ? writerList.keyword1_1
                                : item.key === "1_2"
                                ? writerList.keyword1_2
                                : item.key === "1_3"
                                ? writerList.keyword1_3
                                : writerList.keyword1_4
                            }
                            name={`keyword1_${index + 1}`}
                            onChange={getValue}
                            disabled={
                              writerData.STATE_NAME === "리포트 제출완료"
                                ? true
                                : false
                            }
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
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
                  {item.title !== "" ? (
                    <>
                      <div className="Scan_report_writer_inner_content_box_content">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>
                            {`2-${index + 1}`} {item.title}
                          </p>
                          {item.file !== "" ? (
                            <div className="Scan_report_writer_inner_content_box_file">
                              <img src="./img/upload.png" alt="img" />
                              <p
                                onClick={() => {
                                  downloadFile(
                                    `http://34.68.101.191:8000/file/${item.file.name}`,
                                    item.file.name
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
                          <textarea
                            value={
                              item.key === "2_1"
                                ? answerList.answer2_1
                                : item.key === "2_2"
                                ? answerList.answer2_2
                                : item.key === "2_3"
                                ? answerList.answer2_3
                                : answerList.answer2_4
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="Scan_report_writer_inner_content_box1">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>AS - IS 이슈</p>
                        </div>
                        <div className="Scan_report_writer_inner_content_box_text">
                          <textarea
                            value={
                              item.key === "2_1"
                                ? writerList.as_is2_1
                                : item.key === "2_2"
                                ? writerList.as_is2_2
                                : item.key === "2_3"
                                ? writerList.as_is2_3
                                : writerList.as_is2_4
                            }
                            name={`as_is2_${index + 1}`}
                            onChange={getValue}
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
                            value={
                              item.key === "2_1"
                                ? writerList.keyword2_1
                                : item.key === "2_2"
                                ? writerList.keyword2_2
                                : item.key === "2_3"
                                ? writerList.keyword2_3
                                : writerList.keyword2_4
                            }
                            name={`keyword2_${index + 1}`}
                            onChange={getValue}
                            disabled={
                              writerData.STATE_NAME === "리포트 제출완료"
                                ? true
                                : false
                            }
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
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
                <b>(3) 판매/제공/ 방법 (How)</b>
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
                  {item.title !== "" ? (
                    <>
                      <div className="Scan_report_writer_inner_content_box_content">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>
                            {`3-${index + 1}`} {item.title}
                          </p>
                          {item.file !== "" ? (
                            <div className="Scan_report_writer_inner_content_box_file">
                              <img src="./img/upload.png" alt="img" />
                              <p
                                onClick={() => {
                                  downloadFile(
                                    `http://34.68.101.191:8000/file/${item.file.name}`,
                                    item.file.name
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
                          <textarea
                            value={
                              item.key === "3_1"
                                ? answerList.answer3_1
                                : item.key === "3_2"
                                ? answerList.answer3_2
                                : item.key === "3_3"
                                ? answerList.answer3_3
                                : answerList.answer3_4
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="Scan_report_writer_inner_content_box1">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>AS - IS 이슈</p>
                        </div>
                        <div className="Scan_report_writer_inner_content_box_text">
                          <textarea
                            value={
                              item.key === "3_1"
                                ? writerList.as_is3_1
                                : item.key === "3_2"
                                ? writerList.as_is3_2
                                : item.key === "3_3"
                                ? writerList.as_is3_3
                                : writerList.as_is3_4
                            }
                            name={`as_is3_${index + 1}`}
                            onChange={getValue}
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
                            value={
                              item.key === "3_1"
                                ? writerList.keyword3_1
                                : item.key === "3_2"
                                ? writerList.keyword3_2
                                : item.key === "3_3"
                                ? writerList.keyword3_3
                                : writerList.keyword3_4
                            }
                            name={`keyword3_${index + 1}`}
                            onChange={getValue}
                            disabled={
                              writerData.STATE_NAME === "리포트 제출완료"
                                ? true
                                : false
                            }
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
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
                <b>(4) 기존 경쟁사 대비 우위사항 (Dominance)</b>
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
                  {item.title !== "" ? (
                    <>
                      <div className="Scan_report_writer_inner_content_box_content">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>
                            {`4-${index + 1}`} {item.title}
                          </p>
                          {item.file !== "" ? (
                            <div className="Scan_report_writer_inner_content_box_file">
                              <img src="./img/upload.png" alt="img" />
                              <p
                                onClick={() => {
                                  downloadFile(
                                    `http://34.68.101.191:8000/file/${item.file.name}`,
                                    item.file.name
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
                          <textarea
                            value={
                              item.key === "4_1"
                                ? answerList.answer4_1
                                : item.key === "4_2"
                                ? answerList.answer4_2
                                : item.key === "4_3"
                                ? answerList.answer4_3
                                : answerList.answer4_4
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="Scan_report_writer_inner_content_box1">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>AS - IS 이슈</p>
                        </div>
                        <div className="Scan_report_writer_inner_content_box_text">
                          <textarea
                            value={
                              item.key === "4_1"
                                ? writerList.as_is4_1
                                : item.key === "4_2"
                                ? writerList.as_is4_2
                                : item.key === "4_3"
                                ? writerList.as_is4_3
                                : writerList.as_is4_4
                            }
                            name={`as_is4_${index + 1}`}
                            onChange={getValue}
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
                            value={
                              item.key === "4_1"
                                ? writerList.keyword4_1
                                : item.key === "4_2"
                                ? writerList.keyword4_2
                                : item.key === "4_3"
                                ? writerList.keyword4_3
                                : writerList.keyword4_4
                            }
                            name={`keyword4_${index + 1}`}
                            onChange={getValue}
                            disabled={
                              writerData.STATE_NAME === "리포트 제출완료"
                                ? true
                                : false
                            }
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
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
                  : item.key === "4_3"
                  ? question4_3.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              4-3-{String.fromCharCode(65 + index)}.{" "}
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
                  : item.key === "4_4"
                  ? question4_4.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              4-4-{String.fromCharCode(65 + index)}.{" "}
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
        {/* 5번째 카테고리 */}
        <div className="Scan_report_writer_inner_content">
          <div className="Scan_report_writer_inner_content_title">
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
          <div className="Scan_report_writer_inner_content_box con5">
            {question5.map((item, index) => (
              <div key={index}>
                <div className="Scan_report_writer_inner_content_group_box">
                  {item.title !== "" ? (
                    <>
                      <div className="Scan_report_writer_inner_content_box_content">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>
                            {`5-${index + 1}`} {item.title}
                          </p>
                          {item.file !== "" ? (
                            <div className="Scan_report_writer_inner_content_box_file">
                              <img src="./img/upload.png" alt="img" />
                              <p
                                onClick={() => {
                                  downloadFile(
                                    `http://34.68.101.191:8000/file/${item.file.name}`,
                                    item.file.name
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
                          <textarea
                            value={
                              item.key === "5_1"
                                ? answerList.answer5_1
                                : item.key === "5_2"
                                ? answerList.answer5_2
                                : item.key === "5_3"
                                ? answerList.answer5_3
                                : answerList.answer5_4
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="Scan_report_writer_inner_content_box1">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>AS - IS 이슈</p>
                        </div>
                        <div className="Scan_report_writer_inner_content_box_text">
                          <textarea
                            value={
                              item.key === "5_1"
                                ? writerList.as_is5_1
                                : item.key === "5_2"
                                ? writerList.as_is5_2
                                : item.key === "5_3"
                                ? writerList.as_is5_3
                                : writerList.as_is5_4
                            }
                            name={`as_is5_${index + 1}`}
                            onChange={getValue}
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
                            value={
                              item.key === "5_1"
                                ? writerList.keyword5_1
                                : item.key === "5_2"
                                ? writerList.keyword5_2
                                : item.key === "5_3"
                                ? writerList.keyword5_3
                                : writerList.keyword5_4
                            }
                            name={`keyword5_${index + 1}`}
                            onChange={getValue}
                            disabled={
                              writerData.STATE_NAME === "리포트 제출완료"
                                ? true
                                : false
                            }
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                {item.key === "5_1"
                  ? question5_1.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              5-1-{String.fromCharCode(65 + index)}.{" "}
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
                  : item.key === "5_2"
                  ? question5_2.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              5-2-{String.fromCharCode(65 + index)}.{" "}
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
                  : item.key === "5_3"
                  ? question5_3.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              5-3-{String.fromCharCode(65 + index)}.{" "}
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
                  : item.key === "5_4"
                  ? question5_4.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              5-4-{String.fromCharCode(65 + index)}.{" "}
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
        {/* 6번째 카테고리 */}
        <div className="Scan_report_writer_inner_content">
          <div className="Scan_report_writer_inner_content_title">
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
          <div className="Scan_report_writer_inner_content_box con6">
            {question6.map((item, index) => (
              <div key={index}>
                <div className="Scan_report_writer_inner_content_group_box">
                  {item.title !== "" ? (
                    <>
                      <div className="Scan_report_writer_inner_content_box_content">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>
                            {`6-${index + 1}`} {item.title}
                          </p>
                          {item.file !== "" ? (
                            <div className="Scan_report_writer_inner_content_box_file">
                              <img src="./img/upload.png" alt="img" />
                              <p
                                onClick={() => {
                                  downloadFile(
                                    `http://34.68.101.191:8000/file/${item.file.name}`,
                                    item.file.name
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
                          <textarea
                            value={
                              item.key === "6_1"
                                ? answerList.answer6_1
                                : answerList.answer6_2
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="Scan_report_writer_inner_content_box1">
                        <div className="Scan_report_writer_inner_content_box_title">
                          <p>AS - IS 이슈</p>
                        </div>
                        <div className="Scan_report_writer_inner_content_box_text">
                          <textarea
                            value={
                              item.key === "6_1"
                                ? writerList.as_is6_1
                                : writerList.as_is6_2
                            }
                            name={`as_is6_${index + 1}`}
                            onChange={getValue}
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
                            value={
                              item.key === "6_1"
                                ? writerList.keyword6_1
                                : writerList.keyword6_2
                            }
                            name={`keyword6_${index + 1}`}
                            onChange={getValue}
                            disabled={
                              writerData.STATE_NAME === "리포트 제출완료"
                                ? true
                                : false
                            }
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                {item.key === "6_1"
                  ? question6_1.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              6-1-{String.fromCharCode(65 + index)}.{" "}
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
                  : item.key === "6_2"
                  ? question6_2.map((item, index) =>
                      item.answer !== "" ? (
                        <div
                          key={index}
                          className="Scan_report_writer_qna2_box"
                        >
                          <div className="Scan_report_writer_qna2_box_title">
                            <p>
                              6-2-{String.fromCharCode(65 + index)}.{" "}
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
        <div className="Scan_report_writer_inner_file">
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
                세부스캔 II 질문 요청하기
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
              to="/Scan_qna_2_writer"
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

export default Scan_report_writer;
