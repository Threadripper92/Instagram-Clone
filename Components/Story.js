import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Story = () => {
  return (
    <View style={{ alignItems: "center", margin: 10 }}>
      <Image
        source={require("../assets/Avatars/alex-suprun-ZHvM3XIOHoE-unsplash.jpg")}
        style={{ height: 70, width: 70, borderRadius: 35 }}
      />
      <Text style={{ color: "#000" }}>John</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({});
