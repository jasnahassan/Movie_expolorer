import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const CommonButton = props => {
  return (
    <TouchableOpacity
      style={[styles.saveButton, {backgroundColor: props?.color}]}
      onPress={() => props?.onPress()}>
      <Text style={{fontWeight: 'bold', color: 'white', padding: 5}}>
        {props?.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: height / 20,
    width: height / 7,

    borderRadius: 12,
    marginTop: height / 40,
    marginBottom: height / 40,
  },
});
export default CommonButton;
