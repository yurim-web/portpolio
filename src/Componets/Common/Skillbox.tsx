import { CSSProperties } from "react";

type Skillboxprops={
    imgsrc:string;
}

const Skillbox = (props:Skillboxprops) => {

    const css:CSSProperties={
        backgroundColor:"white",
        width:"100%",
        height:"150px",
        borderRadius:"10px",
        justifyContent:"center",

    }
    return ( 
        <div style={css}><img style={{width:"100px",height:"100px"}}src={props.imgsrc} alt="" /></div>
     );
}
 
export default Skillbox;