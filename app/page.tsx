"use client";

import Square from "@/components/Square";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const winningCombos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // top left to bottom right
    [2, 4, 6] // top right to bottom left
  ];

  const [squares, setSquares] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]);

  useEffect(() => {
    checkForWinner();
  }, [squares]);

  const handleSquareClick = (index: number) => () => {
    if (squares[index] === "" && winner === "") {
      setSquares((prevSquares) => {
        const newSquares = [...prevSquares];
        newSquares[index] = player;
        return newSquares;
      });
      // checkForWinner();
    }
    console.log(player);
  };

  const checkForWinner = () => {
    for (let i = 0; i < winningCombos.length; i++) {
      const a = winningCombos[i][0];
      const b = winningCombos[i][1];
      const c = winningCombos[i][2];
      console.log("check values", squares[a], squares[b], squares[c]);
      if (
        squares[a] !== "" &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]);
        console.log("winner ", squares[a]);
        return squares[a];
      } else {
        setPlayer(player === "X" ? "O" : "X");
      }
    }
    return null;
  };

  const handlePlayAgain = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setWinner("");
  };

  return (
    <main>
      <h1 className="text-4xl">Tic Tac Toe</h1>
      {/* Announcer */}

      {/* game board*/}
      <section>
        <div className="flex">
          <Square
            disabled={winner !== ""}
            value={squares[0]}
            click={handleSquareClick(0)}
          />
          <Square
            disabled={winner !== ""}
            value={squares[1]}
            click={handleSquareClick(1)}
          />
          <Square
            disabled={winner !== ""}
            value={squares[2]}
            click={handleSquareClick(2)}
          />
        </div>
        <div className="flex">
          <Square
            disabled={winner !== ""}
            value={squares[3]}
            click={handleSquareClick(3)}
          />
          <Square
            disabled={winner !== ""}
            value={squares[4]}
            click={handleSquareClick(4)}
          />
          <Square
            disabled={winner !== ""}
            value={squares[5]}
            click={handleSquareClick(5)}
          />
        </div>
        <div className="flex">
          <Square
            disabled={winner !== ""}
            value={squares[6]}
            click={handleSquareClick(6)}
          />
          <Square
            disabled={winner !== ""}
            value={squares[7]}
            click={handleSquareClick(7)}
          />
          <Square
            disabled={winner !== ""}
            value={squares[8]}
            click={handleSquareClick(8)}
          />
        </div>
        <button
          onClick={handlePlayAgain}
          className="px-2 py-1 mt-4 text-white bg-red-700 rounded-full"
        >
          Play Again
        </button>
      </section>
    </main>
  );
}
