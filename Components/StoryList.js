import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Story from "./Story";
import StoriesData from "../JSON/StoriesData";

const StoryList = () => {
  return (
    <View>
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
