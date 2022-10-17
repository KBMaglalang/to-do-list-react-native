import { StyleSheet, View, Text, Pressable } from "react-native";

// constants
import COLORS from "../../constants/colors";

export default function ListItem(props) {
  return (
    <View style={styles.card}>
      <Pressable
        android_ripple={{ color: COLORS.background }}
        onPress={() => {}}
        style={({ pressed }) =>
          pressed
            ? [styles.itemContainer, styles.itemPressed]
            : styles.itemContainer
        }
      >
        <Text style={styles.itemTitle} numberOfLines={1}>
          {props.title}
        </Text>
        <Text style={styles.itemText} numberOfLines={3}>
          {props.description}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    margin: 8,
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
  itemPressed: {
    opacity: 0.5,
  },
  itemContainer: {
    padding: 8,
  },
});
