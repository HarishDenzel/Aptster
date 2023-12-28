import * as React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Platform,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon } from "../Components/Icon";

import { StackActions, useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { List, Chip, Divider } from "react-native-paper";
const primaryColor = "#3a3a3a";




const SideMenu = (props) => {
  const dispatch = useDispatch();
  const loginResponse = useSelector((state) => state?.loginreducer);
  const userListResponse = useSelector((state) => state?.profilePreviewReducer);
  const [emailLogin, setEmailLogin] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const isFocused = useIsFocused();
  const editProfileResponse = useSelector((state) => state?.EditProfileReducer);
  const [isSupportView, setIsSupportView] = React.useState(false);

  React.useEffect(() => {}, []);

  const _LogoutTriggr = () => {
    // const isSignedIn = async () => await GoogleSignin.isSignedIn();
    // if (isSignedIn) {
    //   GoogleSignin.revokeAccess();
    //   GoogleSignin.signOut();
    // }
    setDisabled(false);
    global.functions.logoutUser();
    // dispatch(global.actions.logoutCall());
    setTimeout(() => {
      props.navigation.dispatch(StackActions.replace("AuthStack"));
    }, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
        borderwidth: 1,
        borderColor: "#3a3a3a",
        borderRadius: 50,
      }}
      {...props}
    >
      <DrawerContentScrollView {...props}>
        <View
          style={{
            backgroundColor: "#fff",
            flex: 0.8,
          }}
        >
          <View style={{ paddingLeft: 4 }}>
            <List.Section>
              <List.Item
                onPress={() =>
                  props.navigation.dispatch(StackActions.replace("BottomTab"))
                }
                title="My Account"
                titleStyle={{
                  color: "#000",
                  fontWeigt: "400",
                  fontFamily: "Poppins-Medium",
                  fontSize: 13,
                  lineHeight: 18,
                }}
                description={({}) => (
                  <View>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "rgb(72,72,74)",
                        fontWeigt: "300",
                        fontFamily: "Poppins-Regular",
                        fontSize: 10,
                        lineHeight: 15,
                      }}
                    >
                      {/* Access to */}
                      My Account & Details
                    </Text>
                  </View>
                )}
              />
              <Divider style={{}} />

              <List.Item
                onPress={() => {
                  props.navigation.navigate("PaymentScreens");
                }}
                title="Payments"
                titleStyle={{
                  color: "#000",
                  fontWeigt: "400",
                  fontFamily: "Poppins-Medium",
                  fontSize: 13,
                  lineHeight: 18,
                }}
                description={({}) => (
                  <View style={[styles.container, styles.column]}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "rgb(72,72,74)",
                        fontWeigt: "300",
                        fontFamily: "Poppins-Regular",
                        fontSize: 10,
                        lineHeight: 15,
                      }}
                    >
                      Payment setup and manage{" "}
                    </Text>
                  </View>
                )}
              />

              <Divider style={{}} />
              <List.Item
                onPress={() => props.navigation.navigate("SettingScreen")}
                title="Settings"
                titleStyle={{
                  color: "#000",
                  fontWeigt: "400",
                  fontFamily: "Poppins-Medium",
                  fontSize: 13,
                  lineHeight: 18,
                }}
                description={({}) => (
                  <View style={[styles.container, styles.column]}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "rgb(72,72,74)",
                        fontWeigt: "300",
                        fontFamily: "Poppins-Regular",
                        fontSize: 10,
                        lineHeight: 15,
                      }}
                    >
                      Manage the application
                    </Text>
                  </View>
                )}
              />
            </List.Section>
            <Divider style={{}} />
            <List.Item
              onPress={() => setIsSupportView(!isSupportView)}
              title="Support"
              titleStyle={{
                color: "#000",
                fontWeigt: "400",
                fontFamily: "Poppins-Medium",
                fontSize: 13,
                lineHeight: 18,
              }}
              description={({}) => (
                <View style={[styles.container, styles.column]}>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: "rgb(72,72,74)",
                      fontWeigt: "300",
                      fontFamily: "Poppins-Regular",
                      fontSize: 10,
                      lineHeight: 15,
                    }}
                  >
                    Support and contact us{" "}
                  </Text>
                </View>
              )}
            />
            {isSupportView && (
              <>
                <Divider />
                <List.Item
                  onPress={() => props.navigation.navigate("AccountDeletion")}
                  left={() => (
                    <View
                      style={{
                        borderwidth: 0.2,
                        height: 36,
                        width: 36,
                        borderRadius: 18,

                        alignSelf: "center",
                        justifyContent: "center",
                        marginRight: 3,
                      }}
                    ></View>
                  )}
                  title="Live Chat"
                  titleStyle={{
                    color: "#000",
                    fontWeigt: "400",
                    fontFamily: "Poppins-Medium",
                    fontSize: 13,
                    lineHeight: 18,
                  }}
                />
                <Divider />
                <List.Item
                  onPress={() =>
                    props.navigation.navigate("EmailScreens", {
                      email: "faq",
                    })
                  }
                  left={() => (
                    <View
                      style={{
                        borderwidth: 0.2,
                        height: 36,
                        width: 36,
                        borderRadius: 18,

                        alignSelf: "center",
                        justifyContent: "center",
                        marginRight: 3,
                      }}
                    ></View>
                  )}
                  title="FAQs"
                  titleStyle={{
                    color: "#000",
                    fontWeigt: "400",
                    fontFamily: "Poppins-Medium",
                    fontSize: 13,
                    lineHeight: 18,
                  }}
                />
                <Divider />
                <List.Item
                  onPress={() => Linking.openURL("mailto:support@tutory.com")}
                  title="support@tutory.com"
                  left={() => (
                    <View
                      style={{
                        borderwidth: 0.2,
                        height: 36,
                        width: 36,
                        borderRadius: 18,

                        alignSelf: "center",
                        justifyContent: "center",
                        marginRight: 3,
                      }}
                    ></View>
                  )}
                  title="E Mail"
                  titleStyle={{
                    color: "#000",
                    fontWeigt: "400",
                    fontFamily: "Poppins-Medium",
                    fontSize: 13,
                    lineHeight: 18,
                  }}
                />
              </>
            )}
            <Divider />
            <List.Item
              onPress={disabled ? () => _LogoutTriggr() : null}
              title="Logout"
              titleStyle={{
                color: "#000",
                fontWeigt: "400",
                fontFamily: "Poppins-Medium",
                fontSize: 13,
              }}
              description={({}) => (
                <View style={[styles.container, styles.column]}>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: "rgb(72,72,74)",
                      fontWeigt: "300",
                      fontFamily: "Poppins-Regular",
                      fontSize: 10,
                      lineHeight: 15,
                    }}
                  >
                    Logout of the mobile app
                  </Text>
                </View>
              )}
            />
          </View>
          <Divider />
        </View>
        <View style={{ padding: 20 }}></View>
      </DrawerContentScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  labelTextStyle: {
    color: "#000",
    right: 20,
  },
  Container: {
    flex: 0.2,

    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "center",
    width: "100%",

    elevation: 0.05,
    borderWidth: 0.1,
    borderColor: "#fff",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 5,
  },
});

export default SideMenu;
