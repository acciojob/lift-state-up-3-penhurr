
import React, { useState } from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {

  let [selectOption, setSelectOption] = useState(null)

  return (
    <div className="parent">
      {/* Do not remove the main div */}

      <h1>Parent Component</h1>

      <Child1 setSelectOption={setSelectOption} />
      <Child2 setSelectOption={setSelectOption} />

      <p>
        Selected Option: {selectOption && (selectOption == 1 ? "Option 1" : "Option 2")}
      </p>

    </div>
  )
}

export default App
