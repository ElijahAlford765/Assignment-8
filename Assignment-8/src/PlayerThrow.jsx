import "./PlayerThrow.css";

export default function PlayerThrow({ onSelect, selected }) {
  const throws = ["rock", "paper", "scissors"];

  return (
    <section className="player-container">
      <h2>Choose Your Throw</h2>
      <div className="player-options">
        {throws.map((t) => (
          <img
            key={t}
            src={`/images/${t}.png`}
            alt={t}
            className={`player-image ${selected === t ? "selected" : ""}`}
            onClick={() => onSelect(t)}
          />
        ))}
      </div>
    </section>
  );
}
