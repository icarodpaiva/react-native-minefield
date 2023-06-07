import type { BoardField } from "../types/BoardField"

export const flagField = (
  board: BoardField[][],
  row: number,
  column: number
) => {
  const field = board[row][column]

  if (!field.opened) {
    field.flagged = !field.flagged
  }
}
