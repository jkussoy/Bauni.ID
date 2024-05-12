import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Backgroundd, Drink2, Img2, Img4, SuperMario} from '../../assets/images';
import {Barcode, LogoWhite, Verif} from '../../assets/icon';

const BookingSuccess = ({navigation, route}) => {
  const {selectedDate, selectedTime} = route.params;

  const today = new Date();
  const formattedDate = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoWhite />
      </View>
      <View style={styles.bookingSuccessContainer}>
        <View style={styles.verif}>
          <Verif />
        </View>
        <Text style={styles.bookingSuccessTitle}>Booking Success</Text>
        <Text style={styles.bookingSuccessSubtitle}>
          Thanks for choosing bauni.id
        </Text>
        <View style={styles.bookingDetailsContainer}>
          <Text style={styles.detailLabel}>Invoice Date</Text>
          <Text style={styles.detailLabel}>Payment ID</Text>
        </View>
        <View style={styles.bookingDetailsContainer}>
          <Text style={styles.detailValue}>{formattedDate}</Text>
          <Text style={styles.detailValue}>SHCH7</Text>
        </View>
      </View>
      <View style={styles.orderSummaryContainer}>
        <Text style={styles.orderSummaryTitle}>Your Order Summary</Text>
        <View style={styles.movieDetailsContainer}>
          <View style={styles.movieDetailsTextContainer}>
            <Text style={styles.movieTitle}>
              Order:{' '}
              {menuItems.map((menuItem, index) => (
                <Text key={index}>
                  {menuItem.name} {index !== menuItems.length - 1 ? ', ' : ''}
                </Text>
              ))}
            </Text>
            <View style={styles.date}>
              <Text style={styles.textDate}>Date: </Text>
              <Text style={styles.movieDate}>{selectedDate.dateString}</Text>
            </View>
            <View style={styles.time}>
              <Text style={styles.textTime}>Time: </Text>
              <Text style={styles.movieTime}>{selectedTime}</Text>
            </View>
            <View style={styles.place}>
              <Text style={styles.textLocation}>Location: </Text>
              <Text style={styles.movieLocation}>
                CGV Cinemas Grand Kawanua
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.barcodeContainer}>
          <Text style={styles.barcodeText}>
            Use the barcode when entering the theater
          </Text>
          <Image source={Barcode} style={styles.barcode} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textDone}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200926',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#200926',
    marginLeft: 100,
    marginTop: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    flexDirection: 'row',
  },
  textDate: {
    color: '#CDCACA',
    marginRight: 10,
  },
  time: {
    flexDirection: 'row',
  },
  textTime: {
    color: '#CDCACA',
    marginRight: 10,
  },
  place: {
    flexDirection: 'row',
  },
  textLocation: {
    color: '#CDCACA',
    marginRight: 10,
  },
  Button: {
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
    marginLeft: 130,
    marginBottom: 10,
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9800BF',
  },
  textDone: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    marginLeft: 20,
    height: 50,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  verif: {
    marginLeft: 170,
  },
  bookingSuccessContainer: {
    backgroundColor: '#121111',
    padding: 16,
  },
  bookingSuccessTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 110,
  },
  bookingSuccessSubtitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 110,
  },
  bookingDetailsContainer: {
    backgroundColor: '#312932',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
  },
  detailLabel: {
    color: 'white',
    fontSize: 14,
    marginLeft: 20,
    marginRight: 100,
  },
  detailValue: {
    color: 'white',
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 25,
    marginRight: 110,
    marginTop: -30,
  },
  orderSummaryContainer: {
    backgroundColor: '#312932',
    padding: 16,
    marginTop: 1,
    borderRadius: 8,
    width: 'auto',
  },
  orderSummaryTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  movieDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: 'white',
  },
  moviePoster: {
    width: 80,
    height: 120,
    marginRight: 16,
  },
  movieDetailsTextContainer: {
    flex: 1,
  },
  movieTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  movieDate: {
    color: 'white',
    fontSize: 14,
    marginBottom: 4,
  },
  movieTime: {
    color: 'white',
    fontSize: 14,
    marginBottom: 4,
  },
  movieLocation: {
    color: 'white',
    fontSize: 14,
    marginBottom: 4,
  },
  barcodeContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  barcode: {
    width: 200,
    height: 50,
    marginBottom: 8,
  },
  barcodeText: {
    color: 'white',
    fontSize: 14,
  },
  buttonContainer: {
    backgroundColor: '#9800BF',
    padding: 16,
    marginTop: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BookingSuccess3;
