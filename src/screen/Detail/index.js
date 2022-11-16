import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  Route,
} from 'react-native';
import axios from '../../utils/axios';
import HeaderV2 from '../../components/headerV2';
export default function Detail(props) {
  // const {id} = Route.params;
  // console.log(props.route.params.eventId);

  const id = props.route.params.eventId;
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataId();
  }, []);
  const getDataId = async () => {
    try {
      const result = await axios.get(`events/${id}`);
      // console.log(result.data.data);
      setData(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <ScrollView>
      <Image
        style={{width: '100%', height: 592, margin: 0}}
        source={{
          uri: `https://res.cloudinary.com/dihnhvb2q/image/upload/v1668526635/${data.image}`,
        }}
      />
      <HeaderV2 {...props} />
      <View
        style={{
          position: 'absolute',
          top: '25%',
          padding: 20,
        }}>
        <Text
          style={{
            fontFamily: 'poppins',
            fontSize: 28,
            color: 'white',
            letterSpacing: 2,
          }}>
          {data.name}
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
            {data.location}
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
            {data.dateTimeShow}
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
        <Text style={{fontFamily: 'poppins'}}>{data.detail}</Text>
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
