import React from "react";
import "./styles.css";

export default function App() {
  return helloWorldArticle();
}

function helloWorldArticle() {
  let name = "you";
  return (
    <div>
      <h1>Hello, hello {name}!</h1>
      <p>
        this is my first <strong>React</strong> paragraph
      </p>
    </div>
  );
}
