import { StyleSheet, View, Text, Button, Pressable } from "react-native";

// constants
import COLORS from "../../constants/colors";

export default function ListItem(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.itemTitle}>Title</Text>
      <Text style={styles.itemText}>item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    margin: 8,
    padding: 8,
  },

  itemTitle: {
    fontSize: 24,
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.accent,
  },
  itemText: {
    fontSize: 16,
    color: "white",
    marginTop: 8,
  },
});
