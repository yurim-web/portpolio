import { CSSProperties } from "react";

const Header = () => {
  const css: CSSProperties = {
    display: "flex",
    backgroundColor: "transparent",

    width: "100vw",
    height: "70px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 15px",
    zIndex: 9999,
    position: "fixed",
    top: "0px",

    padding: "0px 20px 0px 20px",
  };
  const headercss = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1040px",
    margin: "0 auto",
    alignItems: "center",
  };
  const menucss: CSSProperties = {
    gap: "30px",
    display: "flex",
  };
  return (
    <header style={css}>
      <article style={headercss}>
        <span style={{ fontSize: "20PX", fontWeight: 700 }}>🐰YU_LIM🐰</span>
        <div style={menucss}>
          <div>HOME</div>
          <div>ABOUT</div>
          <div>PROJECT</div>
          <div>SKILL</div>
        </div>
      </article>
    </header>
  );
};

export default Header;
