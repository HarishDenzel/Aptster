import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, StyleSheet } from "react-native";
import * as React from "react";
import { useTheme } from "@react-navigation/native";
import { My_Home_Tab, My_club_Tab } from "../navigation";
const Tab = createBottomTabNavigator();
import { icons } from "../assets/icons";

import HomeScreen from "../screens/HomeScreens/HomeScreen";
import DealsScreen from "../screens/DealsScreens/DealsScreen";
import SearchScreen from "../screens/SearchScreens/SearchScreen";
import MyItemScreen from "../screens/FavouriteScreens/MyItemScreen";
import SupportScreen from "../screens/SupportScreens/SupportScreen";

export const CustomTab = () => {
  const { colors } = useTheme();

  const bottom_data = [
    {
      id: 1,
      name: "Home",
      component: HomeScreen,
      icon: icons.home,
      fill_icon: icons.home_fill,
    },
    {
      id: 2,
      name: "Deals",
      component: DealsScreen,
      icon: icons.deal,
      fill_icon: icons.deal_fill,
    },
    {
      id: 3,
      name: "Search",
      component: SearchScreen,
      icon: icons.search,
      fill_icon: icons.search_fill,
    },
    {
      id: 4,
      name: "My Items",
      component: MyItemScreen,
      icon: icons.heart,
      fill_icon: icons.heart_fill_fill,
    },
    {
      id: 5,
      name: "Support",
      component: SupportScreen,
      icon: icons.support,
      fill_icon: icons.support_fill,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.sublabelTextColor,
        showLabel: true,
        headerShown: false,
        tabBarItemStyle: { width: 100, top: 5, padding: 5 },
        tabBarStyle: {
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          elevation: 1,
        },
      }}
      initialRouteName="Home"
    >
      {Object.values(bottom_data).map((e, i) => {
        return (
          <Tab.Screen
            name={e.name}
            component={e.component}
            options={{
              tabBarLabelStyle: { fontFamily: "Poppins-SemiBold" },
              headerShown: false,
              tabBarIcon: ({ color, size, focused }) => (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={focused ? e.fill_icon : e.icon}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: focused ? colors.primary : "#c7c6c5",
                    }}
                  />
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  circle: {
    marginBottom: 20,
    backgroundColor: "#fff",
    width: 70,
    height: 70,

    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    marginBottom: 30,
  },
  Innercircle: {
    elevation: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  ImgStyle: {
    width: 25,
    tintColor: "#fff",
    height: 25,
    resizeMode: "contain",
  },
});
