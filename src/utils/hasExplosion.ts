import type { BoardField } from "../types/BoardField"
import { allFields } from "./allFields"

export const hasExplosion = (board: BoardField[][]) => {
  return (
    allFields(board).filter(boardRow => boardRow.some(field => field.exploded))
      .length > 0
  )
}
