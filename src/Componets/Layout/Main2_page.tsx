import { CSSProperties } from "react";
import Main2 from "./Main2";
import Main2_2 from "./Main2_2";

const Main2_page = () => {
  const css1: CSSProperties = {
    display: "flex",
    width: "100vw",
    maxWidth: "1040px",
    margin: "0 auto",
    padding: "70px 0px",
    gap: "10px",
  };
  return (
    <div style={css1}>
      <Main2 />
      <Main2_2 />
    </div>
  );
};

export default Main2_page;
