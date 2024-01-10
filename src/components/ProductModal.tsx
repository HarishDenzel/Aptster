import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from "react-native";
import React from "react";
import Modals from "./common/Modal";
import Icon from "./common/Icon";
import { icons } from "../assets/icons";
import {
  View_Spacing,
  fontSize,
  height,
  width,
} from "../assets/constant/fontsAndColors";
import { SliderBox } from "react-native-image-slider-box";
import Location_label from "./LocationLabel";
import Price_card from "./PriceCard";
import Button from "./common/Button";
import DualButton from "./common/DualButton";
import { string } from "../utils/global/constants";
export default function ProductModal(props: any) {
  const { show, onDismiss,bannerList } = props;

  return (
    <Modals visible={show}>
      <TouchableOpacity onPress={onDismiss} style={styles.second_con} />
      <View style={styles.con}>
      <View style={{ alignSelf: "center", flex: 0.05 }}>
          <Icon 
          icon={icons.modal}
           height={20}
            width={20}
             />
        </View>
        <View style={styles.header_con}>
          <View style={{ flex: 0.7, justifyContent: "center" }}>
            <Text style={styles.header_text}>{"Mystique Salon"}</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Icon icon={icons.like} height={30} width={30} />
            <Icon icon={icons.share} height={30} width={30} />
            <Icon icon={icons.kart} height={30} width={30} />
          </View>
        </View>
        <ScrollView style={{ flex: 0.85 }}>
          <View style={{ height: (height / 100) * 20 }}>
            <SliderBox
              images={bannerList}
              sliderBoxHeight={200}
              onCurrentImagePressed={(index) =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#3A2001"
              inactiveDotColor="#90A4AE"
              autoplay
              circleLoop
              resizeMethod={"resize"}
              resizeMode={"cover"}
              paginationBoxStyle={styles.pageination}
              dotStyle={{
                width: 20,
                height: 6,
                borderRadius: 10,
                marginHorizontal: 0,
                padding: 0,
                backgroundColor: "rgba(128, 128, 128, 0.92)",
              }}
              ImageComponentStyle={{
                borderRadius: 10,
                width: "97%",
                height: "100%",
              }}
              imageLoadingColor="#2196F3"
            />
          </View>
          <View style={{ padding: 10 }}>
            <Location_label row={true} />
            <View style={{ height: View_Spacing.VS_W1 }} />
            <Price_card />
            <View style={{ height: View_Spacing.VS_W2 }} />
            <Button />

            <DualButton />
            <View style={{ paddingTop: (height / 100) * 2 }}>
              <Text style={styles.label}>{string.hightlight}</Text>
              <Text style={{ color: "#000", paddingTop: 10 }}>
                {
                  "Welcome to Mystique Salon, where beauty meets enchantment. Our salon is more than just a place to get a haircut or a manicure; it's a sanctuary for transformation and rejuvenation. Step into a world of beauty, sophistication, and allure, where our dedicated team of skilled professionals is committed to enhancing your natural radiance."
                }
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modals>
  );
}

const styles = StyleSheet.create({
  second_con: { flex: 0.2, backgroundColor: "rgba(55, 55, 55, 0.2)" },
  con: {
    flex: 0.8,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  header_con: {
    flex: 0.1,
    padding: 5,
    flexDirection: "row",
  },
  header_text: {
    fontSize: fontSize.Large,
    bottom: 5,
    fontWeight: "500",
  },
  label: {
    color: "#000",
    fontSize: fontSize.Medium,
    fontWeight: "bold",
  },
});
