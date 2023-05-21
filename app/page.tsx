"use client";

import Announcer from "@/components/Announcer";
import GameButton from "@/components/GameButton";
import ScoreBoard from "@/components/ScoreBoard";
import Square from "@/components/Square";
import { useEffect, useState } from "react";

export default function Home() {
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

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

  useEffect(() => {
    if (winner !== "") {
      if (winner === "X") {
        setXScore(xScore + 1);
      } else {
        setOScore(oScore + 1);
      }
    }
  }, [winner]);

  const resetScore = () => {
    setXScore(0);
    setOScore(0);
    handlePlayAgain();
  };

  const checkSquaresEmpty = () => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] !== "") {
        return false;
      }
    }
    return true;
  };

  const checkSquaresFull = () => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === "") {
        return false;
      }
    }
    return true;
  };

  const handleSquareClick = (index: number) => () => {
    if (squares[index] === "" && winner === "") {
      setSquares((prevSquares) => {
        const newSquares = [...prevSquares];
        newSquares[index] = player;
        return newSquares;
      });
    }
  };

  const checkForWinner = () => {
    for (let i = 0; i < winningCombos.length; i++) {
      const a = winningCombos[i][0];
      const b = winningCombos[i][1];
      const c = winningCombos[i][2];
      if (
        squares[a] !== "" &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]);
        return squares[a];
      } else {
        setPlayer(player === "X" ? "O" : "X");
      }
    }
    return null;
  };

  const handlePlayAgain = () => {
    setPlayer(player === "X" ? "O" : "X");
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setWinner("");
  };

  return (
    <main className="">
      <h1 className="flex items-center justify-center pt-8 text-5xl font-bold text-gray-600">
        Tic Tac Toe
      </h1>

      <ScoreBoard resetScore={resetScore} xScore={xScore} oScore={oScore} />

      <Announcer
        player={player}
        winner={winner}
        checkSquaresFull={checkSquaresFull}
      />

      {/* game board*/}
      <section className="pt-8">
        <div className="flex items-center justify-center">
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
        <div className="flex items-center justify-center">
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
        <div className="flex items-center justify-center">
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
        <div className="flex items-center justify-center pt-6">
          {!checkSquaresEmpty() && (
            <GameButton
              winner={winner}
              handlePlayAgain={handlePlayAgain}
              checkSquaresFull={checkSquaresFull}
            />
          )}
        </div>
      </section>
    </main>
  );
}
