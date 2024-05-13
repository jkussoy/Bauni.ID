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
  SavedPurple,
} from '../../assets/icon';
import {
  Film1,
  Film2,
  Film3,
  Film4,
  Film5,
  Film6,
  Film7,
  Film8,
  Img1,
  Img15,
  Img2,
  Img8,
} from '../../assets/images';
import {Gap} from '../../components';

const Saved = ({navigation}) => {
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
            <Film4 style={styles.film1} />
            <View style={styles.contentTitle}>
              <View style={styles.title1}>
                <Text style={styles.subTitle1}>Evil Dead Rise</Text>
              </View>
              <View>
                <Text style={styles.subTitle2}> Horror - American</Text>
              </View>
              <View>
                <Text style={styles.subTitle2}>1 Hour 36 minutes</Text>
              </View>
              <View style={styles.sub2}>
                <SavedPurple style={styles.saved} />
                <Text style={styles.subTitle21}>
                  Watchlist {'     '} | {'     '} 224 want to watch
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.sub2}>
            <Film5 style={styles.film2} />
            <View style={styles.contentTitle}>
              <View style={styles.title2}>
                <Text style={styles.subTitle11}>Suzume</Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>Fantasy - Jepang</Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>2 Hour 2 minutes</Text>
              </View>
              <View style={styles.sub2}>
                <SavedPurple style={styles.saved} />
                <Text style={styles.subTitle21}>
                  Watchlist {'     '} | {'     '} 378 want to watch
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.sub2}>
            <Film6 style={styles.film2} />
            <View style={styles.contentTitle}>
              <View style={styles.title2}>
                <Text style={styles.subTitle11}> Buya Hamka</Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>Drama - Indonesia</Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>1 Hour 46 minutes</Text>
              </View>
              <View style={styles.sub2}>
                <SavedPurple style={styles.saved} />
                <Text style={styles.subTitle21}>
                  Watchlist {'     '} | {'     '} 639 want to watch
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.sub2}>
            <Film7 style={styles.film2} />
            <View style={styles.contentTitle}>
              <View style={styles.title2}>
                <Text style={styles.subTitle11}>Shazam! Fury Of The Gods</Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>
                  Action/Adventure - American
                </Text>
              </View>
              <View>
                <Text style={styles.subTitle3}>2 Hour 10 minutes</Text>
              </View>
              <View style={styles.sub2}>
                <SavedPurple style={styles.saved} />
                <Text style={styles.subTitle21}>
                  Watchlist {'     '} | {'     '} 230 want to watch
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Gap height={200} />
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

export default Saved;

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
    width: 150,
    height: 30,
    borderRadius: 10,
  },
  titleSubContent1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 19,
  },
  subContent2: {
    backgroundColor: '#D5D5D51C',
    width: 150,
    height: 30,
    borderRadius: 10,
    marginLeft: 45,
  },
  titleSubContent2: {
    color: '#9800BF',
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
    width: 200,
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
  subTitle21: {
    color: '#D5D5D561',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
  },
  saved: {
    marginLeft: 24,
    marginTop: 11,
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
