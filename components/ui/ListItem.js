import { StyleSheet, View, Text, Button, Pressable } from "react-native";

// constants
import COLORS from "../../constants/colors";

export default function ListItem(props) {
  return (
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
        <Text style={styles.itemTitle}>Title</Text>
        <Text style={styles.itemText}>item</Text>
      </View>
      <View>
        <Button title={"X"} color={COLORS.error} style={styles.deleteButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 8,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
  },

  detailsContainer: {
    flex: 5,
    flexDirection: "column",
    padding: 8,
  },
  itemTitle: {
    fontSize: 24,
    color: "white",
  },
  itemText: {
    fontSize: 16,
    color: "white",
  },

  deleteButton: {
    flex: 1,
    color: COLORS.error,
  },
});
