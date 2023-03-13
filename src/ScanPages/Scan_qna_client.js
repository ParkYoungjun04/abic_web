import "./Scan_qna_client.css";
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import Header from "../Header";
import Loading from "../Loading";
const Scan_qna_client = () => {
  const [isLoad, setIsLoad] = useState(false);
  // 01 콘텐츠
  const content1 = [
    {
      title: "A",
      id1: "A_1",
      text1:
        "사업 초기 단계부터 목표고객이 명확하고\n제품/서비스를 판매하는것이 중요합니다.",

      id2: "A_2",
      text2: "사업 초기 단계에서는 회원 가입수를 늘이는 것이 중요합니다.",
    },
    {
      title: "B",
      id1: "B_1",
      text1:
        "고객 가치는 개발/제조/생산 혹은 유통을 통해\n판매하는 제품/서비스만을 통해 창출됩니다.",
      id2: "B_2",
      text2:
        "고객 가치는 수요측 참여자와 공급측 참여자를\n연결, 추천, 구독 등을 통해 창출됩니다.",
    },
    {
      title: "C",
      id1: "C_1",
      text1:
        "초기 거점시장에서 사업 성공을 위해\n온/오프라인 유통망을 구축하는 것이 중요합니다.",
      id2: "C_2",
      text2:
        "초기 거점시장에서 사업 성공을 위해\n다양한 인지도 마케팅을 통해 고객을 유입하는 것이 중요합니다.",
    },
    {
      title: "D",
      id1: "D_1",
      text1:
        "장기적 관점에서 사업의 핵심 성공 요인은\n온/오프라인 플랫폼에서 지속적인\n네트워크효과가 발생하는 것입니다.",
      id2: "D_2",
      text2:
        "장기적 관점에서 사업의 핵심 성공 요인은\n제품/서비스의 차별적 우위 (특허 기술이나 밀착된 고객 서비스 등)를\n계속 유지할 수 있는 역량입니다.",
    },
    {
      title: "E",
      id1: "E_1",
      text1:
        "초기 거점시장에서 사업 성공을 위해\n온/오프라인 유통망을 구축하는 것이 중요합니다.",
      id2: "E_2",
      text2:
        "초기 거점시장에서 사업 성공을 위해\n다양한 인지도 마케팅을 통해 고객을 유입하는 것이 중요합니다.",
    },
  ];
  // 02에서 체크박스 선택 시 03표시에 될 이름
  const [cont3checkName, setCont3checkName] = useState([]);
  const [clientData, setClientData] = useState({
    business_name: "",
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    MK_1: 0,
    MK_2: 0,
    MK_3: 0,
    MK_4: 0,
    DT_1_NAME: "",
    DT_1_1: 0,
    DT_1_2: 0,
    DT_1_3: 0,
    DT_1_4: 0,
    DT_1_5: 0,
    DT_1_TEXT: "",
    DT_2_NAME: "",
    DT_2_1: 0,
    DT_2_2: 0,
    DT_2_3: 0,
    DT_2_4: 0,
    DT_2_5: 0,
    DT_2_TEXT: "",
  });

  // 02에서 선택되는 체크박스 갯수 지정(2개 이하)
  const onChangeCheckName = (e, num) => {
    const { name, checked } = e.target;
    if (checked) {
      setCont3checkName([...cont3checkName, name]);
    } else if (!checked) {
      setCont3checkName(cont3checkName.filter((item) => item !== name));
    }

    if (cont3checkName.length > 1) {
      setCont3checkName(cont3checkName.filter((item) => item !== name));
      e.target.checked = false;
    }

    // 체크박스 선택 시 clientDate에 해당 키에 1이 담김
    if (num === 1 && checked && cont3checkName.length < 2) {
      setClientData({
        ...clientData,
        MK_1: 1,
      });
    } else if (num === 1 && !checked) {
      setClientData({
        ...clientData,
        MK_1: 0,
      });
    } else if (num === 2 && checked && cont3checkName.length < 2) {
      setClientData({
        ...clientData,
        MK_2: 1,
      });
    } else if (num === 2 && !checked) {
      setClientData({
        ...clientData,
        MK_2: 0,
      });
    } else if (num === 3 && checked && cont3checkName.length < 2) {
      setClientData({
        ...clientData,
        MK_3: 1,
      });
    } else if (num === 3 && !checked) {
      setClientData({
        ...clientData,
        MK_3: 0,
      });
    } else if (num === 4 && checked && cont3checkName.length < 2) {
      setClientData({
        ...clientData,
        MK_4: 1,
      });
    } else if (num === 4 && !checked) {
      setClientData({
        ...clientData,
        MK_4: 0,
      });
    }
  };
  // 첨부파일
  const [clientFile, setClientFile] = useState(null);
  // 파일 등록할 수 있느 모달
  const [fileModal, setFileModal] = useState(false);
  // 제출하기 클릭
  const [submitModal, setSubmitModal] = useState(false);
  // 저장하기 클릭
  const [saveModal, setSaveModal] = useState(false);
  // 사업명 작성 안함
  const [titleNameModal, setTitleNameModal] = useState(false);
  // 내용작성 하지 않고 제출하기 클릭
  const [noWriteModal, setNoWriteModal] = useState(false);

  const getValue = (title, value) => {
    setClientData({
      ...clientData,
      [title]: value,
    });
  };
  const onChangeFile = (e) => {
    setClientFile(e.target.files[0]);
  };

  // 제출하기 버튼 클릭 시 유효성 검사
  const onClickSubmitModal = () => {
    // setSubmitModal(true);
    if (clientData.business_name === "") {
      setTitleNameModal(true);
    } else if (
      clientData.A === 0 ||
      clientData.B === 0 ||
      clientData.C === 0 ||
      clientData.D === 0 ||
      clientData.E === 0 ||
      (clientData.MK_1 === 0 &&
        clientData.MK_2 === 0 &&
        clientData.MK_3 === 0 &&
        clientData.MK_4 === 0) ||
      (cont3checkName.length === 1 &&
        clientData.DT_1_1 === 0 &&
        clientData.DT_1_2 === 0) ||
      (cont3checkName.length === 1 &&
        clientData.DT_1_3 === 0 &&
        clientData.DT_1_4 === 0 &&
        clientData.DT_1_5 === 0) ||
      (cont3checkName.length === 2 &&
        clientData.DT_2_1 === 0 &&
        clientData.DT_2_2 === 0) ||
      (cont3checkName.length === 2 &&
        clientData.DT_2_3 === 0 &&
        clientData.DT_2_4 === 0 &&
        clientData.DT_2_5 === 0)
    ) {
      setNoWriteModal(true);
    } else {
      setSubmitModal(true);
    }
  };
  // 저장, 제출하기
  const onClickSubmit = async (key) => {
    console.log("클릭함");
    let state = "";
    if (key === "save") {
      state = "SCAN_C1";
      setSaveModal(true);
    } else if (key == "submit") {
      state = "SCAN_C2";
      setIsLoad(true);
    }
    const formDate = new FormData();
    formDate.append("file", clientFile ? clientFile : "");
    formDate.append("fileName", clientFile ? clientFile.name : "");
    formDate.append("clientData", JSON.stringify(clientData));
    formDate.append("state", state);
    formDate.append("userName", sessionStorage.getItem("name"));
    await Axios.post(
      "http://34.68.101.191:8000/post/Scan_qna_client",
      formDate
    ).then((response) => {
      console.log(response.data);
      if (state === "SCAN_C2") {
        window.location.href = "/Home_client";
      }
    });
  };

  // 답변 조회
  useEffect(() => {
    setClientData({
      ...clientData,
      DT_1_NAME: cont3checkName[0] ? cont3checkName[0] : "",
      DT_1_1: cont3checkName[0] ? clientData.DT_1_1 : 0,
      DT_1_2: cont3checkName[0] ? clientData.DT_1_2 : 0,
      DT_1_3: cont3checkName[0] ? clientData.DT_1_3 : 0,
      DT_1_4: cont3checkName[0] ? clientData.DT_1_4 : 0,
      DT_1_5: cont3checkName[0] ? clientData.DT_1_5 : 0,
      DT_1_TEXT: cont3checkName[0] ? clientData.DT_1_TEXT : "",

      DT_2_NAME: cont3checkName[1] ? cont3checkName[1] : "",
      DT_2_1: cont3checkName[1] ? clientData.DT_2_1 : 0,
      DT_2_2: cont3checkName[1] ? clientData.DT_2_2 : 0,
      DT_2_3: cont3checkName[1] ? clientData.DT_2_3 : 0,
      DT_2_4: cont3checkName[1] ? clientData.DT_2_4 : 0,
      DT_2_5: cont3checkName[1] ? clientData.DT_2_5 : 0,
      DT_2_TEXT: cont3checkName[1] ? clientData.DT_2_TEXT : "",
    });
  }, [cont3checkName]);
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
          setTitleNameModal &&
          modalOutSide.current &&
          !modalOutSide.current.contains(e.target)
        ) {
          setTitleNameModal(false);
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
    } else {
      return false;
    }
  }, []);
  console.log(isLoad);
  return (
    <>
      <Header title="SCANNer 기본스캔" img="./img/header_scan.png" />
      {isLoad && <Loading />}
      <div className="Scan_qna_client_inner">
        <div className="Scan_qna_client_inner_header">
          <p>
            진단 받고 싶은 <b>아이디어명(사업명)</b>을 적어주세요.
          </p>
          <input
            type="text"
            name="business_name"
            onChange={(e) => {
              const { name, value } = e.target;
              getValue(name, value);
            }}
            autoComplete="off"
          />
        </div>
        <div className="Scan_qna_client_content">
          <div className="Scan_qna_client_content_header">
            <p className="Scan_qna_client_inner_content_title1">01</p>
            <p className="Scan_qna_client_inner_content_title2">
              A~E <b>두가지 항목 중</b> 상대적으로 자신의 사업아이디어에
              <b> 더 근접한 문항에 체크</b> 해주세요.
            </p>
          </div>
          <div className="Scan_qna_client_content_box1">
            <table>
              <tbody>
                {content1.map((item, index) => (
                  <tr key={index}>
                    <td className="Scan_qna_client_table_title">
                      {item.title}
                    </td>

                    <td className="Scan_qna_client_table_title_checkbox">
                      <input
                        type="radio"
                        id={item.id1}
                        name={item.title}
                        onChange={() => {
                          getValue(item.title, item.id1);
                        }}
                      />
                      <label htmlFor={item.id1} />
                    </td>

                    <td className="Scan_qna_client_content_box_table_text">
                      <label htmlFor={item.id1}>{item.text1}</label>
                    </td>

                    <td className="Scan_qna_client_table_title_checkbox">
                      <input
                        type="radio"
                        id={item.id2}
                        name={item.title}
                        onChange={() => {
                          getValue(item.title, item.id2);
                        }}
                      />
                      <label htmlFor={item.id2} />
                    </td>
                    <td className="Scan_qna_client_content_box_table_text">
                      <label htmlFor={item.id2}>
                        <p>{item.text2}</p>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="Scan_qna_client_content_header">
            <p className="Scan_qna_client_inner_content_title1">02</p>
            <p className="Scan_qna_client_inner_content_title2">
              다음 <b>4가지 시장 중 어느 시장을 목표</b>로 하는지 선택 해주세요.
              ( 최대 2개 선택 가능 )
            </p>
          </div>
          <div className="Scan_qna_client_content_box2">
            <table>
              <tbody>
                <tr>
                  <td colSpan="2" rowSpan="3">
                    시장유형진단
                  </td>
                  <td colSpan="2">고객</td>
                </tr>
                <tr>
                  <td>신규</td>
                  <td>기존</td>
                </tr>
                <tr>
                  <td>
                    <p>&bull; 경쟁사가 목표로 하지 않은 새로운 고객</p>
                    <p>&bull; 경쟁사가 없는 완전히 새로운 사업의 경우에는</p>
                    <p>&nbsp;&nbsp;모든 고객이 신규 고객</p>
                  </td>
                  <td>
                    <p>&bull; 경쟁사가 목표로 하고 있는 고객</p>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="4">
                    <p>
                      제품
                      <br />
                      /
                      <br />
                      서비스
                    </p>
                  </td>
                  <td>신규</td>
                  <td rowSpan="2">
                    <input
                      type="checkbox"
                      id="2-1"
                      name="블루오션 시장"
                      onChange={(e) => {
                        onChangeCheckName(e, 1);
                      }}
                    />
                    <label htmlFor="2-1" />
                    <label htmlFor="2-1">
                      <p>블루오션 시장</p>
                    </label>
                  </td>
                  <td rowSpan="2">
                    <input
                      type="checkbox"
                      id="2-2"
                      name="신제품 시장"
                      onChange={(e) => {
                        onChangeCheckName(e, 2);
                      }}
                    />
                    <label htmlFor="2-2" />
                    <label htmlFor="2-2">
                      <p>신제품 시장</p>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>&bull; 기존의 제품/서비스를</p>
                    <p>&nbsp;&nbsp;새롭게 혁신한 경우</p>
                    <p>&bull;지금까지 세상에 없던</p>
                    <p>&nbsp;&nbsp;완전히 새로운 제품/</p>
                    <p>&nbsp;&nbsp;서비스</p>
                  </td>
                </tr>
                <tr>
                  <td>기존</td>
                  <td rowSpan="2">
                    <input
                      type="checkbox"
                      id="2-3"
                      name="신규고객 시장"
                      onChange={(e) => {
                        onChangeCheckName(e, 3);
                      }}
                    />
                    <label htmlFor="2-3" />
                    <label htmlFor="2-3">
                      <p>신규고객 시장</p>
                    </label>
                  </td>
                  <td rowSpan="2">
                    <input
                      type="checkbox"
                      id="2-4"
                      name="기존 시장"
                      onChange={(e) => {
                        onChangeCheckName(e, 4);
                      }}
                    />
                    <label htmlFor="2-4" />
                    <label htmlFor="2-4">
                      <p>기존 시장</p>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>&bull; 경쟁사와 크게 차별화</p>
                    <p>&nbsp;&nbsp;되지 않은 기존 제품/</p>
                    <p>&nbsp;&nbsp;서비스</p>
                    <p>&bull; 기존 제품/서비스를</p>
                    <p>&nbsp;&nbsp;혁신 수준이 아닌</p>
                    <p>&nbsp;&nbsp;개선 수준으로</p>
                    <p>&nbsp;&nbsp;업그레이드 한 경우</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="Scan_qna_client_content_header">
            <p className="Scan_qna_client_inner_content_title1">03</p>
            <p className="Scan_qna_client_inner_content_title2">
              선택 한 시장유형마다 제공하는 <b>고객 유형과 제품/서비스 유형</b>
              을 선택 해주세요.
            </p>
          </div>
          <p className="Scan_qna_client_inner_content_title3">
            추가로 기재 해야 할 내용이 있다면 추가 설명에 기재해주세요
          </p>
          <div className="Scan_qna_client_content_box3">
            {cont3checkName.length > 0 &&
              cont3checkName.map((item, index) => (
                <div key={index} className="Scan_qna_client_content_box_cont1">
                  <div className="Scan_qna_client_content_box_cont1_titles">
                    <p className="Scan_qna_client_content_box_cont1_title1">
                      {item}
                    </p>
                    <div className="Scan_qna_client_content_box_cont1_title2">
                      <p>고객</p>
                      <p className="Scan_qna_client_content_box_cont1_title2_arrow">
                        ▶
                      </p>
                      <div className="Scan_qna_client_content_box_cont1_title2_input">
                        <input
                          type="checkbox"
                          id={`DT_${index + 1}_1`}
                          name={`DT_${index + 1}_1`}
                          onChange={(e) => {
                            const { name, checked } = e.target;
                            let check = checked ? 1 : 0;
                            getValue(name, check);
                          }}
                        />
                        <label htmlFor={`DT_${index + 1}_1`} />
                        <label htmlFor={`DT_${index + 1}_1`}>
                          <p>B2B(G)</p>
                        </label>
                      </div>
                      <div className="Scan_qna_client_content_box_cont1_title2_input">
                        <input
                          type="checkbox"
                          id={`DT_${index + 1}_2`}
                          name={`DT_${index + 1}_2`}
                          onChange={(e) => {
                            const { name, checked } = e.target;
                            let check = checked ? 1 : 0;
                            getValue(name, check);
                          }}
                        />
                        <label htmlFor={`DT_${index + 1}_2`} />
                        <label htmlFor={`DT_${index + 1}_2`}>
                          <p>B2C</p>
                        </label>
                      </div>
                    </div>
                    <div className="Scan_qna_client_content_box_cont1_title3">
                      <p>제품/서비스</p>
                      <p className="Scan_qna_client_content_box_cont1_title3_arrow">
                        ▶
                      </p>
                      <div className="Scan_qna_client_content_box_cont1_title3_input">
                        <input
                          type="checkbox"
                          id={`DT_${index + 1}_3`}
                          name={`DT_${index + 1}_3`}
                          onChange={(e) => {
                            const { name, checked } = e.target;
                            let check = checked ? 1 : 0;
                            getValue(name, check);
                          }}
                        />
                        <label htmlFor={`DT_${index + 1}_3`} />
                        <label htmlFor={`DT_${index + 1}_3`}>
                          <p>하드웨어</p>
                        </label>
                      </div>
                      <div className="Scan_qna_client_content_box_cont1_title3_input">
                        <input
                          type="checkbox"
                          id={`DT_${index + 1}_4`}
                          name={`DT_${index + 1}_4`}
                          onChange={(e) => {
                            const { name, checked } = e.target;
                            let check = checked ? 1 : 0;
                            getValue(name, check);
                          }}
                        />
                        <label htmlFor={`DT_${index + 1}_4`} />
                        <label htmlFor={`DT_${index + 1}_4`}>
                          <p>소프트웨어</p>
                        </label>
                      </div>
                      <div className="Scan_qna_client_content_box_cont1_title3_input">
                        <input
                          type="checkbox"
                          id={`DT_${index + 1}_5`}
                          name={`DT_${index + 1}_5`}
                          onChange={(e) => {
                            const { name, checked } = e.target;
                            let check = checked ? 1 : 0;
                            getValue(name, check);
                          }}
                        />
                        <label htmlFor={`DT_${index + 1}_5`} />
                        <label htmlFor={`DT_${index + 1}_5`}>
                          <p>서비스</p>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="Scan_qna_client_content_box_cont1_text_box">
                    <textarea
                      name={`DT_${index + 1}_TEXT`}
                      placeholder="추가 설명"
                      onChange={(e) => {
                        const { name, value } = e.target;
                        getValue(name, value);
                      }}
                    ></textarea>
                  </div>
                </div>
              ))}
          </div>

          <div className="Scan_content_box_btn">
            <img
              className="Scan_qna_client_content_box_file_img"
              src="./img/file.png"
              alt="img"
              onClick={() => {
                setFileModal(true);
              }}
            />
            <button
              className="Scan_content_box_save"
              onClick={() => {
                if (clientData.business_name === "") {
                  setTitleNameModal(true);
                } else {
                  onClickSubmit("save");
                }
              }}
            >
              저장하기
            </button>
            <button
              className="Scan_content_box_submit"
              onClick={() => {
                onClickSubmitModal();
              }}
            >
              제출하기
            </button>
          </div>
          {fileModal && (
            <div className="Scan_qna_client_content_box_file_box">
              <div className="Scan_qna_client_content_box_file_box_title">
                <p>Upload</p>
                <img
                  src="/img/close1.png"
                  alt="img"
                  onClick={() => {
                    setFileModal(false);
                  }}
                />
              </div>
              <input type="file" id="file" onChange={onChangeFile} />
              <label htmlFor="file">
                <div className="Scan_qna_client_content_box_file_box_cont">
                  <img src="./img/upload.png" alt="img" />
                  {clientFile ? (
                    clientFile.name
                  ) : (
                    <>
                      <p>Select file to upload</p>
                      <p>or drag and drop it here</p>
                    </>
                  )}
                </div>
              </label>
            </div>
          )}
        </div>
      </div>
      {submitModal && (
        <div ref={modalOutSide} className="submit_Modal">
          <img src="./img/popup_5.png" alt="img" />
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
            to="/Scan_qna_viewer_client"
            state={{ business_name: clientData.business_name }}
          >
            <div className="check_Modal_btn">
              <button></button>
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

export default Scan_qna_client;
