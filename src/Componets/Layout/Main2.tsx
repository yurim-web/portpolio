import { CSSProperties } from "react";

const Main2 = () => {
  const backcss: CSSProperties = {
    width: "100vw",
    height: "600px",

    display: "flex",
    flexDirection: "column",
    padding: "70px 0px",
    textAlign: "center",
    whiteSpace: "pre-line", // 줄 바꿈용 css

    // justifyContent: "center",
  };
  const titlecss = {
    color: "#FF8A8A ",
    fontSize: "60px",
    marginBottom: "10px",
  };
  const fontcss: CSSProperties = {
    fontWeight: 600,
    lineHeight: 1.7,
    fontSize: "17px",
  };
  return (
    <div style={backcss}>
      <h1 style={titlecss}>ABOUT</h1>
      <p style={fontcss}>
        새로운 도전과 학습을 통해 끊임없이 성장과 발전을 추구하는 {"\n"}
        신입 프론트엔드개발자 이유림입니다.
      </p>
    </div>
  );
};

export default Main2;
