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
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// constants
import COLORS from "./constants/colors";

// components
import ListItem from "./components/ui/ListItem";
import ListInput from "./components/ui/ListInput";

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [listInputModalState, setListInputModalState] = useState(false);
  const [editItem, setEditItem] = useState();

  const [fontsLoaded] = useFonts({
    "aquire-regular": require("./assets/fonts/Aquire-BW0ox.otf"),
    "aquire-bold": require("./assets/fonts/AquireBold-8Ma60.otf"),
  });

  const showItemModalHandler = () => {
    setListInputModalState(true);
  };

  const cancelItemHandler = () => {
    setEditItem(undefined);
    setListInputModalState(false);
  };

  const addItemHandler = (itemData) => {
    setToDoList((currentList) => [
      ...currentList,
      { ...itemData, id: Math.random().toString() },
    ]);
    cancelItemHandler();
  };

  const startEditItemHandler = (id) => {
    setEditItem(...toDoList.filter((item) => item.id === id));
    showItemModalHandler();
  };

  const editItemHandler = (itemData) => {
    const index = toDoList.findIndex((item) => item.id === itemData.id);

    setToDoList((currentList) => [
      ...currentList.slice(0, index),
      itemData,
      ...currentList.slice(index + 1),
    ]);
    cancelItemHandler();
  };

  const deleteItemHandler = (id) => {
    setToDoList((currentList) => {
      return currentList.filter((item) => item.id !== id);
    });
    cancelItemHandler();
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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

          <ListInput
            visible={listInputModalState}
            data={editItem}
            onAddItem={addItemHandler}
            onEditItem={editItemHandler}
            onDeleteItem={deleteItemHandler}
            onCancel={cancelItemHandler}
          />

          <View style={styles.listContainer}>
            <FlatList
              alwaysBounceVertical={false}
              data={toDoList}
              renderItem={(itemData) => {
                return (
                  <ListItem
                    data={itemData}
                    onDeleteItem={deleteItemHandler}
                    onEditItem={startEditItemHandler}
                  />
                );
              }}
              keyExtractor={(item) => {
                return item.id;
              }}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Add New Item"
              color={COLORS.primary}
              onPress={showItemModalHandler}
            />
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
    fontSize: 30,
    color: COLORS.text,
    fontFamily: "aquire-bold",
  },
});
