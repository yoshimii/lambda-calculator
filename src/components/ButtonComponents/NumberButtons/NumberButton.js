import React from "react";

const NumberButton = (props) => {
  console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button
      className="number_button"
      // onClick={() => props.setNumState(props.num)}
      >
     {props.numberProp}
      </button>
      
      }
    </>
  );
};

export default NumberButton;