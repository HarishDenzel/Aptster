import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import {
  width,
  height,
  fontSize,
  View_Spacing,
} from "../assets/constant/fontsAndColors";
import { SliderBox } from "react-native-image-slider-box";
import { icons } from "../assets/icons";
import Price_card from "./PriceCard";
import Locationlabel from "./LocationLabel";
import { useTheme } from "@react-navigation/native";
import { string } from "../utils/global/constants";
import { bannerList } from "../utils/enum/mock";

import Vector from "../assets/Vector";
export default function Card(props: any) {
  const { title, onPress, isLike, likePress } = props;
  const { colors } = useTheme();

  const styles = makeStyles(colors);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.space} />
      <View style={styles.card_con}>
        <View style={styles.header_con}>
          <Text style={styles.header_text}>{title}</Text>
          <Locationlabel />
        </View>
        <View style={styles.img_con}>
          <SliderBox
            images={bannerList}
            sliderBoxHeight={200}
            onCurrentImagePressed={onPress}
            dotColor="#FF8C00"
            inactiveDotColor="#90A4AE"
            autoplay
            circleLoop
            resizeMethod={"resize"}
            resizeMode={"cover"}
            dotStyle={styles.dotstyle}
            ImageComponentStyle={styles.slideImage}
            imageLoadingColor="#2196F3"
          />
          <View style={styles.sponsored}>
            <View style={styles.sponsord_con}>
              <Text style={styles.sponsored_label}>{string.sponsored}</Text>
            </View>
          </View>
          <Pressable onPress={likePress} style={styles.like_con}>
            <Vector.Ionicons
              name={isLike ? "heart" : "heart-circle"}
              color={"#dbdbdb"}
              size={30}
            />
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Price_card />
          <View style={styles.sold_con}>
            <Text style={styles.sold_text}>{string.sold + " 140"}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.ends_con}>
                <Image source={icons.timer} style={styles.timer} />
                <Text style={styles.timer_text}>{string.endIn + " 10:39"}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const makeStyles = (colors: any) =>
  StyleSheet.create({
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
      color: colors.text,
    },
    img_con: {
      flex: 0.5,
      alignItems: "center",
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
    sponsored_label: {
      fontSize: fontSize.verySmall_50,
      color: colors.white,
    },
    like_con: {
      position: "absolute",
      alignItems: "flex-end",
      width: "100%",
      justifyContent: "center",
      paddingRight: 5,
      paddingTop: 8,
    },
    space: {
      height: View_Spacing.VS_W2,
    },
    sold_text: { fontSize: fontSize.verySmall_50, color: "green" },
    timer: {
      height: 12,
      width: 12,
      resizeMode: "contain",
      right: 5,
    },
    timer_text: {
      fontSize: fontSize.verySmall_50,
      fontWeight: "300",
      color: colors.gray,
    },

    dotstyle: {
      width: 10,
      height: 5,

      marginHorizontal: 0,
      padding: 0,
      margin: 0,
      backgroundColor: "rgba(128, 128, 128, 0.92)",
    },
    slideImage: {
      width: "90%",
    },
    sponsored: {
      position: "absolute",
      paddingTop: 10,
      paddingLeft: 10,
      alignSelf: "flex-start",
    },
  });
