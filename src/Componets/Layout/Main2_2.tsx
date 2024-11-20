const Main2_2 = () => {
  const css = {
    width: "500px",
  };
  return (
    <div style={css}>
      <h1 style={{ fontSize: "23px", color: "#FF8A8A " }}>ABOUT ME</h1>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "-15px" }}
      >
        <p style={{ fontSize: "18px", fontWeight: 600, marginRight: "35px" }}>
          NAME
        </p>
        <span>이유림 / Lee Yu RIM</span>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "-15px" }}
      >
        <p style={{ fontSize: "18px", fontWeight: 600, marginRight: "35px" }}>
          BIRTH
        </p>
        <span>2000.11.04</span>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "-15px" }}
      >
        <p style={{ fontSize: "18px", fontWeight: 600, marginRight: "35px" }}>
          PHONE
        </p>
        <span>010.4054.5152</span>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "-15px" }}
      >
        <p style={{ fontSize: "18px", fontWeight: 600, marginRight: "35px" }}>
          EMAIL
        </p>
        <span>lyl5152@naver.com</span>
      </div>
    </div>
  );
};

export default Main2_2;
