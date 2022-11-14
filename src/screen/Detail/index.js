import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

import HeaderV2 from '../../components/headerV2';
export default function Detail(props) {
  return (
    <ScrollView>
      <Image
        style={{width: '100%', height: 592, margin: 0}}
        source={require('../../assets/images/event1.png')}
      />
      <HeaderV2 {...props} />
      <View
        style={{
          position: 'absolute',
          top: '30%',
          padding: 20,
        }}>
        <Text
          style={{
            fontFamily: 'poppins',
            fontSize: 28,
            color: 'white',
            letterSpacing: 2,
          }}>
          Sights & Sounds{'\n'} Exhibition
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 10, padding: 5}}>
          <Image source={require('../../assets/images/Star.png')} />
          <Text
            style={{
              fontFamily: 'poppins',
              fontSize: 14,
              color: 'white',
              letterSpacing: 1,
            }}>
            Jakarta, Indonesia
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            padding: 5,
            letterSpacing: 1,
          }}>
          <Image source={require('../../assets/images/clock.png')} />
          <Text style={{fontFamily: 'poppins', fontSize: 14, color: 'white'}}>
            Wed, 15 Nov, 4:00 PM
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'poppins',
            fontSize: 14,
            color: 'white',
            padding: 5,
            letterSpacing: 0.5,
          }}>
          Attendees
        </Text>
        <Image source={require('../../assets/images/attendes.png')} />
      </View>
      <View
        style={{
          padding: 20,
          width: '100%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -30,
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            color: '#373A42',
            fontFamily: 'poppins',
            fontSize: 20,
            fontStyle: 'normal',
            letterSpacing: 1,
          }}>
          Event Detail
        </Text>
        <Text style={{fontFamily: 'poppins'}}>
          After his controversial art exhibition "Tear and Consume" back in
          November 2018, in which guests were invited to tear up…
        </Text>
        <TouchableOpacity>
          <Text style={{color: 'blue', marginVertical: 10}}> Read More</Text>
        </TouchableOpacity>
        <Text style={{fontFamily: 'poppins', fontSize: 20, color: '#373A42'}}>
          Location
        </Text>
        <Image
          style={{alignSelf: 'center', marginVertical: 20}}
          source={require('../../assets/images/location.png')}
        />
        <Button title="Buy Ticket" />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({});
