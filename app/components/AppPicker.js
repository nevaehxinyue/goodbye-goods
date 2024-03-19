import AppText from "./AppText";
import {  View, StyleSheet, TouchableWithoutFeedback, Modal, Button, SafeAreaView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import color from '../config/color';
import defaultStyles from "../config/styles"
import { useState } from "react";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, selectItem, onSelectItem, placeholder }) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
    <>
    <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={22}
          color={color.mediumGrey}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{selectItem}</AppText>
      <MaterialCommunityIcons
          name='chevron-down'
          size={22}
          color={color.mediumGrey}
        />
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType='slide'>
        <SafeAreaView>
        <Button title="Close" onPress={()=> setModalVisible(false)}/>
        <FlatList
        data={items}
        keyExtractor={item => item.value.toString()}
        renderItem={({item}) => (
            <PickerItem label={item.label} onPress={()=> {
                setModalVisible(false);
                onSelectItem(item.label)}}/>
        )}/>
        </SafeAreaView>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  }
});

export default AppPicker;
