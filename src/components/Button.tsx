import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height,width } from '../assets/Constant/fontsAndColors'

export default function Button() {
  return (
  
      <View
            style={styles.btn}
          >
            <Text style={{color:"#fff",fontWeight:'800'}}>{"Buy Now"}</Text>
          </View>
  
  )
}

const styles = StyleSheet.create({
    btn:{
        height: (height / 100) * 5,
        width: (width / 100) * 95,
        backgroundColor: "#FF8C00",
        alignItems: "center",
        justifyContent: "center",
        alignSelf:'center'
      }
})