import React, { useState } from "react"
import { View, StyleSheet } from "react-native"

import { MineField } from "./src/components/MineField"

import { gameConfigs } from "./src/gameConfigs"
import { createMinedBoard } from "./src/utils/createMinedBoard"

const App = () => {
  const [gameInfos, setGameInfos] = useState(() => {
    const rows = gameConfigs.getRowsAmount()
    const columns = gameConfigs.getColumnsAmount()
    const minesAmount = Math.ceil(rows * columns * gameConfigs.difficultLevel)

    return {
      board: createMinedBoard(rows, columns, minesAmount)
    }
  })

  return (
    <View style={styles.container}>
      <MineField board={gameInfos.board} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA"
  }
})

export default App
