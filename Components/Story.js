import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Story = (props) => {
  const { name, image } = props.people;

  return (
    <TouchableOpacity onPress={() => alert(name)}>
      <View style={{ alignItems: "center", margin: 10 }}>
        <LinearGradient
          start={[0, 0.5]}
          end={[1, 0.5]}
          colors={["#9E2692", "#FAA958"]}
          style={{ borderRadius: 35 }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              margin: 2,
              borderRadius: 35,
              height: 67,
              width: 67,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={image}
              style={{ height: 60, width: 60, borderRadius: 35 }}
            />
          </View>
        </LinearGradient>

        <Text style={{ color: "#000" }}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Story;

const styles = StyleSheet.create({});
