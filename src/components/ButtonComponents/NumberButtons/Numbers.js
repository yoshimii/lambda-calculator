import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import numbers from "./NumberButton"
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [num, numSet] = useState(0);
  return (
    <div className="button_container"> 
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       numbers.map((num)=> {

        console.log(num);
        

       })
       
       }

    </div>
  );
};

export default Numbers;