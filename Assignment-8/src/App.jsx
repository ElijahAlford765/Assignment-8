import { useState } from "react";
import PlayerThrow from "./PlayerThrow.jsx";
import ComputerThrow from "./ComputerThrow.jsx";
import ResultDisplay from "./ResultDisplay.jsx";
import "./App.css";

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const handlePlayerSelect = (choice) => {
    setPlayerChoice(choice);
    setComputerChoice("");
  };

  return (
    <main>
      <h1>Rock Paper Scissors</h1>

      <PlayerThrow selected={playerChoice} onSelect={handlePlayerSelect} />

      <ComputerThrow
        playerChoice={playerChoice}
        onComplete={setComputerChoice}
      />

      <ResultDisplay
        player={playerChoice}
        computer={computerChoice}
      />
    </main>
  );
}

export default App;
