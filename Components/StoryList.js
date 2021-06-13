import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import Story from "./Story";
import StoriesData from "../JSON/StoriesData";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const StoryList = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          borderBottomColor: "#B1A9A9",
          borderBottomWidth: 0.4,
          height: 110,
          width: "100%",
          backgroundColor: "#fff",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={StoriesData}
          renderItem={({ item }) => <Story people={item} />}
          key={StoriesData.id}
        />
      </View>
    </View>
  );
};

export default StoryList;

const styles = StyleSheet.create({});
