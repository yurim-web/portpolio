import { CSSProperties } from "react";

const Imgbox = () => {
  const backcss: CSSProperties = {
    width: "40%",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#FFF9E8",
    whiteSpace: "pre-line", // 줄 바꿈용 css
  };
  const titlecss = {
    color: "#0D7083 ",
    fontSize: "60px",
    marginBottom: "10px",
  };

  const imgcss = {
    width: "230px",
    borderRadius: "999px",
  };
  return (
    <div style={backcss}>
      <h1 style={titlecss}>01 PROFILE</h1>
      {/* <p style={fontcss}>
        새로운 도전과 학습을 통해 끊임없이 성장과 발전을 추구하는 {"\n"}
        신입 프론트엔드개발자 이유림입니다.
      </p> */}
      <div
        style={{
          marginTop: "30px",
          width: "250px",

          borderRadius: "9999px",
          backgroundColor: "#0D7083 ",
        }}
      >
        <img
          style={imgcss}
          src="https://img2.quasarzone.com/editor/2023/04/01/4b17ed80b19d1cfcc46f44be474995ef.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Imgbox;
