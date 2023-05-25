import { View, Text, StyleSheet } from "react-native";
import React from "react";

import {
  CreateResponsiveStyle,
  DEVICE_SIZES,
  useDeviceSize,
} from "rn-responsive-styles";

const BookingScreen = () => {
  const styles = useStyles();
  return (
    <View style={styles.contentContainer}>
      <View>
        <Text>LOGO</Text>
        <Text>Policy Text</Text>
      </View>
      <View>
        <Text>List Of Service Components</Text>
      </View>
    </View>
  );
};

export default BookingScreen;

const useStyles = CreateResponsiveStyle({
  contentContainer: {
    height: "100%",
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
