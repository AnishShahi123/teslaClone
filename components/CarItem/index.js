import React from "react";
import StyledButton from "../StyledButton/index";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

const CarItem = () => {
  return (
    <View>
      <View style={styles.carContainer}>
        <ImageBackground
          source={require("../../assets/images/ModelX.jpeg")}
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69.420</Text>
        </View>
      </View>
      <StyledButton />
    </View>
  );
};

export default CarItem;
