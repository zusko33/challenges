import React from "react";
import "./styles.css";

export default function App() {
  const article = (
    <article className="article">
      <h2 className="article_title">first article</h2>
      <label htmlFor="article_input">here write your wish</label>
      <input id="article_input"></input>
      <a className="article_link" href="https://www.disney.de">
        wish link
      </a>
    </article>
  );
  return article;
}
