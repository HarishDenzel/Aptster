import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Basic_Viewdimension, height, width } from "../../assets/constant/fontsAndColors";
import { string } from "../../utils/global/constants";

export default function Button(props:any) {
  const{onPress}=props
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text style={styles.label}>{string.buyNow}</Text>
    </Pressable>
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
    borderRadius:Basic_Viewdimension.VD_BorderRadius
  },
  label: { color: "#fff", fontWeight: "800" },
});
