import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("MyList", jsonValue);
  } catch (e) {
    // saving error
    console.log("error saving to local storage", e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("MyList");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log("error reading from local storage", e);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }
};
