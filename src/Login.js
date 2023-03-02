import "./Login.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const onClickSubmit = () => {
    if (user.email === "" || user.password === "") {
      alert("이메일, 비밀번호를 입력해주세요");
    } else {
      Axios.post("http://34.68.101.191:8000/post/login", {
        email: user.email,
        password: user.password,
      }).then((res) => {
        console.log(res.data);
        if (res.data.msg === "t") {
          alert("로그인 성공");
          sessionStorage.setItem("email", res.data.email);
          sessionStorage.setItem("name", res.data.name);
          sessionStorage.setItem("grade", res.data.grade);
          if (res.data.grade === "client") {
            window.location.href = "/Home_client";
          } else {
            window.location.href = "/Home_writer";
          }
        } else if (res.data === "f") {
          alert("비밀번호를 다시 확인해주세요");
        } else {
          alert("이메일이 존재하지 않습니다");
        }
      });
    }
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <div className="login_content">
        <div className="login_content_box">
          <div className="login_img">
            <img src="./img/login_img.png" alt="user login" />
          </div>
          <div className="login_form">
            <div className="login_register">
              <div style={{ marginBottom: "45px" }} className="login_title">
                <p>Sign In</p>
              </div>
              <div className="login_box">
                <div className="login__icon1">
                  <img src="./img/mail_icon.png" alt="img" />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="login_input"
                  onChange={getValue}
                  autoComplete="off"
                ></input>
              </div>
              <div className="login_box">
                <div className="login__icon2">
                  <img src="./img/login_pass.png" alt="img" />
                </div>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="login_input"
                  onChange={getValue}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      onClickSubmit();
                    }
                  }}
                ></input>
              </div>
              <div className="login__forgot">
                <p>Forgot Password?</p>
              </div>
              <button className="login__button" onClick={onClickSubmit}>
                Sign In
              </button>
              <span className="login__account">Don't Have an Account?</span>
              <NavLink to="/SignUp">
                <span className="login__signin">Sign Up</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
