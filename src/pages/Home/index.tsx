import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  Confirm,
  Food,
  IconHome,
  LogoWhite,
  Notif,
  Person,
  Qr,
  Searchh,
  Stars1,
  Stars2,
} from '../../assets/icon';
import {Gap, Textinput} from '../../components';
import {Img1, Img2, Img3, Img4, Img5, Img7, Img8} from '../../assets/images';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <View style={styles.logo}>
            <LogoWhite />
          </View>
          <TouchableOpacity style={styles.qr}>
            <Qr />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notif}>
            <Notif />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <Textinput placeholder="Type to Search..." />
        </View>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.wrapText1}>
            <Text style={styles.text1}>Now Playing !!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('NowPlaying')}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.wrapImg1}>
              <Img1 style={styles.img1} />
            </View>
            <View style={styles.wrapImg2}>
              <Img2 style={styles.img2} />
            </View>
          </View>
        </View>
        <View style={styles.content2}>
          <View style={styles.wrapText2}>
            <Text style={styles.text2}>Trending !!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Trending')}>
              <Text style={styles.viewAll2}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailMovies')}>
              <View style={styles.wrapImg3}>
                <Img4 style={styles.img3} />
                <View style={styles.title1}>
                  <Text style={styles.textTitle1}>Shang-Chi</Text>
                  <View style={styles.stars1}>
                    <Stars1 />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailMovies2')}>
              <View style={styles.wrapImg4}>
                <Img5 style={styles.img4} />
                <View style={styles.title2}>
                  <Text style={styles.textTitle2}>Mario Bross</Text>
                  <View style={styles.stars2}>
                    <Stars2 />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content3}>
          <View style={styles.wrapText3}>
            <Text style={styles.text3}>Nearest Cinema</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('NearestCinema')}>
              <Text style={styles.viewAll3}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.wrapImg5}>
              <Img7 style={styles.img5} />
              <View style={styles.title3}>
                <Text style={styles.textTitle3}>CGV Cinemas Grand Kawanua</Text>
              </View>
            </View>
            <View style={styles.wrapImg6}>
              <Img8 style={styles.img6} />
              <View style={styles.title4}>
                <Text style={styles.textTitle4}>
                  Cinépolis Lippo Plaza Kairagi
                </Text>
              </View>
            </View>
          </View>
        </View>
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

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: '#200926',
    height: 200,
  },
  footer: {
    backgroundColor: '#121111',
    height: 60,
  },
  contentHeader: {
    flexDirection: 'row',
  },
  contentFooter: {
    flexDirection: 'row',
  },
  logo: {
    marginLeft: 20,
    marginTop: 50,
  },
  qr: {
    marginTop: 70,
    marginLeft: 100,
  },
  notif: {
    marginTop: 70,
    marginLeft: 10,
  },
  search: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  content: {
    backgroundColor: '#121111',
    height: 150,
  },
  content2: {
    backgroundColor: '#121111',
    height: 300,
  },
  content3: {
    backgroundColor: '#121111',
    height: 300,
  },
  contentWrapper: {
    flexDirection: 'row',
  },
  wrapText1: {
    flexDirection: 'row',
  },
  text1: {
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapText2: {
    flexDirection: 'row',
  },
  text2: {
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapText3: {
    flexDirection: 'row',
  },
  text3: {
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#9800BF',
    fontWeight: 'bold',
    marginLeft: 165,
    marginTop: 15,
  },
  viewAll2: {
    color: '#9800BF',
    fontWeight: 'bold',
    marginLeft: 196,
    marginTop: 15,
  },
  viewAll3: {
    color: '#9800BF',
    fontWeight: 'bold',
    marginLeft: 156,
    marginTop: 15,
  },
  wrapImg1: {
    backgroundColor: '#200926',
    marginLeft: 20,
    width: 160,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
  },
  img1: {
    marginTop: 10,
    marginLeft: 9,
    marginBottom: 10,
  },
  wrapImg2: {
    backgroundColor: '#200926',
    marginLeft: 45,
    width: 160,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
  },
  img2: {
    marginTop: 10,
    marginLeft: 9,
    marginBottom: 10,
  },
  wrapImg3: {
    backgroundColor: '#200926',
    marginLeft: 20,
    width: 160,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
  },
  img3: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
  wrapImg4: {
    backgroundColor: '#200926',
    marginLeft: 45,
    width: 160,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
  },
  img4: {
    marginTop: 10,
    marginLeft: 21,
    marginBottom: 10,
  },
  wrapImg5: {
    backgroundColor: '#200926',
    marginLeft: 10,
    width: 190,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
  },
  img5: {
    marginTop: 10,
    marginLeft: 21,
    marginBottom: 10,
  },
  wrapImg6: {
    backgroundColor: '#200926',
    marginLeft: 12,
    width: 190,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
  },
  img6: {
    marginTop: 10,
    marginLeft: 21,
    marginBottom: 10,
  },
  title1: {
    flexDirection: 'column',
  },
  textTitle1: {
    color: 'white',
    marginLeft: 20,
  },
  stars1: {
    marginLeft: 15,
    marginVertical: 5,
  },
  title2: {
    flexDirection: 'column',
  },
  textTitle2: {
    color: 'white',
    marginLeft: 20,
  },
  stars2: {
    marginLeft: 15,
    marginVertical: 5,
  },
  title3: {
    flexDirection: 'column',
  },
  textTitle3: {
    color: 'white',
    marginLeft: 20,
    marginBottom: 10,
  },
  title4: {
    flexDirection: 'column',
  },
  textTitle4: {
    color: 'white',
    marginLeft: 20,
    marginBottom: 10,
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
