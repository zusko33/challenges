import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, isCode] = useState("?");

  const validCode = "🐡🐠🐋";

  const HandleClick = (code) => {
    if (code === "🐡") {
      isCode("🐡");
    } else if (code === "🐠") {
      isCode("🐠");
    } else {
      isCode("🐋");
    }
  };

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            HandleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            HandleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            HandleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          isCode("?");
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
