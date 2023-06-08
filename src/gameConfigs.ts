import { Dimensions } from "react-native"

export const gameConfigs = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRaio: 0.15, // top panel

  getColumnsAmount() {
    return Math.floor(Dimensions.get("window").width / this.blockSize)
  },

  getRowsAmount() {
    const boardHeight = Dimensions.get("window").height * (1 - this.headerRaio)
    return Math.floor(boardHeight / this.blockSize)
  }
}
