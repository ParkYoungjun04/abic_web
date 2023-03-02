import "./Login.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
const SignUp = () => {
  const [user, setUser] = useState({ email: "", password: "", name: "" });
  const onClickSubmit = () => {
    //이메일 유효성 검사
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    //비밀번호 유효성 검사
    const passwordRegex =
      /^.*(?=^.{6,18}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    if (!emailRegex.test(user.email)) {
      return alert("이메일 형식에 맞지않습니다");
    } else if (!passwordRegex.test(user.password)) {
      return alert(
        "숫자, 영문자 특수문자 포함 6~18자리 비밀번호를 입력해주세요"
      );
    } else if (user.name === "") {
      return alert("이름을 입력해주세요");
    } else {
      Axios.post("http://34.68.101.191:8000/post/signUp", {
        email: user.email,
        password: user.password,
        name: user.name,
      }).then((res) => {
        if (res.data === "t") {
          alert("회원가입 성공");
          window.location.href = "/";
        } else if (res.data === "n") {
          alert("이메일이 존재합니다");
        } else {
          alert("회원가입 실패");
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
              <div className="login_title">
                <p>Sign Up</p>
              </div>
              <div className="login_box">
                <div className="login__icon1">
                  <img src="./img/mail_icon.png" alt="img" />
                </div>
                <input
                  type="email"
                  name="email"
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
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="login_input"
                  onChange={getValue}
                  autoComplete="off"
                ></input>
              </div>
              <div className="login_box">
                <div className="login__icon3">
                  <img src="./img/login_user.png" alt="img" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="UserName"
                  className="login_input"
                  onChange={getValue}
                  autoComplete="off"
                ></input>
              </div>
              <div className="login__forgot">
                <p>Forgot Password?</p>
              </div>
              <button className="login__button" onClick={onClickSubmit}>
                Sign Up
              </button>
              <span className="login__account">Do Have an Account?</span>
              <NavLink to="/">
                <span className="login__signin">Sign In</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
