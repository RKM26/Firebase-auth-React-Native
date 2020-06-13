import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Header = (props) => {
  const {viewStyle, textStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#bbb',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.8,
    elevation:2,
    position:'relative'
  },
  textStyle: {
    fontSize: 20,
  },
});

export  {Header};
