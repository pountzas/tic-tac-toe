import ClipLoader from "react-spinners/ClipLoader";

export default function ScoreBoard({
  xScore,
  oScore,
  resetScore
}: {
  xScore: number;
  oScore: number;
  resetScore: () => void;
}) {
  return (
    <div className="flex items-center justify-center pt-12 space-x-12">
      <div className="flex flex-col items-center space-y-2 font-bold text-gray-600">
        <p>Player O</p>
        <p>{oScore}</p>
      </div>
      <div className="flex items-center justify-center w-8 h-8">
        {(oScore > 0 || xScore > 0) && (
          <ClipLoader
            onClick={resetScore}
            loading={true}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </div>
      <div className="flex flex-col items-center space-y-2 font-bold text-gray-600">
        <p>Player X</p>
        <p>{xScore}</p>
      </div>
    </div>
  );
}
