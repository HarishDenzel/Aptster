import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height, width } from "../assets/Constant/fontsAndColors";

export default function DualButton() {
  return (
    <>

    <View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "space-between",
          width: (width / 100) * 95,
          paddingTop:height/100*3
        }}
      >
        <View
          style={[styles.btn_con,{ backgroundColor: "#0073FF",}]}
        >
          <Text style={{color:'#fff',fontWeight:'500'}}>{"Add to Cart"}</Text>
        </View>
        <View
          style={[styles.btn_con,{borderWidth:1,borderColor:'#0073FF'}]}
        >
          <Text style={{color:'#0073FF',fontWeight:'500'}}>{"Send a Gift"}</Text>
        </View>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
btn_con:{
    height: (height / 100) * 5,
    width: (width / 100) * 45,
   
    alignItems:'center',
    justifyContent:'center'
  }
});
