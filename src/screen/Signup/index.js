import React, {useState} from 'react';
import {View, Button, Text, StyleSheet, SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-paper';
import axios from '../../utils/axios';

export default function Signup(props) {
  const signIn = () => {
    props.navigation.navigate('Signin');
  };

  const [form, setForm] = useState({});

  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };
  const handleSignup = async () => {
    try {
      // console.log(form);
      const result = await axios.post('users/register', form);
      // console.log(result.data.data);
      alert(result.data.message);
      props.navigation.navigate('Signin');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.box}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Already have an account? Login</Text>
        <SafeAreaView style={{padding: 0}}>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Username"
            onChangeText={text => handleChangeForm(text, 'username')}
          />
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
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View>
              <Button onPress={handleSignup} title="Sign Up" />
            </View>
            <View>
              <Button title="Login" onPress={signIn} />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#ffffff',
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
    height: 40,
    margin: 10,
  },
  box: {
    margin: 20,
    fontFamily: 'poppins',
  },
});
