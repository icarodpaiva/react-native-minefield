import { allFields } from "./allFields"
import { isPending } from "./isPending"
import type { BoardField } from "../types/BoardField"

export const wonGame = (board: BoardField[][]) => {
  return (
    allFields(board).filter(boardRow => boardRow.some(isPending)).length === 0
  )
}
