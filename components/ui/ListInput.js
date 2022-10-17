import { useState } from "react";

import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function ListInput() {
  const [inputText, setInputText] = useState("");

  return (
    <View>
      <View>
        <Text>Input item</Text>
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

const styles = StyleSheet.create({});
