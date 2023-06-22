import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>I am first</Button>
      <Button>2222222</Button>
      <Button>🌳</Button>
      <Button>last not least</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
