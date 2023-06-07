import type { BoardField } from "../types/BoardField"

export const cloneBoard = (board: BoardField[][]) => {
  return board.map(rows => rows.map(field => ({ ...field })))
}
