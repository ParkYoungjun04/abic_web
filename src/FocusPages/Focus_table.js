import "../ScanPages/Scan_table.css";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
const Focus_table = ({ table_name, url }) => {
  const location = useLocation({});

  const [tableList, setTableList] = useState([]);

  const [tableIndex, setTableIndex] = useState();
  // 테이블에서 사업명이나 상태 클릭했을 때 이동 시 폰트 변경
  const readOnClick = (name, key) => {
    Axios.put("http://34.68.101.191:8000/put/Focus_read", {
      business_name: name,
      key: key,
    });
  };
  // 해당 컬럼 삭제
  const deleteOnClick = (key) => {
    Axios.delete("http://34.68.101.191:8000/delete/Focus_table", {
      data: {
        index: key,
      },
    });
    window.location.href = url;
  };
  // ----------↓↓↓ 페이지 네이션 ↓↓↓----------

  //페이지에 보여줄 아이템 갯수
  const [limit, setLimit] = useState(10);
  //첫번째 페이지
  const [page, setPage] = useState(1);
  //페이지 이동 시 해당 페이지 번호
  const offset = (page - 1) * limit;
  //체크박스 클릭 시 해당 필터(true로바뀐)갯수
  const tableLength =
    tableList.filter((item) => item.isChecked === true).length === 0
      ? tableList.length
      : tableList.filter((item) => item.isChecked === true).length;
  //총 페이지 갯수
  const numPages = Math.ceil(tableLength / limit);
  //현재 페이지
  const [currPage, setCurrPage] = useState(page);

  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;

  const paginationNum = numPages < 4 ? numPages : 4;

  // ----------↑↑↑ 페이지 네이션 ↑↑↑----------

  // ----------↓↓↓ 테이블 정렬(오름차순, 내림차순) ↓↓↓----------
  const [showSortName, setShowSortName] = useState(false);
  const [showSortDate, setShowSortDate] = useState(false);
  //정렬을 하면 클릭 된 열이름이 담김
  const [isSortName, setIsSorName] = useState("");
  const [isSortDate, setIsSortDate] = useState("");
  //정렬이 오름차순 = ASC, 내리차순 = DESC
  const [orderName, setOrderName] = useState("ASC");
  const [orderDate, setOrderDate] = useState("ASC");
  const handleSort = (key) => {
    if (key === "NAME") {
      if (orderName === "ASC") {
        const sorted = [...tableList].sort((a, b) =>
          a[key] > b[key] ? 1 : -1
        );
        setIsSorName(key);
        setTableList(sorted);
        setOrderName("DESC");
        setShowSortDate(false);
        setOrderDate("ASC");
      } else if (orderName === "DESC") {
        const sorted = [...tableList].sort((a, b) =>
          a[key] < b[key] ? 1 : -1
        );
        setIsSorName(!key);
        setTableList(sorted);
        setOrderName("ASC");
        setShowSortDate(false);
        setOrderDate("ASC");
      }
    } else {
      if (orderDate === "ASC") {
        const sorted = [...tableList].sort((a, b) =>
          a[key] > b[key] ? 1 : -1
        );
        setIsSortDate(key);
        setTableList(sorted);
        setOrderDate("DESC");
        setShowSortName(false);
        setOrderName("ASC");
      } else if (orderDate === "DESC") {
        const sorted = [...tableList].sort((a, b) =>
          a[key] < b[key] ? 1 : -1
        );
        setIsSortDate(!key);
        setTableList(sorted);
        setOrderDate("ASC");
        setShowSortName(false);
        setOrderName("ASC");
      }
    }
  };
  // ----------↑↑↑ 테이블 정렬(오름차순, 내림차순) ↑↑↑----------

  // ----------↓↓↓ 테이블 상태 필터 ↓↓↓----------
  const [showFilter, setShowFilter] = useState(false);
  //필터링 했을 때 비교할 값. 예) isFilter가 false일 경우 isChecked의 값이 false인것만 보여줌
  const [isFilter, setIsFilter] = useState(false);

  const [allChecked, setAllChecked] = useState(true);

  const [stateNames, setStateNames] = useState(
    table_name === "all_client"
      ? [
          { name: "기본포커스 밸류체인 작성중", isChecked: false },
          { name: "기본포커스 플랫폼 작성중", isChecked: false },
          { name: "기본포커스 제출완료", isChecked: false },
          { name: "추가포커스 밸류체인 작성중", isChecked: false },
          { name: "추가포커스 플랫폼 작성중", isChecked: false },
          { name: "리포트", isChecked: false },
        ]
      : table_name === "detail_client"
      ? [
          { name: "기본포커스 밸류체인 작성중", isChecked: false },
          { name: "기본포커스 플랫폼 작성중", isChecked: false },
          { name: "기본포커스 제출완료", isChecked: false },
          { name: "추가포커스 밸류체인 작성중", isChecked: false },
          { name: "추가포커스 플랫폼 작성중", isChecked: false },
        ]
      : table_name === "report_client"
      ? [{ name: "리포트", isChecked: false }]
      : table_name === "all_writer"
      ? [
          { name: "추가포커스 밸류체인 작성중", isChecked: false },
          { name: "추가포커스 밸류체인 제출완료", isChecked: false },
          { name: "추가포커스 플랫폼 작성중", isChecked: false },
          { name: "추가포커스 플랫폼 제출완료", isChecked: false },
          { name: "리포트 작성중", isChecked: false },
          { name: "리포트 제출완료", isChecked: false },
        ]
      : table_name === "report_writer"
      ? [
          { name: "리포트 작성중", isChecked: false },
          { name: "리포트 제출완료", isChecked: false },
        ]
      : ""
  );

  const onChangeCheckFilter = (e) => {
    const { name, checked } = e.target;
    if (name === "ALL") {
      //체크박스 클릭 시 이름이 ALL이면 list에 isChecked의 값을 false로 전체 바꿈
      let tempState = tableList.map((item) => {
        return { ...item, isChecked: false };
      });
      setTableList(tempState);
      setIsFilter(false);
      //체크박스 부분
      setAllChecked(true);
      let tempState1 = stateNames.map((item) => {
        return { ...item, isChecked: false };
      });
      setStateNames(tempState1);
    } else if (checked === true) {
      let tempState = tableList.map((item) =>
        item.STATE_NAME === name ? { ...item, isChecked: checked } : item
      );
      setTableList(tempState);
      setIsFilter(true);
      //체크박스 부분
      setAllChecked(false);
      let tempState1 = stateNames.map((item) =>
        item.name === name ? { ...item, isChecked: checked } : item
      );
      setStateNames(tempState1);
    } else if (checked === false) {
      let tempState = tableList.map((item) =>
        item.STATE_NAME === name ? { ...item, isChecked: false } : item
      );
      setTableList(tempState);
      setIsFilter(true);
      //체크박스 부분
      setAllChecked(false);
      let tempState1 = stateNames.map((item) =>
        item.name === name ? { ...item, isChecked: false } : item
      );
      setStateNames(tempState1);
    }
  };
  //list에서 isChecked값이 true가 하나라도 없으면 true로 반환, 하나라도 있으면 false로 반환
  const checkListAllfalse =
    tableList.filter((item) => item.isChecked === true).length === 0;
  // ----------↑↑↑ 테이블 상태 필터 ↑↑↑----------

  // ----------↓↓↓ 삭제 모달창 ↓↓↓----------
  const [deleteModal, setDeleteModal] = useState(false);
  // ----------↑↑↑ 삭제 모달창 ↑↑↑----------
  useEffect(() => {
    let key = "";
    if (table_name === "all_client") {
      key = "all_client";
    } else if (table_name === "detail_client") {
      key = "detail_client";
    } else if (table_name === "report_client") {
      key = "report_client";
    } else if (table_name === "all_writer") {
      key = "all_writer";
    } else if (table_name === "report_writer") {
      key = "report_writer";
    }
    Axios.get("http://34.68.101.191:8000/get/Focus_table", {
      params: { key: key },
    }).then((response) => {
      let data = response.data;
      let filterChecked = data.map((item) => ({
        ...item,
        isChecked: false,
      }));
      setTableList(filterChecked);
      // Home에서 상태 클릭 했을 때 필터링
      if (location.state) {
        filterClick(data);
      }
    });
  }, [table_name]);
  console.log(table_name);
  const filterClick = (data) => {
    if (table_name === "all_client") {
      let stateName1 = location.state.state1;
      let stateName2 = location.state.state2;

      let filterChecked = data.map((item) =>
        item.STATE_NAME === stateName1
          ? { ...item, isChecked: true }
          : item.STATE_NAME === stateName2
          ? { ...item, isChecked: true }
          : { ...item, isChecked: false }
      );
      setTableList(filterChecked);
      setIsFilter(true);
      //체크박스
      setAllChecked(false);
      let tempState = stateNames.map((item) =>
        item.name === stateName1
          ? { ...item, isChecked: true }
          : item.name === stateName2
          ? { ...item, isChecked: true }
          : item
      );
      setStateNames(tempState);
    } else {
      let stateName = location.state.state;
      console.log(stateName);
      let filterChecked = data.map((item) =>
        item.STATE_NAME === stateName
          ? { ...item, isChecked: true }
          : { ...item, isChecked: false }
      );
      setTableList(filterChecked);
      setIsFilter(true);
      //체크박스
      setAllChecked(false);
      let tempState = stateNames.map((item) =>
        item.name === stateName ? { ...item, isChecked: true } : item
      );
      setStateNames(tempState);
    }
  };

  return (
    <>
      <div className="table_top">
        <div className="table_show_item">
          <input
            type="number"
            value={limit}
            onChange={(e) => {
              setLimit(parseInt(e.target.value, 10));
            }}
          />
          <p>Show enterprise</p>
        </div>
        {table_name === "all_client" || table_name === "detail_client" ? (
          <NavLink to="/Focus_qna_client">
            <div className="table_add_btn">
              <p>신규 포커스 시작하기</p>
              <img
                className="add_button_img"
                src="./img/add_button.png"
                alt="img"
              />
              <img
                className="add_button_hover_img"
                src="./img/add_button_hover.png"
                alt="img"
              />
            </div>
          </NavLink>
        ) : (
          ""
        )}
      </div>
      <TableContainer align="center" component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                사업명
                <div
                  className="sort_img"
                  onClick={() => {
                    handleSort("NAME");
                    setShowSortName(true);
                  }}
                >
                  <img
                    style={{
                      display: `${showSortName ? "none" : "block"}`,
                    }}
                    src="./img/two-arrow_defalt.png"
                  />
                  {isSortName === "NAME" ? (
                    <img
                      style={{
                        display: `${showSortName ? "block" : "none"}`,
                      }}
                      src="./img/two-arrow_up.png"
                    />
                  ) : (
                    <img
                      style={{
                        display: `${showSortName ? "block" : "none"}`,
                      }}
                      src="./img/two-arrow_down.png"
                    />
                  )}
                </div>
              </TableCell>
              <TableCell align="center">
                제출일시
                <div
                  className="sort_img"
                  onClick={() => {
                    handleSort("DATE");
                    setShowSortDate(true);
                  }}
                >
                  <img
                    style={{
                      display: `${showSortDate ? "none" : "block"}`,
                    }}
                    src="./img/two-arrow_defalt.png"
                  />
                  {isSortDate === "DATE" ? (
                    <img
                      style={{
                        display: `${showSortDate ? "block" : "none"}`,
                      }}
                      src="./img/two-arrow_up.png"
                    />
                  ) : (
                    <img
                      style={{
                        display: `${showSortDate ? "block" : "none"}`,
                      }}
                      src="./img/two-arrow_down.png"
                    />
                  )}
                </div>
              </TableCell>
              <TableCell align="center">
                상태
                <div className="table_filter">
                  <img
                    src="./img/filter.png"
                    onClick={() => {
                      setShowFilter(!showFilter);
                    }}
                  />
                  {showFilter && (
                    <div className="table_filter_box focus_table_filter_box">
                      <div className="table_filter_box_input">
                        <input
                          type="checkbox"
                          id="ALL"
                          name="ALL"
                          onChange={onChangeCheckFilter}
                          checked={checkListAllfalse ? true : allChecked}
                        />
                        <label htmlFor="ALL">
                          <p>전체보기</p>
                        </label>
                      </div>
                      {stateNames.map((item, index) => (
                        <div key={index} className="table_filter_box_input">
                          <input
                            type="checkbox"
                            id={item.name}
                            name={item.name}
                            onChange={onChangeCheckFilter}
                            checked={item.isChecked}
                          />
                          <label htmlFor={item.name}>
                            <p>{item.name}</p>
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TableCell>
              {table_name.slice(-6) === "client" && (
                <TableCell align="center">삭제</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableList
              .filter((item) =>
                checkListAllfalse
                  ? item.isChecked === false
                  : item.isChecked === isFilter
              )
              .slice(offset, offset + limit)
              .map((item, index) => (
                <TableRow
                  className={`${item.FONT_BOLD === 1 ? "table_bold" : ""}`}
                  key={index}
                >
                  <TableCell align="center">{item.BUSINESS_NAME}</TableCell>
                  <TableCell align="center">{item.CREATED_DATE}</TableCell>
                  <TableCell align="center">
                    {(item.QUESTION_TYPE === "b" &&
                      item.STATE_NAME === "기본포커스 제출완료") ||
                    item.STATE_NAME === "기본포커스 밸류체인 작성중" ? (
                      <NavLink
                        onClick={() => {
                          readOnClick(item.BUSINESS_NAME, table_name.slice(-6));
                        }}
                        to="/Focus_qna_b_viewer_client"
                        state={{
                          business_name: item.BUSINESS_NAME,
                          state_name: item.STATE_NAME,
                        }}
                      >
                        {item.STATE_NAME}
                      </NavLink>
                    ) : (item.QUESTION_TYPE === "p" &&
                        item.STATE_NAME === "기본포커스 제출완료") ||
                      item.STATE_NAME === "기본포커스 플랫폼 작성중" ? (
                      <NavLink
                        onClick={() => {
                          readOnClick(item.BUSINESS_NAME, table_name.slice(-6));
                        }}
                        to="/Focus_qna_p_viewer_client"
                        state={{
                          business_name: item.BUSINESS_NAME,
                          state_name: item.STATE_NAME,
                        }}
                      >
                        {item.STATE_NAME}
                      </NavLink>
                    ) : table_name === "detail_client" ||
                      (table_name === "all_client" &&
                        item.STATE_NAME === "추가포커스 밸류체인 작성중") ||
                      item.STATE_NAME === "추가포커스 플랫폼 작성중" ? (
                      <NavLink
                        onClick={() => {
                          readOnClick(item.BUSINESS_NAME, table_name.slice(-6));
                        }}
                        to="/Focus_qna2_client"
                        state={{
                          clientData: item,
                        }}
                      >
                        {item.STATE_NAME}
                      </NavLink>
                    ) : item.STATE_NAME === "리포트" ? (
                      <NavLink
                        onClick={() => {
                          readOnClick(item.BUSINESS_NAME, table_name.slice(-6));
                        }}
                        to="/Focus_report_view_client"
                        state={{
                          clientData: item,
                        }}
                      >
                        {item.STATE_NAME}
                      </NavLink>
                    ) : (table_name === "all_writer" &&
                        item.STATE_NAME === "추가포커스 밸류체인 작성중") ||
                      item.STATE_NAME === "추가포커스 밸류체인 제출완료" ||
                      item.STATE_NAME === "추가포커스 플랫폼 작성중" ||
                      item.STATE_NAME === "추가포커스 플랫폼 제출완료" ? (
                      <NavLink
                        onClick={() => {
                          readOnClick(item.BUSINESS_NAME, table_name.slice(-6));
                        }}
                        to="/Focus_qna_2_writer"
                        state={{
                          business_name: item.BUSINESS_NAME,
                          client_name: item.CLIENT_NAME,
                        }}
                      >
                        {item.STATE_NAME}
                      </NavLink>
                    ) : item.STATE_NAME === "리포트 작성중" ||
                      item.STATE_NAME === "리포트 제출완료" ? (
                      <NavLink
                        onClick={() => {
                          readOnClick(item.BUSINESS_NAME, table_name.slice(-6));
                        }}
                        to="/Focus_report_writer"
                        state={{
                          writerData: item,
                          client_name: item.CLIENT_NAME,
                        }}
                      >
                        {item.STATE_NAME}
                      </NavLink>
                    ) : (
                      item.STATE_NAME
                    )}
                  </TableCell>
                  {table_name.slice(-6) === "client" && (
                    <TableCell align="center">
                      {item.STATE_NAME.slice(-2) === "완료" ? (
                        ""
                      ) : (
                        <img
                          className="delete_img"
                          src="./img/delete.png"
                          alt="img"
                          onClick={() => {
                            setDeleteModal(!deleteModal);
                            setTableIndex(item.BUSINESS_NAME);
                          }}
                        />
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <button
          className="Previos"
          onClick={() => {
            setPage(page - 1);
            setCurrPage(page - 2);
          }}
          disabled={page === 1}
        >
          〈
        </button>
        <button
          className="pageNumber"
          onClick={() => setPage(firstNum)}
          aria-current={page === firstNum ? "page" : null}
        >
          {firstNum}
        </button>
        {Array(paginationNum)
          .fill()
          .map((_, i) => {
            if (i <= 2) {
              return (
                <button
                  className="pageNumber"
                  key={i + 1}
                  onClick={() => {
                    setPage(firstNum + 1 + i);
                  }}
                  aria-current={page === firstNum + 1 + i ? "page" : null}
                >
                  {firstNum + 1 + i}
                </button>
              );
            } else if (i >= 3) {
              return (
                <button
                  className="pageNumber"
                  key={i + 1}
                  onClick={() => setPage(lastNum)}
                  aria-current={page === lastNum ? "page" : null}
                >
                  {lastNum}
                </button>
              );
            }
          })}
        {/* {numPages > 4 && (
                <button
                  className={`Next ${page === numPages ? "none" : "block"}`}
                  onClick={() => {
                    setPage(numPages);
                    setCurrPage(numPages);
                  }}
                  disabled={page === numPages}
                >
                  ...{numPages}
                </button>
              )} */}
        <button
          className="Next"
          onClick={() => {
            setPage(page + 1);
            setCurrPage(page);
          }}
          disabled={page >= numPages}
        >
          〉
        </button>
      </div>
      {deleteModal && (
        <div className="delete_Modal">
          <img src="./img/popup_1.png" />
          <div className="delete_Modal_btn">
            <button
              onClick={() => {
                setDeleteModal(false);
              }}
            ></button>
            <button
              onClick={() => {
                deleteOnClick(tableIndex);
              }}
            ></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Focus_table;
