import { allowedTurns } from "./commons";

export const check = (gameMatrix: string[][]) => {
  // horizontal check
  for (const row of gameMatrix) {
    const symbol = row[0];
    if (symbol && row.every((entry) => entry === symbol)) {
      return symbol;
    }
  }
  // vertical check
  for (const col of [0, 1, 2]) {
    const symbol = gameMatrix?.[0]?.[col];
    if (symbol) {
      const column = [0, 1, 2].map((row) => gameMatrix?.[row]?.[col]);
      if (column.every((item) => item === symbol)) return symbol;
    }
  }

  // left diagonal check
  let symbol = gameMatrix[0][0];
  if (
    symbol &&
    [0, 1, 2]?.every((index) => gameMatrix[index][index] === symbol)
  ) {
    return symbol;
  }

  // right diagonal check
  symbol = gameMatrix[0][2];
  const allOccipied = gameMatrix.every((row) => row.every((col) => !!col));
  if (symbol) {
    let leftIndex = 2;
    let topIndex = 0;
    while (topIndex <= 2) {
      if (gameMatrix[topIndex][leftIndex] !== symbol) {
        if (!allOccipied) return "";
        return "tie";
      }
      leftIndex -= 1;
      topIndex += 1;
    }
  }
  return symbol;
};

export const getColorByTurn = (turn: string) => {
  if (turn === allowedTurns.X) return "accent";
  return "yellow-600";
};
