import { createBoard } from "./createBoard"
import { spreadMines } from "./spreadMines"

export const createMinedBoard = (
  rows: number,
  columns: number,
  minesAmount: number
) => {
  const board = createBoard(rows, columns)
  spreadMines(board, minesAmount)

  return board
}
