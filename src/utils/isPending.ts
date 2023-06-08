import type { BoardField } from "../types/BoardField"

export const isPending = (field: BoardField) => {
  return (field.mined && !field.flagged) || (!field.mined && !field.opened)
}
