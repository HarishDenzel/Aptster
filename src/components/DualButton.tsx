import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height, width } from "../assets/Constant/fontsAndColors";

export default function DualButton() {
  return (
    <>
      <View>
        <View style={styles.con}>
          <View style={[styles.btn_con, { backgroundColor: "#0073FF" }]}>
            <Text style={styles.label_white}>{"Add to Cart"}</Text>
          </View>
          <View
            style={[styles.btn_con, { borderWidth: 1, borderColor: "#0073FF" }]}
          >
            <Text style={styles.lable_blue}>{"Send a Gift"}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: (width / 100) * 95,
    paddingTop: (height / 100) * 3,
  },
  btn_con: {
    height: (height / 100) * 5,
    width: (width / 100) * 45,

    alignItems: "center",
    justifyContent: "center",
  },
  lable_blue: { color: "#0073FF", fontWeight: "500" },
  label_white: { color: "#fff", fontWeight: "500" },
});
