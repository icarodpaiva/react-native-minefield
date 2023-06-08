import React, { useState } from "react"
import { View, StyleSheet, Alert } from "react-native"

import { LevelSelection } from "./src/screens/LevelSelection"
import { Header } from "./src/components/Header"
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

const rows = gameConfigs.getRowsAmount()
const columns = gameConfigs.getColumnsAmount()

const createInitialState = (minesAmount: number = 0) => ({
  board: createMinedBoard(rows, columns, minesAmount),
  won: false,
  lost: false
})

const App = () => {
  const [gameInfos, setGameInfos] = useState(createInitialState())
  const [minesOnBoard, setMinesOnBoard] = useState(0)
  const [showLevelSelection, setShowLevelSelection] = useState(true)

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

  const onLevelSelected = (difficultLevel: number) => {
    const minesAmount = Math.ceil(rows * columns * difficultLevel)

    setMinesOnBoard(minesAmount)
    setGameInfos(createInitialState(minesAmount))

    setShowLevelSelection(false)
  }

  return (
    <View style={styles.container}>
      <LevelSelection
        isVisible={showLevelSelection}
        onCancel={() => setShowLevelSelection(false)}
        onLevelSelected={onLevelSelected}
      />
      <Header
        flagsLeft={minesOnBoard - flagsUsed(gameInfos.board)}
        onFlagPress={() => setShowLevelSelection(true)}
        onNewGame={() => setShowLevelSelection(true)}
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
