import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen,
  SignIn,
  Home,
  NewScreen,
  Register,
  ForgotPass,
  SuccessForgotPass,
  // DetailMovies,
  Booking,
  PaymentMethod,
  BookingSuccess,
  // Newest,
  // Saved,
  // Snack,
  Chart,
  MyAccount,
  NowPlaying,
  Trending,
  NearestCinema,
  // Foods,
  // Drinks,
  // Packets,
  // DetailMovies2,
  // PaymentMethod2,
  // Booking2,
  // BookingSuccess2,
  // BookingSuccess3,
  // PaymentMethod3,
} from '../pages';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewScreen"
        component={NewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPass}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessForgotPass"
        component={SuccessForgotPass}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="DetailMovies"
        component={DetailMovies}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookingSuccess"
        component={BookingSuccess}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Newest"
        component={Newest}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Saved"
        component={Saved}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Snack"
        component={Snack}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Chart"
        component={Chart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NowPlaying"
        component={NowPlaying}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Trending"
        component={Trending}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NearestCinema"
        component={NearestCinema}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Foods"
        component={Foods}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Drinks"
        component={Drinks}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Packets"
        component={Packets}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMovies2"
        component={DetailMovies2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentMethod2"
        component={PaymentMethod2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Booking2"
        component={Booking2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookingSuccess2"
        component={BookingSuccess2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookingSuccess3"
        component={BookingSuccess3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentMethod3"
        component={PaymentMethod3}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default index;
