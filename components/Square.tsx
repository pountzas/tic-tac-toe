import { useEffect, useState } from "react";

export default function Square({
  value = "",
  disabled = false,
  click
}: {
  value: string;
  disabled: boolean;
  click: () => void;
}) {
  const [player, setPlayer] = useState("");

  useEffect(() => {
    setPlayer(value);
  }, [value]);

  return (
    <div
      onClick={() => !disabled && click()}
      className={`flex items-center justify-center w-20 h-20 m-1 rounded-xl text-4xl font-bold shadow-lg shadow-gray-300 ${
        player !== ""
          ? "bg-gray-400 hover:bg-red-700 hover:swadow-xs"
          : "hover:bg-gray-300 bg-gray-200"
      }`}
    >
      {player}
    </div>
  );
}
