import React from "react"
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native"

interface LevelSelectionProps {
  isVisible: boolean
  onCancel: () => void
  onLevelSelected: (level: number) => void
}

export const LevelSelection = ({
  isVisible,
  onCancel,
  onLevelSelected
}: LevelSelectionProps) => {
  return (
    <Modal
      onRequestClose={onCancel}
      visible={isVisible}
      animationType="slide"
      transparent
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o nível</Text>
          <TouchableOpacity
            style={[styles.button, styles.bgEasy]}
            onPress={() => onLevelSelected(0.1)}
          >
            <Text style={styles.buttonLabel}>Fácil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgNormal]}
            onPress={() => onLevelSelected(0.2)}
          >
            <Text style={styles.buttonLabel}>Intermediário</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgHard]}
            onPress={() => onLevelSelected(0.3)}
          >
            <Text style={styles.buttonLabel}>Difícil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1
  },
  container: {
    backgroundColor: "#eee"
  },
  title: {},
  button: {},
  buttonLabel: {},
  bgEasy: {},
  bgNormal: {},
  bgHard: {}
})
