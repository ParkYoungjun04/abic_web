const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const multer = require("multer");
const iconv = require("iconv-lite");
const PORT = process.env.port || 8000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.use("/file", express.static("./upload"));

const db = mysql.createPool({
  host: "34.68.101.191",
  user: "fermi",
  password: "Fermi1!@",
  database: "simpleboard",
  port: "3306",
});

// Home Scan 상태 개수
app.get("/get/Home_scan", (req, res) => {
  const name = req.query.name;
  if (name === "client") {
    const sqlQuery =
      "SELECT S.STATE_ID, S.STATE_NAME, IFNULL(C.CNT, 0) AS 'CNT'FROM state AS S LEFT OUTER JOIN (SELECT STATE_ID, COUNT(*) AS CNT FROM scan_all_client GROUP BY STATE_ID) AS C ON S.STATE_ID = C.STATE_ID WHERE S.STATE_ID='SCAN_C1' or S.STATE_ID='SCAN_C2' or S.STATE_ID='SCAN_C3' or S.STATE_ID='SCAN_C4' or S.STATE_ID='SCAN_C5' or S.STATE_ID='SCAN_C6'";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  } else if (name === "writer") {
    const sqlQuery =
      "SELECT S.STATE_ID, S.STATE_NAME, IFNULL(A.CNT, 0) AS 'CNT' FROM state AS S LEFT OUTER JOIN ( SELECT STATE_ID, COUNT(*) AS CNT FROM scan_all_consultant GROUP BY STATE_ID) AS A ON S.STATE_ID = A.STATE_ID WHERE S.STATE_ID='SCAN_A1' or S.STATE_ID='SCAN_A2' or S.STATE_ID='SCAN_A3' or S.STATE_ID='SCAN_A4' or S.STATE_ID='SCAN_A5' or S.STATE_ID='SCAN_A6'";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  } else {
    return false;
  }
});

// Scan 해당 고객 상태 조회
app.get("/get/Scan_state", (req, res) => {
  const business_name = req.query.business_name;
  const key = req.query.key;
  if (key === "client") {
    const sqlQuery =
      "SELECT * FROM scan_all_client WHERE BUSINESS_NAME ='" +
      business_name +
      "';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  } else if (key === "writer") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD , STATE_NAME  FROM state S, scan_all_consultant C WHERE S.STATE_ID = C.STATE_ID and BUSINESS_NAME ='" +
      business_name +
      "';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  }
});

// Scan 모든 테이블 조회
app.get("/get/Scan_table", (req, res) => {
  const key = req.query.key;
  // 고객
  // 진행현황
  if (key === "all_client") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD , STATE_NAME FROM state S, scan_all_client C WHERE S.STATE_ID = C.STATE_ID;";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
    // 기본스캔
  } else if (key === "defalt_client") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD, STATE_NAME FROM state INNER JOIN scan_all_client ON state.STATE_ID = scan_all_client.STATE_ID WHERE STATE_NAME = '기본스캔 작성중' or STATE_NAME = '기본스캔 제출완료';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
    // 세부스캔
  } else if (key === "detail_client") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD, STATE_NAME FROM state INNER JOIN scan_all_client ON state.STATE_ID = scan_all_client.STATE_ID WHERE STATE_NAME = '세부스캔 작성중' or STATE_NAME = '세부스캔 II 작성중' or STATE_NAME = '세부스캔 제출완료';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
    // 리포트
  } else if (key === "report_client") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD, STATE_NAME FROM state INNER JOIN scan_all_client ON state.STATE_ID = scan_all_client.STATE_ID WHERE STATE_NAME = '리포트';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
    // 컨설턴트
    // 진행현황
  } else if (key === "all_writer") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD , STATE_NAME, CLIENT_NAME FROM state S, scan_all_consultant C WHERE S.STATE_ID = C.STATE_ID and STATE_NAME not like '기본스캔 작성중';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
    // 세부스캔
  } else if (key === "detail_writer") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD, STATE_NAME, CLIENT_NAME FROM state INNER JOIN scan_all_consultant ON state.STATE_ID = scan_all_consultant.STATE_ID WHERE STATE_NAME = '세부스캔 질문 작성중' or STATE_NAME = '세부스캔 질문 제출완료' or STATE_NAME = '세부스캔 II 질문 작성중' or STATE_NAME = '세부스캔 II 질문 요청완료';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  } else if (key === "report_writer") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD, STATE_NAME, CLIENT_NAME FROM state INNER JOIN scan_all_consultant ON state.STATE_ID = scan_all_consultant.STATE_ID WHERE STATE_NAME = '리포트 작성중' or STATE_NAME = '리포트 제출완료';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  }
});

// Scan 테이블에서 삭제 시 해당 고객 삭제
app.delete("/delete/Scan_table", (req, res) => {
  const index = req.body.index;
  // 고객 스캔
  const sqlQuery1 =
    "DELETE FROM scan_all_client WHERE BUSINESS_NAME ='" + index + "';";
  // 컨설턴트 스캔
  const sqlQuery2 =
    "DELETE FROM scan_all_consultant WHERE BUSINESS_NAME ='" + index + "';";
  // 기본 스캔
  const sqlQuery3 = "DELETE FROM scan_b WHERE BUSINESS_NAME ='" + index + "';";
  // 세부 스캔 질문
  const sqlQuery4 =
    "DELETE FROM scan_d_q WHERE BUSINESS_NAME ='" + index + "';";
  // 세부 스캔 답변
  const sqlQuery5 =
    "DELETE FROM scan_d_a WHERE BUSINESS_NAME ='" + index + "';";
  // 리포트 작성
  const sqlQuery6 = "DELETE FROM scan_r WHERE BUSINESS_NAME ='" + index + "';";
  // 세부 스캔 II 질문
  const sqlQuery7 =
    "DELETE FROM scan_d_q2 WHERE BUSINESS_NAME ='" + index + "';";
  // 세부 스캔 II 답변
  const sqlQuery8 =
    "DELETE FROM scan_d_a2 WHERE BUSINESS_NAME ='" + index + "';";
  db.query(sqlQuery1, () => {});
  db.query(sqlQuery2, () => {});
  db.query(sqlQuery3, () => {});
  db.query(sqlQuery4, () => {});
  db.query(sqlQuery5, () => {});
  db.query(sqlQuery6, () => {});
  db.query(sqlQuery7, () => {});
  db.query(sqlQuery8, () => {});
  res.send("success!");
});

// Scan 테이블에서 상태나 사업명 클릭 시 폰트 굵기 0 으로 변경
app.put("/put/Scan_read", (req, res) => {
  const business_name = req.body.business_name;
  const key = req.body.key;

  if (key === "client") {
    const sqlQuery =
      "UPDATE scan_all_client SET FONT_BOLD=0 where BUSINESS_NAME=?;";
    db.query(sqlQuery, [business_name], (err, result) => {
      res.send("success");
    });
  }
  if (key === "writer") {
    const sqlQuery =
      "UPDATE scan_all_consultant SET FONT_BOLD=0 where BUSINESS_NAME=?;";
    db.query(sqlQuery, [business_name], (err, result) => {
      res.send("success");
    });
  }
});

// 처음 추가한 날짜
const nowDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const ampm = date.getHours() >= 12 ? "P.M" : "A.M";
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const now =
    year +
    "년 " +
    ("00" + month.toString()).slice(-2) +
    "월 " +
    ("00" + day.toString()).slice(-2) +
    "일 " +
    ampm +
    " " +
    ("00" + hours.toString()).slice(-2) +
    ":" +
    ("00" + minutes.toString()).slice(-2) +
    ":" +
    ("00" + seconds.toString()).slice(-2);
  return now;
};

// 기본스캔 답변 등록
app.post("/post/Scan_qna_client", upload.single("file"), (req, res) => {
  const now = nowDate();
  const clientData = JSON.parse(req.body.clientData);
  const state = req.body.state;
  const fileName = req.body.file === "null" ? null : req.body.fileName;
  const userName = req.body.userName;
  console.log(req.body);
  // 고객 스캔
  const sqlQuery1 =
    "INSERT INTO scan_all_client (BUSINESS_NAME, CREATED_DATE, STATE_ID) values(?,?,?)";

  // 컨설턴트 스캔
  const sqlQuery2 =
    "INSERT INTO scan_all_consultant (BUSINESS_NAME, CREATED_DATE, STATE_ID, CLIENT_NAME) values(?,?,?,?)";

  // 기본 스캔
  const sqlQuery3 =
    "INSERT INTO scan_b (BUSINESS_NAME, A, B, C, D, E, MK_1, MK_2, MK_3, MK_4, DT_1_NAME, DT_1_1, DT_1_2, DT_1_3, DT_1_4, DT_1_5, DT_1_TEXT, DT_2_NAME, DT_2_1, DT_2_2, DT_2_3, DT_2_4, DT_2_5, DT_2_TEXT, FILE_NAME) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  // 세부 스캔 질문
  const sqlQuery4 = "INSERT INTO scan_d_q (BUSINESS_NAME) value(?)";
  // 세부 스캔 답변
  const sqlQuery5 = "INSERT INTO scan_d_a (BUSINESS_NAME) value(?)";
  // 리포트 작성
  const sqlQuery6 = "INSERT INTO scan_r (BUSINESS_NAME) value(?)";
  // 세부 스캔 II 질문
  const sqlQuery7 = "INSERT INTO scan_d_q2 (BUSINESS_NAME) value(?)";
  // 세부 스캔 II 답변
  const sqlQuery8 = "INSERT INTO scan_d_a2 (BUSINESS_NAME) value(?)";
  db.query(sqlQuery1, [clientData.business_name, now, state], () => {});
  db.query(
    sqlQuery2,
    [
      clientData.business_name,
      now,
      state === "SCAN_C2" ? "SCAN_A1" : state,
      userName,
    ],
    () => {}
  );
  db.query(
    sqlQuery3,
    [
      clientData.business_name,
      clientData.A,
      clientData.B,
      clientData.C,
      clientData.D,
      clientData.E,
      clientData.MK_1,
      clientData.MK_2,
      clientData.MK_3,
      clientData.MK_4,
      clientData.DT_1_NAME,
      clientData.DT_1_1,
      clientData.DT_1_2,
      clientData.DT_1_3,
      clientData.DT_1_4,
      clientData.DT_1_5,
      clientData.DT_1_TEXT,
      clientData.DT_2_NAME,
      clientData.DT_2_1,
      clientData.DT_2_2,
      clientData.DT_2_3,
      clientData.DT_2_4,
      clientData.DT_2_5,
      clientData.DT_2_TEXT,
      fileName,
    ],
    () => {}
  );
  db.query(sqlQuery4, [clientData.business_name], () => {});
  db.query(sqlQuery5, [clientData.business_name], () => {});
  db.query(sqlQuery6, [clientData.business_name], () => {});
  db.query(sqlQuery7, [clientData.business_name], () => {});
  db.query(sqlQuery8, [clientData.business_name], () => {});
  res.send("success!");
});

