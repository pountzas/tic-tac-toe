import React from "react";

export default function GameButton({
  winner,
  checkSquaresFull,
  handlePlayAgain
}: {
  winner: string;
  checkSquaresFull: () => boolean;
  handlePlayAgain: () => void;
}) {
  return (
    <button
      onClick={handlePlayAgain}
      className={`px-4 py-2 mt-4 font-semibold text-white rounded-full ${
        winner === "" ? "bg-gray-400" : "bg-red-600"
      }`}
    >
      {winner !== "" || checkSquaresFull() ? "Play Again" : "Reset"}
    </button>
  );
}
