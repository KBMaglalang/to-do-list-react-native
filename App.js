import { useState } from "react";

import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

// constants
import COLORS from "./constants/colors";

// components
// item component
// new item component
// slide settings modal component

export default function App() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>To Do</Text>
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listText}>Item Go Here</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Add New Item" color={COLORS.primary} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 5,
    paddingVertical: 8,
  },
  listText: {
    fontSize: 24,
    color: "white",
  },

  buttonContainer: {
    paddingVertical: 16,
    borderTopWidth: 2,
    borderColor: COLORS.accent,
  },
  titleContainer: {
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderColor: COLORS.accent,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    // ! add font here later on
  },
});
