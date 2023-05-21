import { Dimensions } from "react-native"

export const gameConfigs = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRaio: 0.15, // top panel
  difficultLevel: 0.1,

  getColumnsAmount() {
    const width = Dimensions.get("window").width
    return Math.floor(width / this.blockSize)
  },

  getRowsAmount() {
    const totalHeight = Dimensions.get("window").height
    const boardHeight = totalHeight * (1 - this.headerRaio)
    return Math.floor(boardHeight / this.blockSize)
  }
}
