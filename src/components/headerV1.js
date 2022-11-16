import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function headerV1(props) {
  const handleLogout = async () => {
    try {
      alert('Logout');
      await AsyncStorage.clear();
      props.navigation.replace('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <View style={styles.main}>
      <View style={styles.up}>
        <TouchableOpacity onPress={openDrawer}>
          <Image
            style={styles.gambar}
            source={require('../assets/images/bread.png')}
          />
        </TouchableOpacity>
        <Icon name="logout" size={25} color="white" onPress={handleLogout} />
      </View>
      <View style={styles.SectionStyle}>
        <Image
          source={require('../assets/images/search.png')} //Change your icon image here
          style={styles.ImageStyle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#3366FF',
    padding: 20,
  },
  up: {
    height: 50,
    width: '100%',
    backgroundColor: '#3366FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  gambar: {
    height: 30,
    width: 30,
  },
  bottom: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    height: 40,
    borderRadius: 5,
    margin: 10,
    color: 'white',
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});
