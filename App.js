import { Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View>
        <Text>To Do</Text>

        <View>
          <Text>Goals Go Here</Text>
        </View>
        <View>
          <Button title="Add New Goal" />
        </View>
      </View>
    </>
  );
}
