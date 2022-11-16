import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SplashScreen(props) {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    setTimeout(() => {
      if (token) {
        props.navigation.replace('AppScreen');
      } else {
        props.navigation.replace('AuthScreen');
      }
    }, 3000);
  };

  return (
    <View style={styles.mainView}>
      <View>
        <Text style={styles.text}>Find Events {'\n'} You Love</Text>
      </View>
      <View>
        <Image
          style={styles.Image}
          source={require('../../assets/images/people.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#3366FF',
  },
  text: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'poppins',
    color: 'white',
  },
  Image: {
    width: '100%',
  },
});
