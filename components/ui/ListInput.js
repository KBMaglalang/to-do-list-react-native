import { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Modal,
  Alert,
} from "react-native";

//constants
import COLORS from "../../constants/colors";

export default function ListInput(props) {
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  useEffect(() => {
    if (props.data) {
      setTitleText(props.data.title);
      setDescriptionText(props.data.description);
    }
  }, [props.data]);

  const titleInputHandler = (inputText) => {
    setTitleText(inputText);
  };
  const descriptionInputHandler = (inputText) => {
    setDescriptionText(inputText);
  };

  const addItemHandler = () => {
    if (!titleText && !descriptionText) {
      Alert.alert(
        "Empty Fields!",
        "Write something down in the title or description fields before adding to your list",
        [{ text: "Okay", style: "destructive" }]
      );
      return;
    }

    props.onAddItem({ title: titleText, description: descriptionText });
    setTitleText("");
    setDescriptionText("");
  };

  const cancelHandler = () => {
    setTitleText("");
    setDescriptionText("");
    props.onCancel();
  };

  const editHandler = () => {
    if (!titleText && !descriptionText) {
      Alert.alert(
        "Empty Fields!",
        "Write something down in the title or description fields before adding to your list",
        [{ text: "Okay", style: "destructive" }]
      );
      return;
    }

    props.onEditItem({
      id: props.data.id,
      title: titleText,
      description: descriptionText,
    });
  };

  const deleteHandler = () => {
    setTitleText("");
    setDescriptionText("");
    props.onDeleteItem(props.data.id);
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
            <Button
              title="Cancel"
              color={COLORS.accent}
              onPress={cancelHandler}
            />
          </View>

          <View style={styles.button}>
            <Button
              title={props.data ? "Edit" : "Add"}
              color={COLORS.primary}
              onPress={props.data ? editHandler : addItemHandler}
            />
          </View>
        </View>
        {props.data && (
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title="Delete"
                color={COLORS.error}
                onPress={deleteHandler}
              />
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
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
    color: COLORS.text,
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
