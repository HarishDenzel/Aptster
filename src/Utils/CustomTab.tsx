import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, StyleSheet } from "react-native";
import * as React from "react";
import { useTheme } from "@react-navigation/native";

import { bottom_data } from "./enum/mock";
const Tab = createBottomTabNavigator();
export const CustomTab = () => {
  const { colors } = useTheme();

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
 
});
