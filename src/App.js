import "./App.css";
import { useState } from "react";

function App() {
  const [Count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(Count + 1);
        }}
      >
        +
      </button>
      <span>{Count}</span>
      <button
        onClick={() => {
          setCount(Count - 1);
        }}
      >
        -
      </button>
    </>
  );
}
export default App;
