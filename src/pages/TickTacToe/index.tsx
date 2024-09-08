import { useState } from "react";
import {
  allowedTurns,
  defaultGame,
  defaultStartingTurn,
} from "./utils/commons";
import { getColorByTurn } from "./utils/helpers";
import { GrPowerReset } from "react-icons/gr";
interface ICardProps {
  currentTurn: string;
  value: string;
  color: string;
  updateGameArr: () => void;
}
const Card: React.FC<ICardProps> = ({
  currentTurn,
  value,
  updateGameArr,
  color,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      className={`bg-base-300 h-[120px] w-[120px] flex flex-col justify-center items-center font-extrabold text-7xl rounded-md shadow-lg transition-all duration-300 ease-in-out cursor-pointer ${
        !!value ? `text-${color}` : `hover:bg-accent} text-accent-content`
      }`}
      onClick={updateGameArr}
    >
      <div>{value ? value : isCardHovered ? currentTurn : ""}</div>
    </div>
  );
};

const TicTacToe = () => {
  const [currentTurn, setCurrentTurn] = useState(defaultStartingTurn);
  const [gameArr, setGameArr] = useState(defaultGame);
  const updateGameArr = (position: number[]) => {
    const [x, y] = position;
    if (!gameArr[x][y]) {
      setGameArr((previousState) => {
        const tempArr = [...previousState];
        tempArr[x][y] = currentTurn;
        return tempArr;
      });
      setCurrentTurn(
        currentTurn === allowedTurns.X ? allowedTurns.O : allowedTurns.X
      );
    }
  };

  const resetGame = () => {
    console.log("I am here");
    setGameArr(defaultGame);
  };
  return (
    <div>
      <div className="flex justify-between items-center p-4 rounded-md mb-4 text-2xl font-bold">
        <div className="flex gap-1">
          <span className="text-accent font-extrabold">X</span>
          <span className="text-yellow-600 font-extrabold">O</span>
        </div>
        <div
          className="bg-base-300 p-4 rounded-md text-lg
        "
        >
          Current:{" "}
          <span className={`text-${getColorByTurn(currentTurn)}`}>
            {currentTurn}
          </span>
        </div>
        <button className="btn btn-accent" onClick={resetGame}>
          <GrPowerReset size={24} />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {gameArr?.map((row, rowIndex) =>
          row?.map((col, colIndex) => (
            <Card
              key={`row-${rowIndex}-col-${colIndex}`}
              value={col}
              currentTurn={currentTurn}
              color={getColorByTurn(col || currentTurn)}
              updateGameArr={() => updateGameArr([rowIndex, colIndex])}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
