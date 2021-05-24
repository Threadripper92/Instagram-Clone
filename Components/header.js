import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Image
            source={require("../assets/Instagram-Wordmark-Black-Logo.wine.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/tabler-icon-square-plus.png")}
            style={styles.icon}
          />
          <Image
            source={require("../assets/tabler-icon-heart.png")}
            style={styles.icon}
          />
          <Image
            source={require("../assets/tabler-icon-send.png")}
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 46,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  logo: { height: 100, width: 120, marginTop: 10 },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: { width: 30, height: 30, marginTop: 10, margin: 5 },
});
