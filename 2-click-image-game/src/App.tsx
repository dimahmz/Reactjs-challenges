import GameGrid from "./components/GameGrid";
import ScoreBar from "./components/scoreBar";
import GameContextProvider from "./context/gameContext";
function App() {
  return (
    <GameContextProvider>
      <ScoreBar />
      <GameGrid />
    </GameContextProvider>
  );
}

export default App;
