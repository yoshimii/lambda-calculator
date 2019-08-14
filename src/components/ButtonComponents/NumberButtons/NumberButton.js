import React from "react";

const NumberButton = (props) => {
  console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      console.log(props)}
      <button className = {props.numberProp == 0 ? "number_button zero" : "number_button"}
      // className="number_button"
      onClick={() => props.setNumState(props.numState)}      
      >
      {props.numberProp} 
     </button>      
    </>
  );
};

export default NumberButton;

