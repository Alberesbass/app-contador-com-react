import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Contador: {count}</h1>
      <div className="counter-buttons">
        <button className="counter-button" onClick={() => setCount(count + 1)}>
          Incrementar
        </button>
        <button className="counter-button" onClick={() => setCount(count - 1)}>
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default Counter;
