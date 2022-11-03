import { useState, useEffect, useCallback } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

// constants
import COLORS from "./constants/colors";

// components
import ListItem from "./components/ui/ListItem";
import ListInput from "./components/ui/ListInput";
import PrimaryButton from "./components/ui/Button";

// helper
import { storeData, getData } from "./helper/localStorage";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [listInputModalState, setListInputModalState] = useState(false);
  const [editItem, setEditItem] = useState();
  const [appIsReady, setAppIsReady] = useState(false);

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

  useEffect(() => {
    (async () => {
      await getData().then((data) => setToDoList(data));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await storeData(toDoList);
    })();
  }, [toDoList]);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(
          "aquire-regular",
          require("./assets/fonts/Aquire-BW0ox.otf")
        );
        await Font.loadAsync(
          "aquire-bold",
          require("./assets/fonts/AquireBold-8Ma60.otf")
        );
      } catch (e) {
        console.log(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.rootScreen} onLayout={onLayoutRootView}>
      <StatusBar style="light" />
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
            <PrimaryButton onPress={showItemModalHandler}>
              Add New Item
            </PrimaryButton>
          </View>
        </View>
      </ImageBackground>
    </View>
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
