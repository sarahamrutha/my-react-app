import React from "react";
import "./App4.css";

export default function App4() {
  const handleSubmit = () => {
    alert("Hello World");
  };
  const handleSubmit1 = (name) => {
    alert(name);
  };
  return (
    <div>
      <h1>App4</h1>
      <h2>Event Handling</h2>
      <p>
        <button onClick={handleSubmit}>Submit</button>
        <hr/>
        <button onClick={() => handleSubmit1("John")}>Submit1</button>
      </p>
    </div>
  );
}