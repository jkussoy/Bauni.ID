import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  Back,
  ChairDark,
  ChairPurple,
  ChairWhite,
  Date,
  Saved,
  SearchLoct,
  Stars1,
} from '../../assets/icon';
import {Backgroundd, Img1, Trailer} from '../../assets/images';
import {Button, Textinput} from '../../components';
import {DarkTheme} from '@react-navigation/native';

const Booking = ({navigation}) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');

  const handleTimePress = time => {
    setSelectedTime(time);
  };

  const handleDatePress = date => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Backgroundd} style={styles.backgroundFoto}>
        <View style={styles.overlay}>
          <View style={[styles.container2, {flexDirection: 'row'}]}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate('DetailMovies')}>
              <Back style={styles.bttnBack} />
            </TouchableOpacity>
          </View>
          <View style={styles.row1}>
            <View style={styles.row}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <TouchableOpacity style={styles.row3}>
              <ChairWhite />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row2}>
              <ChairWhite />
            </TouchableOpacity>
            <View style={styles.row2}>
              <ChairDark />
            </View>
          </View>
          <View style={styles.row33}>
            <TouchableOpacity>
              <ChairWhite />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row2}>
              <ChairWhite />
            </TouchableOpacity>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row3}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
          </View>
          <View style={styles.row44}>
            <View>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row3}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
          </View>
          <View style={styles.row44}>
            <View>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <TouchableOpacity style={styles.row2}>
              <ChairPurple />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row2}>
              <ChairPurple />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row2}>
              <ChairPurple />
            </TouchableOpacity>
            <View style={styles.row3}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
          </View>
          <View style={styles.row44}>
            <View>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row3}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
          </View>
          <View style={styles.row22}>
            <View>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <TouchableOpacity style={styles.row3}>
              <ChairWhite />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row2}>
              <ChairWhite />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row2}>
              <ChairWhite />
            </TouchableOpacity>
            <View style={styles.row2}>
              <ChairDark />
            </View>
            <View style={styles.row2}>
              <ChairDark />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.solidBackgroundContainer}>
        <View style={styles.overlay}>
          <View style={styles.container3}>
            <View style={styles.select}>
              <ChairPurple />
            </View>
            <Text style={styles.text2}>Selected</Text>
            <View style={styles.select}>
              <ChairDark />
            </View>
            <Text style={styles.text2}>Booked</Text>
            <View style={styles.select}>
              <ChairWhite />
            </View>
            <Text style={styles.text2}>Available</Text>
          </View>
        </View>
        <View style={styles.loct}>
          <Text style={styles.textLoct}>Location</Text>
          <Textinput placeholder="Cinepolis Lippo Plaza Kairagi" />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.dateTitle}>May 2023</Text>
          <View style={styles.dates}>
            <TouchableOpacity onPress={() => handleDatePress('14 Mon')}>
              <Text
                style={[
                  styles.date,
                  selectedDate === '14 Mon' && styles.selectedDate,
                ]}>
                14 Mon
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDatePress('15 Tue')}>
              <Text
                style={[
                  styles.date,
                  selectedDate === '15 Tue' && styles.selectedDate,
                ]}>
                15 Tue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDatePress('16 Wed')}>
              <Text
                style={[
                  styles.date,
                  selectedDate === '16 Wed' && styles.selectedDate,
                ]}>
                16 Wed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDatePress('17 Thu')}>
              <Text
                style={[
                  styles.date,
                  selectedDate === '17 Thu' && styles.selectedDate,
                ]}>
                17 Thu
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDatePress('18 Fri')}>
              <Text
                style={[
                  styles.date,
                  selectedDate === '18 Fri' && styles.selectedDate,
                ]}>
                18 Fri
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDatePress('19 Sat')}>
              <Text
                style={[
                  styles.date,
                  selectedDate === '19 Sat' && styles.selectedDate,
                ]}>
                19 Sat
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.clock}>
            <TouchableOpacity
              style={[
                styles.clockButton,
                selectedTime === '08:30 AM' && styles.selectedButton,
              ]}
              onPress={() => handleTimePress('08:30 AM')}>
              <Text
                style={[
                  styles.clock1,
                  selectedTime === '08:30 AM' && styles.selectedText,
                ]}>
                08:30 AM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.clockButton,
                selectedTime === '11:30 AM' && styles.selectedButton,
              ]}
              onPress={() => handleTimePress('11:30 AM')}>
              <Text
                style={[
                  styles.clock2,
                  selectedTime === '11:30 AM' && styles.selectedText,
                ]}>
                11:30 AM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.clockButton,
                selectedTime === '02:30 PM' && styles.selectedButton,
              ]}
              onPress={() => handleTimePress('02:30 PM')}>
              <Text
                style={[
                  styles.clock3,
                  selectedTime === '02:30 PM' && styles.selectedText,
                ]}>
                02:30 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.clockButton,
                selectedTime === '05:30 PM' && styles.selectedButton,
              ]}
              onPress={() => handleTimePress('05:30 PM')}>
              <Text
                style={[
                  styles.clock4,
                  selectedTime === '05:30 PM' && styles.selectedText,
                ]}>
                05:30 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.clockButton,
                selectedTime === '08:30 PM' && styles.selectedButton,
              ]}
              onPress={() => handleTimePress('08:30 PM')}>
              <Text
                style={[
                  styles.clock5,
                  selectedTime === '08:30 PM' && styles.selectedText,
                ]}>
                08:30 PM
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.seats}> 3 Seats</Text>
          <View style={styles.contentWrapper2}>
            <Text style={styles.total}> $ 85</Text>
            <TouchableOpacity
              style={styles.buy}
              onPress={() => navigation.navigate('PaymentMethod')}>
              <Text style={styles.textBuy}>Buy Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loct: {
    marginTop: 80,
    marginHorizontal: 20,
  },
  textLoct: {
    color: 'white',
    marginBottom: -10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backgroundFoto: {
    flex: 0.7,
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTitle: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#343231',
    borderRadius: 10,
    width: 55,
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  selectedDate: {
    color: 'white',
    backgroundColor: '#9800BF',
  },
  seats: {
    color: 'white',
    marginTop: 10,
    marginLeft: 30,
  },
  total: {
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 45,
  },
  buy: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 100,
    marginBottom: 10,
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9800BF',
  },
  textBuy: {
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
    width: 100,
    marginLeft: 20,
    height: 50,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  date1: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#343231C9',
    width: 40,
    borderRadius: 10,
  },
  date2: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#343231C9',
    width: 40,
    borderRadius: 10,
    marginLeft: 20,
  },
  date3: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#343231C9',
    width: 40,
    borderRadius: 10,
    marginLeft: 20,
  },
  date4: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#343231C9',
    width: 40,
    borderRadius: 10,
    marginLeft: 20,
  },
  date5: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#343231C9',
    width: 40,
    borderRadius: 10,
    marginLeft: 20,
  },
  date6: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#343231C9',
    width: 40,
    borderRadius: 10,
    marginLeft: 20,
  },
  datess: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  clock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  clockButton: {
    backgroundColor: '#34323178',
    padding: 10,
    borderRadius: 200,
    marginTop: 10,
  },
  selectedButton: {
    backgroundColor: '#9800BF',
  },
  clock1: {
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  clock2: {
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  clock3: {
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  clock4: {
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  clock5: {
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  selectedText: {
    color: '#D9D9D9',
  },
  contentWrapper: {
    backgroundColor: '#6A008436',
    borderRadius: 50,
    width: 'auto',
    height: 'auto',
    marginTop: 50,
  },
  contentWrapper2: {
    borderRadius: 50,
    width: 'auto',
    height: 'auto',
    marginBottom: 80,
    flexDirection: 'row',
  },
  trailer: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  select: {
    marginLeft: 20,
    marginTop: 20,
  },
  row1: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 100,
    marginTop: 100,
  },
  row22: {
    flexDirection: 'row',
    marginBottom: 300,
    marginLeft: 31,
  },
  row33: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 65,
  },
  row44: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 31,
  },
  row2: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  row3: {
    flexDirection: 'row',
    marginLeft: 40,
  },
  book: {
    backgroundColor: '#9800BF',
    textAlign: 'center',
    borderRadius: 12,
    fontSize: 30,
    color: 'white',
    width: 210,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 90,
    marginTop: -30,
  },
  bttnBack: {
    marginLeft: 5,
    marginTop: 1,
  },
  back: {
    marginBottom: -10,
    backgroundColor: '#FFFFFF3D',
    borderRadius: 10,
    width: 25,
    height: 23,
    marginLeft: -340,
    marginTop: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'transparent',
    marginLeft: 50,
    marginRight: 50,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 100,
  },
  text2: {
    backgroundColor: 'transparent',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'grey',
    marginTop: 20,
  },
  text3: {
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginTop: 10,
    textAlign: 'justify',
  },
  text4: {
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginTop: 25,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    marginHorizontal: 20,
  },
  solidBackgroundContainer: {
    flex: 1,
    backgroundColor: '#343231',
  },
  container3: {
    flexDirection: 'row',
  },
  stars1: {
    marginLeft: 18,
  },
});
