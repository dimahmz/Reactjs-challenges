import { ReactNode, useState } from "react";
import { createContext } from "react";

export const GameContext = createContext({
  score: 0,
  incrementScore: () => {},
});

export default function GameContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [score, setScore] = useState<number>(0);

  // increment
  function incrementScore(): void {
    setScore((value: number) => value + 1);
  }

  return (
    <GameContext.Provider
      value={{
        score,
        incrementScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
