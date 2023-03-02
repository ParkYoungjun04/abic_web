import "./Crawling.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import Header from "./Header";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
const Crawling = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [crawlingData, setCrawlingData] = useState([]);
  // 크롤링
  const handleCrawling = () => {
    if (searchKeyword === "") {
      return false;
    } else {
      setPage(1);
      setCurrPage(1);
      Axios.get("http://34.68.101.191:8000/get/Crawling/news", {
        params: { searchKeyword: searchKeyword },
      }).then((response) => {
        setCrawlingData(response.data);
      });
    }
  };

  // ----------↓↓↓ 페이지 네이션 ↓↓↓----------

  //페이지에 보여줄 아이템 갯수
  const [limit, setLimit] = useState(10);
  //첫번째 페이지
  const [page, setPage] = useState(1);
  //페이지 이동 시 해당 페이지 번호
  const offset = (page - 1) * limit;
  //총 페이지 갯수
  const numPages = Math.ceil(crawlingData.length / limit);
  //현재 페이지
  const [currPage, setCurrPage] = useState(page);

  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;

  const paginationNum = numPages < 4 ? numPages : 4;

  // ----------↑↑↑ 페이지 네이션 ↑↑↑----------
  return (
    <>
      <Header title="Crawling" img="./img/crawling_icon.png" />
      <div className="Crawling_inner">
        <div className="Crawling_inner_edit">
          <img src="./img/delete.png" />
          <img src="./img/delete.png" />
          <img src="./img/delete.png" />
          <img src="./img/delete.png" />
        </div>
        <div className="Crawling_inner_header">
          <div className="Crawling_show_item">
            <input
              type="number"
              value={limit}
              onChange={(e) => {
                setLimit(parseInt(e.target.value, 10));
              }}
            />
            <p>Show enterprise</p>
          </div>
          <div className="Crawling_search_bar">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                const value = e.target.value;
                setSearchKeyword(value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCrawling();
                }
              }}
            ></input>
          </div>
        </div>
        <TableContainer align="center" component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">Keyword</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Contents</TableCell>
                <TableCell align="center">Url</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {crawlingData.slice(offset, offset + limit).map((item, index) => (
                <TableRow key={index}>
                  <TableCell style={{ cursor: "Default" }} align="center">
                    {item.Keyword.length > 10
                      ? item.Keyword.substring(0, 10) + " ..."
                      : item.Keyword}
                  </TableCell>
                  <TableCell style={{ cursor: "Default" }} align="center">
                    {item.Title.length > 24
                      ? item.Title.substring(0, 24) + " ..."
                      : item.Title}
                  </TableCell>
                  <TableCell style={{ cursor: "Default" }} align="center">
                    {item.Content.length >= 45
                      ? item.Content.substring(0, 45) + " ..."
                      : item.Content}
                  </TableCell>
                  <TableCell
                    style={{ color: "#1E90FF" }}
                    align="center"
                    onClick={() => {
                      window.open(item.Url);
                    }}
                  >
                    {item.Url.length >= 35
                      ? item.Url.substring(0, 35) + " ..."
                      : item.Url}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="crawling_pagination">
          <button
            className="crawling_Previos"
            onClick={() => {
              setPage(page - 1);
              setCurrPage(page - 2);
            }}
            disabled={page === 1}
          >
            Previos
          </button>
          <button
            className="crawling_pageNumber"
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
                    className="crawling_pageNumber"
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
                    className="crawling_pageNumber"
                    key={i + 1}
                    onClick={() => setPage(lastNum)}
                    aria-current={page === lastNum ? "page" : null}
                  >
                    {lastNum}
                  </button>
                );
              }
            })}
          <button
            className="crawling_Next"
            onClick={() => {
              setPage(page + 1);
              setCurrPage(page);
            }}
            disabled={page >= numPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Crawling;
