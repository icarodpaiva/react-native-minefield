import type { BoardField } from "../types/BoardField"
import { allFields } from "./allFields"

export const flagsUsed = (board: BoardField[][]) => {
  return allFields(board).reduce(
    (acc, curr) => acc + curr.filter(field => field.flagged).length,
    0
  )
}
