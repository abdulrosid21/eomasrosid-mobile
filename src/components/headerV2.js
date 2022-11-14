import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function headerV2(props) {
  return (
    <View style={styles.main}>
      <View>
        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
          <Image
            style={styles.gambar}
            source={require('../assets/images/arrow-left.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.gambar}
            source={require('../assets/images/love.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    padding: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gambar: {
    height: 30,
    width: 30,
  },
});
