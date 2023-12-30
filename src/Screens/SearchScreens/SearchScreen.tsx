import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../../components/Card";
import { useTheme } from "@react-navigation/native";
import { height } from "../../assets/Constant/fontsAndColors";
import SearchBar from "../../components/SearchBar";

export default function SearchScreen() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
      <Header />
      <SearchBar />
      <ScrollView>
        <View style={{ height: (height / 100) * 2 }}></View>
        <Card />
        <View style={{ height: (height / 100) * 2 }}></View>
        <Card />
        <View style={{ height: (height / 100) * 2 }}></View>
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
