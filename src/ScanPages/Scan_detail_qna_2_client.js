import "./Scan_detail_qna_client.css";
import "./Scan_detail_qna2_client.scss";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Axios from "axios";
import Header from "../Header";
const Scan_detail_qna_2_client = () => {
  const location = useLocation({});

  // 고객 정보
  const clientData = location.state.clientData;

  // 카테고리
  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [question4, setQuestion4] = useState([]);
  const [question5, setQuestion5] = useState([]);
  const [question6, setQuestion6] = useState([]);

  // 답변 리스트
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

  useEffect(() => {
    let question = "";
    let answer = "";
    let question2 = "";
    // 세부스캔 답변 조회
    Axios.get("http://34.68.101.191:8000/get/Scan_detail_qna_client", {
      params: { business_name: clientData.BUSINESS_NAME },
    }).then((response) => {
      answer = response.data[0];
      // 세부스캔 질문 조회
      Axios.get("http://34.68.101.191:8000/get/Scan_qna_writer", {
        params: { business_name: clientData.BUSINESS_NAME },
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
      });
    });
    // 세부스캔 II 질문 조회
    Axios.get("http://34.68.101.191:8000/get/Scan_qna_2_write", {
      params: { business_name: clientData.BUSINESS_NAME, key: "writer" },
    }).then((response) => {
      let data = response.data[0];
      // 1-1
      if (data["1_1_5"] !== "" && data["1_1_5"] !== null) {
        setQuestion1_1([
          ...question1_1,
          { question: data["1_1_1"], key: "1_1_1" },
          { question: data["1_1_2"], key: "1_1_2" },
          { question: data["1_1_3"], key: "1_1_3" },
          { question: data["1_1_4"], key: "1_1_4" },
          { question: data["1_1_5"], key: "1_1_5" },
        ]);
      } else if (data["1_1_4"] !== "" && data["1_1_4"] !== null) {
        setQuestion1_1([
          ...question1_1,
          { question: data["1_1_1"], key: "1_1_1" },
          { question: data["1_1_2"], key: "1_1_2" },
          { question: data["1_1_3"], key: "1_1_3" },
          { question: data["1_1_4"], key: "1_1_4" },
        ]);
      } else if (data["1_1_3"] !== "" && data["1_1_3"] !== null) {
        setQuestion1_1([
          ...question1_1,
          { question: data["1_1_1"], key: "1_1_1" },
          { question: data["1_1_2"], key: "1_1_2" },
          { question: data["1_1_3"], key: "1_1_3" },
        ]);
      } else if (data["1_1_2"] !== "" && data["1_1_2"] !== null) {
        setQuestion1_1([
          ...question1_1,
          { question: data["1_1_1"], key: "1_1_1" },
          { question: data["1_1_2"], key: "1_1_2" },
        ]);
      } else if (data["1_1_1"] !== "" && data["1_1_1"] !== null) {
        setQuestion1_1([
          ...question1_1,
          { question: data["1_1_1"], key: "1_1_1" },
        ]);
      }
      // 1-2
      if (data["1_2_5"] !== "" && data["1_2_5"] !== null) {
        setQuestion1_2([
          ...question1_2,
          { question: data["1_2_1"], key: "1_2_1" },
          { question: data["1_2_2"], key: "1_2_2" },
          { question: data["1_2_3"], key: "1_2_3" },
          { question: data["1_2_4"], key: "1_2_4" },
          { question: data["1_2_5"], key: "1_2_5" },
        ]);
      } else if (data["1_2_4"] !== "" && data["1_2_4"] !== null) {
        setQuestion1_2([
          ...question1_2,
          { question: data["1_2_1"], key: "1_2_1" },
          { question: data["1_2_2"], key: "1_2_2" },
          { question: data["1_2_3"], key: "1_2_3" },
          { question: data["1_2_4"], key: "1_2_4" },
        ]);
      } else if (data["1_2_3"] !== "" && data["1_2_3"] !== null) {
        setQuestion1_2([
          ...question1_2,
          { question: data["1_2_1"], key: "1_2_1" },
          { question: data["1_2_2"], key: "1_2_2" },
          { question: data["1_2_3"], key: "1_2_3" },
        ]);
      } else if (data["1_2_2"] !== "" && data["1_2_2"] !== null) {
        setQuestion1_2([
          ...question1_2,
          { question: data["1_2_1"], key: "1_2_1" },
          { question: data["1_2_2"], key: "1_2_2" },
        ]);
      } else if (data["1_2_1"] !== "" && data["1_2_1"] !== null) {
        setQuestion1_2([
          ...question1_2,
          { question: data["1_2_1"], key: "1_2_1" },
        ]);
      }
      // 1-3
      if (data["1_3_5"] !== "" && data["1_3_5"] !== null) {
        setQuestion1_3([
          ...question1_3,
          { question: data["1_3_1"], key: "1_3_1" },
          { question: data["1_3_2"], key: "1_3_2" },
          { question: data["1_3_3"], key: "1_3_3" },
          { question: data["1_3_4"], key: "1_3_4" },
          { question: data["1_3_5"], key: "1_3_5" },
        ]);
      } else if (data["1_3_4"] !== "" && data["1_3_4"] !== null) {
        setQuestion1_3([
          ...question1_3,
          { question: data["1_3_1"], key: "1_3_1" },
          { question: data["1_3_2"], key: "1_3_2" },
          { question: data["1_3_3"], key: "1_3_3" },
          { question: data["1_3_4"], key: "1_3_4" },
        ]);
      } else if (data["1_3_3"] !== "" && data["1_3_3"] !== null) {
        setQuestion1_3([
          ...question1_3,
          { question: data["1_3_1"], key: "1_3_1" },
          { question: data["1_3_2"], key: "1_3_2" },
          { question: data["1_3_3"], key: "1_3_3" },
        ]);
      } else if (data["1_3_2"] !== "" && data["1_3_2"] !== null) {
        setQuestion1_3([
          ...question1_3,
          { question: data["1_3_1"], key: "1_3_1" },
          { question: data["1_3_2"], key: "1_3_2" },
        ]);
      } else if (data["1_3_1"] !== "" && data["1_3_1"] !== null) {
        setQuestion1_3([
          ...question1_3,
          { question: data["1_3_1"], key: "1_3_1" },
        ]);
      }
      // 1-4
      if (data["1_4_5"] !== "" && data["1_4_5"] !== null) {
        setQuestion1_4([
          ...question1_4,
          { question: data["1_4_1"], key: "1_4_1" },
          { question: data["1_4_2"], key: "1_4_2" },
          { question: data["1_4_3"], key: "1_4_3" },
          { question: data["1_4_4"], key: "1_4_4" },
          { question: data["1_4_5"], key: "1_4_5" },
        ]);
      } else if (data["1_4_4"] !== "" && data["1_4_4"] !== null) {
        setQuestion1_4([
          ...question1_4,
          { question: data["1_4_1"], key: "1_4_1" },
          { question: data["1_4_2"], key: "1_4_2" },
          { question: data["1_4_3"], key: "1_4_3" },
          { question: data["1_4_4"], key: "1_4_4" },
        ]);
      } else if (data["1_4_3"] !== "" && data["1_4_3"] !== null) {
        setQuestion1_4([
          ...question1_4,
          { question: data["1_4_1"], key: "1_4_1" },
          { question: data["1_4_2"], key: "1_4_2" },
          { question: data["1_4_3"], key: "1_4_3" },
        ]);
      } else if (data["1_4_2"] !== "" && data["1_4_2"] !== null) {
        setQuestion1_4([
          ...question1_4,
          { question: data["1_4_1"], key: "1_4_1" },
          { question: data["1_4_2"], key: "1_4_2" },
        ]);
      } else if (data["1_4_1"] !== "" && data["1_4_1"] !== null) {
        setQuestion1_4([
          ...question1_4,
          { question: data["1_4_1"], key: "1_4_1" },
        ]);
      }
      // 2-1
      if (data["2_1_5"] !== "" && data["2_1_5"] !== null) {
        setQuestion2_1([
          ...question2_1,
          { question: data["2_1_1"], key: "2_1_1" },
          { question: data["2_1_2"], key: "2_1_2" },
          { question: data["2_1_3"], key: "2_1_3" },
          { question: data["2_1_4"], key: "2_1_4" },
          { question: data["2_1_5"], key: "2_1_5" },
        ]);
      } else if (data["2_1_4"] !== "" && data["2_1_4"] !== null) {
        setQuestion2_1([
          ...question2_1,
          { question: data["2_1_1"], key: "2_1_1" },
          { question: data["2_1_2"], key: "2_1_2" },
          { question: data["2_1_3"], key: "2_1_3" },
          { question: data["2_1_4"], key: "2_1_4" },
        ]);
      } else if (data["2_1_3"] !== "" && data["2_1_3"] !== null) {
        setQuestion2_1([
          ...question2_1,
          { question: data["2_1_1"], key: "2_1_1" },
          { question: data["2_1_2"], key: "2_1_2" },
          { question: data["2_1_3"], key: "2_1_3" },
        ]);
      } else if (data["2_1_2"] !== "" && data["2_1_2"] !== null) {
        setQuestion2_1([
          ...question2_1,
          { question: data["2_1_1"], key: "2_1_1" },
          { question: data["2_1_2"], key: "2_1_2" },
        ]);
      } else if (data["2_1_1"] !== "" && data["2_1_1"] !== null) {
        setQuestion2_1([
          ...question2_1,
          { question: data["2_1_1"], key: "2_1_1" },
        ]);
      }
      // 2-2
      if (data["2_2_5"] !== "" && data["2_2_5"] !== null) {
        setQuestion2_2([
          ...question2_2,
          { question: data["2_2_1"], key: "2_2_1" },
          { question: data["2_2_2"], key: "2_2_2" },
          { question: data["2_2_3"], key: "2_2_3" },
          { question: data["2_2_4"], key: "2_2_4" },
          { question: data["2_2_5"], key: "2_2_5" },
        ]);
      } else if (data["2_2_4"] !== "" && data["2_2_4"] !== null) {
        setQuestion2_2([
          ...question2_2,
          { question: data["2_2_1"], key: "2_2_1" },
          { question: data["2_2_2"], key: "2_2_2" },
          { question: data["2_2_3"], key: "2_2_3" },
          { question: data["2_2_4"], key: "2_2_4" },
        ]);
      } else if (data["2_2_3"] !== "" && data["2_2_3"] !== null) {
        setQuestion2_2([
          ...question2_2,
          { question: data["2_2_1"], key: "2_2_1" },
          { question: data["2_2_2"], key: "2_2_2" },
          { question: data["2_2_3"], key: "2_2_3" },
        ]);
      } else if (data["2_2_2"] !== "" && data["2_2_2"] !== null) {
        setQuestion2_2([
          ...question2_2,
          { question: data["2_2_1"], key: "2_2_1" },
          { question: data["2_2_2"], key: "2_2_2" },
        ]);
      } else if (data["2_2_1"] !== "" && data["2_2_1"] !== null) {
        setQuestion2_2([
          ...question2_2,
          { question: data["2_2_1"], key: "2_2_1" },
        ]);
      }
      // 2-3
      if (data["2_3_5"] !== "" && data["2_3_5"] !== null) {
        setQuestion2_3([
          ...question2_3,
          { question: data["2_3_1"], key: "2_3_1" },
          { question: data["2_3_2"], key: "2_3_2" },
          { question: data["2_3_3"], key: "2_3_3" },
          { question: data["2_3_4"], key: "2_3_4" },
          { question: data["2_3_5"], key: "2_3_5" },
        ]);
      } else if (data["2_3_4"] !== "" && data["2_3_4"] !== null) {
        setQuestion2_3([
          ...question2_3,
          { question: data["2_3_1"], key: "2_3_1" },
          { question: data["2_3_2"], key: "2_3_2" },
          { question: data["2_3_3"], key: "2_3_3" },
          { question: data["2_3_4"], key: "2_3_4" },
        ]);
      } else if (data["2_3_3"] !== "" && data["2_3_3"] !== null) {
        setQuestion2_3([
          ...question2_3,
          { question: data["2_3_1"], key: "2_3_1" },
          { question: data["2_3_2"], key: "2_3_2" },
          { question: data["2_3_3"], key: "2_3_3" },
        ]);
      } else if (data["2_3_2"] !== "" && data["2_3_2"] !== null) {
        setQuestion2_3([
          ...question2_3,
          { question: data["2_3_1"], key: "2_3_1" },
          { question: data["2_3_2"], key: "2_3_2" },
        ]);
      } else if (data["2_3_1"] !== "" && data["2_3_1"] !== null) {
        setQuestion2_3([
          ...question2_3,
          { question: data["2_3_1"], key: "2_3_1" },
        ]);
      }
      // 2-4
      if (data["2_4_5"] !== "" && data["2_4_5"] !== null) {
        setQuestion2_4([
          ...question2_4,
          { question: data["2_4_1"], key: "2_4_1" },
          { question: data["2_4_2"], key: "2_4_2" },
          { question: data["2_4_3"], key: "2_4_3" },
          { question: data["2_4_4"], key: "2_4_4" },
          { question: data["2_4_5"], key: "2_4_5" },
        ]);
      } else if (data["2_4_4"] !== "" && data["2_4_4"] !== null) {
        setQuestion2_4([
          ...question2_4,
          { question: data["2_4_1"], key: "2_4_1" },
          { question: data["2_4_2"], key: "2_4_2" },
          { question: data["2_4_3"], key: "2_4_3" },
          { question: data["2_4_4"], key: "2_4_4" },
        ]);
      } else if (data["2_4_3"] !== "" && data["2_4_3"] !== null) {
        setQuestion2_4([
          ...question2_4,
          { question: data["2_4_1"], key: "2_4_1" },
          { question: data["2_4_2"], key: "2_4_2" },
          { question: data["2_4_3"], key: "2_4_3" },
        ]);
      } else if (data["2_4_2"] !== "" && data["2_4_2"] !== null) {
        setQuestion2_4([
          ...question2_4,
          { question: data["2_4_1"], key: "2_4_1" },
          { question: data["2_4_2"], key: "2_4_2" },
        ]);
      } else if (data["2_4_1"] !== "" && data["2_4_1"] !== null) {
        setQuestion2_4([
          ...question2_4,
          { question: data["2_4_1"], key: "2_4_1" },
        ]);
      }

      // 3-1
      if (data["3_1_5"] !== "" && data["3_1_5"] !== null) {
        setQuestion3_1([
          ...question3_1,
          { question: data["3_1_1"], key: "3_1_1" },
          { question: data["3_1_2"], key: "3_1_2" },
          { question: data["3_1_3"], key: "3_1_3" },
          { question: data["3_1_4"], key: "3_1_4" },
          { question: data["3_1_5"], key: "3_1_5" },
        ]);
      } else if (data["3_1_4"] !== "" && data["3_1_4"] !== null) {
        setQuestion3_1([
          ...question3_1,
          { question: data["3_1_1"], key: "3_1_1" },
          { question: data["3_1_2"], key: "3_1_2" },
          { question: data["3_1_3"], key: "3_1_3" },
          { question: data["3_1_4"], key: "3_1_4" },
        ]);
      } else if (data["3_1_3"] !== "" && data["3_1_3"] !== null) {
        setQuestion3_1([
          ...question3_1,
          { question: data["3_1_1"], key: "3_1_1" },
          { question: data["3_1_2"], key: "3_1_2" },
          { question: data["3_1_3"], key: "3_1_3" },
        ]);
      } else if (data["3_1_2"] !== "" && data["3_1_2"] !== null) {
        setQuestion3_1([
          ...question3_1,
          { question: data["3_1_1"], key: "3_1_1" },
          { question: data["3_1_2"], key: "3_1_2" },
        ]);
      } else if (data["3_1_1"] !== "" && data["3_1_1"] !== null) {
        setQuestion3_1([
          ...question3_1,
          { question: data["3_1_1"], key: "3_1_1" },
        ]);
      }
      // 3-2
      if (data["3_2_5"] !== "" && data["3_2_5"] !== null) {
        setQuestion3_2([
          ...question3_2,
          { question: data["3_2_1"], key: "3_2_1" },
          { question: data["3_2_2"], key: "3_2_2" },
          { question: data["3_2_3"], key: "3_2_3" },
          { question: data["3_2_4"], key: "3_2_4" },
          { question: data["3_2_5"], key: "3_2_5" },
        ]);
      } else if (data["3_2_4"] !== "" && data["3_2_4"] !== null) {
        setQuestion3_2([
          ...question3_2,
          { question: data["3_2_1"], key: "3_2_1" },
          { question: data["3_2_2"], key: "3_2_2" },
          { question: data["3_2_3"], key: "3_2_3" },
          { question: data["3_2_4"], key: "3_2_4" },
        ]);
      } else if (data["3_2_3"] !== "" && data["3_2_3"] !== null) {
        setQuestion3_2([
          ...question3_2,
          { question: data["3_2_1"], key: "3_2_1" },
          { question: data["3_2_2"], key: "3_2_2" },
          { question: data["3_2_3"], key: "3_2_3" },
        ]);
      } else if (data["3_2_2"] !== "" && data["3_2_2"] !== null) {
        setQuestion3_2([
          ...question3_2,
          { question: data["3_2_1"], key: "3_2_1" },
          { question: data["3_2_2"], key: "3_2_2" },
        ]);
      } else if (data["3_2_1"] !== "" && data["3_2_1"] !== null) {
        setQuestion3_2([
          ...question3_2,
          { question: data["3_2_1"], key: "3_2_1" },
        ]);
      }
      // 3-3
      if (data["3_3_5"] !== "" && data["3_3_5"] !== null) {
        setQuestion3_3([
          ...question3_3,
          { question: data["3_3_1"], key: "3_3_1" },
          { question: data["3_3_2"], key: "3_3_2" },
          { question: data["3_3_3"], key: "3_3_3" },
          { question: data["3_3_4"], key: "3_3_4" },
          { question: data["3_3_5"], key: "3_3_5" },
        ]);
      } else if (data["3_3_4"] !== "" && data["3_3_4"] !== null) {
        setQuestion3_3([
          ...question3_3,
          { question: data["3_3_1"], key: "3_3_1" },
          { question: data["3_3_2"], key: "3_3_2" },
          { question: data["3_3_3"], key: "3_3_3" },
          { question: data["3_3_4"], key: "3_3_4" },
        ]);
      } else if (data["3_3_3"] !== "" && data["3_3_3"] !== null) {
        setQuestion3_3([
          ...question3_3,
          { question: data["3_3_1"], key: "3_3_1" },
          { question: data["3_3_2"], key: "3_3_2" },
          { question: data["3_3_3"], key: "3_3_3" },
        ]);
      } else if (data["3_3_2"] !== "" && data["3_3_2"] !== null) {
        setQuestion3_3([
          ...question3_3,
          { question: data["3_3_1"], key: "3_3_1" },
          { question: data["3_3_2"], key: "3_3_2" },
        ]);
      } else if (data["3_3_1"] !== "" && data["3_3_1"] !== null) {
        setQuestion3_3([
          ...question3_3,
          { question: data["3_3_1"], key: "3_3_1" },
        ]);
      }
      // 3-4
      if (data["3_4_5"] !== "" && data["3_4_5"] !== null) {
        setQuestion3_4([
          ...question3_4,
          { question: data["3_4_1"], key: "3_4_1" },
          { question: data["3_4_2"], key: "3_4_2" },
          { question: data["3_4_3"], key: "3_4_3" },
          { question: data["3_4_4"], key: "3_4_4" },
          { question: data["3_4_5"], key: "3_4_5" },
        ]);
      } else if (data["3_4_4"] !== "" && data["3_4_4"] !== null) {
        setQuestion3_4([
          ...question3_4,
          { question: data["3_4_1"], key: "3_4_1" },
          { question: data["3_4_2"], key: "3_4_2" },
          { question: data["3_4_3"], key: "3_4_3" },
          { question: data["3_4_4"], key: "3_4_4" },
        ]);
      } else if (data["3_4_3"] !== "" && data["3_4_3"] !== null) {
        setQuestion3_4([
          ...question3_4,
          { question: data["3_4_1"], key: "3_4_1" },
          { question: data["3_4_2"], key: "3_4_2" },
          { question: data["3_4_3"], key: "3_4_3" },
        ]);
      } else if (data["3_4_2"] !== "" && data["3_4_2"] !== null) {
        setQuestion3_4([
          ...question3_4,
          { question: data["3_4_1"], key: "3_4_1" },
          { question: data["3_4_2"], key: "3_4_2" },
        ]);
      } else if (data["3_4_1"] !== "" && data["3_4_1"] !== null) {
        setQuestion3_4([
          ...question3_4,
          { question: data["3_4_1"], key: "3_4_1" },
        ]);
      }

      // 4-1
      if (data["4_1_5"] !== "" && data["4_1_5"] !== null) {
        setQuestion4_1([
          ...question4_1,
          { question: data["4_1_1"], key: "4_1_1" },
          { question: data["4_1_2"], key: "4_1_2" },
          { question: data["4_1_3"], key: "4_1_3" },
          { question: data["4_1_4"], key: "4_1_4" },
          { question: data["4_1_5"], key: "4_1_5" },
        ]);
      } else if (data["4_1_4"] !== "" && data["4_1_4"] !== null) {
        setQuestion4_1([
          ...question4_1,
          { question: data["4_1_1"], key: "4_1_1" },
          { question: data["4_1_2"], key: "4_1_2" },
          { question: data["4_1_3"], key: "4_1_3" },
          { question: data["4_1_4"], key: "4_1_4" },
        ]);
      } else if (data["4_1_3"] !== "" && data["4_1_3"] !== null) {
        setQuestion4_1([
          ...question4_1,
          { question: data["4_1_1"], key: "4_1_1" },
          { question: data["4_1_2"], key: "4_1_2" },
          { question: data["4_1_3"], key: "4_1_3" },
        ]);
      } else if (data["4_1_2"] !== "" && data["4_1_2"] !== null) {
        setQuestion4_1([
          ...question4_1,
          { question: data["4_1_1"], key: "4_1_1" },
          { question: data["4_1_2"], key: "4_1_2" },
        ]);
      } else if (data["4_1_1"] !== "" && data["4_1_1"] !== null) {
        setQuestion4_1([
          ...question4_1,
          { question: data["4_1_1"], key: "4_1_1" },
        ]);
      }
      // 4-2
      if (data["4_2_5"] !== "" && data["4_2_5"] !== null) {
        setQuestion4_2([
          ...question4_2,
          { question: data["4_2_1"], key: "4_2_1" },
          { question: data["4_2_2"], key: "4_2_2" },
          { question: data["4_2_3"], key: "4_2_3" },
          { question: data["4_2_4"], key: "4_2_4" },
          { question: data["4_2_5"], key: "4_2_5" },
        ]);
      } else if (data["4_2_4"] !== "" && data["4_2_4"] !== null) {
        setQuestion4_2([
          ...question4_2,
          { question: data["4_2_1"], key: "4_2_1" },
          { question: data["4_2_2"], key: "4_2_2" },
          { question: data["4_2_3"], key: "4_2_3" },
          { question: data["4_2_4"], key: "4_2_4" },
        ]);
      } else if (data["4_2_3"] !== "" && data["4_2_3"] !== null) {
        setQuestion4_2([
          ...question4_2,
          { question: data["4_2_1"], key: "4_2_1" },
          { question: data["4_2_2"], key: "4_2_2" },
          { question: data["4_2_3"], key: "4_2_3" },
        ]);
      } else if (data["4_2_2"] !== "" && data["4_2_2"] !== null) {
        setQuestion4_2([
          ...question4_2,
          { question: data["4_2_1"], key: "4_2_1" },
          { question: data["4_2_2"], key: "4_2_2" },
        ]);
      } else if (data["4_2_1"] !== "" && data["4_2_1"] !== null) {
        setQuestion4_2([
          ...question4_2,
          { question: data["4_2_1"], key: "4_2_1" },
        ]);
      }
      // 4-3
      if (data["4_3_5"] !== "" && data["4_3_5"] !== null) {
        setQuestion4_3([
          ...question4_3,
          { question: data["4_3_1"], key: "4_3_1" },
          { question: data["4_3_2"], key: "4_3_2" },
          { question: data["4_3_3"], key: "4_3_3" },
          { question: data["4_3_4"], key: "4_3_4" },
          { question: data["4_3_5"], key: "4_3_5" },
        ]);
      } else if (data["4_3_4"] !== "" && data["4_3_4"] !== null) {
        setQuestion4_3([
          ...question4_3,
          { question: data["4_3_1"], key: "4_3_1" },
          { question: data["4_3_2"], key: "4_3_2" },
          { question: data["4_3_3"], key: "4_3_3" },
          { question: data["4_3_4"], key: "4_3_4" },
        ]);
      } else if (data["4_3_3"] !== "" && data["4_3_3"] !== null) {
        setQuestion4_3([
          ...question4_3,
          { question: data["4_3_1"], key: "4_3_1" },
          { question: data["4_3_2"], key: "4_3_2" },
          { question: data["4_3_3"], key: "4_3_3" },
        ]);
      } else if (data["4_3_2"] !== "" && data["4_3_2"] !== null) {
        setQuestion4_3([
          ...question4_3,
          { question: data["4_3_1"], key: "4_3_1" },
          { question: data["4_3_2"], key: "4_3_2" },
        ]);
      } else if (data["4_3_1"] !== "" && data["4_3_1"] !== null) {
        setQuestion4_3([
          ...question4_3,
          { question: data["4_3_1"], key: "4_3_1" },
        ]);
      }
      // 4-4
      if (data["4_4_5"] !== "" && data["4_4_5"] !== null) {
        setQuestion4_4([
          ...question4_4,
          { question: data["4_4_1"], key: "4_4_1" },
          { question: data["4_4_2"], key: "4_4_2" },
          { question: data["4_4_3"], key: "4_4_3" },
          { question: data["4_4_4"], key: "4_4_4" },
          { question: data["4_4_5"], key: "4_4_5" },
        ]);
      } else if (data["4_4_4"] !== "" && data["4_4_4"] !== null) {
        setQuestion4_4([
          ...question4_4,
          { question: data["4_4_1"], key: "4_4_1" },
          { question: data["4_4_2"], key: "4_4_2" },
          { question: data["4_4_3"], key: "4_4_3" },
          { question: data["4_4_4"], key: "4_4_4" },
        ]);
      } else if (data["4_4_3"] !== "" && data["4_4_3"] !== null) {
        setQuestion4_4([
          ...question4_4,
          { question: data["4_4_1"], key: "4_4_1" },
          { question: data["4_4_2"], key: "4_4_2" },
          { question: data["4_4_3"], key: "4_4_3" },
        ]);
      } else if (data["4_4_2"] !== "" && data["4_4_2"] !== null) {
        setQuestion4_4([
          ...question4_4,
          { question: data["4_4_1"], key: "4_4_1" },
          { question: data["4_4_2"], key: "4_4_2" },
        ]);
      } else if (data["4_4_1"] !== "" && data["4_4_1"] !== null) {
        setQuestion4_4([
          ...question4_4,
          { question: data["4_4_1"], key: "4_4_1" },
        ]);
      }

      // 5-1
      if (data["5_1_5"] !== "" && data["5_1_5"] !== null) {
        setQuestion5_1([
          ...question5_1,
          { question: data["5_1_1"], key: "5_1_1" },
          { question: data["5_1_2"], key: "5_1_2" },
          { question: data["5_1_3"], key: "5_1_3" },
          { question: data["5_1_4"], key: "5_1_4" },
          { question: data["5_1_5"], key: "5_1_5" },
        ]);
      } else if (data["5_1_4"] !== "" && data["5_1_4"] !== null) {
        setQuestion5_1([
          ...question5_1,
          { question: data["5_1_1"], key: "5_1_1" },
          { question: data["5_1_2"], key: "5_1_2" },
          { question: data["5_1_3"], key: "5_1_3" },
          { question: data["5_1_4"], key: "5_1_4" },
        ]);
      } else if (data["5_1_3"] !== "" && data["5_1_3"] !== null) {
        setQuestion5_1([
          ...question5_1,
          { question: data["5_1_1"], key: "5_1_1" },
          { question: data["5_1_2"], key: "5_1_2" },
          { question: data["5_1_3"], key: "5_1_3" },
        ]);
      } else if (data["5_1_2"] !== "" && data["5_1_2"] !== null) {
        setQuestion5_1([
          ...question5_1,
          { question: data["5_1_1"], key: "5_1_1" },
          { question: data["5_1_2"], key: "5_1_2" },
        ]);
      } else if (data["5_1_1"] !== "" && data["5_1_1"] !== null) {
        setQuestion5_1([
          ...question5_1,
          { question: data["5_1_1"], key: "5_1_1" },
        ]);
      }
      // 5-2
      if (data["5_2_5"] !== "" && data["5_2_5"] !== null) {
        setQuestion5_2([
          ...question5_2,
          { question: data["5_2_1"], key: "5_2_1" },
          { question: data["5_2_2"], key: "5_2_2" },
          { question: data["5_2_3"], key: "5_2_3" },
          { question: data["5_2_4"], key: "5_2_4" },
          { question: data["5_2_5"], key: "5_2_5" },
        ]);
      } else if (data["5_2_4"] !== "" && data["5_2_4"] !== null) {
        setQuestion5_2([
          ...question5_2,
          { question: data["5_2_1"], key: "5_2_1" },
          { question: data["5_2_2"], key: "5_2_2" },
          { question: data["5_2_3"], key: "5_2_3" },
          { question: data["5_2_4"], key: "5_2_4" },
        ]);
      } else if (data["5_2_3"] !== "" && data["5_2_3"] !== null) {
        setQuestion5_2([
          ...question5_2,
          { question: data["5_2_1"], key: "5_2_1" },
          { question: data["5_2_2"], key: "5_2_2" },
          { question: data["5_2_3"], key: "5_2_3" },
        ]);
      } else if (data["5_2_2"] !== "" && data["5_2_2"] !== null) {
        setQuestion5_2([
          ...question5_2,
          { question: data["5_2_1"], key: "5_2_1" },
          { question: data["5_2_2"], key: "5_2_2" },
        ]);
      } else if (data["5_2_1"] !== "" && data["5_2_1"] !== null) {
        setQuestion5_2([
          ...question5_2,
          { question: data["5_2_1"], key: "5_2_1" },
        ]);
      }
      // 5-3
      if (data["5_3_5"] !== "" && data["5_3_5"] !== null) {
        setQuestion5_3([
          ...question5_3,
          { question: data["5_3_1"], key: "5_3_1" },
          { question: data["5_3_2"], key: "5_3_2" },
          { question: data["5_3_3"], key: "5_3_3" },
          { question: data["5_3_4"], key: "5_3_4" },
          { question: data["5_3_5"], key: "5_3_5" },
        ]);
      } else if (data["5_3_4"] !== "" && data["5_3_4"] !== null) {
        setQuestion5_3([
          ...question5_3,
          { question: data["5_3_1"], key: "5_3_1" },
          { question: data["5_3_2"], key: "5_3_2" },
          { question: data["5_3_3"], key: "5_3_3" },
          { question: data["5_3_4"], key: "5_3_4" },
        ]);
      } else if (data["5_3_3"] !== "" && data["5_3_3"] !== null) {
        setQuestion5_3([
          ...question5_3,
          { question: data["5_3_1"], key: "5_3_1" },
          { question: data["5_3_2"], key: "5_3_2" },
          { question: data["5_3_3"], key: "5_3_3" },
        ]);
      } else if (data["5_3_2"] !== "" && data["5_3_2"] !== null) {
        setQuestion5_3([
          ...question5_3,
          { question: data["5_3_1"], key: "5_3_1" },
          { question: data["5_3_2"], key: "5_3_2" },
        ]);
      } else if (data["5_3_1"] !== "" && data["5_3_1"] !== null) {
        setQuestion5_3([
          ...question5_3,
          { question: data["5_3_1"], key: "5_3_1" },
        ]);
      }
      // 5-4
      if (data["5_4_5"] !== "" && data["5_4_5"] !== null) {
        setQuestion5_4([
          ...question5_4,
          { question: data["5_4_1"], key: "5_4_1" },
          { question: data["5_4_2"], key: "5_4_2" },
          { question: data["5_4_3"], key: "5_4_3" },
          { question: data["5_4_4"], key: "5_4_4" },
          { question: data["5_4_5"], key: "5_4_5" },
        ]);
      } else if (data["5_4_4"] !== "" && data["5_4_4"] !== null) {
        setQuestion5_4([
          ...question5_4,
          { question: data["5_4_1"], key: "5_4_1" },
          { question: data["5_4_2"], key: "5_4_2" },
          { question: data["5_4_3"], key: "5_4_3" },
          { question: data["5_4_4"], key: "5_4_4" },
        ]);
      } else if (data["5_4_3"] !== "" && data["5_4_3"] !== null) {
        setQuestion5_4([
          ...question5_4,
          { question: data["5_4_1"], key: "5_4_1" },
          { question: data["5_4_2"], key: "5_4_2" },
          { question: data["5_4_3"], key: "5_4_3" },
        ]);
      } else if (data["5_4_2"] !== "" && data["5_4_2"] !== null) {
        setQuestion5_4([
          ...question5_4,
          { question: data["5_4_1"], key: "5_4_1" },
          { question: data["5_4_2"], key: "5_4_2" },
        ]);
      } else if (data["5_4_1"] !== "" && data["5_4_1"] !== null) {
        setQuestion5_4([
          ...question5_4,
          { question: data["5_4_1"], key: "5_4_1" },
        ]);
      }

      // 6-1
      if (data["6_1_5"] !== "" && data["6_1_5"] !== null) {
        setQuestion6_1([
          ...question6_1,
          { question: data["6_1_1"], key: "6_1_1" },
          { question: data["6_1_2"], key: "6_1_2" },
          { question: data["6_1_3"], key: "6_1_3" },
          { question: data["6_1_4"], key: "6_1_4" },
          { question: data["6_1_5"], key: "6_1_5" },
        ]);
      } else if (data["6_1_4"] !== "" && data["6_1_4"] !== null) {
        setQuestion6_1([
          ...question6_1,
          { question: data["6_1_1"], key: "6_1_1" },
          { question: data["6_1_2"], key: "6_1_2" },
          { question: data["6_1_3"], key: "6_1_3" },
          { question: data["6_1_4"], key: "6_1_4" },
        ]);
      } else if (data["6_1_3"] !== "" && data["6_1_3"] !== null) {
        setQuestion6_1([
          ...question6_1,
          { question: data["6_1_1"], key: "6_1_1" },
          { question: data["6_1_2"], key: "6_1_2" },
          { question: data["6_1_3"], key: "6_1_3" },
        ]);
      } else if (data["6_1_2"] !== "" && data["6_1_2"] !== null) {
        setQuestion6_1([
          ...question6_1,
          { question: data["6_1_1"], key: "6_1_1" },
          { question: data["6_1_2"], key: "6_1_2" },
        ]);
      } else if (data["6_1_1"] !== "" && data["6_1_1"] !== null) {
        setQuestion6_1([
          ...question6_1,
          { question: data["6_1_1"], key: "6_1_1" },
        ]);
      }
      // 6-2
      if (data["6_2_5"] !== "" && data["6_2_5"] !== null) {
        setQuestion6_2([
          ...question6_2,
          { question: data["6_2_1"], key: "6_2_1" },
          { question: data["6_2_2"], key: "6_2_2" },
          { question: data["6_2_3"], key: "6_2_3" },
          { question: data["6_2_4"], key: "6_2_4" },
          { question: data["6_2_5"], key: "6_2_5" },
        ]);
      } else if (data["6_2_4"] !== "" && data["6_2_4"] !== null) {
        setQuestion6_2([
          ...question6_2,
          { question: data["6_2_1"], key: "6_2_1" },
          { question: data["6_2_2"], key: "6_2_2" },
          { question: data["6_2_3"], key: "6_2_3" },
          { question: data["6_2_4"], key: "6_2_4" },
        ]);
      } else if (data["6_2_3"] !== "" && data["6_2_3"] !== null) {
        setQuestion6_2([
          ...question6_2,
          { question: data["6_2_1"], key: "6_2_1" },
          { question: data["6_2_2"], key: "6_2_2" },
          { question: data["6_2_3"], key: "6_2_3" },
        ]);
      } else if (data["6_2_2"] !== "" && data["6_2_2"] !== null) {
        setQuestion6_2([
          ...question6_2,
          { question: data["6_2_1"], key: "6_2_1" },
          { question: data["6_2_2"], key: "6_2_2" },
        ]);
      } else if (data["6_2_1"] !== "" && data["6_2_1"] !== null) {
        setQuestion6_2([
          ...question6_2,
          { question: data["6_2_1"], key: "6_2_1" },
        ]);
      }

      // 세부스캔 II 답변 조회
      Axios.get("http://34.68.101.191:8000/get/Scan_qna_writer", {
        params: { business_name: clientData.BUSINESS_NAME },
      }).then((response) => {
        question2 = response.data[0];
        // 카테고리1
        setQuestion1([
          {
            key: "1_1",
            title: question2["1_1"],
            question2:
              data["1_1_1"] || data["1_1_2"] || data["1_1_3"] || data["1_1_4"]
                ? true
                : false,
          },
          {
            key: "1_2",
            title: question2["1_2"],
            question2:
              data["1_2_1"] || data["1_2_2"] || data["1_2_3"] || data["1_2_4"]
                ? true
                : false,
          },
          {
            key: "1_3",
            title: question2["1_3"],
            question2:
              data["1_3_1"] || data["1_3_2"] || data["1_3_3"] || data["1_3_4"]
                ? true
                : false,
          },
          {
            key: "1_4",
            title: question2["1_4"],
            question2:
              data["1_4_1"] || data["1_4_2"] || data["1_4_3"] || data["1_4_4"]
                ? true
                : false,
          },
        ]);
        // 카테고리2
        setQuestion2([
          {
            key: "2_1",
            title: question2["2_1"],
            question2:
              data["2_1_1"] || data["2_1_2"] || data["2_1_3"] || data["2_1_4"]
                ? true
                : false,
          },
          {
            key: "2_2",
            title: question2["2_2"],
            question2:
              data["2_2_1"] || data["2_2_2"] || data["2_2_3"] || data["2_2_4"]
                ? true
                : false,
          },
          {
            key: "2_3",
            title: question2["2_3"],
            question2:
              data["2_3_1"] || data["2_3_2"] || data["2_3_3"] || data["2_3_4"]
                ? true
                : false,
          },
          {
            key: "2_4",
            title: question2["2_4"],
            question2:
              data["2_4_1"] || data["2_4_2"] || data["2_4_3"] || data["2_4_4"]
                ? true
                : false,
          },
        ]);
        // 카테고리3
        setQuestion3([
          {
            key: "3_1",
            title: question2["3_1"],
            question2:
              data["3_1_1"] || data["3_1_2"] || data["3_1_3"] || data["3_1_4"]
                ? true
                : false,
          },
          {
            key: "3_2",
            title: question2["3_2"],
            question2:
              data["3_2_1"] || data["3_2_2"] || data["3_2_3"] || data["3_2_4"]
                ? true
                : false,
          },
          {
            key: "3_3",
            title: question2["3_3"],
            question2:
              data["3_3_1"] || data["3_3_2"] || data["3_3_3"] || data["3_3_4"]
                ? true
                : false,
          },
          {
            key: "3_4",
            title: question2["3_4"],
            question2:
              data["3_4_1"] || data["3_4_2"] || data["3_4_3"] || data["3_4_4"]
                ? true
                : false,
          },
        ]);
        // 카테고리4
        setQuestion4([
          {
            key: "4_1",
            title: question2["4_1"],
            question2:
              data["4_1_1"] || data["4_1_2"] || data["4_1_3"] || data["4_1_4"]
                ? true
                : false,
          },
          {
            key: "4_2",
            title: question2["4_2"],
            question2:
              data["4_2_1"] || data["4_2_2"] || data["4_2_3"] || data["4_2_4"]
                ? true
                : false,
          },
          {
            key: "4_3",
            title: question2["4_3"],
            question2:
              data["4_3_1"] || data["4_3_2"] || data["4_3_3"] || data["4_3_4"]
                ? true
                : false,
          },
          {
            key: "4_4",
            title: question2["4_4"],
            question2:
              data["4_4_1"] || data["4_4_2"] || data["4_4_3"] || data["4_4_4"]
                ? true
                : false,
          },
        ]);
        // 카테고리5
        setQuestion5([
          {
            key: "5_1",
            title: question2["5_1"],
            question2:
              data["5_1_1"] || data["5_1_2"] || data["5_1_3"] || data["5_1_4"]
                ? true
                : false,
          },
          {
            key: "5_2",
            title: question2["5_2"],
            question2:
              data["5_2_1"] || data["5_2_2"] || data["5_2_3"] || data["5_2_4"]
                ? true
                : false,
          },
          {
            key: "5_3",
            title: question2["5_3"],
            question2:
              data["5_3_1"] || data["5_3_2"] || data["5_3_3"] || data["5_3_4"]
                ? true
                : false,
          },
          {
            key: "5_4",
            title: question2["5_4"],
            question2:
              data["5_4_1"] || data["5_4_2"] || data["5_4_3"] || data["5_4_4"]
                ? true
                : false,
          },
        ]);
        // 카테고리6
        setQuestion6([
          {
            key: "6_1",
            title: "특별히 이 분야에 집중하게 된 계기가 있는지?",
            question2:
              data["6_1_1"] || data["6_1_2"] || data["6_1_3"] || data["6_1_4"]
                ? true
                : false,
          },
          {
            key: "6_2",
            title: "창업자로서 향후 비전은?",
            question2:
              data["6_2_1"] || data["6_2_2"] || data["6_2_3"] || data["6_2_4"]
                ? true
                : false,
          },
        ]);
      });

      Axios.get("http://34.68.101.191:8000/get/Scan_detail_qna_2_client", {
        params: { business_name: clientData.BUSINESS_NAME },
      }).then((response) => {
        let answer2 = response.data[0];
        setAnswerList2({
          ...answerList2,
          // 1
          answer1_1_1: data["1_1_1"]
            ? answer2["1_1_1"]
              ? answer2["1_1_1"]
              : ""
            : " ",
          answer1_1_2: data["1_1_2"]
            ? answer2["1_1_2"]
              ? answer2["1_1_2"]
              : ""
            : " ",
          answer1_1_3: data["1_1_3"]
            ? answer2["1_1_3"]
              ? answer2["1_1_3"]
              : ""
            : " ",
          answer1_1_4: data["1_1_4"]
            ? answer2["1_1_4"]
              ? answer2["1_1_4"]
              : ""
            : " ",
          answer1_1_5: data["1_1_5"]
            ? answer2["1_1_5"]
              ? answer2["1_1_5"]
              : ""
            : " ",

          answer1_2_1: data["1_2_1"]
            ? answer2["1_2_1"]
              ? answer2["1_2_1"]
              : ""
            : " ",
          answer1_2_2: data["1_2_2"]
            ? answer2["1_2_2"]
              ? answer2["1_2_2"]
              : ""
            : " ",
          answer1_2_3: data["1_2_3"]
            ? answer2["1_2_3"]
              ? answer2["1_2_3"]
              : ""
            : " ",
          answer1_2_4: data["1_2_4"]
            ? answer2["1_2_4"]
              ? answer2["1_2_4"]
              : ""
            : " ",
          answer1_2_5: data["1_2_5"]
            ? answer2["1_2_5"]
              ? answer2["1_2_5"]
              : ""
            : " ",

          answer1_3_1: data["1_3_1"]
            ? answer2["1_3_1"]
              ? answer2["1_3_1"]
              : ""
            : " ",
          answer1_3_2: data["1_3_2"]
            ? answer2["1_3_2"]
              ? answer2["1_3_2"]
              : ""
            : " ",
          answer1_3_3: data["1_3_3"]
            ? answer2["1_3_3"]
              ? answer2["1_3_3"]
              : ""
            : " ",
          answer1_3_4: data["1_3_4"]
            ? answer2["1_3_4"]
              ? answer2["1_3_4"]
              : ""
            : " ",
          answer1_3_5: data["1_3_5"]
            ? answer2["1_3_5"]
              ? answer2["1_3_5"]
              : ""
            : " ",

          answer1_4_1: data["1_4_1"]
            ? answer2["1_4_1"]
              ? answer2["1_4_1"]
              : ""
            : " ",
          answer1_4_2: data["1_4_2"]
            ? answer2["1_4_2"]
              ? answer2["1_4_2"]
              : ""
            : " ",
          answer1_4_3: data["1_4_3"]
            ? answer2["1_4_3"]
              ? answer2["1_4_3"]
              : ""
            : " ",
          answer1_4_4: data["1_4_4"]
            ? answer2["1_4_4"]
              ? answer2["1_4_4"]
              : ""
            : " ",
          answer1_4_5: data["1_4_5"]
            ? answer2["1_4_5"]
              ? answer2["1_4_5"]
              : ""
            : " ",
          // 2
          answer2_1_1: data["2_1_1"]
            ? answer2["2_1_1"]
              ? answer2["2_1_1"]
              : ""
            : " ",
          answer2_1_2: data["2_1_2"]
            ? answer2["2_1_2"]
              ? answer2["2_1_2"]
              : ""
            : " ",
          answer2_1_3: data["2_1_3"]
            ? answer2["2_1_3"]
              ? answer2["2_1_3"]
              : ""
            : " ",
          answer2_1_4: data["2_1_4"]
            ? answer2["2_1_4"]
              ? answer2["2_1_4"]
              : ""
            : " ",
          answer2_1_5: data["2_1_5"]
            ? answer2["2_1_5"]
              ? answer2["2_1_5"]
              : ""
            : " ",
          answer2_2_1: data["2_2_1"]
            ? answer2["2_2_1"]
              ? answer2["2_2_1"]
              : ""
            : " ",
          answer2_2_2: data["2_2_2"]
            ? answer2["2_2_2"]
              ? answer2["2_2_2"]
              : ""
            : " ",
          answer2_2_3: data["2_2_3"]
            ? answer2["2_2_3"]
              ? answer2["2_2_3"]
              : ""
            : " ",
          answer2_2_4: data["2_2_4"]
            ? answer2["2_2_4"]
              ? answer2["2_2_4"]
              : ""
            : " ",
          answer2_2_5: data["2_2_5"]
            ? answer2["2_2_5"]
              ? answer2["2_2_5"]
              : ""
            : " ",
          answer2_3_1: data["2_3_1"]
            ? answer2["2_3_1"]
              ? answer2["2_3_1"]
              : ""
            : " ",
          answer2_3_2: data["2_3_2"]
            ? answer2["2_3_2"]
              ? answer2["2_3_2"]
              : ""
            : " ",
          answer2_3_3: data["2_3_3"]
            ? answer2["2_3_3"]
              ? answer2["2_3_3"]
              : ""
            : " ",
          answer2_3_4: data["2_3_4"]
            ? answer2["2_3_4"]
              ? answer2["2_3_4"]
              : ""
            : " ",
          answer2_3_5: data["2_3_5"]
            ? answer2["2_3_5"]
              ? answer2["2_3_5"]
              : ""
            : " ",
          answer2_4_1: data["2_4_1"]
            ? answer2["2_4_1"]
              ? answer2["2_4_1"]
              : ""
            : " ",
          answer2_4_2: data["2_4_2"]
            ? answer2["2_4_2"]
              ? answer2["2_4_2"]
              : ""
            : " ",
          answer2_4_3: data["2_4_3"]
            ? answer2["2_4_3"]
              ? answer2["2_4_3"]
              : ""
            : " ",
          answer2_4_4: data["2_4_4"]
            ? answer2["2_4_4"]
              ? answer2["2_4_4"]
              : ""
            : " ",
          answer2_4_5: data["2_4_5"]
            ? answer2["2_4_5"]
              ? answer2["2_4_5"]
              : ""
            : " ",
          // 3
          answer3_1_1: data["3_1_1"]
            ? answer2["3_1_1"]
              ? answer2["3_1_1"]
              : ""
            : " ",
          answer3_1_2: data["3_1_2"]
            ? answer2["3_1_2"]
              ? answer2["3_1_2"]
              : ""
            : " ",
          answer3_1_3: data["3_1_3"]
            ? answer2["3_1_3"]
              ? answer2["3_1_3"]
              : ""
            : " ",
          answer3_1_4: data["3_1_4"]
            ? answer2["3_1_4"]
              ? answer2["3_1_4"]
              : ""
            : " ",
          answer3_1_5: data["3_1_5"]
            ? answer2["3_1_5"]
              ? answer2["3_1_5"]
              : ""
            : " ",
          answer3_2_1: data["3_2_1"]
            ? answer2["3_2_1"]
              ? answer2["3_2_1"]
              : ""
            : " ",
          answer3_2_2: data["3_2_2"]
            ? answer2["3_2_2"]
              ? answer2["3_2_2"]
              : ""
            : " ",
          answer3_2_3: data["3_2_3"]
            ? answer2["3_2_3"]
              ? answer2["3_2_3"]
              : ""
            : " ",
          answer3_2_4: data["3_2_4"]
            ? answer2["3_2_4"]
              ? answer2["3_2_4"]
              : ""
            : " ",
          answer3_2_5: data["3_2_5"]
            ? answer2["3_2_5"]
              ? answer2["3_2_5"]
              : ""
            : " ",
          answer3_3_1: data["3_3_1"]
            ? answer2["3_3_1"]
              ? answer2["3_3_1"]
              : ""
            : " ",
          answer3_3_2: data["3_3_2"]
            ? answer2["3_3_2"]
              ? answer2["3_3_2"]
              : ""
            : " ",
          answer3_3_3: data["3_3_3"]
            ? answer2["3_3_3"]
              ? answer2["3_3_3"]
              : ""
            : " ",
          answer3_3_4: data["3_3_4"]
            ? answer2["3_3_4"]
              ? answer2["3_3_4"]
              : ""
            : " ",
          answer3_3_5: data["3_3_5"]
            ? answer2["3_3_5"]
              ? answer2["3_3_5"]
              : ""
            : " ",
          answer3_4_1: data["3_4_1"]
            ? answer2["3_4_1"]
              ? answer2["3_4_1"]
              : ""
            : " ",
          answer3_4_2: data["3_4_2"]
            ? answer2["3_4_2"]
              ? answer2["3_4_2"]
              : ""
            : " ",
          answer3_4_3: data["3_4_3"]
            ? answer2["3_4_3"]
              ? answer2["3_4_3"]
              : ""
            : " ",
          answer3_4_4: data["3_4_4"]
            ? answer2["3_4_4"]
              ? answer2["3_4_4"]
              : ""
            : " ",
          answer3_4_5: data["3_4_5"]
            ? answer2["3_4_5"]
              ? answer2["3_4_5"]
              : ""
            : " ",
          // 4
          answer4_1_1: data["4_1_1"]
            ? answer2["4_1_1"]
              ? answer2["4_1_1"]
              : ""
            : " ",
          answer4_1_2: data["4_1_2"]
            ? answer2["4_1_2"]
              ? answer2["4_1_2"]
              : ""
            : " ",
          answer4_1_3: data["4_1_3"]
            ? answer2["4_1_3"]
              ? answer2["4_1_3"]
              : ""
            : " ",
          answer4_1_4: data["4_1_4"]
            ? answer2["4_1_4"]
              ? answer2["4_1_4"]
              : ""
            : " ",
          answer4_1_5: data["4_1_5"]
            ? answer2["4_1_5"]
              ? answer2["4_1_5"]
              : ""
            : " ",
          answer4_2_1: data["4_2_1"]
            ? answer2["4_2_1"]
              ? answer2["4_2_1"]
              : ""
            : " ",
          answer4_2_2: data["4_2_2"]
            ? answer2["4_2_2"]
              ? answer2["4_2_2"]
              : ""
            : " ",
          answer4_2_3: data["4_2_3"]
            ? answer2["4_2_3"]
              ? answer2["4_2_3"]
              : ""
            : " ",
          answer4_2_4: data["4_2_4"]
            ? answer2["4_2_4"]
              ? answer2["4_2_4"]
              : ""
            : " ",
          answer4_2_5: data["4_2_5"]
            ? answer2["4_2_5"]
              ? answer2["4_2_5"]
              : ""
            : " ",
          answer4_3_1: data["4_3_1"]
            ? answer2["4_3_1"]
              ? answer2["4_3_1"]
              : ""
            : " ",
          answer4_3_2: data["4_3_2"]
            ? answer2["4_3_2"]
              ? answer2["4_3_2"]
              : ""
            : " ",
          answer4_3_3: data["4_3_3"]
            ? answer2["4_3_3"]
              ? answer2["4_3_3"]
              : ""
            : " ",
          answer4_3_4: data["4_3_4"]
            ? answer2["4_3_4"]
              ? answer2["4_3_4"]
              : ""
            : " ",
          answer4_3_5: data["4_3_5"]
            ? answer2["4_3_5"]
              ? answer2["4_3_5"]
              : ""
            : " ",
          answer4_4_1: data["4_4_1"]
            ? answer2["4_4_1"]
              ? answer2["4_4_1"]
              : ""
            : " ",
          answer4_4_2: data["4_4_2"]
            ? answer2["4_4_2"]
              ? answer2["4_4_2"]
              : ""
            : " ",
          answer4_4_3: data["4_4_3"]
            ? answer2["4_4_3"]
              ? answer2["4_4_3"]
              : ""
            : " ",
          answer4_4_4: data["4_4_4"]
            ? answer2["4_4_4"]
              ? answer2["4_4_4"]
              : ""
            : " ",
          answer4_4_5: data["4_4_5"]
            ? answer2["4_4_5"]
              ? answer2["4_4_5"]
              : ""
            : " ",
          // 5
          answer5_1_1: data["5_1_1"]
            ? answer2["5_1_1"]
              ? answer2["5_1_1"]
              : ""
            : " ",
          answer5_1_2: data["5_1_2"]
            ? answer2["5_1_2"]
              ? answer2["5_1_2"]
              : ""
            : " ",
          answer5_1_3: data["5_1_3"]
            ? answer2["5_1_3"]
              ? answer2["5_1_3"]
              : ""
            : " ",
          answer5_1_4: data["5_1_4"]
            ? answer2["5_1_4"]
              ? answer2["5_1_4"]
              : ""
            : " ",
          answer5_1_5: data["5_1_5"]
            ? answer2["5_1_5"]
              ? answer2["5_1_5"]
              : ""
            : " ",
          answer5_2_1: data["5_2_1"]
            ? answer2["5_2_1"]
              ? answer2["5_2_1"]
              : ""
            : " ",
          answer5_2_2: data["5_2_2"]
            ? answer2["5_2_2"]
              ? answer2["5_2_2"]
              : ""
            : " ",
          answer5_2_3: data["5_2_3"]
            ? answer2["5_2_3"]
              ? answer2["5_2_3"]
              : ""
            : " ",
          answer5_2_4: data["5_2_4"]
            ? answer2["5_2_4"]
              ? answer2["5_2_4"]
              : ""
            : " ",
          answer5_2_5: data["5_2_5"]
            ? answer2["5_2_5"]
              ? answer2["5_2_5"]
              : ""
            : " ",
          answer5_3_1: data["5_3_1"]
            ? answer2["5_3_1"]
              ? answer2["5_3_1"]
              : ""
            : " ",
          answer5_3_2: data["5_3_2"]
            ? answer2["5_3_2"]
              ? answer2["5_3_2"]
              : ""
            : " ",
          answer5_3_3: data["5_3_3"]
            ? answer2["5_3_3"]
              ? answer2["5_3_3"]
              : ""
            : " ",
          answer5_3_4: data["5_3_4"]
            ? answer2["5_3_4"]
              ? answer2["5_3_4"]
              : ""
            : " ",
          answer5_3_5: data["5_3_5"]
            ? answer2["5_3_5"]
              ? answer2["5_3_5"]
              : ""
            : " ",
          answer5_4_1: data["5_4_1"]
            ? answer2["5_4_1"]
              ? answer2["5_4_1"]
              : ""
            : " ",
          answer5_4_2: data["5_4_2"]
            ? answer2["5_4_2"]
              ? answer2["5_4_2"]
              : ""
            : " ",
          answer5_4_3: data["5_4_3"]
            ? answer2["5_4_3"]
              ? answer2["5_4_3"]
              : ""
            : " ",
          answer5_4_4: data["5_4_4"]
            ? answer2["5_4_4"]
              ? answer2["5_4_4"]
              : ""
            : " ",
          answer5_4_5: data["5_4_5"]
            ? answer2["5_4_5"]
              ? answer2["5_4_5"]
              : ""
            : " ",
          // 6
          answer6_1_1: data["6_1_1"]
            ? answer2["6_1_1"]
              ? answer2["6_1_1"]
              : ""
            : " ",
          answer6_1_2: data["6_1_2"]
            ? answer2["6_1_2"]
              ? answer2["6_1_2"]
              : ""
            : " ",
          answer6_1_3: data["6_1_3"]
            ? answer2["6_1_3"]
              ? answer2["6_1_3"]
              : ""
            : " ",
          answer6_1_4: data["6_1_4"]
            ? answer2["6_1_4"]
              ? answer2["6_1_4"]
              : ""
            : " ",
          answer6_1_5: data["6_1_5"]
            ? answer2["6_1_5"]
              ? answer2["6_1_5"]
              : ""
            : " ",
          answer6_2_1: data["6_2_1"]
            ? answer2["6_2_1"]
              ? answer2["6_2_1"]
              : ""
            : " ",
          answer6_2_2: data["6_2_2"]
            ? answer2["6_2_2"]
              ? answer2["6_2_2"]
              : ""
            : " ",
          answer6_2_3: data["6_2_3"]
            ? answer2["6_2_3"]
              ? answer2["6_2_3"]
              : ""
            : " ",
          answer6_2_4: data["6_2_4"]
            ? answer2["6_2_4"]
              ? answer2["6_2_4"]
              : ""
            : " ",
          answer6_2_5: data["6_2_5"]
            ? answer2["6_2_5"]
              ? answer2["6_2_5"]
              : ""
            : " ",
        });
      });
    });
  }, []);

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
      for (let k = 1; k <= 4; k++) {
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
  // 3번째 카테고리 세부II 질문
  const [question3_1, setQuestion3_1] = useState([]);
  const [question3_2, setQuestion3_2] = useState([]);
  const [question3_3, setQuestion3_3] = useState([]);
  const [question3_4, setQuestion3_4] = useState([]);
  // 4번째 카테고리 세부II 질문
  const [question4_1, setQuestion4_1] = useState([]);
  const [question4_2, setQuestion4_2] = useState([]);
  const [question4_3, setQuestion4_3] = useState([]);
  const [question4_4, setQuestion4_4] = useState([]);
  // 5번째 카테고리 세부II 질문
  const [question5_1, setQuestion5_1] = useState([]);
  const [question5_2, setQuestion5_2] = useState([]);
  const [question5_3, setQuestion5_3] = useState([]);
  const [question5_4, setQuestion5_4] = useState([]);
  // 6번째 카테고리 세부II 질문
  const [question6_1, setQuestion6_1] = useState([]);
  const [question6_2, setQuestion6_2] = useState([]);

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

    answer4_3_1: "",
    answer4_3_2: "",
    answer4_3_3: "",
    answer4_3_4: "",
    answer4_3_5: "",

    answer4_4_1: "",
    answer4_4_2: "",
    answer4_4_3: "",
    answer4_4_4: "",
    answer4_4_5: "",
    // 5
    answer5_1_1: "",
    answer5_1_2: "",
    answer5_1_3: "",
    answer5_1_4: "",
    answer5_1_5: "",

    answer5_2_1: "",
    answer5_2_2: "",
    answer5_2_3: "",
    answer5_2_4: "",
    answer5_2_5: "",

    answer5_3_1: "",
    answer5_3_2: "",
    answer5_3_3: "",
    answer5_3_4: "",
    answer5_3_5: "",

    answer5_4_1: "",
    answer5_4_2: "",
    answer5_4_3: "",
    answer5_4_4: "",
    answer5_4_5: "",
    // 6
    answer6_1_1: "",
    answer6_1_2: "",
    answer6_1_3: "",
    answer6_1_4: "",
    answer6_1_5: "",

    answer6_2_1: "",
    answer6_2_2: "",
    answer6_2_3: "",
    answer6_2_4: "",
    answer6_2_5: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setAnswerList2({
      ...answerList2,
      [name]: value,
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

  // 제출하기 버튼 클릭 시 유효성 검사
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
      answerList2.answer4_2_5.length >= 1 &&
      answerList2.answer4_3_1.length >= 1 &&
      answerList2.answer4_3_2.length >= 1 &&
      answerList2.answer4_3_3.length >= 1 &&
      answerList2.answer4_3_4.length >= 1 &&
      answerList2.answer4_3_5.length >= 1 &&
      answerList2.answer4_4_1.length >= 1 &&
      answerList2.answer4_4_2.length >= 1 &&
      answerList2.answer4_4_3.length >= 1 &&
      answerList2.answer4_4_4.length >= 1 &&
      answerList2.answer4_4_5.length >= 1 &&
      // 5
      answerList2.answer5_1_1.length >= 1 &&
      answerList2.answer5_1_2.length >= 1 &&
      answerList2.answer5_1_3.length >= 1 &&
      answerList2.answer5_1_4.length >= 1 &&
      answerList2.answer5_1_5.length >= 1 &&
      answerList2.answer5_2_1.length >= 1 &&
      answerList2.answer5_2_2.length >= 1 &&
      answerList2.answer5_2_3.length >= 1 &&
      answerList2.answer5_2_4.length >= 1 &&
      answerList2.answer5_2_5.length >= 1 &&
      answerList2.answer5_3_1.length >= 1 &&
      answerList2.answer5_3_2.length >= 1 &&
      answerList2.answer5_3_3.length >= 1 &&
      answerList2.answer5_3_4.length >= 1 &&
      answerList2.answer5_3_5.length >= 1 &&
      answerList2.answer5_4_1.length >= 1 &&
      answerList2.answer5_4_2.length >= 1 &&
      answerList2.answer5_4_3.length >= 1 &&
      answerList2.answer5_4_4.length >= 1 &&
      answerList2.answer5_4_5.length >= 1 &&
      // 6
      answerList2.answer6_1_1.length >= 1 &&
      answerList2.answer6_1_2.length >= 1 &&
      answerList2.answer6_1_3.length >= 1 &&
      answerList2.answer6_1_4.length >= 1 &&
      answerList2.answer6_1_5.length >= 1 &&
      answerList2.answer6_2_1.length >= 1 &&
      answerList2.answer6_2_2.length >= 1 &&
      answerList2.answer6_2_3.length >= 1 &&
      answerList2.answer6_2_4.length >= 1 &&
      answerList2.answer6_2_5.length >= 1
    ) {
      setSubmitModal(true);
    } else {
      setNoWriteModal(true);
    }
  };
  // 저장, 제출하기
  const onClickSubmit = async (key) => {
    let state = "";
    if (key === "save") {
      state = "SCAN_C4";
      setSaveModal(true);
    } else if (key == "submit") {
      state = "SCAN_C5";
      window.location.href = "/Home_client";
    }
    await Axios.put("http://34.68.101.191:8000/put/Scan_detail_qna_2_client", {
      business_name: clientData.BUSINESS_NAME,
      answerList2,
      state,
    });
  };

  return (
    <>
      {questionInputs()}
      <Header title="SCANNer 세부스캔 II" img="./img/header_scan.png" />
      <div className="Scan_top">
        <p>사업명 : {clientData.BUSINESS_NAME}</p>
        <p className="Scan_top_boder">제출일시 : {clientData.CREATED_DATE}</p>
        <p>현재상태 : {clientData.STATE_NAME}</p>
      </div>
      <div className="Scan_detail_qna_client_inner">
        <div className="Scan_detail_qna_client_inner_header">
          <img src="./img/report.png" alt="img" />
          <p>
            리포트 작성에 필요한 추가 질문 <b>세부스캔 II 단계</b> 입니다.
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
                          {`1-${index + 1}`} {item.title}
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
                  ) : (
                    ""
                  )}
                  {/* 세부스캔 질문 II 있는거만 보여줌 */}
                  {item.key === "1_1" &&
                  item.question2 &&
                  question1_1.length > 0
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
        question2_4.length > 0 ? (
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
                          {`2-${index + 1}`} {item.title}
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
                  ) : (
                    ""
                  )}
                  {/* 세부스캔 질문 II 있는거만 보여줌 */}
                  {item.key === "2_1" &&
                  item.question2 &&
                  question2_1.length > 0
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
                          {`3-${index + 1}`} {item.title}
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
                  ) : (
                    ""
                  )}
                  {/* 세부스캔 질문 II 있는거만 보여줌 */}
                  {item.key === "3_1" &&
                  item.question2 &&
                  question3_1.length > 0
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
        {question4_1.length > 0 ||
        question4_2.length > 0 ||
        question4_3.length > 0 ||
        question4_4.length > 0 ? (
          <div className="Scan_detail_qna_client_inner_content">
            <div className="Scan_detail_qna_client_inner_content_title">
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
                          {`4-${index + 1}`} {item.title}
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
                  ) : (
                    ""
                  )}
                  {/* 세부스캔 질문 II 있는거만 보여줌 */}
                  {item.key === "4_1" &&
                  item.question2 &&
                  question4_1.length > 0
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
                    : item.key === "4_3" &&
                      item.question2 &&
                      question4_3.length > 0
                    ? question4_3.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box4_3_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title4_3_${
                              index + 1
                            }`}
                          >
                            <p>
                              4-3-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer4_3_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text4_3_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer4_3_${index + 1}`}
                              value={
                                item.key === "4_3_1"
                                  ? answerList2.answer4_3_1
                                  : item.key === "4_3_2"
                                  ? answerList2.answer4_3_2
                                  : item.key === "4_3_3"
                                  ? answerList2.answer4_3_3
                                  : item.key === "4_3_4"
                                  ? answerList2.answer4_3_4
                                  : item.key === "4_3_5"
                                  ? answerList2.answer4_3_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "4_4" &&
                      item.question2 &&
                      question4_4.length > 0
                    ? question4_4.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box4_4_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title4_4_${
                              index + 1
                            }`}
                          >
                            <p>
                              4-4-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer4_4_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text4_4_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer4_4_${index + 1}`}
                              value={
                                item.key === "4_4_1"
                                  ? answerList2.answer4_4_1
                                  : item.key === "4_4_2"
                                  ? answerList2.answer4_4_2
                                  : item.key === "4_4_3"
                                  ? answerList2.answer4_4_3
                                  : item.key === "4_4_4"
                                  ? answerList2.answer4_4_4
                                  : item.key === "4_4_5"
                                  ? answerList2.answer4_4_5
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

        {/* 5번째 카테고리 */}
        {question5_1.length > 0 ||
        question5_2.length > 0 ||
        question5_3.length > 0 ||
        question5_4.length > 0 ? (
          <div className="Scan_detail_qna_client_inner_content">
            <div className="Scan_detail_qna_client_inner_content_title">
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
            <div className="Scan_detail_qna_client_inner_content_box con5">
              {question5.map((item, index) => (
                <div key={index}>
                  {item.question2 ? (
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_content  box5_${
                        index + 1
                      }`}
                    >
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_title anq2_p title5_${
                          index + 1
                        }`}
                      >
                        <p>
                          {`5-${index + 1}`} {item.title}
                        </p>
                      </div>
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_text text5_${
                          index + 1
                        }`}
                      >
                        <textarea
                          className="anq2_p"
                          name={`answer5_${index + 1}`}
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
                  ) : (
                    ""
                  )}
                  {/* 세부스캔 질문 II 있는거만 보여줌 */}
                  {item.key === "5_1" &&
                  item.question2 &&
                  question5_1.length > 0
                    ? question5_1.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box5_1_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title5_1_${
                              index + 1
                            }`}
                          >
                            <p>
                              5-1-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer5_1_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text5_1_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer5_1_${index + 1}`}
                              value={
                                item.key === "5_1_1"
                                  ? answerList2.answer5_1_1
                                  : item.key === "5_1_2"
                                  ? answerList2.answer5_1_2
                                  : item.key === "5_1_3"
                                  ? answerList2.answer5_1_3
                                  : item.key === "5_1_4"
                                  ? answerList2.answer5_1_4
                                  : item.key === "5_1_5"
                                  ? answerList2.answer5_1_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "5_2" &&
                      item.question2 &&
                      question5_2.length > 0
                    ? question5_2.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box5_2_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title5_2_${
                              index + 1
                            }`}
                          >
                            <p>
                              5-2-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer5_2_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text5_2_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer5_2_${index + 1}`}
                              value={
                                item.key === "5_2_1"
                                  ? answerList2.answer5_2_1
                                  : item.key === "5_2_2"
                                  ? answerList2.answer5_2_2
                                  : item.key === "5_2_3"
                                  ? answerList2.answer5_2_3
                                  : item.key === "5_2_4"
                                  ? answerList2.answer5_2_4
                                  : item.key === "5_2_5"
                                  ? answerList2.answer5_2_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "5_3" &&
                      item.question2 &&
                      question5_3.length > 0
                    ? question5_3.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box5_3_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title5_3_${
                              index + 1
                            }`}
                          >
                            <p>
                              5-3-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer5_3_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text5_3_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer5_3_${index + 1}`}
                              value={
                                item.key === "5_3_1"
                                  ? answerList2.answer5_3_1
                                  : item.key === "5_3_2"
                                  ? answerList2.answer5_3_2
                                  : item.key === "5_3_3"
                                  ? answerList2.answer5_3_3
                                  : item.key === "5_3_4"
                                  ? answerList2.answer5_3_4
                                  : item.key === "5_3_5"
                                  ? answerList2.answer5_3_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "5_4" &&
                      item.question2 &&
                      question5_4.length > 0
                    ? question5_4.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box5_4_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title5_4_${
                              index + 1
                            }`}
                          >
                            <p>
                              5-4-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer5_4_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text5_4_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer5_4_${index + 1}`}
                              value={
                                item.key === "5_4_1"
                                  ? answerList2.answer5_4_1
                                  : item.key === "5_4_2"
                                  ? answerList2.answer5_4_2
                                  : item.key === "5_4_3"
                                  ? answerList2.answer5_4_3
                                  : item.key === "5_4_4"
                                  ? answerList2.answer5_4_4
                                  : item.key === "5_4_5"
                                  ? answerList2.answer5_4_5
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

        {/* 6번째 카테고리 */}
        {question6_1.length > 0 || question6_2.length > 0 ? (
          <div className="Scan_detail_qna_client_inner_content">
            <div className="Scan_detail_qna_client_inner_content_title">
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
            <div className="Scan_detail_qna_client_inner_content_box con6">
              {question6.map((item, index) => (
                <div key={index}>
                  {item.question2 ? (
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_content  box6_${
                        index + 1
                      }`}
                    >
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_title anq2_p title6_${
                          index + 1
                        }`}
                      >
                        <p>
                          {`6-${index + 1}`} {item.title}
                        </p>
                      </div>
                      <div
                        className={`Scan_detail_qna_client_inner_content_box_text text6_${
                          index + 1
                        }`}
                      >
                        <textarea
                          className="anq2_p"
                          name={`answer6_${index + 1}`}
                          value={
                            item.key === "6_1"
                              ? answerList.answer6_1
                              : item.key === "6_2"
                              ? answerList.answer6_2
                              : item.key === "6_3"
                              ? answerList.answer6_3
                              : answerList.answer6_4
                          }
                          disabled
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* 세부스캔 질문 II 있는거만 보여줌 */}
                  {item.key === "6_1" &&
                  item.question2 &&
                  question6_1.length > 0
                    ? question6_1.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box6_1_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title6_1_${
                              index + 1
                            }`}
                          >
                            <p>
                              6-1-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer6_1_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text6_1_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer6_1_${index + 1}`}
                              value={
                                item.key === "6_1_1"
                                  ? answerList2.answer6_1_1
                                  : item.key === "6_1_2"
                                  ? answerList2.answer6_1_2
                                  : item.key === "6_1_3"
                                  ? answerList2.answer6_1_3
                                  : item.key === "6_1_4"
                                  ? answerList2.answer6_1_4
                                  : item.key === "6_1_5"
                                  ? answerList2.answer6_1_5
                                  : ""
                              }
                              onChange={getValue}
                            />
                          </div>
                        </div>
                      ))
                    : item.key === "6_2" &&
                      item.question2 &&
                      question6_2.length > 0
                    ? question6_2.map((item, index) => (
                        <div
                          key={index}
                          className={`Scan_detail_qna_client_inner_content_box_content box6_2_${
                            index + 1
                          }`}
                        >
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_title title6_2_${
                              index + 1
                            }`}
                          >
                            <p>
                              6-2-{String.fromCharCode(65 + index)}.{" "}
                              {item.question}
                            </p>
                            <label
                              className="click_lable"
                              htmlFor={`answer6_2_${index + 1}`}
                            >
                              <img
                                className="click_img"
                                src="./img/click.png"
                                alt="img"
                              />
                            </label>
                          </div>
                          <div
                            className={`Scan_detail_qna_client_inner_content_box_text text6_2_${
                              index + 1
                            }`}
                          >
                            <textarea
                              name={`answer6_2_${index + 1}`}
                              value={
                                item.key === "6_2_1"
                                  ? answerList2.answer6_2_1
                                  : item.key === "6_2_2"
                                  ? answerList2.answer6_2_2
                                  : item.key === "6_2_3"
                                  ? answerList2.answer6_2_3
                                  : item.key === "6_2_4"
                                  ? answerList2.answer6_2_4
                                  : item.key === "6_2_5"
                                  ? answerList2.answer6_2_5
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

        <div className="Scan_content_box_btn">
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
          <img src="./img/popup_8.png" alt="img" />
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

export default Scan_detail_qna_2_client;
