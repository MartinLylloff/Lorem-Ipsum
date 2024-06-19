import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [counter, setCounter] = useState(1);
  const [text, setText] = useState([]);

  const handleCounter = (e) => {
    setCounter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(counter);
    const newText = data.slice(0, amount);
    setText(newText);
  };

  return (
    <section className="section-center">
      <h4>Tired of boring Lorem Ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="">Paragraphs:</label>
        <input
          className="form-input"
          type="number"
          name="counter"
          id="counter"
          min={1}
          max={8}
          value={counter}
          onChange={handleCounter}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <article className="lorem-text">
        {text.map((t) => {
          const id = nanoid();
          return <p key={id}>{t}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
