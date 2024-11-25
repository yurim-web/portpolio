import Keyvalue from "./Keyvalue";

type Nameboxprops = {
  title: string;
};

const Namebox = (props: Nameboxprops) => {
  const boxcss = {
    width: "100%",
  };
  const titlecss = {
    fontSize: "25px",
    color: "#0D7083 ",
    borderBottom: "2px solid #0D7083 ",
  };

  return (
    <div style={boxcss}>
      <h1 style={titlecss}>{props.title}</h1>
      <Keyvalue keytext="NAME" value="이유림" />
      <Keyvalue keytext="BIRTH" value="2000.11.04" />
      <Keyvalue keytext="PHONE" value="010.4054.5152" />
      <Keyvalue keytext="EMAIL" value="lyl5152@naver.com" />
    </div>
  );
};

export default Namebox;
