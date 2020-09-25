import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("effect called ", count);
    return () => {
      console.log("cleanedUp effect ", count);
    };
  }, [count]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setcount(count + 1)}>{"increment"}</button>
    </div>
  );
}
