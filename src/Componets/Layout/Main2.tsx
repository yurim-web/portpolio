import { CSSProperties } from "react";

const Main2 = () => {
  const backcss: CSSProperties = {
    width: "100vw",

    display: "flex",
    flexDirection: "column",

    whiteSpace: "pre-line", // 줄 바꿈용 css

    // justifyContent: "center",
  };
  const titlecss = {
    color: "#FF8A8A ",
    fontSize: "70px",
    marginBottom: "10px",
  };
  const fontcss: CSSProperties = {
    fontWeight: 600,
    lineHeight: 1.7,
    letterSpacing: -1,
    fontSize: "15px",
    marginTop: "-2px",
  };
  return (
    <div style={backcss}>
      <h1 style={titlecss}>PROFILE</h1>
      <p style={fontcss}>
        새로운 도전과 학습을 통해 끊임없이 성장과 발전을 추구하는 {"\n"}
        신입 프론트엔드개발자 이유림입니다.
      </p>
      <img
        style={{ width: "230px" }}
        src="https://img2.quasarzone.com/editor/2023/04/01/4b17ed80b19d1cfcc46f44be474995ef.jpg"
      ></img>
    </div>
  );
};

export default Main2;
