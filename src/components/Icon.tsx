import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Icon(props:any) {
    const{ height,width} =props
  return (
    <View>
       <Image
              source={props.icon}
              style={{ height: height, width: width, resizeMode: "contain" }}
            />
    </View>
  )
}

const styles = StyleSheet.create({

})