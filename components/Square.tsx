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
      className={`flex items-center justify-center w-20 h-20 m-1 ${
        player !== "" ? "bg-gray-500" : "bg-gray-200"
      }`}
    >
      {player}
    </div>
  );
}
