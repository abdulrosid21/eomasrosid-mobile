import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
export default function Profile(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button icon="check">Press me</Button>
      <Icon name="check" size={40} />
    </View>
  );
}

const style = StyleSheet.create({});
