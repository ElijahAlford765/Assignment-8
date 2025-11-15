import "./ResultDisplay.css";

export default function ResultDisplay({ player, computer }) {
  if (!player || !computer) return null;

  const getResult = () => {
    if (player === computer) return "Tie!";
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "You Win!";
    }
    return "You Lose!";
  };

  return (
    <section className="result-container">
      <h2>Result</h2>
      <p className="result-text">{getResult()}</p>
    </section>
  );
}

