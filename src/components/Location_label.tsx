import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "../assets/icons";
import { fontSize } from "../assets/Constant/fontsAndColors";
import Icon from "./Icon";

export default function Location_label(props: any) {
  const { row } = props;
  return (
    <View>
      <View style={styles.con}>
        <View style={styles.sub_con}>
          <Icon icon={icons.location} height={13} width={13} />

          <Text style={styles.label}>{"Anytown"}</Text>
          {row && <Text style={styles.distance_row}>{"2 km"}</Text>}
        </View>
        {!row && <Text style={styles.distance}>{"2 km"}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: { alignItems: "flex-end" },
  sub_con: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: fontSize.verySmall,
  },
  distance_row: {
    fontSize: fontSize.verySmall_50,
    paddingLeft: 10,
    color: "#000",
  },
  distance: {
    fontSize: fontSize.verySmall_50,
    color: "#000",
  },
});
