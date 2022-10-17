import { StyleSheet, View, Text, Pressable } from "react-native";

// constants
import COLORS from "../../constants/colors";

export default function ListItem(props) {
  return (
    <View style={styles.card}>
      <Pressable
        android_ripple={{ color: COLORS.background }}
        onPress={props.onEditItem.bind(this, props.data.item.id)}
        style={({ pressed }) =>
          pressed
            ? [styles.itemContainer, styles.itemPressed]
            : styles.itemContainer
        }
      >
        <Text style={styles.itemTitle} numberOfLines={1}>
          {props.data.item.title}
        </Text>
        <Text style={styles.itemText} numberOfLines={3}>
          {props.data.item.description}
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
    color: COLORS.text,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.accent,
    fontFamily: "aquire-bold",
  },
  itemText: {
    fontSize: 16,
    color: COLORS.text,
    marginTop: 8,
    fontFamily: "aquire-regular",
  },
  itemPressed: {
    opacity: 0.5,
  },
  itemContainer: {
    padding: 8,
  },
});
