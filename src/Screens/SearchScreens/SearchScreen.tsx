import { StyleSheet, FlatList, View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { useTheme } from "@react-navigation/native";
import SearchBar from "../../components/SearchBar";
import { prodect } from "../../utils/enum/mock";
import ProdectModal from "../../components/ProdectModal";

export default function SearchScreen() {
  const { colors } = useTheme();
  const [bannerList, setbannerList] = useState([
    "https://aptster-images.s3.us-east-2.amazonaws.com/restaurant.png",
    "https://aptster-images.s3.us-east-2.amazonaws.com/restaurant.png",
  ]);
  const [show, setShow] = useState(false);

  return (
    <>
      <View style={styles.con}>
        <Header />
        <SearchBar 
        placeholder={"Search for “House keeping” deals"}
         />

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
      <ProdectModal
        onDismiss={() => setShow(!show)}
        show={show}
        bannerList={bannerList}
      />
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
});
