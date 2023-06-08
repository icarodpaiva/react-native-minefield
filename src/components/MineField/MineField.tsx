import React from "react"
import { View, StyleSheet } from "react-native"

import { Field } from "../Field"

import type { BoardField } from "../../types/BoardField"

interface MineFieldProps {
  board: BoardField[][]
  onPress: (row: number, column: number) => void
  onLongPress: (row: number, column: number) => void
}

export const MineField = ({ board, onPress, onLongPress }: MineFieldProps) => {
  return (
    <View style={styles.container}>
      {board.map(row => (
        <View key={row[0].row} style={{ flexDirection: "row" }}>
          {row.map(field => (
            <Field
              key={`${field.row}x${field.column}`}
              {...field}
              onPress={() => onPress(field.row, field.column)}
              onLongPress={() => onLongPress(field.row, field.column)}
            />
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE"
  }
})
