import React from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native"
import type { StyleProp, ViewStyle } from "react-native"

import { Mine } from "../Mine"
import { Flag } from "../Flag"

import { gameConfigs } from "../../gameConfigs"

interface FieldProps {
  onPress: () => void
  onLongPress: () => void
  opened?: boolean
  mined?: boolean
  exploded?: boolean
  flagged?: boolean
  nearMines?: number
}

export const Field = ({
  onPress,
  onLongPress,
  mined = false,
  opened = false,
  exploded = false,
  flagged = false,
  nearMines = 0
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
    <TouchableWithoutFeedback onPress={onPress} onLongPress={onLongPress}>
      <View style={styleField}>
        {!mined && opened && nearMines > 0 && (
          <Text style={[styles.label, { color: getColor() }]}>{nearMines}</Text>
        )}

        {mined && opened && <Mine />}

        {flagged && !opened && <Flag />}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  field: {
    width: gameConfigs.blockSize,
    height: gameConfigs.blockSize,
    borderWidth: gameConfigs.borderSize
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
    fontSize: gameConfigs.fontSize
  },
  exploded: {
    borderColor: "red",
    backgroundColor: "red"
  },
  flagged: {}
})
