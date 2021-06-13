import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import Header from "../Components/header";

import PostList from "../Components/PostList";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View>
        <PostList />
      </View>

      <StatusBar style="dark" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
