import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = ({ title, img }) => {
  const onClickSubmit = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("grade");
    sessionStorage.removeItem("name");
    window.location.href = "/";
  };
  return (
    <>
      <input
        type="checkbox"
        id="User"
        className="Slide_input"
        name="User_menu"
      />
      <div className="Header">
        <div className="Header_inner">
          <div className="Header_title">
            <img src={img} />
            <p>{title}</p>
          </div>
          <div className="User_menu">
            <label htmlFor="User" className="Profil_box">
              <div className="User">
                <div className="Profil_text">
                  <p>{sessionStorage.getItem("name")}</p>
                  <p>{sessionStorage.getItem("email")}</p>
                </div>
                <div className="Profil_menu">
                  <img
                    src="./img/header_icon.png"
                    alt="arrow"
                    className="header_arrow"
                  />
                </div>
              </div>
            </label>
            <ul className="User_down">
              <div className="link_box">
                <li className="User_nav">My profile</li>

                <li className="User_nav">QnA</li>

                <li className="User_nav" onClick={onClickSubmit}>
                  Logout
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
