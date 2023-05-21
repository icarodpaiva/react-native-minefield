import type { BoardField } from "../types/BoardField"

export const spreadMines = (board: BoardField[][], minesAmount: number) => {
  const rows = board.length
  const columns = board[0].length

  let minesPlanted = 0

  while (minesPlanted < minesAmount) {
    const rowSelected = parseInt(`${Math.random() * rows}`, 10)
    const columnsSelected = parseInt(`${Math.random() * columns}`, 10)

    if (!board[rowSelected][columnsSelected].mined) {
      board[rowSelected][columnsSelected].mined = true
      minesPlanted++
    }
  }
}
