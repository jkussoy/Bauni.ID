import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-elements';
import {Button, Gap, PageHeader} from '../../components';
import {
  Back,
  BackButton,
  Confirm,
  Food,
  Gopay,
  IconHome,
  LogoWhite,
  Notif,
  Ovo,
  Person,
  Qr,
  Searchh,
  SquareFrame,
  Stars1,
  Stars2,
  Stars3,
} from '../../assets/icon';
import {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from '../../assets/images';
import {useState} from 'react';

const PaymentMethod = ({navigation}) => {
  const [isWalletSelected, setIsWalletSelected] = useState(false);
  const [isGopaySelected, setIsGopaySelected] = useState(false);
  const [isOvoSelected, setIsOvoSelected] = useState(false);

  return (
    <ScrollView style={styles.page}>
      <View
        style={[
          styles.container2,
          {
            flexDirection: 'row',
          },
        ]}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Home')}>
          <Back style={styles.bttnBack} />
        </TouchableOpacity>
        <View style={styles.logoTicket}>
          <LogoWhite />
        </View>
      </View>
      <View style={styles.contentWrapper1}>
        <View
          style={[
            styles.container2,
            {
              flexDirection: 'row',
            },
          ]}>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <Img4 style={styles.imgOrder} />
              <View>
                <Text style={styles.Text}>Biling Order</Text>
                <View style={styles.container4}>
                  <Text style={styles.Text3}>Prize</Text>
                  <Text style={styles.Text4}>Seats</Text>
                </View>
                <View style={styles.container4}>
                  <Text style={styles.Text5}># 85</Text>
                  <Text style={styles.Text6}>3</Text>
                </View>
              </View>
            </View>
          </View>
          <Gap height={70} />
        </View>
        <View
          style={[
            styles.container2,
            {
              flexDirection: 'row',
            },
          ]}>
          <View style={styles.container2}>
            <Text style={styles.Text}>Payment Method</Text>
            <View style={styles.container5}>
              <View style={styles.container4}>
                <View style={styles.walletContainer}>
                  <TouchableOpacity style={styles.buttonText4}>
                    <Text style={styles.Text8}>B</Text>
                  </TouchableOpacity>
                  <Text style={styles.Text7}>bauni.id Wallet |</Text>
                  <Text style={styles.Text7}>Balance: $250</Text>
                  <TouchableOpacity style={styles.buttonText5}>
                    <Text style={styles.Text8}>Top Up</Text>
                  </TouchableOpacity>
                </View>
                <CheckBox
                  checked={isWalletSelected}
                  onPress={() => setIsWalletSelected(!isWalletSelected)}
                  checkedColor="black"
                  uncheckedColor="white"
                  containerStyle={styles.checkbox}
                  textStyle={styles.checkboxText}
                  wrapperStyle={styles.checkboxWrapper}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
              <View style={styles.container4}>
                <View style={styles.paymentContainer}>
                  <Gopay style={styles.gopay} />
                  <Text style={styles.Text3}>Gopay</Text>
                </View>
                <TouchableOpacity>
                  <CheckBox
                    checked={isGopaySelected}
                    onPress={() => setIsGopaySelected(!isGopaySelected)}
                    checkedColor="black"
                    uncheckedColor="white"
                    containerStyle={styles.checkbox2}
                    textStyle={styles.checkboxText}
                    wrapperStyle={styles.checkboxWrapper}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.container4}>
                <View style={styles.paymentContainer}>
                  <Ovo style={styles.ovo} />
                  <Text style={styles.Text9}>Ovo</Text>
                </View>
                <CheckBox
                  checked={isOvoSelected}
                  onPress={() => setIsOvoSelected(!isOvoSelected)}
                  checkedColor="black"
                  uncheckedColor="white"
                  containerStyle={styles.checkbox3}
                  textStyle={styles.checkboxText}
                  wrapperStyle={styles.checkboxWrapper}
                />
              </View>
            </View>
          </View>
          <Gap height={70} />
        </View>
        <TouchableOpacity
          style={styles.buy}
          onPress={() => navigation.navigate('BookingSuccess')}>
          <Text style={styles.textBuy}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#200926',
  },
  logoTicket: {
    marginTop: 50,
    marginLeft: 80,
  },
  back: {
    marginTop: 30,
    marginLeft: 30,
    backgroundColor: '#FFFFFF3D',
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  bttnBack: {
    marginLeft: 8,
    marginTop: 2,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 2,
    borderRadius: 12,
    width: 28,
    height: 30,
    marginLeft: 8,
  },
  checkbox2: {
    marginLeft: 248,
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 2,
    borderRadius: 12,
    width: 28,
    height: 30,
  },
  checkbox3: {
    marginLeft: 256,
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 2,
    borderRadius: 12,
    width: 28,
    height: 30,
  },
  checkboxText: {
    width: 20,
    height: 20,
    justifyContent: 'center',
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxWrapper: {
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'black',
    padding: 1,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  buy: {
    color: 'white',
    textAlign: 'center',
    marginTop: 170,
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
  gopay: {
    marginTop: 10,
    marginLeft: 1,
  },
  ovo: {
    marginTop: 10,
    marginLeft: 1,
    marginBottom: 10,
  },
  imgOrder: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 180,
    marginTop: 25,
  },
  buttonText2: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 230,
    marginTop: 25,
  },
  buttonText3: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 170,
    marginTop: 25,
  },
  buttonText4: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    borderRadius: 10,
    width: 20,
    marginTop: 10,
    backgroundColor: '#9800BF',
  },
  buttonText5: {
    fontWeight: 'bold',
    color: 'White',
    marginLeft: 10,
    borderRadius: 10,
    width: 50,
    marginTop: 10,
    backgroundColor: '#1FD41B78',
  },
  contentWrapper1: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: '#121111',
  },
  Text: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  Text2: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 24,
  },
  Text3: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  Text4: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginTop: 10,
    marginLeft: 50,
    marginRight: 20,
  },
  Text5: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -10,
    marginLeft: 10,
  },
  Text6: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 10,
    marginTop: -10,
    marginLeft: 50,
  },
  Text7: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 2,
    marginTop: 4,
    marginLeft: 10,
  },
  Text8: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 2,
    marginTop: 4,
    marginLeft: 7,
  },
  Text9: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 2,
    marginTop: 4,
    marginLeft: 7,
  },
  Title: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  cashOn: {
    flexDirection: 'row',
  },
  cashOnStyle1: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 20,
  },
  cashOnMoney1: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 20,
    paddingLeft: 20,
  },
  cashOnStyle2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 11,
  },
  cashOnMoney2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 11,
    paddingLeft: 20,
  },
  contentWrapper2: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    paddingBottom: 72,
  },
  transactionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 10.6,
    marginBottom: 9,
  },
  contentWrapper3: {
    flex: 2,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: '#200926',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  homeIcon: {
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    alignItems: 'center',
  },
  squareFrame: {
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    alignItems: 'center',
  },
  Food: {
    paddingTop: 10,
    paddingBottom: 15,
    flex: 1,
    alignItems: 'center',
  },
  Person: {
    paddingTop: 16,
    paddingBottom: 15,
    flex: 1,
    alignItems: 'center',
  },
  Qr: {
    marginLeft: 220,
    paddingTop: 39,
    paddingBottom: 15,
  },
  Notif: {
    paddingTop: 39,
    paddingBottom: 15,
  },
  container2: {
    flexDirection: 'column',
  },
  container3: {
    backgroundColor: '#D5D5D540',
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 50,
  },
  container5: {
    backgroundColor: '#D5D5D540',
    flexDirection: 'column',
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: -10,
  },
  container4: {
    flexDirection: 'row',
  },
  Img1: {
    marginLeft: 10,
  },
  Img2: {
    marginLeft: 10,
  },
  Img3: {
    marginLeft: 10,
  },
  Img4: {
    borderRadius: 10,
  },
  Img5: {
    marginLeft: 20,
  },
  Img6: {
    marginLeft: 20,
  },
  Img7: {
    marginLeft: 20,
  },
  Img8: {
    marginLeft: 20,
  },
  Img9: {
    marginLeft: 20,
  },
});
