import React, { useState } from "react";

const CounterButton = (props) => {
  const [count, setCount] = useState(0);

  return (
    <button
      id="counter"
      color={props.color}
      onClick={() => setCount((count) => count + 1)}
    >
      Count: {count}
    </button>
  );
};

export default CounterButton;
