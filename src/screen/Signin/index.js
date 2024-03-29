import React, {useState} from 'react';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function Signin(props) {
  const [form, setForm] = useState({});

  const handleLogin = async () => {
    try {
      // console.log(form);
      const result = await axios.post('users/login', form);
      // console.log(result.data.data);
      await AsyncStorage.setItem('userId', result.data.data.userId);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      alert(result.data.message);
      props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.box}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>Hi, Wellcome back to urticket!</Text>
        <SafeAreaView style={{padding: 0}}>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Email"
            onChangeText={text => handleChangeForm(text, 'email')}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Password"
            secureTextEntry={true}
            onChangeText={text => handleChangeForm(text, 'password')}
          />
          <Text style={styles.forgot}>Forgot Passsword?</Text>
          <View style={{padding: 10}}>
            <Button onPress={handleLogin} title="Log In" />
          </View>
        </SafeAreaView>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 20,
            fontFamily: 'poppins',
          }}>
          or sign in with
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Image
            style={{marginTop: 10, height: 40, width: 40}}
            source={require('../../assets/images/google.png')}
          />
          <Image
            style={{marginTop: 10, height: 40, width: 40}}
            source={require('../../assets/images/fb.png')}
          />
          <Image
            style={{marginTop: 10, height: 40, width: 40}}
            source={require('../../assets/images/finger.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'poppins',
    padding: 10,
  },
  subtitle: {
    padding: 10,
    fontFamily: 'poppins',
    fontStyle: 'normal',
    marginBottom: 5,
  },
  input: {
    borderRadius: 20,
    margin: 10,
  },
  box: {
    margin: 20,
    fontFamily: 'poppins',
  },
  forgot: {
    padding: 10,
    alignSelf: 'flex-end',
    fontSize: 16,
    color: 'blue',
  },
});
