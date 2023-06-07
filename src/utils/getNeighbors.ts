import type { BoardField } from "../types/BoardField"

export const getNeighbors = (
  board: BoardField[][],
  row: number,
  column: number
) => {
  const neighbors: BoardField[] = []
  const neighborRows = [row - 1, row, row + 1]
  const neighborColumns = [column - 1, column, column + 1]

  neighborRows.forEach(neighborRow => {
    neighborColumns.forEach(neighborColumn => {
      const isDiff = neighborRow !== row || neighborColumn !== column
      const isValidRow = neighborRow >= 0 && neighborRow < board.length
      const isValidColumn =
        neighborColumn >= 0 && neighborColumn < board[0].length

      if (isDiff && isValidRow && isValidColumn) {
        neighbors.push(board[neighborRow][neighborColumn])
      }
    })
  })

  return neighbors
}
