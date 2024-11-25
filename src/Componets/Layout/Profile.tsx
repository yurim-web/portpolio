import { CSSProperties } from "react";
import Imgbox from "../Common/Imgbox";
import Namebox from "../Common/Namebox";

const Profile = () => {
  const css1: CSSProperties = {
    display: "flex",
    width: "100%",
    height: "600px",
    maxWidth: "1040px",
    margin: "0 auto",
    padding: "70px 0px",
    gap: "10px",
  };
  const boxcss: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "70px",
    marginTop: "50px",
  };
  return (
    <div style={css1}>
      <Imgbox />
      <div style={boxcss}>
        <Namebox title="ABOUT ME" />
        <Namebox title="ABOUT ME" />
        <Namebox title="ABOUT ME" />
        <Namebox title="ABOUT ME" />
      </div>
    </div>
  );
};

export default Profile;
