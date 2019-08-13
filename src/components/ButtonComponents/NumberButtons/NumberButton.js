import React from "react";
import Numbers from "./Numbers.js";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button
      // className="button"
      // onClick={() => props.numberFunction(Numbers.num)}
      >
      {/* //   {props.buttonValue} */}
      {props.num}
      </button>
      
      }
    </>
  );
};

export default NumberButton;