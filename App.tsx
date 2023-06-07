import React, { useMemo, useState } from "react"
import { View, StyleSheet, Alert } from "react-native"

import { MineField } from "./src/components/MineField"

import { gameConfigs } from "./src/gameConfigs"
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExplosion,
  wonGame,
  showMines,
  flagField,
  flagsUsed
} from "./src/utils"
import { Header } from "./src/components/Header"

const App = () => {
  const rows = useMemo(() => gameConfigs.getRowsAmount(), [])
  const columns = useMemo(() => gameConfigs.getColumnsAmount(), [])

  const minesAmount = useMemo(
    () => Math.ceil(rows * columns * gameConfigs.difficultLevel),
    [rows, columns]
  )

  const [gameInfos, setGameInfos] = useState({
    board: createMinedBoard(rows, columns, minesAmount),
    won: false,
    lost: false
  })

  const onPress = (row: number, column: number) => {
    const board = cloneBoard(gameInfos.board)
    openField(board, row, column)

    const lost = hasExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert("Perdeu!", "Que pena!")
    }

    if (won) {
      Alert.alert("Parabéns!", "Você venceu!")
    }

    setGameInfos({ board, lost, won })
  }

  const onLongPress = (row: number, column: number) => {
    const board = cloneBoard(gameInfos.board)
    flagField(board, row, column)

    setGameInfos(prev => ({ ...prev, board }))
  }

  return (
    <View style={styles.container}>
      <Header
        flagsLeft={minesAmount - flagsUsed(gameInfos.board)}
        onFlagPress={() => {}}
        onNewGame={() => {}}
      />
      <MineField
        board={gameInfos.board}
        onPress={onPress}
        onLongPress={onLongPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
})

export default App
