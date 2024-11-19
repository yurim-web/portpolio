import { CSSProperties } from "react";
import { LuMouse } from "react-icons/lu";

const Main1 = () => {
  const css: CSSProperties = {
    width: "100vw",
    height: "600px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "pre-line", // 줄 바꿈용 css
    textAlign: "center",
    // backgroundColor: "#FFE3E3",
    backgroundImage: "linear-gradient(-360deg, #FFFEFF 0%, #D7FFFE 100%)",
  };
  const fontcss: CSSProperties = {
    fontSize: "22px",
    color: "grey",
    marginTop: "-20px",
  };
  return (
    <div style={css}>
      <h1 style={{ fontSize: "60px" }}>YULIM {"\n"} PORTFOLIO</h1>
      <p style={fontcss}>Welcom To My Portfolio</p>
      <p style={{ marginTop: "80px", fontWeight: 600, color: "grey" }}>
        scroll down
      </p>
      <LuMouse style={{ fontSize: "40px", color: "grey" }} />
    </div>
  );
};

export default Main1;
