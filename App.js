import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

// constants
import COLORS from "./constants/colors";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>To Do</Text>
        </View>

        <View style={styles.listContainer}>
          <Text>Goals Go Here</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Add New Goal" />
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
});
