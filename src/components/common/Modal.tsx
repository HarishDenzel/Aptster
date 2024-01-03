import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Modals(props: any) {
  const { visible, onDismiss } = props;

  return (
    <Modal
      style={styles.con}
      transparent={true}
      animationType="slide"
      visible={visible}
    >
        {props.children}
    </Modal>
  );
}

const styles = StyleSheet.create({
  con: { flex: 1, backgroundColor: "rgba(55, 55, 55, 0.2)" },
});
