import { Dimensions } from "react-native"

export const gameConfigs = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRaio: 0.15, // top panel

  getColumnsAmount() {
    const { width } = Dimensions.get("window")
    return Math.floor(width / this.blockSize)
  },

  getRowsAmount() {
    const { height } = Dimensions.get("window")
    const boardHeight = height * (1 - this.headerRaio)
    return Math.floor(boardHeight / this.blockSize)
  }
}
