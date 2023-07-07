import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn("Hey There");
        }}
      >
        <Text>CUSTOM ORDER</Text>
      </Pressable>
    </View>
  );
};


export default StyledButton;
