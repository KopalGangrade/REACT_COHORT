import React from "react";

const TeaDisplay = (props) => {

    // let Teas={
    //     name:"green tea",
    //     origin: "china",
    //     description: "It's good for health."
    // }

  return (
    <div>
        <h1>name: {props.name}</h1>
        <h2>origin: {props.origin}</h2>
        <p>description: {props.description}</p>
    </div>
  );
};

export default TeaDisplay;