// 기본스캔 현재 고객 정보
app.get("/get/Scan_qna_client", (req, res) => {
  const business_name = req.query.business_name;
  const sqlQuery =
    "SELECT * FROM scan_b WHERE BUSINESS_NAME ='" + business_name + "';";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 기본스캔 답변 수정
app.put("/put/Scan_qna_viewer_client", upload.single("file"), (req, res) => {
  const clientData = JSON.parse(req.body.clientData);
  const state = req.body.state;
  const fileName = req.body.file === "null" ? null : req.body.fileName;
  console.log("Scan_qna_viewer_client");
  const sqlQuery1 =
    "UPDATE scan_b SET A=?, B=?, C=?, D=?, E=?, MK_1=?, MK_2=?, MK_3=?, MK_4=?, DT_1_NAME=?, DT_1_1=?, DT_1_2=?, DT_1_3=?, DT_1_4=?, DT_1_5=?, DT_1_TEXT=?, DT_2_NAME=?, DT_2_1=?, DT_2_2=?, DT_2_3=?, DT_2_4=?, DT_2_5=?, DT_2_TEXT=?, FILE_NAME=? where BUSINESS_NAME=?;";

  // 고객 상태
  const sqlQuery2 =
    "UPDATE scan_all_client SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";

  // 컨설턴트 상태
  const sqlQuery3 =
    "UPDATE scan_all_consultant SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";

  db.query(
    sqlQuery1,
    [
      clientData.A,
      clientData.B,
      clientData.C,
      clientData.D,
      clientData.E,
      clientData.MK_1,
      clientData.MK_2,
      clientData.MK_3,
      clientData.MK_4,
      clientData.DT_1_NAME,
      clientData.DT_1_1,
      clientData.DT_1_2,
      clientData.DT_1_3,
      clientData.DT_1_4,
      clientData.DT_1_5,
      clientData.DT_1_TEXT,
      clientData.DT_2_NAME,
      clientData.DT_2_1,
      clientData.DT_2_2,
      clientData.DT_2_3,
      clientData.DT_2_4,
      clientData.DT_2_5,
      clientData.DT_2_TEXT,

      fileName,
      clientData.BUSINESS_NAME,
    ],
    () => {}
  );

  db.query(sqlQuery2, [state, clientData.BUSINESS_NAME], () => {});

  db.query(
    sqlQuery3,
    [state === "SCAN_C2" ? "SCAN_A1" : state, clientData.BUSINESS_NAME],
    () => {}
  );

  res.send("success");
});

// 세부스캔 질문 작성
app.put("/put/Scan_qna_writer", (req, res) => {
  const business_name = req.body.business_name;
  const state = req.body.state;
  const questionList = req.body.questionList;
  console.log("Scan_qna_writer");
  // 세부스캔 질문
  const sqlQuery1 =
    "UPDATE scan_d_q SET 1_1=?, 1_2=?, 1_3=?, 1_4=?, 2_1=?, 2_2=?, 2_3=?, 2_4=?, 3_1=?, 3_2=?, 3_3=?, 3_4=?, 4_1=?, 4_2=?, 4_3=?, 4_4=?, 5_1=?, 5_2=?, 5_3=?, 5_4=? where BUSINESS_NAME=?;";

  // 고객 상태
  const sqlQuery2 =
    state === "SCAN_C3"
      ? "UPDATE scan_all_client SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;"
      : "UPDATE scan_all_client SET STATE_ID=? where BUSINESS_NAME=?;";

  // 컨설턴트 상태
  const sqlQuery3 =
    "UPDATE scan_all_consultant SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";

  db.query(
    sqlQuery1,
    [
      questionList.question1_1,
      questionList.question1_2,
      questionList.question1_3,
      questionList.question1_4,
      questionList.question2_1,
      questionList.question2_2,
      questionList.question2_3,
      questionList.question2_4,
      questionList.question3_1,
      questionList.question3_2,
      questionList.question3_3,
      questionList.question3_4,
      questionList.question4_1,
      questionList.question4_2,
      questionList.question4_3,
      questionList.question4_4,
      questionList.question5_1,
      questionList.question5_2,
      questionList.question5_3,
      questionList.question5_4,
      business_name,
    ],
    () => {}
  );

  db.query(sqlQuery2, [state, business_name], () => {});
  db.query(
    sqlQuery3,
    [state === "SCAN_C2" ? "SCAN_A1" : "SCAN_A2", business_name],
    () => {}
  );
  res.send("success!");
});

// 세부스킨 질문 조회
app.get("/get/Scan_qna_writer", (req, res) => {
  const business_name = req.query.business_name;
  const sqlQuery =
    "SELECT * FROM scan_d_q WHERE BUSINESS_NAME ='" + business_name + "';";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 세부스캔 답변 작성
app.put("/put/Scan_detail_qna_client", upload.array("file"), (req, res) => {
  const business_name = req.body.business_name;
  const answerList = JSON.parse(req.body.answerList);
  const state = req.body.state;
  const fileName = req.body.fileName;
  console.log(req.body);
  console.log("Scan_detail_qna_client");
  // 세부스캔 답변
  const sqlQuery1 =
    "UPDATE scan_d_a SET 1_1=?, 1_2=?, 1_3=?, 1_4=?, 2_1=?, 2_2=?, 2_3=?, 2_4=?, 3_1=?, 3_2=?, 3_3=?, 3_4=?, 4_1=?, 4_2=?, 4_3=?, 4_4=?, 5_1=?, 5_2=?, 5_3=?, 5_4=?, 6_1=?, 6_2=?, F_1_1=?, F_1_2=?, F_1_3=?, F_1_4=?, F_2_1=?, F_2_2=?, F_2_3=?, F_2_4=?, F_3_1=?, F_3_2=?, F_3_3=?, F_3_4=?, F_4_1=?, F_4_2=?, F_4_3=?, F_4_4=?, F_5_1=?, F_5_2=?, F_5_3=?, F_5_4=?, F_6_1=?, F_6_2=? where BUSINESS_NAME=?;";
  // 고객 상태
  const sqlQuery2 =
    "UPDATE scan_all_client SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";
  // 컨설턴트 상태
  const sqlQuery3 =
    state === "SCAN_C5"
      ? "UPDATE scan_all_consultant SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;"
      : "UPDATE scan_all_consultant SET STATE_ID=? where BUSINESS_NAME=?;";

  db.query(
    sqlQuery1,
    [
      answerList.answer1_1.trim(),
      answerList.answer1_2.trim(),
      answerList.answer1_3.trim(),
      answerList.answer1_4.trim(),

      answerList.answer2_1.trim(),
      answerList.answer2_2.trim(),
      answerList.answer2_3.trim(),
      answerList.answer2_4.trim(),

      answerList.answer3_1.trim(),
      answerList.answer3_2.trim(),
      answerList.answer3_3.trim(),
      answerList.answer3_4.trim(),

      answerList.answer4_1.trim(),
      answerList.answer4_2.trim(),
      answerList.answer4_3.trim(),
      answerList.answer4_4.trim(),

      answerList.answer5_1.trim(),
      answerList.answer5_2.trim(),
      answerList.answer5_3.trim(),
      answerList.answer5_4.trim(),

      answerList.answer6_1.trim(),
      answerList.answer6_2.trim(),

      fileName[0],
      fileName[1],
      fileName[2],
      fileName[3],

      fileName[4],
      fileName[5],
      fileName[6],
      fileName[7],

      fileName[8],
      fileName[9],
      fileName[10],
      fileName[11],

      fileName[12],
      fileName[13],
      fileName[14],
      fileName[15],

      fileName[16],
      fileName[17],
      fileName[18],
      fileName[19],

      fileName[20],
      fileName[21],
      business_name,
    ],
    () => {}
  );
  db.query(sqlQuery2, [state, business_name], () => {});
  db.query(
    sqlQuery3,
    [state === "SCAN_C5" ? "SCAN_A5" : "SCAN_A2", business_name],
    () => {}
  );

  res.send("success");
});

// 세부스캔 답변 조회
app.get("/get/Scan_detail_qna_client", (req, res) => {
  const business_name = req.query.business_name;
  const sqlQuery =
    "SELECT * FROM scan_d_a WHERE BUSINESS_NAME ='" + business_name + "';";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 리포트 파일, as-is이슈, 키워드 작성
app.put("/put/Scan_report_writer", upload.single("file"), (req, res) => {
  const business_name = req.body.business_name;
  const writerList = JSON.parse(req.body.writerList);
  const state = req.body.state;
  const fileName = req.body.fileName;
  console.log(req.body);

  // 리포트
  const sqlQuery1 =
    "UPDATE scan_r SET AS_1_1=?, AS_1_2=?, AS_1_3=?, AS_1_4=?, AS_2_1=?, AS_2_2=?, AS_2_3=?, AS_2_4=?, AS_3_1=?, AS_3_2=?, AS_3_3=?, AS_3_4=?, AS_4_1=?, AS_4_2=?, AS_4_3=?, AS_4_4=?, AS_5_1=?, AS_5_2=?, AS_5_3=?, AS_5_4=?, AS_6_1=?, AS_6_2=?, KW_1_1=?,  KW_1_2=?,  KW_1_3=?,  KW_1_4=?, KW_2_1=?,  KW_2_2=?,  KW_2_3=?,  KW_2_4=?, KW_3_1=?,  KW_3_2=?,  KW_3_3=?,  KW_3_4=?, KW_4_1=?,  KW_4_2=?,  KW_4_3=?, KW_4_4=?, KW_5_1=?,  KW_5_2=?,  KW_5_3=?,  KW_5_4=?, KW_6_1=?,  KW_6_2=?, FILE_NAME=? where BUSINESS_NAME=?;";
  // 고객 상태
  const sqlQuery2 =
    state === "SCAN_C6"
      ? "UPDATE scan_all_client SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;"
      : state === "SCAN_A3"
      ? "UPDATE scan_all_client SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;"
      : "UPDATE scan_all_client SET STATE_ID=? where BUSINESS_NAME=?;";
  // 컨설턴트 상태
  const sqlQuery3 =
    "UPDATE scan_all_consultant SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";
  db.query(
    sqlQuery1,
    [
      writerList.as_is1_1,
      writerList.as_is1_2,
      writerList.as_is1_3,
      writerList.as_is1_4,

      writerList.as_is2_1,
      writerList.as_is2_2,
      writerList.as_is2_3,
      writerList.as_is2_4,

      writerList.as_is3_1,
      writerList.as_is3_2,
      writerList.as_is3_3,
      writerList.as_is3_4,

      writerList.as_is4_1,
      writerList.as_is4_2,
      writerList.as_is4_3,
      writerList.as_is4_4,

      writerList.as_is5_1,
      writerList.as_is5_2,
      writerList.as_is5_3,
      writerList.as_is5_4,

      writerList.as_is6_1,
      writerList.as_is6_2,

      writerList.keyword1_1,
      writerList.keyword1_2,
      writerList.keyword1_3,
      writerList.keyword1_4,

      writerList.keyword2_1,
      writerList.keyword2_2,
      writerList.keyword2_3,
      writerList.keyword2_4,

      writerList.keyword3_1,
      writerList.keyword3_2,
      writerList.keyword3_3,
      writerList.keyword3_4,

      writerList.keyword4_1,
      writerList.keyword4_2,
      writerList.keyword4_3,
      writerList.keyword4_4,

      writerList.keyword5_1,
      writerList.keyword5_2,
      writerList.keyword5_3,
      writerList.keyword5_4,

      writerList.keyword6_1,
      writerList.keyword6_2,
      fileName,
      business_name,
    ],
    () => {}
  );
  db.query(
    sqlQuery2,
    [state === "SCAN_A3" ? "SCAN_C5" : state, business_name],
    () => {}
  );
  db.query(
    sqlQuery3,
    [
      state === "SCAN_C6"
        ? "SCAN_A6"
        : state === "SCAN_A3"
        ? "SCAN_A3"
        : "SCAN_A5",
      business_name,
    ],
    () => {}
  );
  res.send("success");
});

// 리포트 파일, as-is이슈, 키워드 조회
app.get("/get/Scan_report_writer", (req, res) => {
  const business_name = req.query.business_name;
  const sqlQuery =
    "SELECT * FROM scan_r WHERE BUSINESS_NAME ='" + business_name + "';";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 세부스캔 II 질문 작성
app.put("/put/Scan_qna_2_write", (req, res) => {
  const business_name = req.body.business_name;
  const writerList = req.body.writerList;
  const questionList = req.body.questionList;
  const state = req.body.state;
  console.log(req.body);

  // 리포트
  const sqlQuery1 =
    "UPDATE scan_r SET AS_1_1=?, AS_1_2=?, AS_1_3=?, AS_1_4=?, AS_2_1=?, AS_2_2=?, AS_2_3=?, AS_2_4=?, AS_3_1=?, AS_3_2=?, AS_3_3=?, AS_3_4=?, AS_4_1=?, AS_4_2=?, AS_4_3=?, AS_4_4=?, AS_5_1=?, AS_5_2=?, AS_5_3=?, AS_5_4=?, AS_6_1=?, AS_6_2=?, KW_1_1=?,  KW_1_2=?,  KW_1_3=?,  KW_1_4=?, KW_2_1=?,  KW_2_2=?,  KW_2_3=?,  KW_2_4=?, KW_3_1=?,  KW_3_2=?,  KW_3_3=?,  KW_3_4=?, KW_4_1=?,  KW_4_2=?,  KW_4_3=?, KW_4_4=?, KW_5_1=?,  KW_5_2=?,  KW_5_3=?,  KW_5_4=?, KW_6_1=?,  KW_6_2=? where BUSINESS_NAME=?;";

  //  세부질문 II
  const sqlQuery2 =
    "UPDATE scan_d_q2 SET 1_1_1=?, 1_1_2=?, 1_1_3=?, 1_1_4=?, 1_1_5=?, 1_2_1=?, 1_2_2=?, 1_2_3=?, 1_2_4=?, 1_2_5=?, 1_3_1=?, 1_3_2=?, 1_3_3=?, 1_3_4=?, 1_3_5=?, 1_4_1=?, 1_4_2=?, 1_4_3=?, 1_4_4=?, 1_4_5=?, 2_1_1=?, 2_1_2=?, 2_1_3=?, 2_1_4=?, 2_1_5=?, 2_2_1=?, 2_2_2=?, 2_2_3=?, 2_2_4=?, 2_2_5=?, 2_3_1=?, 2_3_2=?, 2_3_3=?, 2_3_4=?, 2_3_5=?, 2_4_1=?, 2_4_2=?, 2_4_3=?, 2_4_4=?, 2_4_5=?, 3_1_1=?, 3_1_2=?, 3_1_3=?, 3_1_4=?, 3_1_5=?, 3_2_1=?, 3_2_2=?, 3_2_3=?, 3_2_4=?, 3_2_5=?, 3_3_1=?, 3_3_2=?, 3_3_3=?, 3_3_4=?, 3_3_5=?, 3_4_1=?, 3_4_2=?, 3_4_3=?, 3_4_4=?, 3_4_5=?, 4_1_1=?, 4_1_2=?, 4_1_3=?, 4_1_4=?, 4_1_5=?, 4_2_1=?, 4_2_2=?, 4_2_3=?, 4_2_4=?, 4_2_5=?, 4_3_1=?, 4_3_2=?, 4_3_3=?, 4_3_4=?, 4_3_5=?, 4_4_1=?, 4_4_2=?, 4_4_3=?, 4_4_4=?, 4_4_5=?, 5_1_1=?, 5_1_2=?, 5_1_3=?, 5_1_4=?, 5_1_5=?, 5_2_1=?, 5_2_2=?, 5_2_3=?, 5_2_4=?, 5_2_5=?, 5_3_1=?, 5_3_2=?, 5_3_3=?, 5_3_4=?, 5_3_5=?, 5_4_1=?, 5_4_2=?, 5_4_3=?, 5_4_4=?, 5_4_5=?,    6_1_1=?, 6_1_2=?, 6_1_3=?, 6_1_4=?, 6_1_5=?, 6_2_1=?, 6_2_2=?, 6_2_3=?, 6_2_4=?, 6_2_5=?  where BUSINESS_NAME=?;";

  // 고객 상태
  const sqlQuery3 =
    state === "SCAN_A4"
      ? "UPDATE scan_all_client SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;"
      : "UPDATE scan_all_client SET STATE_ID=? where BUSINESS_NAME=?;";

  // 컨설턴트 상태
  const sqlQuery4 =
    "UPDATE scan_all_consultant SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";

  db.query(
    sqlQuery1,
    [
      writerList.as_is1_1,
      writerList.as_is1_2,
      writerList.as_is1_3,
      writerList.as_is1_4,

      writerList.as_is2_1,
      writerList.as_is2_2,
      writerList.as_is2_3,
      writerList.as_is2_4,

      writerList.as_is3_1,
      writerList.as_is3_2,
      writerList.as_is3_3,
      writerList.as_is3_4,

      writerList.as_is4_1,
      writerList.as_is4_2,
      writerList.as_is4_3,
      writerList.as_is4_4,

      writerList.as_is5_1,
      writerList.as_is5_2,
      writerList.as_is5_3,
      writerList.as_is5_4,

      writerList.as_is6_1,
      writerList.as_is6_2,

      writerList.keyword1_1,
      writerList.keyword1_2,
      writerList.keyword1_3,
      writerList.keyword1_4,

      writerList.keyword2_1,
      writerList.keyword2_2,
      writerList.keyword2_3,
      writerList.keyword2_4,

      writerList.keyword3_1,
      writerList.keyword3_2,
      writerList.keyword3_3,
      writerList.keyword3_4,

      writerList.keyword4_1,
      writerList.keyword4_2,
      writerList.keyword4_3,
      writerList.keyword4_4,

      writerList.keyword5_1,
      writerList.keyword5_2,
      writerList.keyword5_3,
      writerList.keyword5_4,

      writerList.keyword6_1,
      writerList.keyword6_2,
      business_name,
    ],
    () => {}
  );
  db.query(
    sqlQuery2,
    [
      //
      questionList.question1_1_1,
      questionList.question1_1_2,
      questionList.question1_1_3,
      questionList.question1_1_4,
      questionList.question1_1_5,

      questionList.question1_2_1,
      questionList.question1_2_2,
      questionList.question1_2_3,
      questionList.question1_2_4,
      questionList.question1_2_5,

      questionList.question1_3_1,
      questionList.question1_3_2,
      questionList.question1_3_3,
      questionList.question1_3_4,
      questionList.question1_3_5,

      questionList.question1_4_1,
      questionList.question1_4_2,
      questionList.question1_4_3,
      questionList.question1_4_4,
      questionList.question1_4_5,
      //
      questionList.question2_1_1,
      questionList.question2_1_2,
      questionList.question2_1_3,
      questionList.question2_1_4,
      questionList.question2_1_5,

      questionList.question2_2_1,
      questionList.question2_2_2,
      questionList.question2_2_3,
      questionList.question2_2_4,
      questionList.question2_2_5,

      questionList.question2_3_1,
      questionList.question2_3_2,
      questionList.question2_3_3,
      questionList.question2_3_4,
      questionList.question2_3_5,

      questionList.question2_4_1,
      questionList.question2_4_2,
      questionList.question2_4_3,
      questionList.question2_4_4,
      questionList.question2_4_5,
      //
      questionList.question3_1_1,
      questionList.question3_1_2,
      questionList.question3_1_3,
      questionList.question3_1_4,
      questionList.question3_1_5,

      questionList.question3_2_1,
      questionList.question3_2_2,
      questionList.question3_2_3,
      questionList.question3_2_4,
      questionList.question3_2_5,

      questionList.question3_3_1,
      questionList.question3_3_2,
      questionList.question3_3_3,
      questionList.question3_3_4,
      questionList.question3_3_5,

      questionList.question3_4_1,
      questionList.question3_4_2,
      questionList.question3_4_3,
      questionList.question3_4_4,
      questionList.question3_4_5,
      //
      questionList.question4_1_1,
      questionList.question4_1_2,
      questionList.question4_1_3,
      questionList.question4_1_4,
      questionList.question4_1_5,

      questionList.question4_2_1,
      questionList.question4_2_2,
      questionList.question4_2_3,
      questionList.question4_2_4,
      questionList.question4_2_5,

      questionList.question4_3_1,
      questionList.question4_3_2,
      questionList.question4_3_3,
      questionList.question4_3_4,
      questionList.question4_3_5,

      questionList.question4_4_1,
      questionList.question4_4_2,
      questionList.question4_4_3,
      questionList.question4_4_4,
      questionList.question4_4_5,
      //
      questionList.question5_1_1,
      questionList.question5_1_2,
      questionList.question5_1_3,
      questionList.question5_1_4,
      questionList.question5_1_5,

      questionList.question5_2_1,
      questionList.question5_2_2,
      questionList.question5_2_3,
      questionList.question5_2_4,
      questionList.question5_2_5,

      questionList.question5_3_1,
      questionList.question5_3_2,
      questionList.question5_3_3,
      questionList.question5_3_4,
      questionList.question5_3_5,

      questionList.question5_4_1,
      questionList.question5_4_2,
      questionList.question5_4_3,
      questionList.question5_4_4,
      questionList.question5_4_5,

      //
      questionList.question6_1_1,
      questionList.question6_1_2,
      questionList.question6_1_3,
      questionList.question6_1_4,
      questionList.question6_1_5,

      questionList.question6_2_1,
      questionList.question6_2_2,
      questionList.question6_2_3,
      questionList.question6_2_4,
      questionList.question6_2_5,
      business_name,
    ],
    (err) => {
      console.log(err);
    }
  );
  db.query(
    sqlQuery3,
    [state === "SCAN_A4" ? "SCAN_C4" : "SCAN_C5", business_name],
    () => {}
  );
  db.query(sqlQuery4, [state, business_name], () => {});
  res.send("success");
});

// 세부스캔 II 질문 조회
app.get("/get/Scan_qna_2_write", (req, res) => {
  const business_name = req.query.business_name;
  const sqlQuery =
    "SELECT * FROM scan_d_q2 WHERE BUSINESS_NAME ='" + business_name + "';";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 세부스캔 II 답변 작성
app.put("/put/Scan_detail_qna_2_client", (req, res) => {
  console.log("Scan_detail_qna_2_client");
  const business_name = req.body.business_name;
  const answerList2 = req.body.answerList2;
  const state = req.body.state;

  // 세부스캔 II 답변
  const sqlQuery1 =
    "UPDATE scan_d_a2 SET 1_1_1=?, 1_1_2=?, 1_1_3=?, 1_1_4=?, 1_1_5=?, 1_2_1=?, 1_2_2=?, 1_2_3=?, 1_2_4=?, 1_2_5=?, 1_3_1=?, 1_3_2=?, 1_3_3=?, 1_3_4=?, 1_3_5=?, 1_4_1=?, 1_4_2=?, 1_4_3=?, 1_4_4=?, 1_4_5=?, 2_1_1=?, 2_1_2=?, 2_1_3=?, 2_1_4=?, 2_1_5=?, 2_2_1=?, 2_2_2=?, 2_2_3=?, 2_2_4=?, 2_2_5=?, 2_3_1=?, 2_3_2=?, 2_3_3=?, 2_3_4=?, 2_3_5=?, 2_4_1=?, 2_4_2=?, 2_4_3=?, 2_4_4=?, 2_4_5=?, 3_1_1=?, 3_1_2=?, 3_1_3=?, 3_1_4=?, 3_1_5=?, 3_2_1=?, 3_2_2=?, 3_2_3=?, 3_2_4=?, 3_2_5=?, 3_3_1=?, 3_3_2=?, 3_3_3=?, 3_3_4=?, 3_3_5=?, 3_4_1=?, 3_4_2=?, 3_4_3=?, 3_4_4=?, 3_4_5=?, 4_1_1=?, 4_1_2=?, 4_1_3=?, 4_1_4=?, 4_1_5=?, 4_2_1=?, 4_2_2=?, 4_2_3=?, 4_2_4=?, 4_2_5=?, 4_3_1=?, 4_3_2=?, 4_3_3=?, 4_3_4=?, 4_3_5=?, 4_4_1=?, 4_4_2=?, 4_4_3=?, 4_4_4=?, 4_4_5=?, 5_1_1=?, 5_1_2=?, 5_1_3=?, 5_1_4=?, 5_1_5=?, 5_2_1=?, 5_2_2=?, 5_2_3=?, 5_2_4=?, 5_2_5=?, 5_3_1=?, 5_3_2=?, 5_3_3=?, 5_3_4=?, 5_3_5=?, 5_4_1=?, 5_4_2=?, 5_4_3=?, 5_4_4=?, 5_4_5=?,    6_1_1=?, 6_1_2=?, 6_1_3=?, 6_1_4=?, 6_1_5=?, 6_2_1=?, 6_2_2=?, 6_2_3=?, 6_2_4=?, 6_2_5=?  where BUSINESS_NAME=?;";
  // 고객 상태
  const sqlQuery2 =
    "UPDATE scan_all_client SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";

  // 컨설턴트 상태
  const sqlQuery3 =
    state === "SCAN_C5"
      ? "UPDATE scan_all_consultant SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;"
      : "UPDATE scan_all_consultant SET STATE_ID=? where BUSINESS_NAME=?;";

  db.query(
    sqlQuery1,
    [
      //
      answerList2.answer1_1_1.trim(),
      answerList2.answer1_1_2.trim(),
      answerList2.answer1_1_3.trim(),
      answerList2.answer1_1_4.trim(),
      answerList2.answer1_1_5.trim(),

      answerList2.answer1_2_1.trim(),
      answerList2.answer1_2_2.trim(),
      answerList2.answer1_2_3.trim(),
      answerList2.answer1_2_4.trim(),
      answerList2.answer1_2_5.trim(),

      answerList2.answer1_3_1.trim(),
      answerList2.answer1_3_2.trim(),
      answerList2.answer1_3_3.trim(),
      answerList2.answer1_3_4.trim(),
      answerList2.answer1_3_5.trim(),

      answerList2.answer1_4_1.trim(),
      answerList2.answer1_4_2.trim(),
      answerList2.answer1_4_3.trim(),
      answerList2.answer1_4_4.trim(),
      answerList2.answer1_4_5.trim(),

      //
      answerList2.answer2_1_1.trim(),
      answerList2.answer2_1_2.trim(),
      answerList2.answer2_1_3.trim(),
      answerList2.answer2_1_4.trim(),
      answerList2.answer2_1_5.trim(),

      answerList2.answer2_2_1.trim(),
      answerList2.answer2_2_2.trim(),
      answerList2.answer2_2_3.trim(),
      answerList2.answer2_2_4.trim(),
      answerList2.answer2_2_5.trim(),

      answerList2.answer2_3_1.trim(),
      answerList2.answer2_3_2.trim(),
      answerList2.answer2_3_3.trim(),
      answerList2.answer2_3_4.trim(),
      answerList2.answer2_3_5.trim(),

      answerList2.answer2_4_1.trim(),
      answerList2.answer2_4_2.trim(),
      answerList2.answer2_4_3.trim(),
      answerList2.answer2_4_4.trim(),
      answerList2.answer2_4_5.trim(),

      //
      answerList2.answer3_1_1.trim(),
      answerList2.answer3_1_2.trim(),
      answerList2.answer3_1_3.trim(),
      answerList2.answer3_1_4.trim(),
      answerList2.answer3_1_5.trim(),

      answerList2.answer3_2_1.trim(),
      answerList2.answer3_2_2.trim(),
      answerList2.answer3_2_3.trim(),
      answerList2.answer3_2_4.trim(),
      answerList2.answer3_2_5.trim(),

      answerList2.answer3_3_1.trim(),
      answerList2.answer3_3_2.trim(),
      answerList2.answer3_3_3.trim(),
      answerList2.answer3_3_4.trim(),
      answerList2.answer3_3_5.trim(),

      answerList2.answer3_4_1.trim(),
      answerList2.answer3_4_2.trim(),
      answerList2.answer3_4_3.trim(),
      answerList2.answer3_4_4.trim(),
      answerList2.answer3_4_5.trim(),

      //
      answerList2.answer4_1_1.trim(),
      answerList2.answer4_1_2.trim(),
      answerList2.answer4_1_3.trim(),
      answerList2.answer4_1_4.trim(),
      answerList2.answer4_1_5.trim(),

      answerList2.answer4_2_1.trim(),
      answerList2.answer4_2_2.trim(),
      answerList2.answer4_2_3.trim(),
      answerList2.answer4_2_4.trim(),
      answerList2.answer4_2_5.trim(),

      answerList2.answer4_3_1.trim(),
      answerList2.answer4_3_2.trim(),
      answerList2.answer4_3_3.trim(),
      answerList2.answer4_3_4.trim(),
      answerList2.answer4_3_5.trim(),

      answerList2.answer4_4_1.trim(),
      answerList2.answer4_4_2.trim(),
      answerList2.answer4_4_3.trim(),
      answerList2.answer4_4_4.trim(),
      answerList2.answer4_4_5.trim(),

      //
      answerList2.answer5_1_1.trim(),
      answerList2.answer5_1_2.trim(),
      answerList2.answer5_1_3.trim(),
      answerList2.answer5_1_4.trim(),
      answerList2.answer5_1_5.trim(),

      answerList2.answer5_2_1.trim(),
      answerList2.answer5_2_2.trim(),
      answerList2.answer5_2_3.trim(),
      answerList2.answer5_2_4.trim(),
      answerList2.answer5_2_5.trim(),

      answerList2.answer5_3_1.trim(),
      answerList2.answer5_3_2.trim(),
      answerList2.answer5_3_3.trim(),
      answerList2.answer5_3_4.trim(),
      answerList2.answer5_3_5.trim(),

      answerList2.answer5_4_1.trim(),
      answerList2.answer5_4_2.trim(),
      answerList2.answer5_4_3.trim(),
      answerList2.answer5_4_4.trim(),
      answerList2.answer5_4_5.trim(),

      //
      answerList2.answer6_1_1.trim(),
      answerList2.answer6_1_2.trim(),
      answerList2.answer6_1_3.trim(),
      answerList2.answer6_1_4.trim(),
      answerList2.answer6_1_5.trim(),

      answerList2.answer6_2_1.trim(),
      answerList2.answer6_2_2.trim(),
      answerList2.answer6_2_3.trim(),
      answerList2.answer6_2_4.trim(),
      answerList2.answer6_2_5.trim(),

      business_name,
    ],
    (err) => {
      console.log(err);
    }
  );
  db.query(sqlQuery2, [state, business_name], () => {});
  db.query(
    sqlQuery3,
    [state === "SCAN_C5" ? "SCAN_A5" : "SCAN_A4", business_name],
    () => {}
  );

  res.send("success");
});

// 세부스캔 II 답변 조회
app.get("/get/Scan_detail_qna_2_client", (req, res) => {
  const business_name = req.query.business_name;
  const sqlQuery =
    "SELECT * FROM scan_d_a2 WHERE BUSINESS_NAME ='" + business_name + "';";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

/* ---------------포커스--------------- */

// Home Focus 상태 개수
app.get("/get/Home_focus", (req, res) => {
  const name = req.query.name;
  if (name === "client") {
    const sqlQuery =
      "SELECT S.STATE_ID, S.STATE_NAME, IFNULL(C.CNT, 0) AS 'CNT' FROM state AS S LEFT OUTER JOIN (SELECT STATE_ID, COUNT(*) AS CNT FROM focus_all_client GROUP BY STATE_ID) AS C ON S.STATE_ID = C.STATE_ID WHERE S.STATE_ID='FOCUS_C1' or S.STATE_ID='FOCUS_C2' or S.STATE_ID='FOCUS_C3' or S.STATE_ID='FOCUS_C4' or S.STATE_ID='FOCUS_C5' or S.STATE_ID='FOCUS_C6' ORDER BY S.STATE_ID;";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  } else if (name === "writer") {
    const sqlQuery =
      "SELECT S.STATE_ID, S.STATE_NAME, IFNULL(C.CNT, 0) AS 'CNT' FROM state AS S LEFT OUTER JOIN (SELECT STATE_ID, COUNT(*) AS CNT FROM focus_all_consultant GROUP BY STATE_ID ) AS C ON S.STATE_ID = C.STATE_ID WHERE S.STATE_ID='FOCUS_A1' or S.STATE_ID='FOCUS_A2' or S.STATE_ID='FOCUS_A3' or S.STATE_ID='FOCUS_A4' or S.STATE_ID='FOCUS_A5' or S.STATE_ID='FOCUS_A6' ORDER BY S.STATE_ID;";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  } else {
    return false;
  }
});

// Focus 테이블에서 상태 클릭 시 폰트 굵기 0 으로 변경
app.put("/put/Focus_read", (req, res) => {
  const business_name = req.body.business_name;
  const key = req.body.key;

  if (key === "client") {
    const sqlQuery =
      "UPDATE focus_all_client SET FONT_BOLD=0 where BUSINESS_NAME=?;";
    db.query(sqlQuery, [business_name], (err, result) => {
      res.send("success");
    });
  }
  if (key === "writer") {
    const sqlQuery =
      "UPDATE focus_all_consultant SET FONT_BOLD=0 where BUSINESS_NAME=?;";
    db.query(sqlQuery, [business_name], (err, result) => {
      res.send("success");
    });
  }
});

// Focus 모든 테이블 조회
app.get("/get/Focus_table", (req, res) => {
  const key = req.query.key;
  // all_writer report_writer
  if (key === "all_client") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD , STATE_NAME, QUESTION_TYPE FROM state S, focus_all_client C WHERE S.STATE_ID = C.STATE_ID;";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  } else if (key === "detail_client") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD, STATE_NAME , QUESTION_TYPE FROM state INNER JOIN focus_all_client ON state.STATE_ID = focus_all_client.STATE_ID WHERE focus_all_client.STATE_ID='FOCUS_C1' or focus_all_client.STATE_ID='FOCUS_C2' or focus_all_client.STATE_ID='FOCUS_C3' or focus_all_client.STATE_ID='FOCUS_C4' or focus_all_client.STATE_ID='FOCUS_C5';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  } else if (key === "report_client") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD, STATE_NAME , QUESTION_TYPE FROM state INNER JOIN focus_all_client ON state.STATE_ID = focus_all_client.STATE_ID WHERE focus_all_client.STATE_ID='FOCUS_C6';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  } else if (key === "all_writer") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD , STATE_NAME, QUESTION_TYPE, CLIENT_NAME FROM state S, focus_all_consultant C WHERE S.STATE_ID = C.STATE_ID and C.STATE_ID not like 'FOCUS_C1' and C.STATE_ID not like 'FOCUS_C2';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  } else if (key === "report_writer") {
    const sqlQuery =
      "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD, STATE_NAME, QUESTION_TYPE, CLIENT_NAME FROM state INNER JOIN focus_all_consultant ON state.STATE_ID = focus_all_consultant.STATE_ID WHERE focus_all_consultant.STATE_ID='FOCUS_A5' or focus_all_consultant.STATE_ID='FOCUS_A6';";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  }
});

// Focus 기본 포커스 답변 추가
app.post("/post/Focus_qna_client", upload.array("file"), (req, res) => {
  const business_name = JSON.parse(req.body.answerList).business_name;
  const answerList = JSON.parse(req.body.answerList);
  const state = req.body.state;
  const type = req.body.type;
  const fileName = req.body.fileName;

  const userName = req.body.userName;

  const now = nowDate();

  const sqlQuery1 =
    "INSERT INTO focus_all_client (BUSINESS_NAME, CREATED_DATE, STATE_ID, QUESTION_TYPE) values(?,?,?,?)";

  const sqlQuery2 =
    "INSERT INTO focus_all_consultant (BUSINESS_NAME, CREATED_DATE, STATE_ID, QUESTION_TYPE, CLIENT_NAME) values(?,?,?,?,?)";

  const sqlQuery4 = "INSERT INTO focus_r (BUSINESS_NAME) values(?)";
  const sqlQuery5 = "INSERT INTO focus_q2 (BUSINESS_NAME) values(?)";
  const sqlQuery6 = "INSERT INTO focus_a2 (BUSINESS_NAME) values(?)";
  db.query(sqlQuery1, [business_name, now, state, type], () => {});
  db.query(
    sqlQuery2,
    [
      business_name,
      now,
      state === "FOCUS_C3" ? "FOCUS_A5" : state,
      type,
      userName,
    ],
    () => {}
  );
  db.query(sqlQuery4, [business_name], () => {});
  db.query(sqlQuery5, [business_name], () => {});
  db.query(sqlQuery6, [business_name], () => {});
  if (type === "b") {
    const sqlQuery3 =
      "INSERT INTO focus_a (BUSINESS_NAME, QUESTION_TYPE, 1_1, 1_2, 1_3, 2_1, 2_2, 2_3, 2_4, 2_5, 2_6, 2_7, 2_8, 3_1, 3_2, 3_3, 3_4, 4_1, 4_2, F_1_1, F_1_2, F_1_3, F_2_1, F_2_2, F_2_3, F_2_4, F_2_5, F_2_6, F_2_7, F_2_8, F_3_1, F_3_2, F_3_3, F_3_4, F_4_1, F_4_2) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
    db.query(
      sqlQuery3,
      [
        business_name,
        type,
        answerList.answer1_1,
        answerList.answer1_2,
        answerList.answer1_3,

        answerList.answer2_1,
        answerList.answer2_2,
        answerList.answer2_3,
        answerList.answer2_4,
        answerList.answer2_5,
        answerList.answer2_6,
        answerList.answer2_7,
        answerList.answer2_8,

        answerList.answer3_1,
        answerList.answer3_2,
        answerList.answer3_3,
        answerList.answer3_4,

        answerList.answer4_1,
        answerList.answer4_2,

        fileName[0],
        fileName[1],
        fileName[2],

        fileName[3],
        fileName[4],
        fileName[5],
        fileName[6],
        fileName[7],
        fileName[8],
        fileName[9],
        fileName[10],

        fileName[11],
        fileName[12],
        fileName[13],
        fileName[14],

        fileName[15],
        fileName[16],
      ],
      () => {}
    );
  } else if (type === "p") {
    const sqlQuery3 =
      "INSERT INTO focus_a (BUSINESS_NAME, QUESTION_TYPE, 1_1, 1_2, 1_3, 1_4, 2_1, 2_2, 2_3, 2_4, 2_5, 3_1, 3_2, 3_3, 4_1, 4_2, F_1_1, F_1_2, F_1_3, F_1_4, F_2_1, F_2_2, F_2_3, F_2_4, F_2_5, F_3_1, F_3_2, F_3_3, F_4_1, F_4_2) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
    db.query(
      sqlQuery3,
      [
        business_name,
        type,
        answerList.answer1_1,
        answerList.answer1_2,
        answerList.answer1_3,
        answerList.answer1_4,

        answerList.answer2_1,
        answerList.answer2_2,
        answerList.answer2_3,
        answerList.answer2_4,
        answerList.answer2_5,

        answerList.answer3_1,
        answerList.answer3_2,
        answerList.answer3_3,

        answerList.answer4_1,
        answerList.answer4_2,

        fileName[0],
        fileName[1],
        fileName[2],
        fileName[3],

        fileName[4],
        fileName[5],
        fileName[6],
        fileName[7],
        fileName[8],

        fileName[9],
        fileName[10],
        fileName[11],

        fileName[12],
        fileName[13],
      ],
      () => {}
    );
  }
  res.send("success");
});

// Focus 기본 포커스 답변 수정
app.put("/put/Focus_qna_client", upload.array("file"), (req, res) => {
  const business_name = JSON.parse(req.body.answerList).business_name;
  const answerList = JSON.parse(req.body.answerList);
  const state = req.body.state;
  const type = req.body.type;
  const fileName = req.body.fileName;

  // 고객 상태
  const sqlQuery1 =
    "UPDATE focus_all_client SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";

  // 컨설턴트 상태
  const sqlQuery2 =
    "UPDATE focus_all_consultant SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";
  db.query(sqlQuery1, [state, business_name], () => {});
  db.query(
    sqlQuery2,
    [state === "FOCUS_C3" ? "FOCUS_A5" : state, business_name],
    () => {}
  );

  if (type === "b") {
    const sqlQuery3 =
      "UPDATE focus_a SET 1_1=?, 1_2=?, 1_3=?, 2_1=?, 2_2=?, 2_3=?, 2_4=?, 2_5=?, 2_6=?, 2_7=?, 2_8=?, 3_1=?, 3_2=?, 3_3=?, 3_4=?, 4_1=?, 4_2=?, F_1_1=?, F_1_2=?, F_1_3=?, F_2_1=?, F_2_2=?,  F_2_3=?,  F_2_4=?,  F_2_5=?,  F_2_6=?,  F_2_7=?, F_2_8=?, F_3_1=?, F_3_2=?, F_3_3=?, F_3_4=?, F_4_1=?, F_4_2=? where BUSINESS_NAME=?;";
    db.query(
      sqlQuery3,
      [
        answerList.answer1_1,
        answerList.answer1_2,
        answerList.answer1_3,

        answerList.answer2_1,
        answerList.answer2_2,
        answerList.answer2_3,
        answerList.answer2_4,
        answerList.answer2_5,
        answerList.answer2_6,
        answerList.answer2_7,
        answerList.answer2_8,

        answerList.answer3_1,
        answerList.answer3_2,
        answerList.answer3_3,
        answerList.answer3_4,

        answerList.answer4_1,
        answerList.answer4_2,

        fileName[0],
        fileName[1],
        fileName[2],

        fileName[3],
        fileName[4],
        fileName[5],
        fileName[6],
        fileName[7],
        fileName[8],
        fileName[9],
        fileName[10],

        fileName[11],
        fileName[12],
        fileName[13],
        fileName[14],

        fileName[15],
        fileName[16],

        business_name,
      ],
      () => {}
    );
  } else if ("p") {
    const sqlQuery3 =
      "UPDATE focus_a SET 1_1=?, 1_2=?, 1_3=?, 1_4=?, 2_1=?, 2_2=?, 2_3=?, 2_4=?, 2_5=?, 3_1=?, 3_2=?, 3_3=?, 4_1=?, 4_2=?, F_1_1=?, F_1_2=?, F_1_3=?, F_1_4=?, F_2_1=?, F_2_2=?,  F_2_3=?,  F_2_4=?,  F_2_5=?, F_3_1=?, F_3_2=?, F_3_3=?, F_4_1=?, F_4_2=? where BUSINESS_NAME=?;";
    db.query(
      sqlQuery3,
      [
        answerList.answer1_1,
        answerList.answer1_2,
        answerList.answer1_3,
        answerList.answer1_4,

        answerList.answer2_1,
        answerList.answer2_2,
        answerList.answer2_3,
        answerList.answer2_4,
        answerList.answer2_5,

        answerList.answer3_1,
        answerList.answer3_2,
        answerList.answer3_3,

        answerList.answer4_1,
        answerList.answer4_2,

        fileName[0],
        fileName[1],
        fileName[2],
        fileName[3],

        fileName[4],
        fileName[5],
        fileName[6],
        fileName[7],
        fileName[8],

        fileName[9],
        fileName[10],
        fileName[11],

        fileName[12],
        fileName[13],

        business_name,
      ],
      () => {}
    );
  }

  res.send("success");
});

// Focus 테이블에서 삭제 시 해당 고객 삭제
app.delete("/delete/Focus_table", (req, res) => {
  const index = req.body.index;
  // 고객 스캔
  const sqlQuery1 =
    "DELETE FROM focus_all_client WHERE BUSINESS_NAME ='" + index + "';";
  // 컨설턴트 스캔
  const sqlQuery2 =
    "DELETE FROM focus_all_consultant WHERE BUSINESS_NAME ='" + index + "';";
  // 기본답변
  const sqlQuery3 = "DELETE FROM focus_a WHERE BUSINESS_NAME ='" + index + "';";

  // 리포트
  const sqlQuery4 = "DELETE FROM focus_r WHERE BUSINESS_NAME ='" + index + "';";

  // 추가질문
  const sqlQuery5 =
    "DELETE FROM focus_q2 WHERE BUSINESS_NAME ='" + index + "';";
  // 추가질문 답변
  const sqlQuery6 =
    "DELETE FROM focus_a2 WHERE BUSINESS_NAME ='" + index + "';";
  db.query(sqlQuery1, () => {});
  db.query(sqlQuery2, () => {});
  db.query(sqlQuery3, () => {});
  db.query(sqlQuery4, () => {});
  db.query(sqlQuery5, () => {});
  db.query(sqlQuery6, () => {});
  res.send("success!");
});

// Focus 기본 포커스 답변 조회

app.get("/get/Focus_qna_client", (req, res) => {
  const business_name = req.query.business_name;

  const sqlQuery =
    "SELECT * FROM focus_a WHERE BUSINESS_NAME ='" + business_name + "';";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 리포트 파일, as-is이슈, 키워드 조회
app.get("/get/Focus_report_writer", (req, res) => {
  const business_name = req.query.business_name;
  const sqlQuery =
    "SELECT * FROM focus_r WHERE BUSINESS_NAME ='" + business_name + "';";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 리포트 파일, as-is이슈, 키워드 작성
app.put("/put/Focus_report_writer", upload.single("file"), (req, res) => {
  const business_name = req.body.business_name;
  const writerList = JSON.parse(req.body.writerList);
  const state = req.body.state;
  const fileName = req.body.fileName;

  // 리포트
  const sqlQuery1 =
    "UPDATE focus_r SET AS_1_1=?, AS_1_2=?, AS_1_3=?, AS_1_4=?, AS_2_1=?, AS_2_2=?, AS_2_3=?, AS_2_4=?, AS_2_5=?, AS_2_6=?, AS_2_7=?, AS_2_8=?, AS_3_1=?, AS_3_2=?, AS_3_3=?, AS_3_4=? ,AS_4_1=?, AS_4_2=?, KW_1_1=?, KW_1_2=?, KW_1_3=?, KW_1_4=?, KW_2_1=?, KW_2_2=?, KW_2_3=?, KW_2_4=?, KW_2_5=?, KW_2_6=?, KW_2_7=?, KW_2_8=?, KW_3_1=?, KW_3_2=?, KW_3_3=?, KW_3_4=?, KW_4_1=?, KW_4_2=?, FILE_NAME=?   where BUSINESS_NAME=?;";

  // 고객 상태
  const sqlQuery2 =
    state === "FOCUS_C6"
      ? "UPDATE focus_all_client SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;"
      : "UPDATE focus_all_client SET STATE_ID=? where BUSINESS_NAME=?;";

  // 컨설턴트 상태
  const sqlQuery3 =
    "UPDATE focus_all_consultant SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";

  db.query(
    sqlQuery1,
    [
      writerList.as_is1_1,
      writerList.as_is1_2,
      writerList.as_is1_3,
      writerList.as_is1_4,

      writerList.as_is2_1,
      writerList.as_is2_2,
      writerList.as_is2_3,
      writerList.as_is2_4,
      writerList.as_is2_5,
      writerList.as_is2_6,
      writerList.as_is2_7,
      writerList.as_is2_8,

      writerList.as_is3_1,
      writerList.as_is3_2,
      writerList.as_is3_3,
      writerList.as_is3_4,

      writerList.as_is4_1,
      writerList.as_is4_2,

      writerList.keyword1_1,
      writerList.keyword1_2,
      writerList.keyword1_3,
      writerList.keyword1_4,

      writerList.keyword2_1,
      writerList.keyword2_2,
      writerList.keyword2_3,
      writerList.keyword2_4,
      writerList.keyword2_5,
      writerList.keyword2_6,
      writerList.keyword2_7,
      writerList.keyword2_8,

      writerList.keyword3_1,
      writerList.keyword3_2,
      writerList.keyword3_3,
      writerList.keyword3_4,

      writerList.keyword4_1,
      writerList.keyword4_2,

      fileName,
      business_name,
    ],
    (err) => {
      console.log(err);
    }
  );

  db.query(
    sqlQuery2,
    [
      state === "FOCUS_A1" || state === "FOCUS_A3" ? "FOCUS_C3" : state,
      business_name,
    ],
    () => {}
  );
  db.query(
    sqlQuery3,
    [
      state === "FOCUS_C3"
        ? "FOCUS_A5"
        : state === "FOCUS_C6"
        ? "FOCUS_A6"
        : state,
      business_name,
    ],
    () => {}
  );
  res.send("success");
});

// 컨설턴트 상태 조회
app.get("/get/Focus_state", (req, res) => {
  const business_name = req.query.business_name;
  const sqlQuery =
    "SELECT BUSINESS_NAME, CREATED_DATE, FONT_BOLD , STATE_NAME, QUESTION_TYPE  FROM state S, focus_all_consultant C WHERE S.STATE_ID = C.STATE_ID and BUSINESS_NAME ='" +
    business_name +
    "';";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 추가 포커스 질문 작성
app.put("/put/Focus_qna_2_write", (req, res) => {
  const business_name = req.body.business_name;
  const writerList = req.body.writerList;
  const questionList = req.body.questionList;
  const state = req.body.state;
  // 고객 상태
  const sqlQuery1 =
    state === "FOCUS_A2" || state === "FOCUS_A4"
      ? "UPDATE focus_all_client SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;"
      : "UPDATE focus_all_client SET STATE_ID=? where BUSINESS_NAME=?;";
  // 컨설턴트 상태
  const sqlQuery2 =
    "UPDATE focus_all_consultant SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";

  // 리포트
  const sqlQuery3 =
    "UPDATE focus_r SET AS_1_1=?, AS_1_2=?, AS_1_3=?, AS_1_4=?, AS_2_1=?, AS_2_2=?, AS_2_3=?, AS_2_4=?, AS_2_5=?, AS_2_6=?, AS_2_7=?, AS_2_8=?, AS_3_1=?, AS_3_2=?, AS_3_3=?, AS_3_4=? ,AS_4_1=?, AS_4_2=?, KW_1_1=?, KW_1_2=?, KW_1_3=?, KW_1_4=?, KW_2_1=?, KW_2_2=?, KW_2_3=?, KW_2_4=?, KW_2_5=?, KW_2_6=?, KW_2_7=?, KW_2_8=?, KW_3_1=?, KW_3_2=?, KW_3_3=?, KW_3_4=?, KW_4_1=?, KW_4_2=? where BUSINESS_NAME=?;";
  // 추가포커스
  const sqlQuery4 =
    "UPDATE focus_q2 SET 1_1_1=?, 1_1_2=?, 1_1_3=?, 1_1_4=?, 1_1_5=?, 1_2_1=?, 1_2_2=?, 1_2_3=?, 1_2_4=?, 1_2_5=?, 1_3_1=?, 1_3_2=?, 1_3_3=?, 1_3_4=?, 1_3_5=?, 1_4_1=?, 1_4_2=?, 1_4_3=?, 1_4_4=?, 1_4_5=?, 2_1_1=?, 2_1_2=?, 2_1_3=?, 2_1_4=?, 2_1_5=?, 2_2_1=?, 2_2_2=?, 2_2_3=?, 2_2_4=?, 2_2_5=?, 2_3_1=?, 2_3_2=?, 2_3_3=?, 2_3_4=?, 2_3_5=?, 2_4_1=?, 2_4_2=?, 2_4_3=?, 2_4_4=?, 2_4_5=?, 2_5_1=?, 2_5_2=?, 2_5_3=?, 2_5_4=?, 2_5_5=?, 2_6_1=?, 2_6_2=?, 2_6_3=?, 2_6_4=?, 2_6_5=?, 2_7_1=?, 2_7_2=?, 2_7_3=?, 2_7_4=?, 2_7_5=?, 2_8_1=?, 2_8_2=?, 2_8_3=?, 2_8_4=?, 2_8_5=?, 3_1_1=?, 3_1_2=?, 3_1_3=?, 3_1_4=?, 3_1_5=?, 3_2_1=?, 3_2_2=?, 3_2_3=?, 3_2_4=?, 3_2_5=?, 3_3_1=?, 3_3_2=?, 3_3_3=?, 3_3_4=?, 3_3_5=?, 3_4_1=?, 3_4_2=?, 3_4_3=?, 3_4_4=?, 3_4_5=?, 4_1_1=?, 4_1_2=?, 4_1_3=?, 4_1_4=?, 4_1_5=?, 4_2_1=?, 4_2_2=?, 4_2_3=?, 4_2_4=?, 4_2_5=? where BUSINESS_NAME=?;";

  db.query(
    sqlQuery1,
    [
      state === "FOCUS_A2"
        ? "FOCUS_C4"
        : state === "FOCUS_A4"
        ? "FOCUS_C5"
        : "FOCUS_C3",
      business_name,
    ],
    () => {}
  );
  db.query(sqlQuery2, [state, business_name], () => {});
  db.query(
    sqlQuery3,
    [
      writerList.as_is1_1,
      writerList.as_is1_2,
      writerList.as_is1_3,
      writerList.as_is1_4,

      writerList.as_is2_1,
      writerList.as_is2_2,
      writerList.as_is2_3,
      writerList.as_is2_4,
      writerList.as_is2_5,
      writerList.as_is2_6,
      writerList.as_is2_7,
      writerList.as_is2_8,

      writerList.as_is3_1,
      writerList.as_is3_2,
      writerList.as_is3_3,
      writerList.as_is3_4,

      writerList.as_is4_1,
      writerList.as_is4_2,

      writerList.keyword1_1,
      writerList.keyword1_2,
      writerList.keyword1_3,
      writerList.keyword1_4,

      writerList.keyword2_1,
      writerList.keyword2_2,
      writerList.keyword2_3,
      writerList.keyword2_4,
      writerList.keyword2_5,
      writerList.keyword2_6,
      writerList.keyword2_7,
      writerList.keyword2_8,

      writerList.keyword3_1,
      writerList.keyword3_2,
      writerList.keyword3_3,
      writerList.keyword3_4,

      writerList.keyword4_1,
      writerList.keyword4_2,

      business_name,
    ],
    () => {}
  );
  db.query(
    sqlQuery4,
    [
      //
      questionList.question1_1_1,
      questionList.question1_1_2,
      questionList.question1_1_3,
      questionList.question1_1_4,
      questionList.question1_1_5,
      //
      questionList.question1_2_1,
      questionList.question1_2_2,
      questionList.question1_2_3,
      questionList.question1_2_4,
      questionList.question1_2_5,
      //
      questionList.question1_3_1,
      questionList.question1_3_2,
      questionList.question1_3_3,
      questionList.question1_3_4,
      questionList.question1_3_5,
      //
      questionList.question1_4_1,
      questionList.question1_4_2,
      questionList.question1_4_3,
      questionList.question1_4_4,
      questionList.question1_4_5,

      //
      questionList.question2_1_1,
      questionList.question2_1_2,
      questionList.question2_1_3,
      questionList.question2_1_4,
      questionList.question2_1_5,

      //
      questionList.question2_2_1,
      questionList.question2_2_2,
      questionList.question2_2_3,
      questionList.question2_2_4,
      questionList.question2_2_5,

      //
      questionList.question2_3_1,
      questionList.question2_3_2,
      questionList.question2_3_3,
      questionList.question2_3_4,
      questionList.question2_3_5,

      //
      questionList.question2_4_1,
      questionList.question2_4_2,
      questionList.question2_4_3,
      questionList.question2_4_4,
      questionList.question2_4_5,

      //
      questionList.question2_5_1,
      questionList.question2_5_2,
      questionList.question2_5_3,
      questionList.question2_5_4,
      questionList.question2_5_5,

      //
      questionList.question2_6_1,
      questionList.question2_6_2,
      questionList.question2_6_3,
      questionList.question2_6_4,
      questionList.question2_6_5,

      //
      questionList.question2_7_1,
      questionList.question2_7_2,
      questionList.question2_7_3,
      questionList.question2_7_4,
      questionList.question2_7_5,

      //
      questionList.question2_8_1,
      questionList.question2_8_2,
      questionList.question2_8_3,
      questionList.question2_8_4,
      questionList.question2_8_5,

      //
      questionList.question3_1_1,
      questionList.question3_1_2,
      questionList.question3_1_3,
      questionList.question3_1_4,
      questionList.question3_1_5,
      //
      questionList.question3_2_1,
      questionList.question3_2_2,
      questionList.question3_2_3,
      questionList.question3_2_4,
      questionList.question3_2_5,
      //
      questionList.question3_3_1,
      questionList.question3_3_2,
      questionList.question3_3_3,
      questionList.question3_3_4,
      questionList.question3_3_5,
      //
      questionList.question3_4_1,
      questionList.question3_4_2,
      questionList.question3_4_3,
      questionList.question3_4_4,
      questionList.question3_4_5,
      //
      questionList.question4_1_1,
      questionList.question4_1_2,
      questionList.question4_1_3,
      questionList.question4_1_4,
      questionList.question4_1_5,
      //
      questionList.question4_2_1,
      questionList.question4_2_2,
      questionList.question4_2_3,
      questionList.question4_2_4,
      questionList.question4_2_5,

      business_name,
    ],
    (err) => {
      console.log(err);
    }
  );
  res.send("success");
});

// 추가 포커스 질문 조회
app.get("/get/Focus_qna_2_write", (req, res) => {
  const business_name = req.query.business_name;
  const sqlQuery =
    "SELECT * FROM focus_q2 WHERE BUSINESS_NAME ='" + business_name + "';";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 추가 포커스 답변 작성
app.put("/put/Focus_qna_2_client", (req, res) => {
  const business_name = req.body.business_name;
  const answerList2 = req.body.answerList2;
  const state = req.body.state;

  // 고객 상태
  const sqlQuery1 =
    "UPDATE focus_all_client SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;";

  // 컨설턴트 상태
  const sqlQuery2 =
    state === "FOCUS_C3"
      ? "UPDATE focus_all_consultant SET FONT_BOLD=1, STATE_ID=? where BUSINESS_NAME=?;"
      : "UPDATE focus_all_consultant SET STATE_ID=? where BUSINESS_NAME=?;";

  // 추가포커스 답변
  const sqlQuery3 =
    "UPDATE focus_a2 SET 1_1_1=?, 1_1_2=?, 1_1_3=?, 1_1_4=?, 1_1_5=?, 1_2_1=?, 1_2_2=?, 1_2_3=?, 1_2_4=?, 1_2_5=?, 1_3_1=?, 1_3_2=?, 1_3_3=?, 1_3_4=?, 1_3_5=?, 1_4_1=?, 1_4_2=?, 1_4_3=?, 1_4_4=?, 1_4_5=?, 2_1_1=?, 2_1_2=?, 2_1_3=?, 2_1_4=?, 2_1_5=?, 2_2_1=?, 2_2_2=?, 2_2_3=?, 2_2_4=?, 2_2_5=?, 2_3_1=?, 2_3_2=?, 2_3_3=?, 2_3_4=?, 2_3_5=?, 2_4_1=?, 2_4_2=?, 2_4_3=?, 2_4_4=?, 2_4_5=?, 2_5_1=?, 2_5_2=?, 2_5_3=?, 2_5_4=?, 2_5_5=?, 2_6_1=?, 2_6_2=?, 2_6_3=?, 2_6_4=?, 2_6_5=?, 2_7_1=?, 2_7_2=?, 2_7_3=?, 2_7_4=?, 2_7_5=?, 2_8_1=?, 2_8_2=?, 2_8_3=?, 2_8_4=?, 2_8_5=?, 3_1_1=?, 3_1_2=?, 3_1_3=?, 3_1_4=?, 3_1_5=?, 3_2_1=?, 3_2_2=?, 3_2_3=?, 3_2_4=?, 3_2_5=?, 3_3_1=?, 3_3_2=?, 3_3_3=?, 3_3_4=?, 3_3_5=?, 3_4_1=?, 3_4_2=?, 3_4_3=?, 3_4_4=?, 3_4_5=?, 4_1_1=?, 4_1_2=?, 4_1_3=?, 4_1_4=?, 4_1_5=?, 4_2_1=?, 4_2_2=?, 4_2_3=?, 4_2_4=?, 4_2_5=? where BUSINESS_NAME=?;";

  db.query(sqlQuery1, [state, business_name], () => {});
  db.query(
    sqlQuery2,
    [
      state === "FOCUS_C4"
        ? "FOCUS_A2"
        : state === "FOCUS_C5"
        ? "FOCUS_A4"
        : "FOCUS_A5",
      business_name,
    ],
    () => {}
  );
  db.query(
    sqlQuery3,
    [
      //
      answerList2.answer1_1_1.trim(),
      answerList2.answer1_1_2.trim(),
      answerList2.answer1_1_3.trim(),
      answerList2.answer1_1_4.trim(),
      answerList2.answer1_1_5.trim(),
      //
      answerList2.answer1_2_1.trim(),
      answerList2.answer1_2_2.trim(),
      answerList2.answer1_2_3.trim(),
      answerList2.answer1_2_4.trim(),
      answerList2.answer1_2_5.trim(),
      //
      answerList2.answer1_3_1.trim(),
      answerList2.answer1_3_2.trim(),
      answerList2.answer1_3_3.trim(),
      answerList2.answer1_3_4.trim(),
      answerList2.answer1_3_5.trim(),
      //
      answerList2.answer1_4_1.trim(),
      answerList2.answer1_4_2.trim(),
      answerList2.answer1_4_3.trim(),
      answerList2.answer1_4_4.trim(),
      answerList2.answer1_4_5.trim(),

      //
      answerList2.answer2_1_1.trim(),
      answerList2.answer2_1_2.trim(),
      answerList2.answer2_1_3.trim(),
      answerList2.answer2_1_4.trim(),
      answerList2.answer2_1_5.trim(),

      //
      answerList2.answer2_2_1.trim(),
      answerList2.answer2_2_2.trim(),
      answerList2.answer2_2_3.trim(),
      answerList2.answer2_2_4.trim(),
      answerList2.answer2_2_5.trim(),

      //
      answerList2.answer2_3_1.trim(),
      answerList2.answer2_3_2.trim(),
      answerList2.answer2_3_3.trim(),
      answerList2.answer2_3_4.trim(),
      answerList2.answer2_3_5.trim(),

      //
      answerList2.answer2_4_1.trim(),
      answerList2.answer2_4_2.trim(),
      answerList2.answer2_4_3.trim(),
      answerList2.answer2_4_4.trim(),
      answerList2.answer2_4_5.trim(),

      //
      answerList2.answer2_5_1.trim(),
      answerList2.answer2_5_2.trim(),
      answerList2.answer2_5_3.trim(),
      answerList2.answer2_5_4.trim(),
      answerList2.answer2_5_5.trim(),

      //
      answerList2.answer2_6_1.trim(),
      answerList2.answer2_6_2.trim(),
      answerList2.answer2_6_3.trim(),
      answerList2.answer2_6_4.trim(),
      answerList2.answer2_6_5.trim(),

      //
      answerList2.answer2_7_1.trim(),
      answerList2.answer2_7_2.trim(),
      answerList2.answer2_7_3.trim(),
      answerList2.answer2_7_4.trim(),
      answerList2.answer2_7_5.trim(),

      //
      answerList2.answer2_8_1.trim(),
      answerList2.answer2_8_2.trim(),
      answerList2.answer2_8_3.trim(),
      answerList2.answer2_8_4.trim(),
      answerList2.answer2_8_5.trim(),

      //
      answerList2.answer3_1_1.trim(),
      answerList2.answer3_1_2.trim(),
      answerList2.answer3_1_3.trim(),
      answerList2.answer3_1_4.trim(),
      answerList2.answer3_1_5.trim(),
      //
      answerList2.answer3_2_1.trim(),
      answerList2.answer3_2_2.trim(),
      answerList2.answer3_2_3.trim(),
      answerList2.answer3_2_4.trim(),
      answerList2.answer3_2_5.trim(),
      //
      answerList2.answer3_3_1.trim(),
      answerList2.answer3_3_2.trim(),
      answerList2.answer3_3_3.trim(),
      answerList2.answer3_3_4.trim(),
      answerList2.answer3_3_5.trim(),
      //
      answerList2.answer3_4_1.trim(),
      answerList2.answer3_4_2.trim(),
      answerList2.answer3_4_3.trim(),
      answerList2.answer3_4_4.trim(),
      answerList2.answer3_4_5.trim(),
      //
      answerList2.answer4_1_1.trim(),
      answerList2.answer4_1_2.trim(),
      answerList2.answer4_1_3.trim(),
      answerList2.answer4_1_4.trim(),
      answerList2.answer4_1_5.trim(),
      //
      answerList2.answer4_2_1.trim(),
      answerList2.answer4_2_2.trim(),
      answerList2.answer4_2_3.trim(),
      answerList2.answer4_2_4.trim(),
      answerList2.answer4_2_5.trim(),

      business_name,
    ],
    (err) => {
      console.log(err);
    }
  );
  res.send("success");
});

// 추가 포커스 답변 조회
app.get("/get/Focus_qna_2_client", (req, res) => {
  const business_name = req.query.business_name;
  const sqlQuery =
    "SELECT * FROM focus_a2 WHERE BUSINESS_NAME ='" + business_name + "';";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

/*---------------크롤링---------------*/
app.get("/get/Crawling/news", (req, res) => {
  const searchKeyword = req.query.searchKeyword;
  console.log("검색어 : ", searchKeyword);
  let list = [];
  // 네이버
  const naverCrawling = () => {
    const getHtml = async (keyWord, pageNum) => {
      try {
        const html = (
          await axios.get(
            `https://search.naver.com/search.naver?where=news&sm=tab_pge&query=${encodeURI(
              keyWord
            )}&start=${pageNum}`
          )
        ).data;
        return html;
      } catch (error) {
        console.log(error);
      }
    };
    const parsing = async (page) => {
      const $ = cheerio.load(page);
      const news = [];
      const $newsList = $(".news_area");

      $newsList.each((idx, node) => {
        const Keyword = searchKeyword;
        const Title = $(node).find(".news_tit:eq(0)").text();
        const Content = $(node).find(".dsc_txt_wrap:eq(0)").text();
        const Url = $(node).find(".news_tit:eq(0)").attr("href");
        const Site = "naver.com";
        news.push({
          Keyword,
          Title,
          Content,
          Url,
          Site,
        });
      });
      return news;
    };
    const getNews = async (keyWord, pageNum) => {
      const html = await getHtml(keyWord, pageNum);
      const news = await parsing(html);
      // console.log(pageNum, " 페이지");
      list.push(news);
      return news;
    };
    const getFullNews = async () => {
      let news = [];
      let i = 1;
      let page = 5; //가져올 페이지 수
      while (i < page * 10 + 1) {
        const sendNews = await getNews(searchKeyword, i);
        news = news.concat(sendNews);
        i += 10;
      }
      // console.log("naver", news);
      console.log("naver 총 갯수 : ", news.length);
    };
    getFullNews();
  };
  //------구글------
  const googleCrawling = () => {
    const getHtml = async (keyWord) => {
      try {
        const html = (
          await axios.get(
            `https://news.google.com/search?q=${encodeURI(
              keyWord
            )}&hl=ko&gl=KR&ceid=KR%3Ako`
          )
        ).data;
        return html;
      } catch (error) {
        console.log(error);
      }
    };
    const parsing = async (page) => {
      const $ = cheerio.load(page);
      const news = [];
      const $newsList = $(".xrnccd");
      $newsList.each((idx, node) => {
        const Keyword = searchKeyword;
        const Title = $(node).find(".ipQwMb:eq(0)").text();
        const Content = $(node).find(".ipQwMb:eq(0)").text();
        // const Content = $(node).find(".GI74Re:eq(0)").text();
        const Url =
          "https://news.google.com" +
          $(node).find(".VDXfz:eq(0)").attr("href").substring(1);
        const Site = "googel.com";
        news.push({
          Keyword,
          Title,
          Content,
          Url,
          Site,
        });
      });
      return news;
    };
    const getNews = async (keyWord) => {
      const html = await getHtml(keyWord);
      const news = await parsing(html);
      // console.log("google", news.slice(0, 20));
      console.log("google 총 갯수 : ", news.length);
      list.push(news);
      res.send(list.flat(Infinity));
      return news;
    };
    getNews(searchKeyword);
  };
  naverCrawling();
  googleCrawling();
});

// 비밀번호 암호화
const bcrypt = require("bcrypt");
const saltRounds = 10;

/*---------------회원가입---------------*/
app.post("/post/signUp", (req, res) => {
  email = req.body.email;
  password = req.body.password;
  name = req.body.name;
  grade = "client";

  const sqlQuery1 = "select * from user where EMAIL=?;";
  db.query(sqlQuery1, [email], (err, result) => {
    if (result.length > 0) {
      console.log("이메일이 존재함");
      return res.send("n");
    } else {
      const sqlQuery2 =
        "INSERT INTO user (EMAIL, PASSWORD, NAME, GRADE) VALUES (?,?,?,?);";
      bcrypt.hash(password, saltRounds, (error, hash) => {
        password = hash;
        db.query(sqlQuery2, [email, password, name, grade], (err, result) => {
          if (result) {
            console.log("회원가입 성공");
            return res.send("t");
          } else {
            console.log("회원가입 실패");
            return res.send("f");
          }
        });
      });
    }
  });
});

/*---------------로그인---------------*/
app.post("/post/login", (req, res) => {
  email = req.body.email;
  password = req.body.password;

  const sqlQuery = "select * from user where EMAIL=?;";

  db.query(sqlQuery, [email], (err, row) => {
    if (row.length > 0) {
      bcrypt.compare(password, row[0].PASSWORD, (error, result) => {
        if (result) {
          console.log("로그인 성공");
          return res.send({
            msg: "t",
            email: row[0].EMAIL,
            name: row[0].NAME,
            grade: row[0].GRADE,
          });
        } else {
          console.log("비밀번호가 틀림");
          return res.send("f");
        }
      });
    } else {
      console.log("이메일이 존재하지 않음");
      return res.send("n");
    }
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
