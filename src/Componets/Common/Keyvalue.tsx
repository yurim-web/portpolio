type Nameboxprops = {
  keytext: string;
  value: string;
};

const Keyvalue = (props: Nameboxprops) => {
  const valuecss = {
    display: "flex",
    alignItems: "center",
    marginBottom: "-15px",
  };

  const fontcss = {
    fontSize: "18px",
    fontWeight: 600,
    marginRight: "35px",
    color: "#0D7083 ",
  };
  return (
    <div style={valuecss}>
      <p style={fontcss}>{props.keytext}</p>
      <span>{props.value}</span>
    </div>
  );
};

export default Keyvalue;
