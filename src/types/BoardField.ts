export interface BoardField {
  row: number
  column: number
  mined: boolean
  opened: boolean
  exploded: boolean
  flagged: boolean
  nearMines: number
}
