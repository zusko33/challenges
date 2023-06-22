import "./form.css";

import Button from "./Button";

export default function Form() {
  return (
    <form className="App-form">
      <h2>NEW ENTRY</h2>
      <label for="motto-text">Motto:</label>
      <textarea rows="4" cols="50" id="motto-text"></textarea>
      <label for="note-text">Notes:</label>
      <textarea rows="10" cols="50" id="note-text"></textarea>
      <Button />
    </form>
  );
}
