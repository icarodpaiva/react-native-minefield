import React from "react"
import { View, Text, StyleSheet } from "react-native"
import type { StyleProp, ViewStyle } from "react-native"

import { Mine } from "../Mine"
import { Flag } from "../Flag"

import { params } from "../../params"

interface FieldProps {
  opened?: boolean
  mined?: boolean
  nearMines?: number
  exploded?: boolean
  flagged?: boolean
}

export const Field = ({
  mined = false,
  opened = false,
  nearMines = 0,
  exploded = false,
  flagged = false
}: FieldProps) => {
  const styleField: StyleProp<ViewStyle> = [styles.field]

  if (opened) {
    styleField.push(styles.opened)
  }

  if (exploded) {
    styleField.push(styles.exploded)
  }

  if (flagged) {
    styleField.push(styles.flagged)
  }

  if (!opened && !exploded) {
    styleField.push(styles.regular)
  }

  const getColor = () => {
    if (nearMines <= 0) {
      return ""
    }

    if (nearMines === 1) {
      return "#2A28D7"
    }

    if (nearMines === 2) {
      return "#2B520F"
    }

    if (nearMines > 2 && nearMines < 6) {
      return "#F9060A"
    }

    if (nearMines >= 6) {
      return "#F221A9"
    }
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 && (
        <Text style={[styles.label, { color: getColor() }]}>{nearMines}</Text>
      )}

      {mined && opened && <Mine />}

      {flagged && !opened && <Flag />}
    </View>
  )
}

const styles = StyleSheet.create({
  field: {
    width: params.blockSize,
    height: params.blockSize,
    borderWidth: params.borderSize
  },
  regular: {
    backgroundColor: "#999",
    borderTopColor: "#cccc",
    borderRightColor: "#333",
    borderBottomColor: "#333",
    borderLeftColor: "#cccc"
  },
  opened: {
    backgroundColor: "#999",
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    fontWeight: "bold",
    fontSize: params.fontSize
  },
  exploded: {
    borderColor: "red",
    backgroundColor: "red"
  },
  flagged: {}
})
