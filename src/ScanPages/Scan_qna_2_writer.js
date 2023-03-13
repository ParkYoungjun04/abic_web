import "./Scan_report_writer.css";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Axios from "axios";
import Header from "../Header";
import Loading from "../Loading";
const Scan_qna_2_writer = () => {
  const [isLoad, setIsLoad] = useState(false);
  const location = useLocation({});

  // 사업명
  const business_name = location.state.business_name;
  // 고객 이름
  const client_name = location.state.client_name;
  // 컨설턴트 상태
  const [writerState, setWriterState] = useState("");
  useEffect(() => {
    Axios.get("http://34.68.101.191:8000/get/Scan_state", {
      params: { business_name: business_name, key: "writer" },
    }).then((response) => {
      setWriterState(response.data[0]);
    });
    Axios.get("http://34.68.101.191:8000/get/Scan_qna_2_write", {
      params: { business_name: business_name, key: "writer" },
    }).then((response) => {
      let data = response.data[0];
      console.log(data);
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
      // 4-3
      if (data["4_3_5"] !== "" && data["4_3_5"] !== null) {
        setQuestion4_3([
          ...question4_3,
          { question: data["4_3_1"] },
          { question: data["4_3_2"] },
          { question: data["4_3_3"] },
          { question: data["4_3_4"] },
          { question: data["4_3_5"] },
        ]);
      } else if (data["4_3_4"] !== "" && data["4_3_4"] !== null) {
        setQuestion4_3([
          ...question4_3,
          { question: data["4_3_1"] },
          { question: data["4_3_2"] },
          { question: data["4_3_3"] },
          { question: data["4_3_4"] },
        ]);
      } else if (data["4_3_3"] !== "" && data["4_3_3"] !== null) {
        setQuestion4_3([
          ...question4_3,
          { question: data["4_3_1"] },
          { question: data["4_3_2"] },
          { question: data["4_3_3"] },
        ]);
      } else if (data["4_3_2"] !== "" && data["4_3_2"] !== null) {
        setQuestion4_3([
          ...question4_3,
          { question: data["4_3_1"] },
          { question: data["4_3_2"] },
        ]);
      } else if (data["4_3_1"] !== "" && data["4_3_1"] !== null) {
        setQuestion4_3([...question4_3, { question: data["4_3_1"] }]);
      }
      // 4-4
      if (data["4_4_5"] !== "" && data["4_4_5"] !== null) {
        setQuestion4_4([
          ...question4_4,
          { question: data["4_4_1"] },
          { question: data["4_4_2"] },
          { question: data["4_4_3"] },
          { question: data["4_4_4"] },
          { question: data["4_4_5"] },
        ]);
      } else if (data["4_4_4"] !== "" && data["4_4_4"] !== null) {
        setQuestion4_4([
          ...question4_4,
          { question: data["4_4_1"] },
          { question: data["4_4_2"] },
          { question: data["4_4_3"] },
          { question: data["4_4_4"] },
        ]);
      } else if (data["4_4_3"] !== "" && data["4_4_3"] !== null) {
        setQuestion4_4([
          ...question4_4,
          { question: data["4_4_1"] },
          { question: data["4_4_2"] },
          { question: data["4_4_3"] },
        ]);
      } else if (data["4_4_2"] !== "" && data["4_4_2"] !== null) {
        setQuestion4_4([
          ...question4_4,
          { question: data["4_4_1"] },
          { question: data["4_4_2"] },
        ]);
      } else if (data["4_4_1"] !== "" && data["4_4_1"] !== null) {
        setQuestion4_4([...question4_4, { question: data["4_4_1"] }]);
      }

      // 5-1
      if (data["5_1_5"] !== "" && data["5_1_5"] !== null) {
        setQuestion5_1([
          ...question5_1,
          { question: data["5_1_1"] },
          { question: data["5_1_2"] },
          { question: data["5_1_3"] },
          { question: data["5_1_4"] },
          { question: data["5_1_5"] },
        ]);
      } else if (data["5_1_4"] !== "" && data["5_1_4"] !== null) {
        setQuestion5_1([
          ...question5_1,
          { question: data["5_1_1"] },
          { question: data["5_1_2"] },
          { question: data["5_1_3"] },
          { question: data["5_1_4"] },
        ]);
      } else if (data["5_1_3"] !== "" && data["5_1_3"] !== null) {
        setQuestion5_1([
          ...question5_1,
          { question: data["5_1_1"] },
          { question: data["5_1_2"] },
          { question: data["5_1_3"] },
        ]);
      } else if (data["5_1_2"] !== "" && data["5_1_2"] !== null) {
        setQuestion5_1([
          ...question5_1,
          { question: data["5_1_1"] },
          { question: data["5_1_2"] },
        ]);
      } else if (data["5_1_1"] !== "" && data["5_1_1"] !== null) {
        setQuestion5_1([...question5_1, { question: data["5_1_1"] }]);
      }
      // 5-2
      if (data["5_2_5"] !== "" && data["5_2_5"] !== null) {
        setQuestion5_2([
          ...question5_2,
          { question: data["5_2_1"] },
          { question: data["5_2_2"] },
          { question: data["5_2_3"] },
          { question: data["5_2_4"] },
          { question: data["5_2_5"] },
        ]);
      } else if (data["5_2_4"] !== "" && data["5_2_4"] !== null) {
        setQuestion5_2([
          ...question5_2,
          { question: data["5_2_1"] },
          { question: data["5_2_2"] },
          { question: data["5_2_3"] },
          { question: data["5_2_4"] },
        ]);
      } else if (data["5_2_3"] !== "" && data["5_2_3"] !== null) {
        setQuestion5_2([
          ...question5_2,
          { question: data["5_2_1"] },
          { question: data["5_2_2"] },
          { question: data["5_2_3"] },
        ]);
      } else if (data["5_2_2"] !== "" && data["5_2_2"] !== null) {
        setQuestion5_2([
          ...question5_2,
          { question: data["5_2_1"] },
          { question: data["5_2_2"] },
        ]);
      } else if (data["5_2_1"] !== "" && data["5_2_1"] !== null) {
        setQuestion5_2([...question5_2, { question: data["5_2_1"] }]);
      }
      // 5-3
      if (data["5_3_5"] !== "" && data["5_3_5"] !== null) {
        setQuestion5_3([
          ...question5_3,
          { question: data["5_3_1"] },
          { question: data["5_3_2"] },
          { question: data["5_3_3"] },
          { question: data["5_3_4"] },
          { question: data["5_3_5"] },
        ]);
      } else if (data["5_3_4"] !== "" && data["5_3_4"] !== null) {
        setQuestion5_3([
          ...question5_3,
          { question: data["5_3_1"] },
          { question: data["5_3_2"] },
          { question: data["5_3_3"] },
          { question: data["5_3_4"] },
        ]);
      } else if (data["5_3_3"] !== "" && data["5_3_3"] !== null) {
        setQuestion5_3([
          ...question5_3,
          { question: data["5_3_1"] },
          { question: data["5_3_2"] },
          { question: data["5_3_3"] },
        ]);
      } else if (data["5_3_2"] !== "" && data["5_3_2"] !== null) {
        setQuestion5_3([
          ...question5_3,
          { question: data["5_3_1"] },
          { question: data["5_3_2"] },
        ]);
      } else if (data["5_3_1"] !== "" && data["5_3_1"] !== null) {
        setQuestion5_3([...question5_3, { question: data["5_3_1"] }]);
      }
      // 5-4
      if (data["5_4_5"] !== "" && data["5_4_5"] !== null) {
        setQuestion5_4([
          ...question5_4,
          { question: data["5_4_1"] },
          { question: data["5_4_2"] },
          { question: data["5_4_3"] },
          { question: data["5_4_4"] },
          { question: data["5_4_5"] },
        ]);
      } else if (data["5_4_4"] !== "" && data["5_4_4"] !== null) {
        setQuestion5_4([
          ...question5_4,
          { question: data["5_4_1"] },
          { question: data["5_4_2"] },
          { question: data["5_4_3"] },
          { question: data["5_4_4"] },
        ]);
      } else if (data["5_4_3"] !== "" && data["5_4_3"] !== null) {
        setQuestion5_4([
          ...question5_4,
          { question: data["5_4_1"] },
          { question: data["5_4_2"] },
          { question: data["5_4_3"] },
        ]);
      } else if (data["5_4_2"] !== "" && data["5_4_2"] !== null) {
        setQuestion5_4([
          ...question5_4,
          { question: data["5_4_1"] },
          { question: data["5_4_2"] },
        ]);
      } else if (data["5_4_1"] !== "" && data["5_4_1"] !== null) {
        setQuestion5_4([...question5_4, { question: data["5_4_1"] }]);
      }

      // 6-1
      if (data["6_1_5"] !== "" && data["6_1_5"] !== null) {
        setQuestion6_1([
          ...question6_1,
          { question: data["6_1_1"] },
          { question: data["6_1_2"] },
          { question: data["6_1_3"] },
          { question: data["6_1_4"] },
          { question: data["6_1_5"] },
        ]);
      } else if (data["6_1_4"] !== "" && data["6_1_4"] !== null) {
        setQuestion6_1([
          ...question6_1,
          { question: data["6_1_1"] },
          { question: data["6_1_2"] },
          { question: data["6_1_3"] },
          { question: data["6_1_4"] },
        ]);
      } else if (data["6_1_3"] !== "" && data["6_1_3"] !== null) {
        setQuestion6_1([
          ...question6_1,
          { question: data["6_1_1"] },
          { question: data["6_1_2"] },
          { question: data["6_1_3"] },
        ]);
      } else if (data["6_1_2"] !== "" && data["6_1_2"] !== null) {
        setQuestion6_1([
          ...question6_1,
          { question: data["6_1_1"] },
          { question: data["6_1_2"] },
        ]);
      } else if (data["6_1_1"] !== "" && data["6_1_1"] !== null) {
        setQuestion6_1([...question6_1, { question: data["6_1_1"] }]);
      }
      // 6-2
      if (data["6_2_5"] !== "" && data["6_2_5"] !== null) {
        setQuestion6_2([
          ...question6_2,
          { question: data["6_2_1"] },
          { question: data["6_2_2"] },
          { question: data["6_2_3"] },
          { question: data["6_2_4"] },
          { question: data["6_2_5"] },
        ]);
      } else if (data["6_2_4"] !== "" && data["6_2_4"] !== null) {
        setQuestion6_2([
          ...question6_2,
          { question: data["6_2_1"] },
          { question: data["6_2_2"] },
          { question: data["6_2_3"] },
          { question: data["6_2_4"] },
        ]);
      } else if (data["6_2_3"] !== "" && data["6_2_3"] !== null) {
        setQuestion6_2([
          ...question6_2,
          { question: data["6_2_1"] },
          { question: data["6_2_2"] },
          { question: data["6_2_3"] },
        ]);
      } else if (data["6_2_2"] !== "" && data["6_2_2"] !== null) {
        setQuestion6_2([
          ...question6_2,
          { question: data["6_2_1"] },
          { question: data["6_2_2"] },
        ]);
      } else if (data["6_2_1"] !== "" && data["6_2_1"] !== null) {
        setQuestion6_2([...question6_2, { question: data["6_2_1"] }]);
      }
    });
  }, []);

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
      params: { business_name: business_name },
    }).then((response) => {
      answer = response.data[0];
      Axios.get("http://34.68.101.191:8000/get/Scan_qna_writer", {
        params: { business_name: business_name },
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
      params: { business_name: business_name },
    }).then((response) => {
      let data = response.data[0];

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
    });
  }, []);

  // 세부스캔 질문
  useEffect(() => {
    let question = "";
    Axios.get("http://34.68.101.191:8000/get/Scan_qna_writer", {
      params: { business_name: business_name },
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

  // 답변 파일 저장
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

  // 카테고리 체크박스
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

  // 질문 박스 값
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
    } else if (num === 4_3) {
      const list = [...question4_3];
      list[index][name] = value;
      setQuestion4_3(list);
    } else if (num === 4_4) {
      const list = [...question4_4];
      list[index][name] = value;
      setQuestion4_4(list);
    } else if (num === 5_1) {
      const list = [...question5_1];
      list[index][name] = value;
      setQuestion5_1(list);
    } else if (num === 5_2) {
      const list = [...question5_2];
      list[index][name] = value;
      setQuestion5_2(list);
    } else if (num === 5_3) {
      const list = [...question5_3];
      list[index][name] = value;
      setQuestion5_3(list);
    } else if (num === 5_4) {
      const list = [...question5_4];
      list[index][name] = value;
      setQuestion5_4(list);
    } else if (num === 6_1) {
      const list = [...question6_1];
      list[index][name] = value;
      setQuestion6_1(list);
    } else if (num === 6_2) {
      const list = [...question6_2];
      list[index][name] = value;
      setQuestion6_2(list);
    }
  };
  // 질문 박스 생성
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
    } else if (num === 4_3) {
      setQuestion4_3([...question4_3, { question: "" }]);
    } else if (num === 4_4) {
      setQuestion4_4([...question4_4, { question: "" }]);
    } else if (num === 5_1) {
      setQuestion5_1([...question5_1, { question: "" }]);
    } else if (num === 5_2) {
      setQuestion5_2([...question5_2, { question: "" }]);
    } else if (num === 5_3) {
      setQuestion5_3([...question5_3, { question: "" }]);
    } else if (num === 5_4) {
      setQuestion5_4([...question5_4, { question: "" }]);
    } else if (num === 6_1) {
      setQuestion6_1([...question6_1, { question: "" }]);
    } else if (num === 6_2) {
      setQuestion6_2([...question6_2, { question: "" }]);
    }
  };
  // 질문 박스 삭제
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
    } else if (num === 4_3) {
      const list = [...question4_3];
      list.splice(index, 1);
      setQuestion4_3(list);
    } else if (num === 4_4) {
      const list = [...question4_4];
      list.splice(index, 1);
      setQuestion4_4(list);
    } else if (num === 5_1) {
      const list = [...question5_1];
      list.splice(index, 1);
      setQuestion5_1(list);
    } else if (num === 5_2) {
      const list = [...question5_2];
      list.splice(index, 1);
      setQuestion5_2(list);
    } else if (num === 5_3) {
      const list = [...question5_3];
      list.splice(index, 1);
      setQuestion5_3(list);
    } else if (num === 5_4) {
      const list = [...question5_4];
      list.splice(index, 1);
      setQuestion5_4(list);
    } else if (num === 6_1) {
      const list = [...question6_1];
      list.splice(index, 1);
      setQuestion6_1(list);
    } else if (num === 6_2) {
      const list = [...question6_2];
      list.splice(index, 1);
      setQuestion6_2(list);
    }
  };
  // 세부스캔 II 질문 리스트
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
    // 4-3
    question4_3_1: question4_3[0] ? question4_3[0].question : "",
    question4_3_2: question4_3[1] ? question4_3[1].question : "",
    question4_3_3: question4_3[2] ? question4_3[2].question : "",
    question4_3_4: question4_3[3] ? question4_3[3].question : "",
    question4_3_5: question4_3[4] ? question4_3[4].question : "",
    // 4-4
    question4_4_1: question4_4[0] ? question4_4[0].question : "",
    question4_4_2: question4_4[1] ? question4_4[1].question : "",
    question4_4_3: question4_4[2] ? question4_4[2].question : "",
    question4_4_4: question4_4[3] ? question4_4[3].question : "",
    question4_4_5: question4_4[4] ? question4_4[4].question : "",

    // 5-1
    question5_1_1: question5_1[0] ? question5_1[0].question : "",
    question5_1_2: question5_1[1] ? question5_1[1].question : "",
    question5_1_3: question5_1[2] ? question5_1[2].question : "",
    question5_1_4: question5_1[3] ? question5_1[3].question : "",
    question5_1_5: question5_1[4] ? question5_1[4].question : "",
    // 5-2
    question5_2_1: question5_2[0] ? question5_2[0].question : "",
    question5_2_2: question5_2[1] ? question5_2[1].question : "",
    question5_2_3: question5_2[2] ? question5_2[2].question : "",
    question5_2_4: question5_2[3] ? question5_2[3].question : "",
    question5_2_5: question5_2[4] ? question5_2[4].question : "",
    // 5-3
    question5_3_1: question5_3[0] ? question5_3[0].question : "",
    question5_3_2: question5_3[1] ? question5_3[1].question : "",
    question5_3_3: question5_3[2] ? question5_3[2].question : "",
    question5_3_4: question5_3[3] ? question5_3[3].question : "",
    question5_3_5: question5_3[4] ? question5_3[4].question : "",
    // 5-4
    question5_4_1: question5_4[0] ? question5_4[0].question : "",
    question5_4_2: question5_4[1] ? question5_4[1].question : "",
    question5_4_3: question5_4[2] ? question5_4[2].question : "",
    question5_4_4: question5_4[3] ? question5_4[3].question : "",
    question5_4_5: question5_4[4] ? question5_4[4].question : "",
    // 6-1
    question6_1_1: question6_1[0] ? question6_1[0].question : "",
    question6_1_2: question6_1[1] ? question6_1[1].question : "",
    question6_1_3: question6_1[2] ? question6_1[2].question : "",
    question6_1_4: question6_1[3] ? question6_1[3].question : "",
    question6_1_5: question6_1[4] ? question6_1[4].question : "",
    // 6-2
    question6_2_1: question6_2[0] ? question6_2[0].question : "",
    question6_2_2: question6_2[1] ? question6_2[1].question : "",
    question6_2_3: question6_2[2] ? question6_2[2].question : "",
    question6_2_4: question6_2[3] ? question6_2[3].question : "",
    question6_2_5: question6_2[4] ? question6_2[4].question : "",
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
    }
  }, []);

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
      questionList.question3_1_1 !== "" ||
      questionList.question3_2_1 !== "" ||
      questionList.question3_3_1 !== "" ||
      questionList.question3_4_1 !== "" ||
      questionList.question4_1_1 !== "" ||
      questionList.question4_2_1 !== "" ||
      questionList.question4_3_1 !== "" ||
      questionList.question4_4_1 !== "" ||
      questionList.question5_1_1 !== "" ||
      questionList.question5_2_1 !== "" ||
      questionList.question5_3_1 !== "" ||
      questionList.question5_4_1 !== "" ||
      questionList.question6_1_1 !== "" ||
      questionList.question6_2_1 !== ""
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
      state = "SCAN_A3";
      setSaveModal(true);
    } else if (key === "submit") {
      state = "SCAN_A4";
      setIsLoad(true);
    } else if (key === "report") {
      state = "SCAN_A5";
      setReportModal(true);
    }
    await Axios.put("http://34.68.101.191:8000/put/Scan_qna_2_write", {
      business_name,
      writerList,
      state,
      questionList,
    }).then((response) => {
      console.log(response.data);
      if (state === "SCAN_A4") {
        window.location.href = "/Home_writer";
      }
    });
  };

  return (
    <>
      {questionInputs()}
      <Header
        title="SCANNer 세부스캔 II 질문요청"
        img="./img/header_scan.png"
      />
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                {item.key === "1_1" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>

                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                ) : item.key === "1_2" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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

                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                ) : item.key === "1_3" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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

                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                ) : item.key === "1_4" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                                ? writerList.as_is1_2
                                : item.key === "2_3"
                                ? writerList.as_is2_3
                                : writerList.as_is2_4
                            }
                            name={`as_is2_${index + 1}`}
                            onChange={getValue}
                            disabled={
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                {item.key === "2_1" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                ) : item.key === "2_2" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                ) : item.key === "2_3" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                ) : item.key === "2_4" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>

                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                                ? writerList.keywor31_1
                                : item.key === "3_2"
                                ? writerList.keyword3_2
                                : item.key === "3_3"
                                ? writerList.keyword3_3
                                : writerList.keyword3_4
                            }
                            name={`keyword3_${index + 1}`}
                            onChange={getValue}
                            disabled={
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                {item.key === "3_1" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>

                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                ) : item.key === "3_2" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                ) : item.key === "3_3" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                ) : item.key === "3_4" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>

                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                {item.key === "4_1" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                ) : item.key === "4_2" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
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
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
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
                ) : item.key === "4_3" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
                      ? ""
                      : question4_3.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(4_3);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question4_3.map((item, index) => (
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
                              handleQuestChange(e, index, 4_3);
                            }}
                            disabled={
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 4_3);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question4_3.length - 1 === index &&
                              question4_3.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(4_3);
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
                ) : item.key === "4_4" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
                      ? ""
                      : question4_4.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(4_4);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question4_4.map((item, index) => (
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
                              handleQuestChange(e, index, 4_4);
                            }}
                            disabled={
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 4_4);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question4_4.length - 1 === index &&
                              question4_4.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(4_4);
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                {item.key === "5_1" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
                      ? ""
                      : question5_1.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(5_1);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question5_1.map((item, index) => (
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
                              handleQuestChange(e, index, 5_1);
                            }}
                            disabled={
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 5_1);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question5_1.length - 1 === index &&
                              question5_1.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(5_1);
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
                ) : item.key === "5_2" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
                      ? ""
                      : question5_2.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(5_2);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question5_2.map((item, index) => (
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
                              handleQuestChange(e, index, 5_2);
                            }}
                            disabled={
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 5_2);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question5_2.length - 1 === index &&
                              question5_2.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(5_2);
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
                ) : item.key === "5_3" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
                      ? ""
                      : question5_3.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(5_3);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question5_3.map((item, index) => (
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
                              handleQuestChange(e, index, 5_3);
                            }}
                            disabled={
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 5_3);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question5_3.length - 1 === index &&
                              question5_3.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(5_3);
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
                ) : item.key === "5_4" && item.title !== "" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
                      ? ""
                      : question5_4.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(5_4);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question5_4.map((item, index) => (
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
                              handleQuestChange(e, index, 5_4);
                            }}
                            disabled={
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 5_4);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>

                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question5_4.length - 1 === index &&
                              question5_4.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(5_4);
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
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
                {item.key === "6_1" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
                      ? ""
                      : question6_1.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(6_1);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question6_1.map((item, index) => (
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
                              handleQuestChange(e, index, 6_1);
                            }}
                            disabled={
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 6_1);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>

                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question6_1.length - 1 === index &&
                              question6_1.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(6_1);
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
                ) : item.key === "6_2" ? (
                  <>
                    {writerState.STATE_NAME === "세부스캔 II 질문 요청완료"
                      ? ""
                      : question6_2.length === 0 && (
                          <div
                            className="Scan_qna2_writer_inner_content_box_title"
                            onClick={() => {
                              handleQuestAdd(6_2);
                            }}
                          >
                            <p>세부스캔 ⅱ 질문 작성</p>
                          </div>
                        )}

                    {question6_2.map((item, index) => (
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
                              handleQuestChange(e, index, 6_2);
                            }}
                            disabled={
                              writerState.STATE_NAME ===
                              "세부스캔 II 질문 요청완료"
                                ? true
                                : false
                            }
                            autoComplete="off"
                          ></input>
                          {writerState.STATE_NAME ===
                          "세부스캔 II 질문 요청완료" ? (
                            ""
                          ) : (
                            <button
                              className="remove_btn_qna2"
                              onClick={() => {
                                handleQuestRemove(index, 6_2);
                              }}
                            >
                              <img src="./img/scan_ii_minus.png" alt="img" />
                            </button>
                          )}
                        </div>
                        {writerState.STATE_NAME ===
                        "세부스캔 II 질문 요청완료" ? (
                          ""
                        ) : (
                          <div className="Scan_qna2_writer_inner_content_box_text2">
                            {question6_2.length - 1 === index &&
                              question6_2.length < 5 && (
                                <button
                                  className="add_btn_qna2"
                                  onClick={() => {
                                    handleQuestAdd(6_2);
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

        {writerState.STATE_NAME === "세부스캔 II 질문 요청완료" ? (
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
          <img src="./img/popup_12.png" alt="img" />
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
              to="/Scan_report_writer"
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

export default Scan_qna_2_writer;
