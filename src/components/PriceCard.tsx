import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { icons } from "../assets/icons";
import { fontSize, height, width } from "../assets/constant/fontsAndColors";
import { useTheme } from "@react-navigation/native";
import { string } from "../utils/global/constants";

export default function Price_card() {
  const { colors } = useTheme();

  const styles = makeStyles(colors);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.footer_con}>
        <Text style={styles.footer_text}>{"$200"}</Text>
        <View style={styles.star_con}>
          <Image
            source={icons.star}
            style={{ height: 15, width: 15, resizeMode: "contain", right: 4 }}
          />
          <Text style={{ fontSize: fontSize.Medium, color: colors.text }}>
            {"4.0"}
          </Text>
        </View>
      </View>
      <View style={styles.footer_amt}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: fontSize.Medium,
              fontWeight: "600",
              color: colors.text,
            }}
          >
            {"$100"}
          </Text>
          <View style={styles.offer_con}>
            <Text style={{ fontSize: fontSize.verySmall_50 }}>{"10% off"}</Text>
          </View>
        </View>

        <Text style={{ fontSize: fontSize.verySmall_50, color: colors.gray }}>
          {"4.6K "+string.ratings}
        </Text>
      </View>
      <Text style={{ fontSize: 8, color: colors.grey }}>{"200 "+string.bought}</Text>
    </View>
  );
}

const makeStyles = (colors:any) =>
  StyleSheet.create({
    footer_con: {
      flex: 0.4,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    footer_text: {
      textDecorationLine: "line-through",
      fontSize: fontSize.verySmall_50,
      color: colors.gray,
    },
    star_con: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    footer_amt: {
      flex: 0.4,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    offer_con: {
      height: (height / 100) * 2,
      width: (width / 100) * 13,
      backgroundColor: "#0073FF33",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: (width / 100) * 5,
      left: 10,
    },
  });
