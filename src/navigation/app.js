import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import Detail from '../screen/Detail';
import Profile from '../screen/Profile';
import Booking from '../screen/Booking';
import Wishlist from '../screen/Wishlist';
function MenuNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA AKAN MASUK KE DALAM DRAWER DISINI
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="My Booking" component={Booking} />

      <Drawer.Screen
        name="My Wishlist"
        component={Wishlist}
        options={{headerShown: false}}
      />
      {/* MY BOOKING */}
      {/* MY WISHLIST */}
    </Drawer.Navigator>
  );
}

export default function AppStackNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA DAPAT DI AKSES DILUAR DRAWER DISINI
    <Stack.Navigator initialRouteName="MenuNavigator">
      {/* HOME SCREEN */}
      <Stack.Screen
        name="MenuNavigator"
        component={MenuNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      {/* ORDER */}
      {/* PAYMENT */}
      {/* EDIT PROFILE */}
      {/* CHANGE PASSWORD */}
    </Stack.Navigator>
  );
}
