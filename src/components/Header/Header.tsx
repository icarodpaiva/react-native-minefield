import React from "react"
import { View, StyleSheet, Text, Pressable } from "react-native"
import { Flag } from "../Flag"

interface HeaderProps {
  flagsLeft: number
  onNewGame: () => void
}

export const Header = ({ flagsLeft, onNewGame }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.flag}>
        <Flag isBigger />
        <Text style={styles.flagLeft}>{flagsLeft}</Text>
      </View>
      <Pressable style={styles.button} onPress={onNewGame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#EEE"
  },
  flag: {
    flexDirection: "row"
  },
  flagLeft: {
    marginLeft: 30,
    fontSize: 30,
    fontWeight: "bold"
  },
  button: {
    padding: 5,
    backgroundColor: "#999"
  },
  buttonLabel: {
    color: "#DDD",
    fontSize: 20,
    fontWeight: "bold"
  }
})
