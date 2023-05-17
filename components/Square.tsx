import React from "react";

export default function Square({ value = "" }) {
  return (
    <div className="flex items-center justify-center w-5 h-5 m-1 bg-gray-500 ">
      {value}
    </div>
  );
}
