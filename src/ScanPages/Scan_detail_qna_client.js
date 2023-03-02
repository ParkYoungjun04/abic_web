import "./Scan_detail_qna_client.css";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Axios from "axios";
import Header from "../Header";
const Scan_detail_qna_client = () => {
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

  // 답변 파일
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
  // 세부스캔 저장된 답변, 저장된 파일
  useEffect(() => {
    let question = "";
    let answer = "";
    Axios.get("http://34.68.101.191:8000/get/Scan_detail_qna_client", {
      params: { business_name: clientData.BUSINESS_NAME },
    }).then((response) => {
      answer = response.data[0];
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
  }, []);

  // 세부스캔 질문
  useEffect(() => {
    let question = "";
    Axios.get("http://34.68.101.191:8000/get/Scan_qna_writer", {
      params: { business_name: clientData.BUSINESS_NAME },
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

  const onChangeFile = (title, file) => {
    setFiles({
      ...files,
      [title]: file === undefined ? "" : file,
    });
  };
  const getValue = (e) => {
    const { name, value } = e.target;
    setAnswerList({
      ...answerList,
      [name]: value,
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
      for (let k = 1; k <= 4; k++) {
        arr.push(
          <input
            key={(key = key + 1)}
            className="Scan_detail_qna_client_kategorie_checkbox"
            id={`answer${i}_${k}`}
            type="checkbox"
          />
        );
      }
    }

    return arr;
  };

  // 제출하기 버튼 클릭 시 유효성 검사
  const onClickSubmitModal = () => {
    if (
      answerList.answer1_1.length >= 1 &&
      answerList.answer1_2.length >= 1 &&
      answerList.answer1_3.length >= 1 &&
      answerList.answer1_4.length >= 1 &&
      answerList.answer2_1.length >= 1 &&
      answerList.answer2_2.length >= 1 &&
      answerList.answer2_3.length >= 1 &&
      answerList.answer2_4.length >= 1 &&
      answerList.answer3_1.length >= 1 &&
      answerList.answer3_2.length >= 1 &&
      answerList.answer3_3.length >= 1 &&
      answerList.answer3_4.length >= 1 &&
      answerList.answer4_1.length >= 1 &&
      answerList.answer4_2.length >= 1 &&
      answerList.answer4_3.length >= 1 &&
      answerList.answer4_4.length >= 1 &&
      answerList.answer5_1.length >= 1 &&
      answerList.answer5_2.length >= 1 &&
      answerList.answer5_3.length >= 1 &&
      answerList.answer5_4.length >= 1 &&
      answerList.answer6_1.length >= 1 &&
      answerList.answer6_2.length >= 1
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
      state = "SCAN_C3";
      setSaveModal(true);
    } else if (key == "submit") {
      state = "SCAN_C5";
      window.location.href = "/Home_client";
    }
    const formDate = new FormData();
    // 1
    formDate.append("file", files.file1_1);
    formDate.append("fileName", files.file1_1 ? files.file1_1.name : "");

    formDate.append("file", files.file1_2);
    formDate.append("fileName", files.file1_2 ? files.file1_2.name : "");

    formDate.append("file", files.file1_3);
    formDate.append("fileName", files.file1_3 ? files.file1_3.name : "");

    formDate.append("file", files.file1_4);
    formDate.append("fileName", files.file1_4 ? files.file1_4.name : "");
    // 2
    formDate.append("file", files.file2_1);
    formDate.append("fileName", files.file2_1 ? files.file2_1.name : "");

    formDate.append("file", files.file2_2);
    formDate.append("fileName", files.file2_2 ? files.file2_2.name : "");

    formDate.append("file", files.file2_3);
    formDate.append("fileName", files.file2_3 ? files.file2_3.name : "");

    formDate.append("file", files.file2_4);
    formDate.append("fileName", files.file2_4 ? files.file2_4.name : "");

    // 3
    formDate.append("file", files.file3_1);
    formDate.append("fileName", files.file3_1 ? files.file3_1.name : "");

    formDate.append("file", files.file3_2);
    formDate.append("fileName", files.file3_2 ? files.file3_2.name : "");

    formDate.append("file", files.file3_3);
    formDate.append("fileName", files.file3_3 ? files.file3_3.name : "");

    formDate.append("file", files.file3_4);
    formDate.append("fileName", files.file3_4 ? files.file3_4.name : "");

    // 4
    formDate.append("file", files.file4_1);
    formDate.append("fileName", files.file4_1 ? files.file4_1.name : "");

    formDate.append("file", files.file4_2);
    formDate.append("fileName", files.file4_2 ? files.file4_2.name : "");

    formDate.append("file", files.file4_3);
    formDate.append("fileName", files.file4_3 ? files.file4_3.name : "");

    formDate.append("file", files.file4_4);
    formDate.append("fileName", files.file4_4 ? files.file4_4.name : "");

    // 5
    formDate.append("file", files.file5_1);
    formDate.append("fileName", files.file5_1 ? files.file5_1.name : "");

    formDate.append("file", files.file5_2);
    formDate.append("fileName", files.file5_2 ? files.file5_2.name : "");

    formDate.append("file", files.file5_3);
    formDate.append("fileName", files.file5_3 ? files.file5_3.name : "");

    formDate.append("file", files.file5_4);
    formDate.append("fileName", files.file5_4 ? files.file5_4.name : "");

    // 6
    formDate.append("file", files.file6_1);
    formDate.append("fileName", files.file6_1 ? files.file6_1.name : "");

    formDate.append("file", files.file6_2);
    formDate.append("fileName", files.file6_2 ? files.file6_2.name : "");

    formDate.append("business_name", clientData.BUSINESS_NAME);
    formDate.append("answerList", JSON.stringify(answerList));
    formDate.append("state", state);

    await Axios.put(
      "http://34.68.101.191:8000/put/Scan_detail_qna_client",
      formDate
    );
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
      <Header title="SCANNer 세부스캔" img="./img/header_scan.png" />
      <div className="Scan_top">
        <p>사업명 : {clientData.BUSINESS_NAME}</p>
        <p className="Scan_top_boder">제출일시 : {clientData.CREATED_DATE}</p>
        <p>현재상태 : {clientData.STATE_NAME}</p>
      </div>
      <div className="Scan_detail_qna_client_inner">
        <div className="Scan_detail_qna_client_inner_header">
          <img src="./img/report.png" alt="img" />
          <p>
            사업 아이디어 <b>진단을 위한 세부스캔</b> 단계입니다.
          </p>
          <p>
            답변 시 필요한 <b>이미지 및 참고자료</b>가 있으시면 파일 첨부 후
            제출 부탁드립니다.
          </p>
        </div>
        {/* 1번째 카테고리 */}
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
            {answerList.answer1_1.length >= 1 &&
            answerList.answer1_2.length >= 1 &&
            answerList.answer1_3.length >= 1 &&
            answerList.answer1_4.length >= 1 ? (
              <img className="check1_img" src="./img/check1.png" alt="img" />
            ) : (
              ""
            )}
          </div>
          <div className="Scan_detail_qna_client_inner_content_box con1">
            {question1.map((item, index) => (
              <div key={index}>
                {item.title !== "" ? (
                  <div
                    className={`Scan_detail_qna_client_inner_content_box_content box1_${
                      index + 1
                    }`}
                  >
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_title title1_${
                        index + 1
                      }`}
                    >
                      <p>
                        {`1-${index + 1}`} {item.title}
                      </p>
                      <label
                        className="click_lable"
                        htmlFor={`answer1_${index + 1}`}
                      >
                        <img
                          className="click_img"
                          src="./img/click.png"
                          alt="img"
                        />
                      </label>
                      <input
                        type="file"
                        id={`file1_${index + 1}`}
                        name={`file1_${index + 1}`}
                        onChange={(e) => {
                          const name = e.target.name;
                          const file = e.target.files[0];
                          onChangeFile(name, file);
                        }}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                      <div className="cilp">
                        <label
                          className="cilp_lable"
                          htmlFor={`file1_${index + 1}`}
                        >
                          <img src="./img/cilp.png" alt="img" />
                          <p
                            className={
                              item.file !== "" && item.file !== undefined
                                ? "on_file"
                                : "no_file"
                            }
                          >
                            파일첨부
                          </p>
                        </label>
                      </div>
                    </div>
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_text text1_${
                        index + 1
                      }`}
                    >
                      <textarea
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
                        onChange={getValue}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        {/* 2번째 카테고리 */}
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
            {answerList.answer2_1.length >= 1 &&
            answerList.answer2_2.length >= 1 &&
            answerList.answer2_3.length >= 1 &&
            answerList.answer2_4.length >= 1 ? (
              <img className="check1_img" src="./img/check1.png" alt="img" />
            ) : (
              ""
            )}
          </div>
          <div className="Scan_detail_qna_client_inner_content_box con2">
            {question2.map((item, index) => (
              <div key={index}>
                {item.title !== "" ? (
                  <div
                    className={`Scan_detail_qna_client_inner_content_box_content box2_${
                      index + 1
                    }`}
                  >
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_title title2_${
                        index + 1
                      }`}
                    >
                      <p>
                        {`2-${index + 1}`} {item.title}
                      </p>
                      <label
                        className="click_lable"
                        htmlFor={`answer2_${index + 1}`}
                      >
                        <img
                          className="click_img"
                          src="./img/click.png"
                          alt="img"
                        />
                      </label>
                      <input
                        type="file"
                        id={`file2_${index + 1}`}
                        name={`file2_${index + 1}`}
                        onChange={(e) => {
                          const name = e.target.name;
                          const file = e.target.files[0];
                          onChangeFile(name, file);
                        }}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                      <div className="cilp">
                        <label
                          className="cilp_lable"
                          htmlFor={`file2_${index + 1}`}
                        >
                          <img src="./img/cilp.png" alt="img" />
                          <p
                            className={
                              item.file !== "" && item.file !== undefined
                                ? "on_file"
                                : "no_file"
                            }
                          >
                            파일첨부
                          </p>
                        </label>
                      </div>
                    </div>
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_text text2_${
                        index + 1
                      }`}
                    >
                      <textarea
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
                        onChange={getValue}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        {/* 3번째 카테고리 */}
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
            {answerList.answer3_1.length >= 1 &&
            answerList.answer3_2.length >= 1 &&
            answerList.answer3_3.length >= 1 &&
            answerList.answer3_4.length >= 1 ? (
              <img className="check1_img" src="./img/check1.png" alt="img" />
            ) : (
              ""
            )}
          </div>
          <div className="Scan_detail_qna_client_inner_content_box con3">
            {question3.map((item, index) => (
              <div key={index}>
                {item.title !== "" ? (
                  <div
                    className={`Scan_detail_qna_client_inner_content_box_content box3_${
                      index + 1
                    }`}
                  >
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_title title3_${
                        index + 1
                      }`}
                    >
                      <p>
                        {`3-${index + 1}`} {item.title}
                      </p>
                      <label
                        className="click_lable"
                        htmlFor={`answer3_${index + 1}`}
                      >
                        <img
                          className="click_img"
                          src="./img/click.png"
                          alt="img"
                        />
                      </label>
                      <input
                        type="file"
                        id={`file3_${index + 1}`}
                        name={`file3_${index + 1}`}
                        onChange={(e) => {
                          const name = e.target.name;
                          const file = e.target.files[0];
                          onChangeFile(name, file);
                        }}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                      <div className="cilp">
                        <label
                          className="cilp_lable"
                          htmlFor={`file3_${index + 1}`}
                        >
                          <img src="./img/cilp.png" alt="img" />
                          <p
                            className={
                              item.file !== "" && item.file !== undefined
                                ? "on_file"
                                : "no_file"
                            }
                          >
                            파일첨부
                          </p>
                        </label>
                      </div>
                    </div>
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_text text3_${
                        index + 1
                      }`}
                    >
                      <textarea
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
                        onChange={getValue}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        {/* 4번째 카테고리 */}
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
            {answerList.answer4_1.length >= 1 &&
            answerList.answer4_2.length >= 1 &&
            answerList.answer4_3.length >= 1 &&
            answerList.answer4_4.length >= 1 ? (
              <img className="check1_img" src="./img/check1.png" alt="img" />
            ) : (
              ""
            )}
          </div>
          <div className="Scan_detail_qna_client_inner_content_box con4">
            {question4.map((item, index) => (
              <div key={index}>
                {item.title !== "" ? (
                  <div
                    className={`Scan_detail_qna_client_inner_content_box_content box4_${
                      index + 1
                    }`}
                  >
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_title title4_${
                        index + 1
                      }`}
                    >
                      <p>
                        {`4-${index + 1}`} {item.title}
                      </p>
                      <label
                        className="click_lable"
                        htmlFor={`answer4_${index + 1}`}
                      >
                        <img
                          className="click_img"
                          src="./img/click.png"
                          alt="img"
                        />
                      </label>
                      <input
                        type="file"
                        id={`file4_${index + 1}`}
                        name={`file4_${index + 1}`}
                        onChange={(e) => {
                          const name = e.target.name;
                          const file = e.target.files[0];
                          onChangeFile(name, file);
                        }}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                      <div className="cilp">
                        <label
                          className="cilp_lable"
                          htmlFor={`file4_${index + 1}`}
                        >
                          <img src="./img/cilp.png" alt="img" />
                          <p
                            className={
                              item.file !== "" && item.file !== undefined
                                ? "on_file"
                                : "no_file"
                            }
                          >
                            파일첨부
                          </p>
                        </label>
                      </div>
                    </div>
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_text text4_${
                        index + 1
                      }`}
                    >
                      <textarea
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
                        onChange={getValue}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        {/* 5번째 카테고리 */}
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
            {answerList.answer5_1.length >= 1 &&
            answerList.answer5_2.length >= 1 &&
            answerList.answer5_3.length >= 1 &&
            answerList.answer5_4.length >= 1 ? (
              <img className="check1_img" src="./img/check1.png" alt="img" />
            ) : (
              ""
            )}
          </div>
          <div className="Scan_detail_qna_client_inner_content_box con5">
            {question5.map((item, index) => (
              <div key={index}>
                {item.title !== "" ? (
                  <div
                    className={`Scan_detail_qna_client_inner_content_box_content box5_${
                      index + 1
                    }`}
                  >
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_title title5_${
                        index + 1
                      }`}
                    >
                      <p>
                        {`5-${index + 1}`} {item.title}
                      </p>
                      <label
                        className="click_lable"
                        htmlFor={`answer5_${index + 1}`}
                      >
                        <img
                          className="click_img"
                          src="./img/click.png"
                          alt="img"
                        />
                      </label>
                      <input
                        type="file"
                        id={`file5_${index + 1}`}
                        name={`file5_${index + 1}`}
                        onChange={(e) => {
                          const name = e.target.name;
                          const file = e.target.files[0];
                          onChangeFile(name, file);
                        }}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                      <div className="cilp">
                        <label
                          className="cilp_lable"
                          htmlFor={`file5_${index + 1}`}
                        >
                          <img src="./img/cilp.png" alt="img" />
                          <p
                            className={
                              item.file !== "" && item.file !== undefined
                                ? "on_file"
                                : "no_file"
                            }
                          >
                            파일첨부
                          </p>
                        </label>
                      </div>
                    </div>
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_text text5_${
                        index + 1
                      }`}
                    >
                      <textarea
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
                        onChange={getValue}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        {/* 6번째 카테고리 */}
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
            {answerList.answer6_1.length >= 1 &&
            answerList.answer6_2.length >= 1 ? (
              <img className="check1_img" src="./img/check1.png" alt="img" />
            ) : (
              ""
            )}
          </div>
          <div className="Scan_detail_qna_client_inner_content_box con6">
            {question6.map((item, index) => (
              <div key={index}>
                {item.title !== "" ? (
                  <div
                    className={`Scan_detail_qna_client_inner_content_box_content box6_${
                      index + 1
                    }`}
                  >
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_title title6_${
                        index + 1
                      }`}
                    >
                      <p>
                        {`6-${index + 1}`} {item.title}
                      </p>
                      <label
                        className="click_lable"
                        htmlFor={`answer6_${index + 1}`}
                      >
                        <img
                          className="click_img"
                          src="./img/click.png"
                          alt="img"
                        />
                      </label>
                      <input
                        type="file"
                        id={`file6_${index + 1}`}
                        name={`file6_${index + 1}`}
                        onChange={(e) => {
                          const name = e.target.name;
                          const file = e.target.files[0];
                          onChangeFile(name, file);
                        }}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                      <div className="cilp">
                        <label
                          className="cilp_lable"
                          htmlFor={`file6_${index + 1}`}
                        >
                          <img src="./img/cilp.png" alt="img" />
                          <p
                            className={
                              item.file !== "" && item.file !== undefined
                                ? "on_file"
                                : "no_file"
                            }
                          >
                            파일첨부
                          </p>
                        </label>
                      </div>
                    </div>
                    <div
                      className={`Scan_detail_qna_client_inner_content_box_text text6_${
                        index + 1
                      }`}
                    >
                      <textarea
                        name={`answer6_${index + 1}`}
                        value={
                          item.key === "6_1"
                            ? answerList.answer6_1
                            : answerList.answer6_2
                        }
                        onChange={getValue}
                        disabled={
                          clientData.STATE_NAME === "세부스캔 제출완료"
                            ? true
                            : false
                        }
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        {clientData.STATE_NAME === "세부스캔 제출완료" ? (
          ""
        ) : (
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
        )}
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

export default Scan_detail_qna_client;
