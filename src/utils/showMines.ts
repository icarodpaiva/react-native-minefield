import type { BoardField } from "../types/BoardField"
import { allFields } from "./allFields"

export const showMines = (board: BoardField[][]) => {
  const minedFields = allFields(board).map(boardRow =>
    boardRow.filter(field => field.mined)
  )

  minedFields.forEach(boardRow =>
    boardRow.forEach(field => (field.opened = true))
  )
}
