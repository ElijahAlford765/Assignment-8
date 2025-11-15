import { useEffect, useState } from "react";
import "./ComputerThrow.css";

export default function ComputerThrow({ playerChoice, onComplete }) {
  const [currentImage, setCurrentImage] = useState("/images/question-mark.png");
  const throws = ["rock", "paper", "scissors"];

  useEffect(() => {
    if (!playerChoice) return;

    let count = 0;
    const shuffleInterval = setInterval(() => {
      const randomChoice = throws[Math.floor(Math.random() * 3)];
      setCurrentImage(`/images/${randomChoice}.png`);
      count++;

      if (count >= 6) {
        clearInterval(shuffleInterval);

        const finalChoice = throws[Math.floor(Math.random() * 3)];
        setCurrentImage(`/images/${finalChoice}.png`);

        onComplete(finalChoice);
      }
    }, 500);
  }, [playerChoice]);

  return (
    <section className="computer-container">
      <h2>Computer's Throw</h2>
      <img
        src={currentImage}
        alt="computer throw"
        className="computer-image"
      />
    </section>
  );
}

