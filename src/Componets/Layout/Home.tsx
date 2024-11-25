import { CSSProperties } from "react";
import { LuMouse } from "react-icons/lu";

const Home = () => {
  const css: CSSProperties = {
    width: "100vw",
    height: "800px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "pre-line", // 줄 바꿈용 css
    textAlign: "center",

    backgroundColor: "#FFF9E8",
  };
  const fontcss: CSSProperties = {
    fontSize: "22px",
    color: "grey",
    marginTop: "-20px",
  };
  const titlecss: CSSProperties = {
    fontSize: "60px",
    color: "#0D7083",
    fontWeight: 900,
  };
  return (
    <div style={css}>
      <h1 style={titlecss}>YULIM {"\n"} PORTFOLIO</h1>
      <p style={fontcss}>Welcom To My Portfolio</p>
      <p style={{ marginTop: "80px", fontWeight: 600, color: "grey" }}>
        scroll down
      </p>
      <LuMouse style={{ fontSize: "40px", color: "grey" }} />
    </div>
  );
};

export default Home;
