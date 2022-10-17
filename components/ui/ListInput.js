import { useState } from "react";

import { StyleSheet, View, Text, TextInput, Button, Modal } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

//constants
import COLORS from "../../constants/colors";

export default function ListInput(props) {
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  const titleInputHandler = (inputText) => {
    setTitleText(inputText);
  };
  const descriptionInputHandler = (inputText) => {
    setDescriptionText(inputText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>New List Item</Text>
        </View>

        <View style={styles.textContainer}>
          <TextInput
            style={styles.textBox}
            placeholder="Title"
            onChangeText={titleInputHandler}
            value={titleText}
          />
        </View>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textBox}
            placeholder="Description"
            onChangeText={descriptionInputHandler}
            value={descriptionText}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color={COLORS.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Add" color={COLORS.primary} />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Delete" color={COLORS.error} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  titleContainer: {
    flexDirection: "row",
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderColor: COLORS.accent,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    flex: 1,
    textAlign: "center",
  },

  textContainer: {
    flexDirection: "row",
  },
  textBox: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#fff",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
    marginTop: 16,
    flex: 1,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
});
