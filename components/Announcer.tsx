"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Announcer({
  winner,
  player,
  checkSquaresFull
}: {
  winner: string;
  player: string;
  checkSquaresFull: () => boolean;
}) {
  const [headerTitleArray, setHeaderTitleArray] = useState<string[]>([]);
  const [headerTitle, setHeaderTitle] = useState("");

  useEffect(() => {
    if (winner !== "") {
      setHeaderTitle(`Player ${winner} wins!`);
    } else {
      setHeaderTitle(`Player ${player}'s turn`);
    }
    setHeaderTitleArray(Array.from(headerTitle));
  }, []);

  useEffect(() => {
    setHeaderTitleArray(Array.from(headerTitle));
  }, [headerTitle]);

  useEffect(() => {
    setHeaderTitle("");

    setTimeout(() => {
      if (winner !== "") {
        setHeaderTitle(`Player ${winner} wins!`);
      } else {
        checkSquaresFull()
          ? setHeaderTitle("It's a tie!")
          : setHeaderTitle(`Player ${player}'s turn`);
      }
    }, 100);
  }, [player]);

  return (
    <div className="flex items-center justify-center h-8 pt-16">
      {headerTitleArray.map((letter, index) => {
        return (
          <motion.span
            initial={{ opacity: 0, y: -100, z: -500 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ delay: index * 0.05 }}
            key={index}
            className={`inline-block text-2xl font-bold ${
              winner === "" ? "text-gray-500" : "text-red-600"
            }`}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </div>
  );
}
