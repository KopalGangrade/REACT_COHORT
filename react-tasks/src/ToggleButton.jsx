import React from "react";
import { useState } from "react";

const ToggleButton = () => {

    const [button, setButton] = useState(false);
    
    // let toggleButton = ()=>{
    //     setButton(!button)
    // }
    
  return (
    <div>
        {button}
        <button className="btn" onClick={()=> setButton(!button)}>
            {button ? "on" : "off"}
        </button>
  </div>
  )
};

export default ToggleButton;
