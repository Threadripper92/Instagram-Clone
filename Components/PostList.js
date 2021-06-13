import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import PostData from "../JSON/PostData";
import Post from "../Components/Post";
import StoryList from "./StoryList";

const PostList = () => {
  return (
    <View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PostData}
          renderItem={({ item }) => <Post post={item} />}
          key={PostData.id}
          ListHeaderComponent={StoryList}
        />
      </View>
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({});
