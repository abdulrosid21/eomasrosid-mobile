import React from 'react';
import {View, Button, Text, StyleSheet, SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function Signup(props) {
  const signIn = () => {
    props.navigation.navigate('Signin');
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.box}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Already have an account? Login</Text>
        <SafeAreaView style={{padding: 0}}>
          <TextInput style={styles.input} mode="outlined" label="Fullname" />
          <TextInput style={styles.input} mode="outlined" label="Email" />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Password"
            secureTextEntry={true}
          />
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View>
              <Button title="Sign Up" />
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
