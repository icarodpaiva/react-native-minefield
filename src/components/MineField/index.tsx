import React from "react"
import { View, StyleSheet } from "react-native"

import { Field } from "../Field"

import type { BoardField } from "../../types/BoardField"

interface MineFieldProps {
  board: BoardField[][]
}

export const MineField = ({ board }: MineFieldProps) => {
  return (
    <View style={styles.container}>
      {board.map(row => (
        <View key={row[0].row} style={{ flexDirection: "row" }}>
          {row.map(field => (
            <Field {...field} key={`${field.row}x${field.column}`} />
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
