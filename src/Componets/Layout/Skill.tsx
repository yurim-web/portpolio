import { CSSProperties } from "react";
import Skillbox from "../Common/Skillbox";

const Skill = () => {
  const css: CSSProperties = {
    backgroundColor: "#FFEDBD",
    width: "100%",
    height: "600px",
    maxWidth: "1040px",
    margin: "0 auto",
    padding: "70px 0px",
  };
  return <article style={css}>
    <div style={{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"10px"}}>
    <Skillbox imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"/>
    <Skillbox imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"/>
    <Skillbox imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"/>
    <Skillbox imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"/>
    <Skillbox imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"/>
    <Skillbox imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"/>
    </div>
  </article>;
};

export default Skill;
