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
      {console.log("rendered ", count)}
      <h1>Test App</h1>
      <h2>A small test app to show useEffect works</h2>
      <button onClick={() => setcount(count + 1)}>{"increment"}</button>
    </div>
  );
}
