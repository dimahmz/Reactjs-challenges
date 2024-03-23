import BoxColor from "./components/BoxColor";
import ChoisesBtns from "./components/ChoisesBtns";
import { useEffect, useState } from "react";
import generateColors from "./utils/randomColors";
import "./assets/styles/App.css";

function App() {
  const [colors, setColors] = useState<string[]>([]);
  const [correctColor, setCorrectColor] = useState<string>("");

  function setUpTheStates() {
    const { $colors, $correctColor } = generateColors(3);
    setColors($colors);
    setCorrectColor($correctColor);
  }

  useEffect(() => {
    setUpTheStates();
  }, []);

  return (
    <div className="wrapper">
      <div>
        <BoxColor color={correctColor} />
        <ChoisesBtns
          colors={colors}
          correctOne={correctColor}
          answerIsCorrect={() => setUpTheStates()}
        />
      </div>
    </div>
  );
}

export default App;
