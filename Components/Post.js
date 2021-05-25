import React from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Post = () => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 44,
          backgroundColor: "#fff",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: "#000",
              borderRadius: 15,

              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/Avatars/charles-deluvio-kVg2DQTAK7c-unsplash.jpg")}
              style={{ height: 30, width: 30, borderRadius: 15 }}
            />
          </View>
          <Text style={{ margin: 5 }}>Benjamin</Text>
        </View>
        <View>
          <Image
            source={require("../assets/tabler-icon-dots-vertical.png")}
            style={{ height: 20, width: 20 }}
          />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 300,
          backgroundColor: "#000",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/Avatars/charles-deluvio-kVg2DQTAK7c-unsplash.jpg")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View
        style={{
          height: 150,
          width: "100%",
          backgroundColor: "#fff",
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../assets/tabler-icon-heart.png")}
                style={{ height: 25, width: 25, marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/Comment.png")}
                style={{ height: 25, width: 25, marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/tabler-icon-send.png")}
                style={{ height: 25, width: 25, marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity>
              <Image
                source={require("../assets/Bookmark.png")}
                style={{ height: 25, width: 25, marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 3,
          }}
        >
          <Image
            source={require("../assets/Avatars/minh-pham-5yENNRbbat4-unsplash.jpg")}
            style={{ height: 20, width: 20, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 15, marginLeft: 10 }}>
            Liked By <Text style={{ fontWeight: "700" }}>Davis</Text> and{" "}
            <Text style={{ fontWeight: "700" }}>5 others</Text>
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text>
            <Text style={{ fontWeight: "700" }}>Benjamin </Text>How do i Look ?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
