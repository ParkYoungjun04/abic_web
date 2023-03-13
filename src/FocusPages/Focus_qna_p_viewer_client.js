import "./Focus_qna_client.css";
import "./Focus_qna_client.scss";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Header from "../Header";
import Axios from "axios";
import Loading from "../Loading";
const Focus_qna_p_viewer_client = () => {
  const [isLoad, setIsLoad] = useState(false);

  const location = useLocation({});

  const business_name = location.state.business_name;
  const state_name = location.state.state_name;
  // 답변 리스트
  const [answerList, setAnswerList] = useState({
    business_name: business_name,
    answer1_1: "",
    answer1_2: "",
    answer1_3: "",
    answer1_4: "",

    answer2_1: "",
    answer2_2: "",
    answer2_3: "",
    answer2_4: "",
    answer2_5: "",

    answer3_1: "",
    answer3_2: "",
    answer3_3: "",

    answer4_1: "",
    answer4_2: "",
  });
  // 파일 리스트
  const [files, setFiles] = useState({
    file1_1: "",
    file1_2: "",
    file1_3: "",
    file1_4: "",

    file2_1: "",
    file2_2: "",
    file2_3: "",
    file2_4: "",
    file2_5: "",

    file3_1: "",
    file3_2: "",
    file3_3: "",

    file4_1: "",
    file4_2: "",
  });
  // 카테고리
  const [question1, setQuestion1] = useState([]);
  const [question2, setQuestion2] = useState([]);
  const [question3, setQuestion3] = useState([]);
  const [question4, setQuestion4] = useState([]);
  useEffect(() => {
    setQuestion1([
      {
        key: "1_1",
        question:
          "사업 개시 후 1~2년 내에 본 플랫폼에서 목표로 하는 고객은 누구입니까?",
        answer: answerList.answer1_1,
        file: files.file1_1,
      },
      {
        key: "1_2",
        question:
          "고객들에게 제품/서비스 혹은 솔루션을 제공하는 공급자는 누구입니까?",
        answer: answerList.answer1_2,
        file: files.file1_2,
      },
      {
        key: "1_3",
        question:
          "고객과 공급자 외에 다른 역할을 하는 플랫폼 참여자는 누구입니까?",
        answer: answerList.answer1_3,
        file: files.file1_3,
      },
      {
        key: "1_4",
        question:
          "사업개시 후 1~2년 내 목표로 하고 있는 시장은 다른 인접시장으로 진출하기 유리한 시장입니까?",
        answer: answerList.answer1_4,
        file: files.file1_4,
      },
    ]);
    setQuestion2([
      {
        key: "2_1",
        question: "플랫폼에서 공급자는 고객에게 무엇을 제공합니까?",
        answer: answerList.answer2_1,
        file: files.file2_1,
      },
      {
        key: "2_2",
        question:
          "고객들은 어떤 애로사항이나 필요사항을 해결하려고 본 플랫폼을 이용합니까",
        answer: answerList.answer2_2,
        file: files.file2_2,
      },
      {
        key: "2_3",
        question:
          "사업 개시 후 1~2년 내 다른 경쟁자와는 어떻게 차별화할 것입니까? 다시 말해 고객들이 우리 플랫폼을 활용할 수 밖에 없는 이유는 무엇입니까?",
        answer: answerList.answer2_3,
        file: files.file2_3,
      },
      {
        key: "2_4",
        question:
          "플랫폼에서 제공하고자 하는 것들은 단시간 내에 출시 가능합니까? 아니면 오랜 시간을 투자하여 개발해야 합니까?",
        answer: answerList.answer2_4,
        file: files.file2_4,
      },
      {
        key: "2_5",
        question:
          "사업 개시 후 1~2년 내 목표로 하는 시장에서 우리보다 훨씬 뛰어난 경쟁력을 가진 경쟁자가 있습니까? 아니면 우리만의 독점적 시장입니까?",
        answer: answerList.answer2_5,
        file: files.file2_5,
      },
    ]);
    setQuestion3([
      {
        key: "3_1",
        question:
          "플랫폼에서 고객과 공급자가 서로 신뢰하면서 편리하게 거래나 상담을 할 수 있도록 하기 위해 어떤 방안을 활용하고 있습니까?",
        answer: answerList.answer3_1,
        file: files.file3_1,
      },
      {
        key: "3_2",
        question:
          "사업 개시 후 1~2년 이내 고객과 공급자 중 어느 쪽을 먼저 유입시키는 것이 유리합니까?",
        answer: answerList.answer3_2,
        file: files.file3_2,
      },
      {
        key: "3_3",
        question: "어떤 유입방안을 통해 플랫폼으로 참여자들을 유입할 것인가요?",
        answer: answerList.answer3_3,
        file: files.file3_3,
      },
    ]);
    setQuestion4([
      {
        key: "4_1",
        question: "어떤 방식으로 수익을 창출할 수 있습니까?",
        answer: answerList.answer4_1,
        file: files.file4_1,
      },
      {
        key: "4_2",
        question:
          "회원 가입이 어느 정도 수준이 되면 수익을 창출할 수 있다고 보는지요? 그렇다면 사업 개시 후 1~2년 내 예상하는 수익은 어느 정도입니까?",
        answer: answerList.answer4_2,
        file: files.file4_2,
      },
    ]);
  }, [answerList, files]);
  // 현재 고객 정보 가져오기
  useEffect(() => {
    Axios.get("http://34.68.101.191:8000/get/Focus_qna_client", {
      params: { business_name: business_name },
    }).then((response) => {
      let data = response.data[0];
      console.log(data);
      setAnswerList({
        ...answerList,

        answer1_1: data["1_1"],
        answer1_2: data["1_2"],
        answer1_3: data["1_3"],
        answer1_4: data["1_4"],

        answer2_1: data["2_1"],
        answer2_2: data["2_2"],
        answer2_3: data["2_3"],
        answer2_4: data["2_4"],
        answer2_5: data["2_5"],

        answer3_1: data["3_1"],
        answer3_2: data["3_2"],
        answer3_3: data["3_3"],

        answer4_1: data["4_1"],
        answer4_2: data["4_2"],
      });
      setFiles({
        ...files,
        file1_1: data["F_1_1"] ? { name: data["F_1_1"] } : "",
        file1_2: data["F_1_2"] ? { name: data["F_1_2"] } : "",
        file1_3: data["F_1_3"] ? { name: data["F_1_3"] } : "",
        file1_4: data["F_1_4"] ? { name: data["F_1_4"] } : "",

        file2_1: data["F_2_1"] ? { name: data["F_2_1"] } : "",
        file2_2: data["F_2_2"] ? { name: data["F_2_2"] } : "",
        file2_3: data["F_2_3"] ? { name: data["F_2_3"] } : "",
        file2_4: data["F_2_4"] ? { name: data["F_2_4"] } : "",
        file2_5: data["F_2_5"] ? { name: data["F_2_5"] } : "",

        file3_1: data["F_3_1"] ? { name: data["F_3_1"] } : "",
        file3_2: data["F_3_2"] ? { name: data["F_3_2"] } : "",
        file3_3: data["F_3_3"] ? { name: data["F_3_3"] } : "",

        file4_1: data["F_4_1"] ? { name: data["F_4_1"] } : "",
        file4_2: data["F_4_2"] ? { name: data["F_4_2"] } : "",
      });
    });
  }, []);
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
      answerList.answer3_1.length >= 1 &&
      answerList.answer3_2.length >= 1 &&
      answerList.answer3_3.length >= 1 &&
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
      state = "FOCUS_C2";
      setSaveModal(true);
    } else if (key === "submit") {
      state = "FOCUS_C3";
      setIsLoad(true);
    }
    const formDate = new FormData();
    formDate.append("file", files.file1_1);
    formDate.append("fileName", files.file1_1 ? files.file1_1.name : "");

    formDate.append("file", files.file1_2);
    formDate.append("fileName", files.file1_2 ? files.file1_2.name : "");

    formDate.append("file", files.file1_3);
    formDate.append("fileName", files.file1_3 ? files.file1_3.name : "");

    formDate.append("file", files.file1_4);
    formDate.append("fileName", files.file1_4 ? files.file1_4.name : "");

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

    formDate.append("file", files.file3_1);
    formDate.append("fileName", files.file3_1 ? files.file3_1.name : "");

    formDate.append("file", files.file3_2);
    formDate.append("fileName", files.file3_2 ? files.file3_2.name : "");

    formDate.append("file", files.file3_3);
    formDate.append("fileName", files.file3_3 ? files.file3_3.name : "");

    formDate.append("file", files.file4_1);
    formDate.append("fileName", files.file4_1 ? files.file4_1.name : "");

    formDate.append("file", files.file4_2);
    formDate.append("fileName", files.file4_2 ? files.file4_2.name : "");

    formDate.append("answerList", JSON.stringify(answerList));
    formDate.append("state", state);
    formDate.append("type", "p");
    await Axios.put(
      "http://34.68.101.191:8000/put/Focus_qna_client",
      formDate
    ).then((response) => {
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
        title="FOCUSer 질문작성 - 플랫폼형 사업"
        img="./img/focus_icon.png"
      />
      {isLoad && <Loading />}
      <div className="Focus_qna_b_client_inner">
        <div className="Focus_qna_client_inner_header">
          <p>
            진단 받고 싶은 <b>아이디어명(사업명)</b>을 적어주세요.
          </p>
          <input
            type="text"
            name="business_name"
            value={answerList.business_name}
            disabled
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
            answerList.answer1_3.length >= 1 &&
            answerList.answer1_4.length >= 1 ? (
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
                      disabled={
                        state_name === "기본포커스 제출완료" ? true : false
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
                          : item.key === "1_4"
                          ? answerList.answer1_4
                          : ""
                      }
                      onChange={getValue}
                      disabled={
                        state_name === "기본포커스 제출완료" ? true : false
                      }
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
            answerList.answer2_5.length >= 1 ? (
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
                      disabled={
                        state_name === "기본포커스 제출완료" ? true : false
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
                          : ""
                      }
                      onChange={getValue}
                      disabled={
                        state_name === "기본포커스 제출완료" ? true : false
                      }
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
            answerList.answer3_3.length >= 1 ? (
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
                      disabled={
                        state_name === "기본포커스 제출완료" ? true : false
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
                          : ""
                      }
                      onChange={getValue}
                      disabled={
                        state_name === "기본포커스 제출완료" ? true : false
                      }
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
                      disabled={
                        state_name === "기본포커스 제출완료" ? true : false
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
                      disabled={
                        state_name === "기본포커스 제출완료" ? true : false
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {state_name === "기본포커스 제출완료" ? (
          ""
        ) : (
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
        )}
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
          <div className="check_Modal_btn">
            <button
              onClick={() => {
                setSaveModal(false);
              }}
            ></button>
          </div>
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

export default Focus_qna_p_viewer_client;
