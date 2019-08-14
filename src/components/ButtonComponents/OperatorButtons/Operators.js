import React from "react";

//import any components needed
import OperatorsButton from "./OperatorButton";
//Import your array data to from the provided data file
import { operators } from "../../../data"

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [opState, setOpState] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
        
       {
         opState.map( item => {
           <OperatorButton operatorProp={item}/>
         })
       }
    </div>
  );
};

export default Operators;

// props.number === 0 ? btn-o : null