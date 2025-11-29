import React, {useState} from "react";

const Child1 = ({setSelectOption}) => {

    return(
        <div>
            <h2>Child Component 1</h2>
            <button onClick={()=>setSelectOption(1)}>Option 1</button>
        </div>
    )
}

export default Child1