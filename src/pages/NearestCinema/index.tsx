import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {
  Back,
  Confirm,
  Food,
  IconHome,
  LogoWhite,
  Notif,
  Person,
  Qr,
} from '../../assets/icon';
import {Gap, Textinput} from '../../components';
import {Img7, Img8, Place1, Place2, Place3} from '../../assets/images';

const NearestCinema = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.contentHeader} />
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Home')}>
          <Back style={styles.bttnBack} />
        </TouchableOpacity>
        <View style={styles.logo}>
          <LogoWhite />
        </View>
        <TouchableOpacity style={styles.qr}>
          <Qr />
        </TouchableOpacity>
        <TouchableOpacity style={styles.notif}>
          <Notif />
        </TouchableOpacity>
        <View style={styles.search}>
          <Textinput placeholder="Search...." />
        </View>
        <View>
          <Text style={styles.title}> Nearest Cinema</Text>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.contentWrap}>
          <TouchableOpacity
            style={styles.place1}
            onPress={() => navigation.navigate('Cinema1')}>
            <Text style={styles.text1}>CGV Cinemas Grand Kawanua</Text>
            <Img7 style={styles.img1} />
          </TouchableOpacity>
          <View style={styles.place2}>
            <Text style={styles.text2}>Cinépolis Lippo Plaza Kairagi</Text>
            <Img8 style={styles.img2} />
          </View>
        </View>
        <View style={styles.contentWrap}>
          <View style={styles.place3}>
            <Text style={styles.text3}>Cinema XXI Mantos 1</Text>
            <Image source={Place1} style={styles.Img3} />
          </View>
          <View style={styles.place3}>
            <Text style={styles.text3}>Megamall XXI</Text>
            <Image source={Place2} style={styles.Img3} />
          </View>
        </View>
        <View style={styles.contentWrap}>
          <View style={styles.place4}>
            <Text style={styles.text3}>Mantos 3 XX1</Text>
            <Image source={Place3} style={styles.Img3} />
          </View>
        </View>
        <Gap height={100} />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.contentFooter}>
          <TouchableOpacity
            style={styles.homeIcon}
            onPress={() => navigation.navigate('Home')}>
            <IconHome />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.squareFrame}
            onPress={() => navigation.navigate('Newest')}>
            <Confirm />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Food}
            onPress={() => navigation.navigate('Snack')}>
            <Food />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Person}
            onPress={() => navigation.navigate('MyAccount')}>
            <Person />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NearestCinema;

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#121111',
  },
  header: {
    backgroundColor: '#200926',
    height: 200,
  },
  contentHeader: {
    flexDirection: 'row',
  },
  back: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
    backgroundColor: '#FFFFFF3D',
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  bttnBack: {
    marginLeft: 8,
    marginTop: 2,
  },
  logo: {
    marginLeft: 110,
    marginTop: -40,
    marginBottom: 30,
  },
  qr: {
    marginTop: -60,
    marginLeft: 330,
  },
  notif: {
    marginTop: -28,
    marginLeft: 361,
  },
  search: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  title: {
    color: 'white',
    marginTop: 10,
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    flexDirection: 'column',
  },
  contentWrap: {
    flexDirection: 'row',
  },
  place1: {
    backgroundColor: '#200926',
    width: 170,
    height: 170,
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 20,
  },
  img1: {
    marginHorizontal: 10,
    marginVertical: 2,
  },
  text1: {
    color: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  place2: {
    backgroundColor: '#200926',
    width: 170,
    height: 170,
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 30,
  },
  img2: {
    marginHorizontal: 10,
    marginVertical: 2,
  },
  text2: {
    color: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  place3: {
    backgroundColor: '#200926',
    width: 170,
    height: 150,
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 30,
  },
  img3: {
    marginHorizontal: 10,
    marginVertical: 2,
  },
  text3: {
    color: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  Img3: {
    width: 146,
    height: 100,
    borderRadius: 10,
    marginVertical: 2,
    marginHorizontal: 10,
  },
  place4: {
    backgroundColor: '#200926',
    width: 170,
    height: 150,
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 30,
  },
  img4: {
    marginHorizontal: 10,
    marginVertical: 2,
  },
  text4: {
    color: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  Img4: {
    width: 146,
    height: 100,
    borderRadius: 10,
    marginVertical: 2,
    marginHorizontal: 10,
  },
  contentFooter: {
    flexDirection: 'row',
  },
  footer: {
    backgroundColor: '#121111',
    height: 60,
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
});