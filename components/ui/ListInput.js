import { useState } from "react";

import { StyleSheet, View, Text, TextInput, Button } from "react-native";

//constants
import COLORS from "../../constants/colors";

export default function ListInput() {
  const [inputText, setInputText] = useState("");

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>New List Item</Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          onChangeText={() => {}}
          value={() => {}}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Description"
          onChangeText={() => {}}
          value={() => {}}
        />
      </View>
      <View>
        <Button title="Cancel" />
        <Button title="Add" />
      </View>
      <View>
        <Button title="Delete" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
});
