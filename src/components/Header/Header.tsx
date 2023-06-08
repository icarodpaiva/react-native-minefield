import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { Flag } from "../Flag"

interface HeaderProps {
  flagsLeft: number
  onFlagPress: () => void
  onNewGame: () => void
}

export const Header = ({ flagsLeft, onFlagPress, onNewGame }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={onFlagPress} style={styles.flagButton}>
          <Flag isBigger />
        </TouchableOpacity>
        <Text style={styles.flagLeft}>{flagsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onNewGame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "space-around"
  },
  flagContainer: {
    flexDirection: "row"
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30
  },
  flagLeft: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 5,
    marginLeft: 20
  },
  button: {
    backgroundColor: "#999",
    padding: 5
  },
  buttonLabel: {
    fontSize: 20,
    color: "#DDD",
    fontWeight: "bold"
  }
})
