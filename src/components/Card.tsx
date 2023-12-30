import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { width, height, fontSize } from "../assets/Constant/fontsAndColors";

import { icons } from "../assets/icons";
import Icon from "./Icon";
import Price_card from "./Price_card";
import Location_label from "./Location_label";
import { useTheme } from "@react-navigation/native";

export default function Card() {

const {colors} =useTheme()

const styles = makeStyles(colors)
  return (
    <View style={styles.card_con}>
      <View style={styles.header_con}>
        <Text style={styles.header_text}>{"Cosmetic & Beauty Academy"}</Text>
        <Location_label />
      </View>

      <View style={styles.img_con}>
        <Image
          source={require("../assets/images/salon.png")}
          style={styles.img}
        />
        <View style={{ position: "absolute", paddingTop: 10, paddingLeft: 10 }}>
          <View style={styles.sponsord_con}>
            <Text style={styles.sponsored_label}>
              {"Sponsored"}
            </Text>
          </View>
        </View>
        <View style={styles.like_con}>
          <Icon height={35} width={35} icon={icons.like} />
        </View>
      </View>
      <View style={styles.footer}>
        <Price_card />
        <View style={styles.sold_con}>
          <Text style={{ fontSize: fontSize.verySmall_50, color: "green" }}>
            {"Sold: 140"}
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.ends_con}>
              <Image
                source={icons.timer}
                style={{
                  height: 12,
                  width: 12,
                  resizeMode: "contain",
                  right: 5,
                }}
              />
              <Text
                style={{ fontSize: fontSize.verySmall_50, fontWeight: "300" }}
              >
                {"End in 10:39"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const makeStyles =(colors:any)=> StyleSheet.create({
  card_con: {
    height: (height / 100) * 38,
    width: "93%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  header_con: {
    flex: 0.2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  header_text: {
    fontSize: fontSize.Large,
    bottom: 5,
    fontWeight: "500",
    color:colors.text
  },
  img_con: {
    flex: 0.5,
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },

  ends_con: {
    height: (height / 100) * 2.5,
    width: (width / 100) * 25,
    backgroundColor: "#FFC908",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  sold_con: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer: {
    flex: 0.3,
    padding: 5,
  },
  sponsord_con: {
    width: (width / 100) * 16,
    height: (height / 100) * 2,
    backgroundColor: "#0073FF",
    alignItems: "center",
    justifyContent: "center",
  },
  sponsored_label:{ fontSize: fontSize.verySmall_50, color: colors.white },
  like_con: {
    position: "absolute",
    alignItems: "flex-end",
    width: "100%",
    justifyContent: "center",
    paddingRight: 5,
    paddingTop: 8,
  },
});
