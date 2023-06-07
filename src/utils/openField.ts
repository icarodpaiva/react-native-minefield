import { getNeighbors } from "./getNeighbors"
import type { BoardField } from "../types/BoardField"

export const openField = (
  board: BoardField[][],
  row: number,
  column: number
) => {
  const field = board[row][column]

  if (!field.opened) {
    field.opened = true

    if (field.mined) {
      field.exploded = true
    } else {
      const neighbors = getNeighbors(board, row, column)
      const minedNeighbors = neighbors.filter(neighbor => neighbor.mined)

      if (minedNeighbors.length === 0) {
        neighbors.forEach(neighbor =>
          openField(board, neighbor.row, neighbor.column)
        )
      } else {
        field.nearMines = minedNeighbors.length
      }
    }
  }
}
