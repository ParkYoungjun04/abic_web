import "./Sidebar.css";
import { NavLink } from "react-router-dom";
const SidebarAdmin = () => {
  const menuInput = ["Scan", "Focus", "Create", "Ishap"];

  const scanMenu = [
    {
      title: "스캔 진행 현황",
      link: "/Scan_all_writer",
    },
    {
      title: "세부스캔 질문 작성",
      link: "/Scan_detail_writer",
    },
    {
      title: "리포트 업로드",
      link: "/Scan_report_list_writer",
    },
  ];

  const focusMenu = [
    {
      title: "포커스 진행 현황",
      link: "/Focus_all_writer",
    },
    {
      title: "리포트 업로드",
      link: "/Focus_report_list_writer",
    },
  ];

  const createMenu = [
    {
      title: "create",
      link: "",
    },
    {
      title: "create",
      link: "",
    },
    {
      title: "create",
      link: "",
    },
  ];

  const ishapMenu = [
    {
      title: "ishap",
      link: "",
    },
    {
      title: "ishap",
      link: "",
    },
    {
      title: "ishap",
      link: "",
    },
  ];

  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("menu");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  return (
    <>
      {menuInput.map((item, index) => (
        <input
          key={index}
          type="checkbox"
          id={`${item}_admin`}
          name="menu"
          value={index}
          onChange={(e) => {
            checkOnlyOne(e.target);
          }}
        />
      ))}
      <div className="Sidebar">
        <div className="logo">
          <img src="/img/abic_logo_w.png" alt="img" />
        </div>
        <div className="Sidebar_inner">
          <NavLink to="/Home_writer">
            <div className="menu_home">
              <img src="./img/side_home.png" alt="img" />
              <p>Home</p>
            </div>
          </NavLink>
          <div className="ISFC_title">
            <p>ISFC 스타트업 진단</p>
          </div>
          {/* SCANner */}
          <label htmlFor="Scan_admin">
            <div className="Side_menu_title">
              <img src="./img/side_scan.png" alt="img" />
              <p className="Slide_menu_nav">SCANner</p>
              <img
                className="menu_arrow Scan_arrow"
                src="./img/side_icon.png"
                alt="img"
              />
            </div>
          </label>
          <div className="Side_menu Scan">
            {scanMenu.map((item, index) => (
              <NavLink key={index} to={item.link}>
                <div className="Side_menu_link">
                  <p className="dot">&bull;</p>
                  <p>{item.title}</p>
                </div>
              </NavLink>
            ))}
          </div>
          {/* FOCUSer */}
          <label htmlFor="Focus_admin">
            <div className="Side_menu_title">
              <img src="./img/side_focus.png" alt="img" />
              <p className="Slide_menu_nav">FOCUSer</p>
              <img
                className="menu_arrow Focus_arrow"
                src="./img/side_icon.png"
                alt="img"
              />
            </div>
          </label>
          <div className="Side_menu Focus">
            {focusMenu.map((item, index) => (
              <NavLink key={index} to={item.link}>
                <div className="Side_menu_link">
                  <p className="dot">&bull;</p>
                  <p>{item.title}</p>
                </div>
              </NavLink>
            ))}
          </div>
          {/* CREATer */}
          {/* <label htmlFor="Create_admin"> */}
          <label htmlFor="">
            <div className="Side_menu_title">
              <img src="./img/side_create.png" alt="img" />
              <p className="Slide_menu_nav">CREATor</p>
              <img
                className="menu_arrow Create_arrow"
                src="./img/side_icon.png"
                alt="img"
              />
            </div>
          </label>
          <div className="Side_menu Create">
            {createMenu.map((item, index) => (
              <NavLink key={index} to={item.link}>
                <div className="Side_menu_link">
                  <p className="dot">&bull;</p>
                  <p>{item.title}</p>
                </div>
              </NavLink>
            ))}
          </div>
          {/* Ishap */}
          {/* <label htmlFor="Ishap_admin"> */}
          <label htmlFor="">
            <div className="Side_menu_title">
              <img src="./img/side_ishaper.png" alt="img" />
              <p className="Slide_menu_nav">iSHAPer</p>
              <img
                className="menu_arrow Ishap_arrow"
                src="./img/side_icon.png"
                alt="img"
              />
            </div>
          </label>
          <div className="Side_menu Ishap">
            {ishapMenu.map((item, index) => (
              <NavLink key={index} to={item.link}>
                <div className="Side_menu_link">
                  <p className="dot">&bull;</p>
                  <p>{item.title}</p>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="consultant_tool">
            <p>컨설턴트 진단 도구</p>
          </div>
          <div className="Side_menu_title">
            <img src="./img/Fermi.png" alt="img" />
            <p className="Slide_menu_nav">Fermi</p>
          </div>
          <NavLink to="/Crawling">
            <div className="Side_menu_title">
              <img src="./img/crwaling.png" alt="img" />
              <p className="Slide_menu_nav">Crawling</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default SidebarAdmin;
