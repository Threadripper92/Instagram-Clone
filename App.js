import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import Header from "./Components/header";
import Story from "./Components/Story";

const data = [
  {
    id: 1,
    name: "John",
    uri: "https://unsplash.com/photos/ZHvM3XIOHoE",
  },
];
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View
          style={{
            height: 110,
            width: "100%",
            backgroundColor: "#fff",
            flexDirection: "row",
            borderBottomColor: "#696969",
            borderBottomWidth: 0.5,
            alignItems: "center",
          }}
        >
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
