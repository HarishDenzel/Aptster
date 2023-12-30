import { StyleSheet, FlatList, View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { useTheme } from "@react-navigation/native";
import SearchBar from "../../components/SearchBar";
import { prodect } from "../../utils/enum/mock";
import ProdectModal from "../../components/ProdectModal";
import Icon from "../../components/Icon";
import { icons } from "../../assets/icons";
import {
  View_Spacing,
  fontSize,
  height,
  width,
} from "../../assets/Constant/fontsAndColors";
import { SliderBox } from "react-native-image-slider-box";
import Location_label from "../../components/Location_label";
import Price_card from "../../components/Price_card";
import Button from "../../components/Button";
import DualButton from "../../components/DualButton";

export default function SearchScreen() {
  const { colors } = useTheme();
  const [bannerList, setbannerList] = useState([
    "https://aptster-images.s3.us-east-2.amazonaws.com/restaurant.png",
    "https://aptster-images.s3.us-east-2.amazonaws.com/restaurant.png",
  ]);
  const [show, setShow] = useState(false);
  console.log("s==>", show);
  return (
    <>
      <View style={styles.con}>
        <Header />
        <SearchBar placeholder={"Search for “House keeping” deals"} />

        <FlatList
          data={prodect}
          renderItem={({ item }) => {
            return (
              <Card
                onPress={() => setShow(true)}
                title={item.name}
                img={item.img}
              />
            );
          }}
        />
      </View>
      <ProdectModal onDismiss={() => setShow(!show)} show={show}>
        <View style={{ alignSelf: "center", flex: 0.05 }}>
          <Icon 
          icon={icons.modal}
           height={15}
            width={15}
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
            <View style={{ height: View_Spacing.VS_W1 }} />
            <Button />

            <DualButton />
            <View style={{ paddingTop: (height / 100) * 2 }}>
              <Text style={styles.label}>{"Hightlight"}</Text>
              <Text style={{ color: "#000", paddingTop: 10 }}>
                {
                  "Welcome to Mystique Salon, where beauty meets enchantment. Our salon is more than just a place to get a haircut or a manicure; it's a sanctuary for transformation and rejuvenation. Step into a world of beauty, sophistication, and allure, where our dedicated team of skilled professionals is committed to enhancing your natural radiance."
                }
              </Text>
            </View>
          </View>
        </ScrollView>
      </ProdectModal>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "#f4f4f4",
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
