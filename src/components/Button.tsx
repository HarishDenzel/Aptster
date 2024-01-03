import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height, width } from "../assets/Constant/fontsAndColors";
import { string } from "../utils/global/constants";

export default function Button() {
  return (
    <View style={styles.btn}>
      <Text style={styles.label}>{string.buyNow}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: (height / 100) * 5,
    width: (width / 100) * 95,
    backgroundColor: "#FF8C00",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  label: { color: "#fff", fontWeight: "800" },
});
