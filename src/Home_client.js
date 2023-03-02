import "./Home.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import Header from "./Header";
const Home_client = () => {
  const [scanState, setScanState] = useState([
    {
      title: "기본스캔 작성중",
      cnt: "0",
    },
    {
      title: "기본스캔 제출완료",
      cnt: "0",
    },
    {
      title: "세부스캔 작성중",
      cnt: "0",
    },
    {
      title: "세부스캔 II 작성중",
      cnt: "0",
    },
    {
      title: "세부스캔 제출완료",
      cnt: "0",
    },
    {
      title: "리포트",
      cnt: "0",
    },
  ]);

  const [focusState, setFocusState] = useState([
    {
      title: "기본포커스 작성중",
      cnt: "0",
      state1: "기본포커스 밸류체인 작성중",
      state2: "기본포커스 플랫폼 작성중",
    },
    {
      title: "기본포커스 제출완료",
      cnt: "0",
      state1: "기본포커스 제출완료",
      state2: "기본포커스 제출완료",
    },
    {
      title: "추가포커스 작성중",
      cnt: "0",
      state1: "추가포커스 밸류체인 작성중",
      state2: "추가포커스 플랫폼 작성중",
    },
    {
      title: "추가포커스 제출완료",
      cnt: "0",
      state1: "기본포커스 제출완료",
      state2: "기본포커스 제출완료",
    },
    {
      title: "리포트",
      cnt: "0",
      state1: "리포트",
      state2: "리포트",
    },
  ]);

  const ishapeState = [
    {
      title: "기초 영상",
      cnt: "0",
    },
    {
      title: "워크샵 영상",
      cnt: "0",
    },
    {
      title: "학습진도",
      cnt: "0",
    },
  ];
  useEffect(() => {
    Axios.get("http://34.68.101.191:8000/get/Home_scan", {
      params: { name: "client" },
    }).then((response) => {
      let data = response.data;

      let temp = scanState.map((item) =>
        item.title === "기본스캔 작성중"
          ? { ...item, cnt: data[0].CNT }
          : item.title === "기본스캔 제출완료"
          ? { ...item, cnt: data[1].CNT }
          : item.title === "세부스캔 작성중"
          ? { ...item, cnt: data[2].CNT }
          : item.title === "세부스캔 II 작성중"
          ? { ...item, cnt: data[3].CNT }
          : item.title === "세부스캔 제출완료"
          ? { ...item, cnt: data[4].CNT }
          : item.title === "리포트"
          ? { ...item, cnt: data[5].CNT }
          : item
      );
      setScanState(temp);
    });
    Axios.get("http://34.68.101.191:8000/get/Home_focus", {
      params: { name: "client" },
    }).then((response) => {
      let data = response.data;

      let temp = focusState.map((item) =>
        item.title === "기본포커스 작성중"
          ? { ...item, cnt: data[0].CNT + data[1].CNT }
          : item.title === "기본포커스 제출완료"
          ? { ...item, cnt: data[2].CNT }
          : item.title === "추가포커스 작성중"
          ? { ...item, cnt: data[3].CNT + data[4].CNT }
          : item.title === "리포트"
          ? { ...item, cnt: data[5].CNT }
          : item
      );
      setFocusState(temp);
    });
  }, []);
  console.log(focusState);
  return (
    <>
      <Header title="Home" img="./img/header_home.png" />
      <div className="Home">
        <div className="Home_box">
          <div className="Home_box_title">
            <p>SCANNer</p>
          </div>
          <div className="Home_box_title_line" />
          {scanState.map((item, index) => (
            <div key={index}>
              <div className="Home_content">
                <NavLink to="/Scan_all_client" state={{ state: item.title }}>
                  <p>{item.title}</p>
                </NavLink>
                <NavLink to="/Scan_all_client" state={{ state: item.title }}>
                  <div className="Home_content_p">
                    <p>{item.cnt}</p>
                    <p>건</p>
                  </div>
                </NavLink>
              </div>
              <div
                className={
                  scanState.length === index + 1 ? "" : "Home_box_content_line"
                }
              />
            </div>
          ))}
        </div>
        <div className="Home_box">
          <div className="Home_box_title">
            <p>FOCUSer</p>
          </div>
          <div className="Home_box_title_line" />
          {focusState.map((item, index) => (
            <div key={index}>
              <div className="Home_content">
                <NavLink
                  to="/Focus_all_client"
                  state={{ state1: item.state1, state2: item.state2 }}
                >
                  <p>{item.title}</p>
                </NavLink>
                <NavLink
                  to="/Focus_all_client"
                  state={{ state1: item.state1, state2: item.state2 }}
                >
                  <div className="Home_content_p">
                    <p>{item.cnt}</p>
                    <p>건</p>
                  </div>
                </NavLink>
              </div>
              <div
                className={
                  focusState.length === index + 1 ? "" : "Home_box_content_line"
                }
              />
            </div>
          ))}
        </div>
        <div className="Home_box">
          <div className="Home_box_title">
            <p>CREATor</p>
          </div>
          <div className="Home_box_title_line"></div>
          <div className="Home_content">
            <p className="creator">
              현재 개발중 입니다<br></br>곧 오픈 하겠습니다
            </p>
          </div>
        </div>
        <div className="Home_box">
          <div className="Home_box_title">
            <p>iSHAPer</p>
          </div>
          <div className="Home_box_title_line" />
          {ishapeState.map((item, index) => (
            <div key={index}>
              <div className="Home_content">
                <NavLink to="" state={{ state: item.title }}>
                  <p>{item.title}</p>
                </NavLink>
                <div className="Home_content_p">
                  <p>{item.cnt}</p>
                  <p>{item.title === "학습진도" ? "%" : "건"}</p>
                </div>
              </div>
              <div
                className={
                  ishapeState.length === index + 1
                    ? ""
                    : "Home_box_content_line"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home_client;
