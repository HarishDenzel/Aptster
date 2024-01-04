import { StyleSheet, FlatList, View, Text, ScrollView } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { useTheme } from "@react-navigation/native";
import SearchBar from "../../components/common/SearchBar";
import { bannerList, product } from "../../utils/enum/mock";
import ProductModal from "../../components/ProductModal";
import { string } from "../../utils/global/constants";

export default function SearchScreen() {
  const { colors } = useTheme();
  const [show, setShow] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [tempData, setTempData] = useState();
  const [like, setLike] = useState(false);
  const textInputRef = useRef(null);
  const [json, setJson] = useState();
  useEffect(() => {
    setJson([...product]);
  }, []);

  const searchData = (text: string) => {
    const newData = prodect.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setSearchText(text);
    setTempData(newData);
  };

  const _likeTrigger = (item: any) => {
    const newData = json.map((i) => {
      if (i.id === item.id) {
        return { ...i, isLike: !i.isLike };
      }
      return i;
    });
    setJson([...newData]);
  };
console.log(json)
  return (
    <>
      <View style={styles.con}>
        <Header />
        <SearchBar
          autoFocus={true}
          disable={false}
          placeholder={string.searchPlaceholder}
          value={searchText}
          onChangeText={(text) => searchData(text)}
        />
        <FlatList
          data={tempData == null ? json : tempData}
          renderItem={({ item, index }) => {
            return (
              <Card
                onPress={() => setShow(true)}
                title={item.name}
                img={item.img}
                isLike={item.isLike}
                likePress={() => _likeTrigger(item)}
              />
            );
          }}
        />
      </View>
      <ProductModal
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
