import Square from "@/components/Square";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const squares = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: ""
  };

  return (
    <main>
      <h1>Tic Tac Toe</h1>
      {/* Announcer */}

      {/* game */}
      <div className="game">
        {Object.keys(squares).map((key) => {
          return (
            <div className="square" key={key}>
              <Square />
            </div>
          );
        })}
      </div>
    </main>
  );
}
