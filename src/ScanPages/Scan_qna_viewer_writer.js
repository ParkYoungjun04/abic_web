import "./Scan_qna_writer.css";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import Axios from "axios";
import Header from "../Header";
const Scan_qna_viewer_writer = () => {
  //pdf 저장
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  // 콘텐츠 01
  const [content1, setContent1] = useState([
    {
      title: "A",
      id1: "A_1",
      checked: "",
      text1:
        "사업 초기 단계부터 목표고객이 명확하고\n제품/서비스를 판매하는것이 중요합니다.",
      id2: "A_2",
      text2: "사업 초기 단계에서는 회원 가입수를 늘이는 것이 중요합니다.",
    },
    {
      title: "B",
      id1: "B_1",
      checked: "",
      text1:
        "고객 가치는 개발/제조/생산 혹은 유통을 통해\n판매하는 제품/서비스만을 통해 창출됩니다.",
      id2: "B_2",
      text2:
        "고객 가치는 수요측 참여자와 공급측 참여자를\n연결, 추천, 구독 등을 통해 창출됩니다.",
    },
    {
      title: "C",
      id1: "C_1",
      checked: "",
      text1:
        "초기 거점시장에서 사업 성공을 위해\n온/오프라인 유통망을 구축하는 것이 중요합니다.",
      id2: "C_2",
      text2:
        "초기 거점시장에서 사업 성공을 위해\n다양한 인지도 마케팅을 통해 고객을 유입하는 것이 중요합니다.",
    },
    {
      title: "D",
      id1: "D_1",
      checked: "",
      text1:
        "장기적 관점에서 사업의 핵심 성공 요인은\n온/오프라인 플랫폼에서 지속적인\n네트워크효과가 발생하는 것입니다.",
      id2: "D_2",
      text2:
        "장기적 관점에서 사업의 핵심 성공 요인은\n제품/서비스의 차별적 우위 (특허 기술이나 밀착된 고객 서비스 등)를\n계속 유지할 수 있는 역량입니다.",
    },
    {
      title: "E",
      id1: "E_1",
      checked: "",
      text1:
        "초기 거점시장에서 사업 성공을 위해\n온/오프라인 유통망을 구축하는 것이 중요합니다.",
      id2: "E_2",
      text2:
        "초기 거점시장에서 사업 성공을 위해\n다양한 인지도 마케팅을 통해 고객을 유입하는 것이 중요합니다.",
    },
  ]);

  const location = useLocation({});

  // 사업명
  const business_name = location.state.business_name;

  // 고객 이름
  const client_name = location.state.client_name;

  // 기본스캔 답변 조회 값
  const [clientData, setClientData] = useState({});
  // 컨설턴트 상태
  const [writerState, setWriterState] = useState("");
  // 오른쪽 카테고리 질문
  const [question1, setQuestion1] = useState([{ question: "" }]);
  const [question2, setQuestion2] = useState([{ question: "" }]);
  const [question3, setQuestion3] = useState([{ question: "" }]);
  const [question4, setQuestion4] = useState([{ question: "" }]);
  const [question5, setQuestion5] = useState([{ question: "" }]);

  useEffect(() => {
    // 기본스캔 답변 조회
    Axios.get("http://34.68.101.191:8000/get/Scan_qna_client", {
      params: { business_name: business_name },
    }).then((response) => {
      let data = response.data[0];
      setClientData(data);
      let tempChecked = content1.map((item) =>
        item.title === "A"
          ? { ...item, checked: data.A }
          : item.title === "B"
          ? { ...item, checked: data.B }
          : item.title === "C"
          ? { ...item, checked: data.C }
          : item.title === "D"
          ? { ...item, checked: data.D }
          : item.title === "E"
          ? { ...item, checked: data.E }
          : item
      );
      setContent1(tempChecked);
      // 고객 정보
      Axios.get("http://34.68.101.191:8000/get/Scan_state", {
        params: { business_name: business_name, key: "writer" },
      }).then((response) => {
        setWriterState(response.data[0]);
      });
    });

    // 세부스캔 질문 조회
    Axios.get("http://34.68.101.191:8000/get/Scan_qna_writer", {
      params: { business_name: business_name },
    }).then((response) => {
      let data = response.data[0];
      // 1카테고리
      if (data["1_4"] !== "" && data["1_4"] !== null) {
        setQuestion1([
          { question: data["1_1"] },
          { question: data["1_2"] },
          { question: data["1_3"] },
          { question: data["1_4"] },
        ]);
      } else if (data["1_3"] !== "" && data["1_3"] !== null) {
        setQuestion1([
          { question: data["1_1"] },
          { question: data["1_2"] },
          { question: data["1_3"] },
        ]);
      } else if (data["1_2"] !== "" && data["1_2"] !== null) {
        setQuestion1([{ question: data["1_1"] }, { question: data["1_2"] }]);
      } else {
        setQuestion1([{ question: data["1_1"] }]);
      }
      // 2카테고리
      if (data["2_4"] !== "" && data["2_4"] !== null) {
        setQuestion2([
          { question: data["2_1"] },
          { question: data["2_2"] },
          { question: data["2_3"] },
          { question: data["2_4"] },
        ]);
      } else if (data["2_3"] !== "" && data["2_3"] !== null) {
        setQuestion2([
          { question: data["2_1"] },
          { question: data["2_2"] },
          { question: data["2_3"] },
        ]);
      } else if (data["2_2"] !== "" && data["2_2"] !== null) {
        setQuestion2([{ question: data["2_1"] }, { question: data["2_2"] }]);
      } else {
        setQuestion2([{ question: data["2_1"] }]);
      }
      // 3카테고리
      if (data["3_4"] !== "" && data["3_4"] !== null) {
        setQuestion3([
          { question: data["3_1"] },
          { question: data["3_2"] },
          { question: data["3_3"] },
          { question: data["3_4"] },
        ]);
      } else if (data["3_3"] !== "" && data["3_3"] !== null) {
        setQuestion3([
          { question: data["3_1"] },
          { question: data["3_2"] },
          { question: data["3_3"] },
        ]);
      } else if (data["3_2"] !== "" && data["3_2"] !== null) {
        setQuestion3([{ question: data["3_1"] }, { question: data["3_2"] }]);
      } else {
        setQuestion3([{ question: data["3_1"] }]);
      }
      // 4카테고리
      if (data["4_4"] !== "" && data["4_4"] !== null) {
        setQuestion4([
          { question: data["4_1"] },
          { question: data["4_2"] },
          { question: data["4_3"] },
          { question: data["4_4"] },
        ]);
      } else if (data["4_3"] !== "" && data["4_3"] !== null) {
        setQuestion4([
          { question: data["4_1"] },
          { question: data["4_2"] },
          { question: data["4_3"] },
        ]);
      } else if (data["4_2"] !== "" && data["4_2"] !== null) {
        setQuestion4([{ question: data["4_1"] }, { question: data["4_2"] }]);
      } else {
        setQuestion4([{ question: data["4_1"] }]);
      }
      // 5카테고리
      if (data["5_4"] !== "" && data["5_4"] !== null) {
        setQuestion5([
          { question: data["5_1"] },
          { question: data["5_2"] },
          { question: data["5_3"] },
          { question: data["5_4"] },
        ]);
      } else if (data["5_3"] !== "" && data["5_3"] !== null) {
        setQuestion5([
          { question: data["5_1"] },
          { question: data["5_2"] },
          { question: data["5_3"] },
        ]);
      } else if (data["5_2"] !== "" && data["5_2"] !== null) {
        setQuestion5([{ question: data["5_1"] }, { question: data["5_2"] }]);
      } else {
        setQuestion5([{ question: data["5_1"] }]);
      }
    });
  }, []);
  return (
    <>
      <Header title="SCANNer 세부스캔 질문 작성" img="./img/header_scan.png" />
      <div className="Scan_top">
        <div className="Scan_qna_writer_file_viewer">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            <Viewer
              fileUrl={`http://34.68.101.191:8000/file/${clientData.FILE_NAME}`}
              plugins={[getFilePluginInstance]}
            />
          </Worker>
        </div>
        <p>회원명 : {client_name}</p>
        <p className="Scan_top_boder_left">
          사업명 : {writerState.BUSINESS_NAME}
        </p>
        <p className="Scan_top_boder">제출일시 : {writerState.CREATED_DATE}</p>
        <p>현재상태 : {writerState.STATE_NAME}</p>
      </div>
      <div className="Scan_qna_writer_inner">
        <div className="Scan_qna_writer_left">
          <div className="Scan_qna_writer_left_con1">
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td className="Scan_qna_writer_table_column_title">
                    밸류체인
                  </td>
                  <td className="Scan_qna_writer_table_column_title">플랫폼</td>
                  <td colSpan="2">
                    <Download>
                      {(props) => (
                        <p
                          className="Scan_qna_writer_table_file"
                          onClick={props.onClick}
                        >
                          첨부파일 다운로드
                        </p>
                      )}
                    </Download>
                  </td>
                </tr>
                {content1.map((item, index) => (
                  <tr key={index}>
                    <td className="Scan_qna_writer_table_row_title">
                      {item.title}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={item.checked === item.id1 ? true : false}
                        disabled
                      />
                      <label className={item.id1} />
                      <div className={`table_tool_tip${item.id1}`}>
                        <p>{item.text1}</p>
                      </div>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={item.checked === item.id2 ? true : false}
                        disabled
                      />
                      <label className={item.id2} />
                      <div className={`table_tool_tip${item.id2}`}>
                        <p>{item.text2}</p>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="Scan_qna_writer_left_con2">
            <div className="Scan_qna_writer_left_con2_title">
              <p>{clientData.DT_1_NAME}</p>
              <div className="Scan_qna_writer_left_con2_checkbox">
                <div className="Scan_qna_writer_left_con2_checkbox_input">
                  <input
                    type="checkbox"
                    checked={clientData.DT_1_1 || false}
                    disabled
                  />
                  <label />
                  <p>B2B(G)</p>
                </div>
                <div className="Scan_qna_writer_left_con2_checkbox_input">
                  <input
                    type="checkbox"
                    checked={clientData.DT_1_2 || false}
                    disabled
                  />
                  <label />
                  <p>B2C</p>
                </div>
                <div className="Scan_qna_writer_left_con2_checkbox_input">
                  <input
                    type="checkbox"
                    checked={clientData.DT_1_3 || false}
                    disabled
                  />
                  <label />
                  <p>하드웨어</p>
                </div>
                <div className="Scan_qna_writer_left_con2_checkbox_input">
                  <input
                    type="checkbox"
                    checked={clientData.DT_1_4 || false}
                    disabled
                  />
                  <label />
                  <p>소프트웨어</p>
                </div>
                <div className="Scan_qna_writer_left_con2_checkbox_input">
                  <input
                    type="checkbox"
                    checked={clientData.DT_1_5 || false}
                    disabled
                  />
                  <label />
                  <p>서비스</p>
                </div>
              </div>
            </div>
            <textarea value={clientData.DT_1_TEXT} disabled />

            {clientData.DT_2_NAME && (
              <>
                <div className="Scan_qna_writer_left_con2_title">
                  <p>{clientData.DT_2_NAME}</p>
                  <div className="Scan_qna_writer_left_con2_checkbox">
                    <div className="Scan_qna_writer_left_con2_checkbox_input">
                      <input
                        type="checkbox"
                        checked={clientData.DT_2_1 || false}
                        disabled
                      />
                      <label />
                      <p>B2B(G)</p>
                    </div>
                    <div className="Scan_qna_writer_left_con2_checkbox_input">
                      <input
                        type="checkbox"
                        checked={clientData.DT_2_2 || false}
                        disabled
                      />
                      <label />
                      <p>B2C</p>
                    </div>
                    <div className="Scan_qna_writer_left_con2_checkbox_input">
                      <input
                        type="checkbox"
                        checked={clientData.DT_2_3 || false}
                        disabled
                      />
                      <label />
                      <p>하드웨어</p>
                    </div>
                    <div className="Scan_qna_writer_left_con2_checkbox_input">
                      <input
                        type="checkbox"
                        checked={clientData.DT_2_4 || false}
                        disabled
                      />
                      <label />
                      <p>소프트웨어</p>
                    </div>
                    <div className="Scan_qna_writer_left_con2_checkbox_input">
                      <input
                        type="checkbox"
                        checked={clientData.DT_2_5 || false}
                        disabled
                      />
                      <label />
                      <p>서비스</p>
                    </div>
                  </div>
                </div>
                <textarea value={clientData.DT_2_TEXT} disabled />
              </>
            )}
          </div>
        </div>
        <div className="Scan_qna_writer_right">
          <div className="Scan_qna_writer_right_list">
            <p className="Scan_qna_writer_right_title">
              (1) 고객/시장 대상 (Who)
            </p>
            {question1.map((item, index) => (
              <div key={index} className="Scan_qna_writer_right_box">
                <div className="Scan_qna_writer_right_text1">
                  <p className="Scan_qna_writer_right_dot">&bull;</p>
                  <input
                    type="text"
                    name="question"
                    id="question"
                    value={item.question}
                    disabled
                  ></input>
                </div>
              </div>
            ))}
          </div>

          <div className="Scan_qna_writer_right_list">
            <p className="Scan_qna_writer_right_title">
              (2) 제품/서비스/가치 (What)
            </p>
            {question2.map((item, index) => (
              <div key={index} className="Scan_qna_writer_right_box">
                <div className="Scan_qna_writer_right_text1">
                  <p className="Scan_qna_writer_right_dot">&bull;</p>
                  <input
                    type="text"
                    name="question"
                    id="question"
                    value={item.question}
                    disabled
                  ></input>
                </div>
              </div>
            ))}
          </div>

          <div className="Scan_qna_writer_right_list">
            <p className="Scan_qna_writer_right_title">
              (3) 판매/제공 방법 (How)
            </p>
            {question3.map((item, index) => (
              <div key={index} className="Scan_qna_writer_right_box">
                <div className="Scan_qna_writer_right_text1">
                  <p className="Scan_qna_writer_right_dot">&bull;</p>
                  <input
                    type="text"
                    name="question"
                    id="question"
                    value={item.question}
                    disabled
                  ></input>
                </div>
              </div>
            ))}
          </div>

          <div className="Scan_qna_writer_right_list">
            <p className="Scan_qna_writer_right_title">
              (4) 기존 경쟁사 대비 우위사항 (Dominance)
            </p>
            {question4.map((item, index) => (
              <div key={index} className="Scan_qna_writer_right_box">
                <div className="Scan_qna_writer_right_text1">
                  <p className="Scan_qna_writer_right_dot">&bull;</p>
                  <input
                    type="text"
                    name="question"
                    id="question"
                    value={item.question}
                    disabled
                  ></input>
                </div>
              </div>
            ))}
          </div>

          <div className="Scan_qna_writer_right_list">
            <p className="Scan_qna_writer_right_title">
              (5) 수익창출 방법 (Profit)
            </p>
            {question5.map((item, index) => (
              <div key={index} className="Scan_qna_writer_right_box">
                <div className="Scan_qna_writer_right_text1">
                  <p className="Scan_qna_writer_right_dot">&bull;</p>
                  <input
                    type="text"
                    name="question"
                    id="question"
                    value={item.question}
                    disabled
                  ></input>
                </div>
              </div>
            ))}
          </div>
          <div className="Scan_qna_writer_right_list">
            <p className="Scan_qna_writer_right_title">
              (6) 사업 구상 배경 (Motivation)
            </p>
            <div className="Scan_qna_writer_right_box">
              <div className="Scan_qna_writer_right_text1">
                <p className="Scan_qna_writer_right_dot">&bull;</p>
                <input
                  type="text"
                  value="특별히 이 분야에 집중하게 된 계기가 있는지?"
                  id="question"
                  disabled
                ></input>
              </div>
              <div className="Scan_qna_writer_right_text1">
                <p className="Scan_qna_writer_right_dot">&bull;</p>
                <input
                  type="text"
                  value="창업자로서 향후 비전은?"
                  id="question"
                  disabled
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scan_qna_viewer_writer;
