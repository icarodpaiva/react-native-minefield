import type { BoardField } from "../types/BoardField"

export const allFields = (board: BoardField[][]) => {
  return ([] as BoardField[][]).concat(board)
}
