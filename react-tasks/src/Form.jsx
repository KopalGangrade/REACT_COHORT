import React, { useState } from "react";
// import { useState } from "react";

const Form = () => {

  const [input, setInput] = useState({FristName:"", LastName:"" });

  let handleChange=((e)=>{
    const {name,value} = e.target;
    setInput({...input,[name]:value});
  })

  let HandleSubmit = ((e)=>{
    e.preventDefault();
    console.log(input)
  })

  
  return <div>
    <form onSubmit={HandleSubmit}>
      <input type="text" name="FristName" value={input.FristName} onChange={handleChange}/>
      <input type="text" name="LastName" value={input.LastName} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
  </div>;
};

export default Form



