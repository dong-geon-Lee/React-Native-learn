import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import initialData from "./instagram-feed/data";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>이제 시작이야 내꿈은</Text>

      {console.log(initialData.articles[0].name)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
