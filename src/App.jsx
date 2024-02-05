import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const counterStartVal = counter;

  // let counter = 5;

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react </h1>
      <h2>
        Counter Value: {counter}, startVal {counterStartVal}
      </h2>

      <button onClick={addValue}>Add value {counter},</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
