import React from "react";

const Menu = (props) => {
    let food_menu={
            name: "dal batti",
            price: 240,
            description: "It's MP and Gujrati dish."
        }
  return (
    <div>
        {/* <h1>{food_menu.name}</h1> */}
        {/* <h2>{food_menu.price}</h2> */}
        {/* <p>{food_menu.description}</p> */}

        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <p>{props.description}</p>
    </div>
  )
};

export default Menu;
