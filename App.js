import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Clipboard.ClipboardPasteButton
        style={[{ height: 40, width: 100 }]}
        cornerStyle="medium"
        acceptedContentTypes={["plain-text"]}
        onPress={(data) => {
          if ("text" in data) {
            console.log(data.text);
          }
        }}
      />
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
