import React from "react";
import { useState } from "react";

const Counter = () => {

  let click = () => setCount(count+1)

  const [count, setCount] = useState(0);
  
  return <div>
  <h1>{count}</h1>
    <button onClick={click}>Increment</button>
  </div>;
};

export default Counter;
