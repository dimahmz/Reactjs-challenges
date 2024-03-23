import { useState } from "react";
import "../assets/styles/ChoisesBtns.css";

// props checking
interface props {
  colors: string[];
  correctOne: string;
  answerIsCorrect: VoidFunction;
}

// answer styles
const validAnswerStyle = {
  color: "green",
};
const inValidAnswerStyle = {
  color: "red",
};

//my component

function ChoisesBtns({ colors, correctOne, answerIsCorrect }: props) {
  // states
  const [message, setMessage] = useState("");
  const [style, setStyle] = useState({});

  // check the clicked answer
  function checkAnswer(selectedColor: string): void {
    if (selectedColor == correctOne) {
      setMessage("Correct answer!");
      setStyle({ ...validAnswerStyle });
      answerIsCorrect();
    } else {
      setMessage("Worng answer!");
      setStyle({ ...inValidAnswerStyle });
    }
  }

  return (
    <>
      <div className="btns-container">
        {colors.map((color, i) => (
          <button onClick={() => checkAnswer(color)} key={i}>
            {color}
          </button>
        ))}
      </div>
      {message && <p style={{ textAlign: "center", ...style }}> {message}</p>}
    </>
  );
}

export default ChoisesBtns;
