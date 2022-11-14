import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderV1 from '../../components/headerV1';

export default function Home(props) {
  const navDetail = () => props.navigation.navigate('Detail');
  return (
    <ScrollView style={styles.container}>
      <HeaderV1 {...props} />
      <View
        style={{
          width: '100%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -23,
        }}>
        <View style={styles.sortDateContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>13</Text>
            <Text style={styles.date}>Mon</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>14</Text>
            <Text style={styles.date}>Tue</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>15</Text>
            <Text style={styles.date}>Wed</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>16</Text>
            <Text style={styles.date}>Thu</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>17</Text>
            <Text style={styles.date}>fri</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: -20,
          }}>
          <View>
            <Text
              style={{fontFamily: 'poppins', fontSize: 24, color: '#373A42'}}>
              Event For You
            </Text>
          </View>
          <View>
            <Image source={require('../../assets/images/filter.png')} />
          </View>
        </View>
        <ScrollView style={{backgroundColor: 'white'}} horizontal={true}>
          <View style={{padding: 20}}>
            <Image
              style={{borderRadius: 30, height: 250, width: 150}}
              source={require('../../assets/images/event1.png')}
            />
            <View style={{position: 'absolute', bottom: 40, left: 35}}>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 5,
                  fontFamily: 'poppins',
                  fontSize: 9,
                  fontStyle: 'normal',
                }}>
                Wed, 15 Nov, 4:00 PM
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 20,
                  fontFamily: 'poppins',
                  fontSize: 13,
                  fontStyle: 'normal',
                }}>
                Sights & Sounds Exhibition
              </Text>
              <TouchableOpacity onPress={navDetail}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../assets/images/card-button.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 20}}>
            <Image
              style={{borderRadius: 30, height: 250, width: 150}}
              source={require('../../assets/images/event1.png')}
            />
            <View style={{position: 'absolute', bottom: 40, left: 35}}>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 5,
                  fontFamily: 'poppins',
                  fontSize: 9,
                  fontStyle: 'normal',
                }}>
                Wed, 15 Nov, 4:00 PM
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 20,
                  fontFamily: 'poppins',
                  fontSize: 13,
                  fontStyle: 'normal',
                }}>
                Sights & Sounds Exhibition
              </Text>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../assets/images/card-button.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 20}}>
            <Image
              style={{borderRadius: 30, height: 250, width: 150}}
              source={require('../../assets/images/event1.png')}
            />
            <View style={{position: 'absolute', bottom: 40, left: 35}}>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 5,
                  fontFamily: 'poppins',
                  fontSize: 9,
                  fontStyle: 'normal',
                }}>
                Wed, 15 Nov, 4:00 PM
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 20,
                  fontFamily: 'poppins',
                  fontSize: 13,
                  fontStyle: 'normal',
                }}>
                Sights & Sounds Exhibition
              </Text>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../assets/images/card-button.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 20}}>
            <Image
              style={{borderRadius: 30, height: 250, width: 150}}
              source={require('../../assets/images/event1.png')}
            />
            <View style={{position: 'absolute', bottom: 40, left: 35}}>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 5,
                  fontFamily: 'poppins',
                  fontSize: 9,
                  fontStyle: 'normal',
                }}>
                Wed, 15 Nov, 4:00 PM
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 20,
                  fontFamily: 'poppins',
                  fontSize: 13,
                  fontStyle: 'normal',
                }}>
                Sights & Sounds Exhibition
              </Text>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../assets/images/card-button.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 20}}>
            <Image
              style={{borderRadius: 30, height: 250, width: 150}}
              source={require('../../assets/images/event1.png')}
            />
            <View style={{position: 'absolute', bottom: 40, left: 35}}>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 5,
                  fontFamily: 'poppins',
                  fontSize: 9,
                  fontStyle: 'normal',
                }}>
                Wed, 15 Nov, 4:00 PM
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 20,
                  fontFamily: 'poppins',
                  fontSize: 13,
                  fontStyle: 'normal',
                }}>
                Sights & Sounds Exhibition
              </Text>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../assets/images/card-button.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 20}}>
            <Image
              style={{borderRadius: 30, height: 250, width: 150}}
              source={require('../../assets/images/event1.png')}
            />
            <View style={{position: 'absolute', bottom: 40, left: 35}}>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 5,
                  fontFamily: 'poppins',
                  fontSize: 9,
                  fontStyle: 'normal',
                }}>
                Wed, 15 Nov, 4:00 PM
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 20,
                  fontFamily: 'poppins',
                  fontSize: 13,
                  fontStyle: 'normal',
                }}>
                Sights & Sounds Exhibition
              </Text>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../assets/images/card-button.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={{backgroundColor: 'white', padding: 20}}>
          <Text style={{fontFamily: 'poppins', fontSize: 24, color: '#373A42'}}>
            Discover
          </Text>
        </View>
        <ScrollView style={{backgroundColor: 'white'}} horizontal={true}>
          <Image source={require('../../assets/images/discover-maps.png')} />
          <Image source={require('../../assets/images/discover-music.png')} />
          <Image source={require('../../assets/images/discover-maps.png')} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  sortDateContainer: {
    fontFamily: 'poppins',
    backgroundColor: '#222B45',
    width: '100%',
    flexDirection: 'row',
    padding: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  dateContainer: {alignItems: 'center'},
  date: {color: 'white'},
});
