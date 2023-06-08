import React from "react"
import { View, StyleSheet } from "react-native"

interface FlagProps {
  isBigger?: boolean
}

export const Flag = ({ isBigger = false }: FlagProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.flagpole, isBigger && styles.flagpoleBigger]} />
      <View style={[styles.flag, isBigger && styles.flagBigger]} />
      <View style={[styles.base1, isBigger && styles.base1Bigger]} />
      <View style={[styles.base2, isBigger && styles.base2Bigger]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2
  },
  flagpole: {
    position: "absolute",
    width: 2,
    height: 14,
    backgroundColor: "#222",
    marginLeft: 9
  },
  flag: {
    position: "absolute",
    width: 6,
    height: 5,
    backgroundColor: "#f22",
    marginLeft: 3
  },
  base1: {
    position: "absolute",
    width: 6,
    height: 2,
    backgroundColor: "#222",
    marginTop: 10,
    marginLeft: 7
  },
  base2: {
    position: "absolute",
    width: 10,
    height: 2,
    backgroundColor: "#222",
    marginTop: 12,
    marginLeft: 5
  },
  flagpoleBigger: {
    width: 4,
    height: 28,
    marginLeft: 16
  },
  flagBigger: {
    width: 14,
    height: 10,
    marginLeft: 3
  },
  base1Bigger: {
    width: 12,
    height: 4,
    marginTop: 20,
    marginLeft: 12
  },
  base2Bigger: {
    width: 20,
    height: 4,
    marginTop: 24,
    marginLeft: 8
  }
})
