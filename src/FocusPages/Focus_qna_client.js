import "./Focus_qna_client.css";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Header from "../Header";
const Focus_qna_client = () => {
  return (
    <>
      <Header title="FOCUSer 질문작성" img="./img/focus_icon.png" />
      <div className="Focus_qna_client_inner">
        <div className="Focus_qna_client_inner_box1">
          <img src="./img/focus_top_img.png" />
          <p>
            아래 목록을 읽고 자신의 사업에 더 근접한 사업유형을 선택해서
            '시작하기'버튼을 클릭해주세요.
          </p>
        </div>
        <div className="Focus_qna_client_inner_box2">
          <div className="Focus_qna_client_inner_box2_con1">
            <p className="Focus_qna_client_inner_box2_title">밸류체인형 사업</p>
            <div className="Focus_qna_client_inner_box2_text">
              <p>
                사업 초기 단계부터 목표고객이 명확하고
                <br />
                제품/서비스를 판매하는것이 중요합니다.
              </p>
            </div>
            <div className="Focus_qna_client_inner_box2_text">
              <p>
                고객 가치는 개발/제조/생산 혹은 유통을 통해
                <br />
                판매하는 제품/서비스만을 통해 창출됩니다.
              </p>
            </div>
            <div className="Focus_qna_client_inner_box2_text">
              <p>
                초기 거점시장에서 사업 성공을 위해
                <br />
                온/오프라인 유통망을 구축하는 것이 중요합니다.
              </p>
            </div>
            <div className="Focus_qna_client_inner_box2_text">
              <p>
                장기적 관점에서 사업의 핵심 성공 요인은
                <br />
                온/오프라인 플랫폼에서 지속적인
                <br />
                네트워크효과가 발생하는 것입니다.
              </p>
            </div>
            <div className="Focus_qna_client_inner_box2_text">
              <p>
                초기 거점시장에서 사업 성공을 위해
                <br />
                온/오프라인 유토망을 구축하는 것이 중요합니다.
              </p>
            </div>
            <div className="Focus_qna_client_inner_box2_btn">
              <NavLink to="/Focus_qna_b_client">
                <img src="./img/add_button.png" alt="img" />
              </NavLink>
              <NavLink to="/Focus_qna_b_client">
                <p>시작하기</p>
              </NavLink>
            </div>
          </div>
          <div className="Focus_qna_client_inner_box2_con2">
            <p className="Focus_qna_client_inner_box2_title">플랫폼형 사업</p>
            <div className="Focus_qna_client_inner_box2_text">
              <p>사업 초기 단계에서는 회원 가입수를 늘이는 것이 중요합니다.</p>
            </div>
            <div className="Focus_qna_client_inner_box2_text">
              <p>
                고객 가치는 수요측 참여자와 공급측 참여자를
                <br />
                연결, 추천, 구독 등을 통해 창출됩니다.
              </p>
            </div>
            <div className="Focus_qna_client_inner_box2_text">
              <p>
                초기 거점시장에서 사업 성공을 위해
                <br />
                다양한 인지도 마케팅을 통해 고객을 유입하는 것이 중요합니다.
              </p>
            </div>
            <div className="Focus_qna_client_inner_box2_text">
              <p>
                장기적 관점에서 사업의 핵심 성공 요인은
                <br />
                제품/서비스의 차별적 우위 (특허 기술이나 밀착된 고객 서비스
                등)를
                <br />
                계속 유지할 수 있는 역량입니다.
              </p>
            </div>
            <div className="Focus_qna_client_inner_box2_text">
              <p>
                초기 거점시장에서 사업 성공을 위해
                <br />
                다양한 인지도 마케팅을 통해 고객을 유입하는 것이 중요합니다.
              </p>
            </div>
            <div className="Focus_qna_client_inner_box2_btn">
              <NavLink to="/Focus_qna_p_client">
                <img src="./img/add_button.png" alt="img" />
              </NavLink>
              <NavLink to="/Focus_qna_p_client">
                <p>시작하기</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Focus_qna_client;
