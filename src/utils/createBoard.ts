import type { BoardField } from "../types/BoardField"

export const createBoard = (rows: number, columns: number): BoardField[][] => {
  return Array(rows)
    .fill(null)
    .map((_, row) =>
      Array(columns)
        .fill(null)
        .map((_, column) => ({
          row,
          column,
          mined: false,
          opened: false,
          exploded: false,
          flagged: false,
          nearMines: 0
        }))
    )
}
