// TODO: счётчик с useState — кнопки +1/-1, отображение значения

import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((count) => (count += 1));
  const decrease = () => setCounter((count) => (count = -1));

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100wv",
      }}
    >
      <button
        onClick={increase}
        style={{
          background: "grey",
          padding: "4px 10px ",
        }}
      >
        +
      </button>
      <h1>{counter}</h1>
      <button
        onClick={decrease}
        style={{
          background: "grey",
          padding: "4px 10px ",
        }}
      >
        -
      </button>
    </div>
  );
}
