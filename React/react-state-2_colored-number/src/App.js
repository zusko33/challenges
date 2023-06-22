import React from "react";
import "./styles.css";
import Counter from "./components/Counter";
import { useState } from "react";

export default function App() {
  const [value, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(value + 1);
  }
  function handleDecrement() {
    setCounter(value - 1);
  }
  return (
    <Counter
      value={value}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  );
}
