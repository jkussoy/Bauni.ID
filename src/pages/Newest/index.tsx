import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {
  Back,
  Confirm,
  ConfirmPurple,
  Food,
  IconHome,
  IconHomeWhite,
  LogoWhite,
  Notif,
  Person,
  Qr,
} from '../../assets/icon';
import {
  Film1,
  Film2,
  Film3,
  Img1,
  Img15,
  Img2,
  Img8,
} from '../../assets/images';
import {Gap} from '../../components';

const Newest = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <View style={styles.logo}>
            <LogoWhite />
            <Text style={styles.title}> My Tickets</Text>
          </View>
          <TouchableOpacity style={styles.qr}>
            <Qr />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notif}>
            <Notif />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.subContent1}
            onPress={() => navigation.navigate('Newest')}>
            <Text style={styles.titleSubContent1}>Newest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subContent2}
            onPress={() => navigation.navigate('Saved')}>
            <Text style={styles.titleSubContent2}>Saved</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.contentScroll}>
        <View style={styles.content2}>
          <View style={styles.sub2}>
            <Image source={Film1} style={styles.film1} />
            <View style={styles.contentTitle}>
              <View style={styles.title1}>
                <Text style={styles.subTitle1}> Waktu Maghrib</Text>
              </View>
              <View>
                <Text style={styles.subTitle2}> Horror - Indonesia</Text>
              </View>
              <View>
                <Text style={styles.subTitle2}> CGV Cinemas Grand Kawanua</Text>
              </View>
              <TouchableOpacity style={styles.bttnViewTiket}>
                <Text style={styles.bttnText}> View Ticket</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sub2}>
            <Image source={Img15} style={styles.film2} />
            <View style={styles.contentTitle}>
              <View style={styles.title2}>
                <Text style={styles.subTitle11}>
                  Shang-Chi and the Legend of the Ten Rings
                </Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>Action - American</Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>
                  Cinépolis Lippo Plaza Kairagi
                </Text>
              </View>
              <TouchableOpacity
                style={styles.bttnViewTiket}
                onPress={() => navigation.navigate('BookingSuccess')}>
                <Text style={styles.bttnText}> View Ticket</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sub2}>
            <Image source={Film2} style={styles.film2} />
            <View style={styles.contentTitle}>
              <View style={styles.title2}>
                <Text style={styles.subTitle11}> Fast X</Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>Action - American</Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>The Premiere XXI Mantos 3</Text>
              </View>
              <TouchableOpacity style={styles.bttnViewTiket}>
                <Text style={styles.bttnText}> View Ticket</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sub2}>
            <Image source={Film3} style={styles.film2} />
            <View style={styles.contentTitle}>
              <View style={styles.title2}>
                <Text style={styles.subTitle11}> Guardian Of The Galaxy</Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>Action - American</Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>
                  Cinépolis Lippo Plaza Kairagi
                </Text>
              </View>
              <TouchableOpacity style={styles.bttnViewTiket}>
                <Text style={styles.bttnText}> View Ticket</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Gap height={100} />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.contentFooter}>
          <TouchableOpacity
            style={styles.homeIcon}
            onPress={() => navigation.navigate('Home')}>
            <IconHomeWhite />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.squareFrame}
            onPress={() => navigation.navigate('Newest')}>
            <ConfirmPurple />
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

export default Newest;

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#121111',
  },
  header: {
    backgroundColor: '#200926',
    height: 210,
  },
  contentHeader: {
    flexDirection: 'row',
  },
  logo: {
    marginLeft: 24,
    marginTop: 60,
  },
  title: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
  },
  qr: {
    marginTop: 78,
    marginLeft: 90,
  },
  notif: {
    marginTop: 78,
    marginLeft: 10,
  },
  content: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
  },
  subContent1: {
    backgroundColor: '#D5D5D51C',
    width: 150,
    height: 30,
    borderRadius: 10,
  },
  titleSubContent1: {
    color: '#9800BF',
    textAlign: 'center',
    fontSize: 19,
  },
  subContent2: {
    width: 150,
    height: 30,
    borderRadius: 10,
    marginLeft: 45,
  },
  titleSubContent2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 19,
  },
  content2: {
    marginTop: 10,
    marginLeft: 20,
  },
  sub2: {
    flexDirection: 'row',
  },
  film1: {
    width: 120,
    height: 150,
    borderRadius: 20,
  },
  contentTitle: {
    flexDirection: 'column',
  },
  contentScroll: {
    flexDirection: 'column',
  },
  title1: {
    marginLeft: 20,
    color: 'white',
  },
  subTitle1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  subTitle2: {
    color: '#D5D5D561',
    fontSize: 15,
    marginLeft: 24,
    marginTop: 5,
  },
  bttnViewTiket: {
    backgroundColor: '#9800BF',
    width: 100,
    marginLeft: 24,
    marginTop: 10,
    borderRadius: 20,
  },
  bttnText: {
    color: 'white',
    textAlign: 'center',
  },
  film2: {
    width: 120,
    height: 150,
    borderRadius: 20,
    marginTop: 20,
  },
  subTitle11: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
  },
  title2: {
    marginLeft: 20,
    color: 'white',
  },
  subTitle3: {
    color: '#D5D5D561',
    fontSize: 15,
    marginLeft: 24,
    marginTop: 5,
  },
  contentFooter: {
    flexDirection: 'row',
  },
  footer: {
    backgroundColor: '#121111',
    height: 60,
    marginTop: -101,
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
