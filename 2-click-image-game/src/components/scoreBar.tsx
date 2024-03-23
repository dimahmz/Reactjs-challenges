import { useContext } from "react";
import { GameContext } from "../context/gameContext";

function ScoreBar() {
  const { score } = useContext(GameContext);

  return (
    <>
      <h1>Score {score}</h1>
    </>
  );
}

export default ScoreBar;
