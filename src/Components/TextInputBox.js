import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
var windowWidth = Dimensions.get('window').width; //full width
var windowHeight = Dimensions.get('window').height; //full height

const TextInputBox = props => {
  return (
    <>
      <View style={[style.mainConatiner]}>
        <View
          style={[style.manageAddressItem, {width: '100%', paddingBottom: 10}]}>
          <View
            style={[
              style.mainView,
              props?.errorText != '' && style.errorInput,
              {
                minHeight: props.multiline
                  ? windowHeight / 5
                  : windowHeight / 15,
                justifyContent: props.multiline ? 'flex-start' : 'center',
              },
            ]}>
            <TextInput
              keyboardType={props?.isNumber ? 'numeric' : 'default'}
              multiline={props?.multiline}
              value={props?.value}
              color={'#000000'}
              onChangeText={text => props?.onChangeText(text)}
              placeholderTextColor={props?.errorText == '' ? 'gray' : 'red'}
              placeholder={
                props?.errorText != '' ? props?.errorText : props?.placeholder
              }
              style={{
                left: 20,
                width: '90%',
                minHeight: windowWidth / 8,
                top: props?.multiline && 10,
                paddingBottom: props?.multiline && 20,
                color: '#000000',
              }}
            />
          </View>
          {props.errorText != '' && props.value != '' ? (
            <Text style={{top: 5, left: 10, color: 'red'}}>
              * {props?.errorText}
            </Text>
          ) : null}
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  mainConatiner: {
    alignSelf: 'center',
    width: '90%',
    minHeight: windowHeight / 20,

    flexDirection: 'row',
  },
  mainView: {
    width: '100%',
    minHeight: windowHeight / 15,
    backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'column',

    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    borderRadius: 5,
  },
  manageAddressItem: {
    width: '50%',
  },
  TextInputTitle: {
    minHeight: windowHeight / 18,
    width: '90%',

    alignSelf: 'center',
    flexDirection: 'column',

    top: 10,
  },
  normal: {
    shadowColor: '#000',
  },
  errorInput: {
    shadowColor: 'red',
    borderWidth: 1,
    borderColor: 'red',
  },
});
export default TextInputBox;
