import React from "react"
import { View, StyleSheet, Text, Pressable, Modal } from "react-native"

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
          <Pressable style={styles.closeContainer} onPress={onCancel}>
            <Text style={styles.closeLabel}>X</Text>
          </Pressable>
          <Text style={styles.title}>Selecione o nível</Text>
          <Pressable
            style={[styles.button, styles.bgEasy]}
            onPress={() => onLevelSelected(0.1)}
          >
            <Text style={styles.buttonLabel}>Fácil</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.bgNormal]}
            onPress={() => onLevelSelected(0.2)}
          >
            <Text style={styles.buttonLabel}>Intermediário</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.bgHard]}
            onPress={() => onLevelSelected(0.3)}
          >
            <Text style={styles.buttonLabel}>Difícil</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    padding: 15
  },
  closeContainer: {
    position: "absolute",
    top: -40,
    alignSelf: "flex-end",
    alignItems: "center",
    width: 40,
    height: 40,
    padding: 8,
    backgroundColor: "#eee"
  },
  closeLabel: {
    fontSize: 20,
    fontWeight: "bold"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  button: {
    marginTop: 10,
    padding: 5
  },
  buttonLabel: {
    color: "#eee",
    fontSize: 20,
    fontWeight: "bold"
  },
  bgEasy: {
    backgroundColor: "#49b65d"
  },
  bgNormal: {
    backgroundColor: "#2765f7"
  },
  bgHard: {
    backgroundColor: "#f26337"
  }
})
