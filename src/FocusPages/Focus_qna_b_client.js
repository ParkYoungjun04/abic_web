import "./Focus_qna_client.css";
import "./Focus_qna_client.scss";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Header from "../Header";
import Axios from "axios";
const Focus_qna_b_client = () => {
  // 답변 리스트
  const [answerList, setAnswerList] = useState({
    business_name: "",
    answer1_1: "",
    answer1_2: "",
    answer1_3: "",

    answer2_1: "",
    answer2_2: "",
    answer2_3: "",
    answer2_4: "",
    answer2_5: "",
    answer2_6: "",
    answer2_7: "",
    answer2_8: "",

    answer3_1: "",
    answer3_2: "",
    answer3_3: "",
    answer3_4: "",

    answer4_1: "",
    answer4_2: "",
  });
  // 파일 리스트
  const [files, setFiles] = useState({
    file1_1: "",
    file1_2: "",
    file1_3: "",

    file2_1: "",
    file2_2: "",
    file2_3: "",
    file2_4: "",
    file2_5: "",
    file2_6: "",
    file2_7: "",
    file2_8: "",

    file3_1: "",
    file3_2: "",
    file3_3: "",
    file3_4: "",

    file4_1: "",
    file4_2: "",
  });
  console.log(answerList);
  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [question4, setQuestion4] = useState([]);
  useEffect(() => {
    setQuestion1([
      {
        key: "1_1",
        question: "사업 개시 후 1~2년 내 목표로 하는 시장은 어디입니까?",
        answer: answerList.answer1_1,
        file: files.file1_1,
      },
      {
        key: "1_2",
        question:
          "목표 시장에서 구체적으로 어떤 고객을 대상으로 사업을 하십니까?",
        answer: answerList.answer1_2,
        file: files.file1_2,
      },
      {
        key: "1_3",
        question:
          "사업개시 후 1~2년 내 목표로 하고 있는 시장은 다른 인접시장으로 진출하기 유리한 시장입니까?",
        answer: answerList.answer1_3,
        file: files.file1_3,
      },
    ]);
    setQuestion2([
      {
        key: "2_1",
        question: "사업을 통해 고객에게 무엇을 제공(오퍼링/offering)합니까?",
        answer: answerList.answer2_1,
        file: files.file2_1,
      },
      {
        key: "2_2",
        question:
          "고객들은 어떤 애로사항이나 니즈를 해결하려고 상기의 오퍼링을 구매합니까?",
        answer: answerList.answer2_2,
        file: files.file2_2,
      },
      {
        key: "2_3",
        question:
          "사업 개시 후 1~2년 내 목표로 하고 있는 시장에서 고객들은 동일한 애로사항이나 니즈를 해결하기 위해서 우리회사와 비슷한 오퍼링을 구매합니까? 아니면 전혀 다른 대안 오퍼링을 구매합니까?",
        answer: answerList.answer2_3,
        file: files.file2_3,
      },
      {
        key: "2_4",
        question:
          "사업 개시 후 1~2년 내 다른 경쟁자와는 어떻게 차별화할 것입니까? 다시 말해 고객들이 우리 회사의 오퍼링을 구매할 수 밖에 없는 이유는 무엇입니까?",
        answer: answerList.answer2_4,
        file: files.file2_4,
      },
      {
        key: "2_5",
        question:
          "우리회사가 제공하는 오퍼링은 직접개발해서 판매하는 것인가요? 아니면 다른 공급처에서 구매하여 유통하는 것입니까?",
        answer: answerList.answer2_5,
        file: files.file2_5,
      },
      {
        key: "2_6",
        question: "완성품을 단기간 내에 생산하여 출시하는 것이 가능합니까?",
        answer: answerList.answer2_6,
        file: files.file2_6,
      },
      {
        key: "2_7",
        question:
          "완성품을 생산하여 출시하는 데 있어 협력업체의 역할은 얼마나 큽니까?",
        answer: answerList.answer2_7,
        file: files.file2_7,
      },
      {
        key: "2_8",
        question:
          "사업 개시 후 1~2년 내 목표로 하는 시장에서 우리보다 훨씬 뛰어난 경쟁력을 가진 경쟁자가 있습니까? 아니면 우리만의 독점적 시장입니까?",
        answer: answerList.answer2_8,
        file: files.file2_8,
      },
    ]);
    setQuestion3([
      {
        key: "3_1",
        question:
          "사업 개시 후 1~2년 내 목표시장에서는 어떤 유통채널을 통해 오퍼링을 고객에게 판매하실 생각이십니까?",
        answer: answerList.answer3_1,
        file: files.file3_1,
      },
      {
        key: "3_2",
        question:
          "간접 유통의 경우, 유통채널을 대상으로 영업은 어떻게 진행할 것인가요?",
        answer: answerList.answer3_2,
        file: files.file3_2,
      },
      {
        key: "3_3",
        question: "직접 유통의 경우, 목표고객에게 어떻게 접근할 수 있을까요?",
        answer: answerList.answer3_3,
        file: files.file3_3,
      },
      {
        key: "3_4",
        question:
          "1~2년 내 공략할 목표시장의 유통채널이나 고객들에게 우리회사를 알리기 위해 마케팅을 어떻게 하실 것인가요?",
        answer: answerList.answer3_4,
        file: files.file3_4,
      },
    ]);
    setQuestion4([
      {
        key: "4_1",
        question: "수익은 어떻게 창출할 계획입니까? (수익창출 방식)",
        answer: answerList.answer4_1,
        file: files.file4_1,
      },
      {
        key: "4_2",
        question: "사업 개시 후 1~2년 내 예상하는 수익은 어느 정도입니까? ",
        answer: answerList.answer4_2,
        file: files.file4_2,
      },
    ]);
  }, [answerList, files]);

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
          className="Focus_detail_qna_client_kategorie_checkbox"
          id={`kategorie${i}`}
          type="checkbox"
        />
      );
      for (let k = 1; k <= 10; k++) {
        arr.push(
          <input
            key={(key = key + 1)}
            className="Focus_detail_qna_client_kategorie_checkbox"
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
      answerList.business_name !== "" &&
      answerList.answer1_1.length >= 1 &&
      answerList.answer1_2.length >= 1 &&
      answerList.answer1_3.length >= 1 &&
      answerList.answer2_1.length >= 1 &&
      answerList.answer2_2.length >= 1 &&
      answerList.answer2_3.length >= 1 &&
      answerList.answer2_4.length >= 1 &&
      answerList.answer2_5.length >= 1 &&
      answerList.answer2_6.length >= 1 &&
      answerList.answer2_7.length >= 1 &&
      answerList.answer2_8.length >= 1 &&
      answerList.answer3_1.length >= 1 &&
      answerList.answer3_2.length >= 1 &&
      answerList.answer3_3.length >= 1 &&
      answerList.answer3_4.length >= 1 &&
      answerList.answer4_1.length >= 1 &&
      answerList.answer4_2.length >= 1
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
      state = "FOCUS_C1";
      setSaveModal(true);
    } else if (key === "submit") {
      state = "FOCUS_C3";
      setTimeout(() => (window.location.href = "/Home_client"), 500);
    }
    const formDate = new FormData();
    formDate.append("file", files.file1_1);
    formDate.append("fileName", files.file1_1 ? files.file1_1.name : "");

    formDate.append("file", files.file1_2);
    formDate.append("fileName", files.file1_2 ? files.file1_2.name : "");

    formDate.append("file", files.file1_3);
    formDate.append("fileName", files.file1_3 ? files.file1_3.name : "");

    formDate.append("file", files.file2_1);
    formDate.append("fileName", files.file2_1 ? files.file2_1.name : "");

    formDate.append("file", files.file2_2);
    formDate.append("fileName", files.file2_2 ? files.file2_2.name : "");

    formDate.append("file", files.file2_3);
    formDate.append("fileName", files.file2_3 ? files.file2_3.name : "");

    formDate.append("file", files.file2_4);
    formDate.append("fileName", files.file2_4 ? files.file2_4.name : "");

    formDate.append("file", files.file2_5);
    formDate.append("fileName", files.file2_5 ? files.file2_5.name : "");

    formDate.append("file", files.file2_6);
    formDate.append("fileName", files.file2_6 ? files.file2_6.name : "");

    formDate.append("file", files.file2_7);
    formDate.append("fileName", files.file2_7 ? files.file2_7.name : "");

    formDate.append("file", files.file2_8);
    formDate.append("fileName", files.file2_8 ? files.file2_8.name : "");

    formDate.append("file", files.file3_1);
    formDate.append("fileName", files.file3_1 ? files.file3_1.name : "");

    formDate.append("file", files.file3_2);
    formDate.append("fileName", files.file3_2 ? files.file3_2.name : "");

    formDate.append("file", files.file3_3);
    formDate.append("fileName", files.file3_3 ? files.file3_3.name : "");

    formDate.append("file", files.file3_4);
    formDate.append("fileName", files.file3_4 ? files.file3_4.name : "");

    formDate.append("file", files.file4_1);
    formDate.append("fileName", files.file4_1 ? files.file4_1.name : "");

    formDate.append("file", files.file4_2);
    formDate.append("fileName", files.file4_2 ? files.file4_2.name : "");

    formDate.append("answerList", JSON.stringify(answerList));
    formDate.append("state", state);
    formDate.append("type", "b");

    formDate.append("userName", sessionStorage.getItem("name"));

    await Axios.post(
      "http://34.68.101.191:8000/post/Focus_qna_client",
      formDate
    );
  };
  // 제출하기 클릭
  const [submitModal, setSubmitModal] = useState(false);
  // 저장하기 클릭
  const [saveModal, setSaveModal] = useState(false);
  // 사업명 작성 안함
  const [titleNameModal, setTitleNameModal] = useState(false);
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
      if (
        setTitleNameModal &&
        modalOutSide.current &&
        !modalOutSide.current.contains(e.target)
      ) {
        setTitleNameModal(false);
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
      <Header
        title="FOCUSer 질문작성 - 밸류체인형 사업"
        img="./img/focus_icon.png"
      />
      <div className="Focus_qna_b_client_inner">
        <div className="Focus_qna_client_inner_header">
          <p>
            진단 받고 싶은 <b>아이디어명(사업명)</b>을 적어주세요.
          </p>
          <input
            type="text"
            name="business_name"
            onChange={getValue}
            autoComplete="off"
          />
        </div>
        {/* 1번째 카테고리 */}
        <div className="Focus_detail_qna_client_inner_content">
          <div className="Focus_detail_qna_client_inner_content_title">
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
            answerList.answer1_3.length >= 1 ? (
              <img className="check1_img" src="./img/check1.png" alt="img" />
            ) : (
              ""
            )}
          </div>
          <div className="Focus_detail_qna_client_inner_content_box con1">
            {question1.map((item, index) => (
              <div key={index}>
                <div
                  className={`Focus_detail_qna_client_inner_content_box_content box1_${
                    index + 1
                  }`}
                >
                  <div
                    className={`Focus_detail_qna_client_inner_content_box_title title1_${
                      index + 1
                    }`}
                  >
                    <p>
                      {`1-${index + 1}`}.{" "}
                      <input type="text" value={item.question} disabled />
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
                    className={`Focus_detail_qna_client_inner_content_box_text text1_${
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
                          : ""
                      }
                      onChange={getValue}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 2번째 카테고리 */}
        <div className="Focus_detail_qna_client_inner_content">
          <div className="Focus_detail_qna_client_inner_content_title">
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
            answerList.answer2_4.length >= 1 &&
            answerList.answer2_5.length >= 1 &&
            answerList.answer2_6.length >= 1 &&
            answerList.answer2_7.length >= 1 &&
            answerList.answer2_8.length >= 1 ? (
              <img className="check1_img" src="./img/check1.png" alt="img" />
            ) : (
              ""
            )}
          </div>
          <div className="Focus_detail_qna_client_inner_content_box con2">
            {question2.map((item, index) => (
              <div key={index}>
                <div
                  className={`Focus_detail_qna_client_inner_content_box_content box2_${
                    index + 1
                  }`}
                >
                  <div
                    className={`Focus_detail_qna_client_inner_content_box_title title2_${
                      index + 1
                    }`}
                  >
                    <p>
                      {`2-${index + 1}`}.{" "}
                      <input type="text" value={item.question} disabled />
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
                    className={`Focus_detail_qna_client_inner_content_box_text text2_${
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
                          : item.key === "2_4"
                          ? answerList.answer2_4
                          : item.key === "2_5"
                          ? answerList.answer2_5
                          : item.key === "2_6"
                          ? answerList.answer2_6
                          : item.key === "2_7"
                          ? answerList.answer2_7
                          : item.key === "2_8"
                          ? answerList.answer2_8
                          : ""
                      }
                      onChange={getValue}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 3번째 카테고리 */}
        <div className="Focus_detail_qna_client_inner_content">
          <div className="Focus_detail_qna_client_inner_content_title">
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
          <div className="Focus_detail_qna_client_inner_content_box con3">
            {question3.map((item, index) => (
              <div key={index}>
                <div
                  className={`Focus_detail_qna_client_inner_content_box_content box3_${
                    index + 1
                  }`}
                >
                  <div
                    className={`Focus_detail_qna_client_inner_content_box_title title3_${
                      index + 1
                    }`}
                  >
                    <p>
                      {`3-${index + 1}`}.{" "}
                      <input type="text" value={item.question} disabled />
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
                    className={`Focus_detail_qna_client_inner_content_box_text text3_${
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
                          : item.key === "3_4"
                          ? answerList.answer3_4
                          : ""
                      }
                      onChange={getValue}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 4번째 카테고리 */}
        <div className="Focus_detail_qna_client_inner_content">
          <div className="Focus_detail_qna_client_inner_content_title">
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
            {answerList.answer4_1.length >= 1 &&
            answerList.answer4_2.length >= 1 ? (
              <img className="check1_img" src="./img/check1.png" alt="img" />
            ) : (
              ""
            )}
          </div>
          <div className="Focus_detail_qna_client_inner_content_box con4">
            {question4.map((item, index) => (
              <div key={index}>
                <div
                  className={`Focus_detail_qna_client_inner_content_box_content box4_${
                    index + 1
                  }`}
                >
                  <div
                    className={`Focus_detail_qna_client_inner_content_box_title title4_${
                      index + 1
                    }`}
                  >
                    <p>
                      {`4-${index + 1}`}.{" "}
                      <input type="text" value={item.question} disabled />
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
                    className={`Focus_detail_qna_client_inner_content_box_text text4_${
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
                          : ""
                      }
                      onChange={getValue}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Focus_content_box_btn">
          <button
            className="Focus_content_box_save"
            onClick={() => {
              answerList.business_name !== ""
                ? onClickSubmit("save")
                : setTitleNameModal(true);
            }}
          >
            저장하기
          </button>
          <button
            className="Focus_content_box_submit"
            onClick={onClickSubmitModal}
          >
            제출하기
          </button>
        </div>
      </div>
      {submitModal && (
        <div ref={modalOutSide} className="submit_Modal">
          <img src="./img/popup_14.png" alt="img" />
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
          <NavLink
            to="/Focus_qna_b_viewer_client"
            state={{
              business_name: answerList.business_name,
              state_name: "기본포커스 밸류체인 작성중",
            }}
          >
            <div className="check_Modal_btn">
              <button
                onClick={() => {
                  setSaveModal(false);
                }}
              ></button>
            </div>
          </NavLink>
        </div>
      )}
      {titleNameModal && (
        <div ref={modalOutSide} className="check_Modal">
          <img src="./img/popup_2.png" alt="img" />
          <div className="check_Modal_btn">
            <button
              onClick={() => {
                setTitleNameModal(false);
              }}
            ></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Focus_qna_b_client;
