import React from "react"
import { View, Text, StyleSheet } from "react-native"

import { Field } from "./src/components/Field/Field"

import { params } from "./src/params"

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={6} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center"
  }
})

export default App
