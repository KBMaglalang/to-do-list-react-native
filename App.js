import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// constants
import COLORS from "./constants/colors";

// components
// item component
import ListItem from "./components/ui/ListItem";
// new item component
// slide settings modal component

// ! test data
const tempData = () => {
  const temp = [];

  for (let i = 0; i < 12; i++) {
    temp.push({
      id: i,
      title: `item ${i}`,
      description: `description test ${i}`,
    });
  }

  return temp;
};

export default function App() {
  // const [toDoList, setToDoList] = useState([]);
  const [toDoList, setToDoList] = useState(tempData);

  const editItemHandler = (id) => {
    console.log("in edit", id);
  };

  const deleteItemHandler = (id) => {
    console.log("in delete", id);
  };

  return (
    <>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>To Do</Text>
          </View>

          <View style={styles.listContainer}>
            <FlatList
              alwaysBounceVertical={false}
              data={toDoList}
              renderItem={(itemData) => {
                return (
                  <ListItem
                    data={itemData}
                    onDeleteItem={deleteItemHandler}
                    onEditItem={editItemHandler}
                  />
                );
              }}
              keyExtractor={(item) => {
                return item.id;
              }}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Add New Item" color={COLORS.secondary} />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  backgroundImage: {
    opacity: 0.15,
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
  titleStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    // ! add font here later on
  },
});
