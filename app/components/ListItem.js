import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import color from "../config/color";
import Swipeable from 'react-native-gesture-handler/Swipeable';


function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight
      onPress={onPress}
      underlayColor={color.lightPinkGrey}
    >
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}

        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
    </Swipeable>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: color.white
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
   
  },
  subTitle: {
    color: color.mediumGrey,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
