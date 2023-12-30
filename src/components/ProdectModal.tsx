import { StyleSheet, Text, View, Modal,TouchableOpacity } from "react-native";
import React, { useState } from "react";


export default function ProdectModal(props:any) {
  const {show,onDismiss } = props;

  return (
    <Modal
      transparent={true}
     
      animationType="slide"
      visible={show}
    >
      <TouchableOpacity onPress={onDismiss} style={{ flex: 0.4,backgroundColor: "rgba(55, 55, 55, 0.3)" }} />
      <View style={{ flex: 0.6, backgroundColor:'#fff',borderTopLeftRadius:15,borderTopRightRadius:15}}>
       {props.children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
