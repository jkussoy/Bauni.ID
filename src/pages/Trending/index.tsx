import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
import {
  Film1,
  Film2,
  Film3,
  Img15,
  Img17,
  Img18,
  Img19,
  Img20,
  Img21,
  Img22,
} from '../../assets/images';
import {Gap, Textinput} from '../../components';

const Trending = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={[styles.container2]}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Home')}>
          <Back style={styles.bttnBack} />
        </TouchableOpacity>
        <View style={styles.logo}>
          <LogoWhite />
        </View>
        <View style={styles.Qr}>
          <Qr />
        </View>
        <View style={styles.Notif}>
          <Notif />
        </View>
      </View>
      <View style={styles.search}>
        <Textinput placeholder="Type to Search..." />
      </View>
      <Text style={styles.title}>Trending !!</Text>
      <ScrollView style={styles.content}>
        <View style={styles.contentWrapper1}>
          <Gap height={10} />
          <View style={styles.contentWrap1}>
            <View style={styles.contentMov}>
              <TouchableOpacity
                style={styles.contentMov1}
                onPress={() => navigation.navigate('DetailMovies')}>
                <Text style={styles.titleMov}>Shang Chi</Text>
                <View style={styles.mov1}>
                  <Image source={Img15} style={styles.moviePoster} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.contentMov}>
              <View style={styles.contentMov2}>
                <Text style={styles.titleMov}>Waktu Maghrib</Text>
                <View style={styles.mov1}>
                  <Image source={Film1} style={styles.moviePoster} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentWrap1}>
            <View style={styles.contentMov}>
              <View style={styles.contentMov3}>
                <Text style={styles.titleMov}>Fast X</Text>
                <View style={styles.mov1}>
                  <Image source={Film2} style={styles.moviePoster} />
                </View>
              </View>
            </View>
            <View style={styles.contentMov}>
              <View style={styles.contentMov4}>
                <Text style={styles.titleMov}>Guardian Of the Galaxy</Text>
                <View style={styles.mov1}>
                  <Image source={Film3} style={styles.moviePoster} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentWrap1}>
            <View style={styles.contentMov}>
              <View style={styles.contentMov3}>
                <Text style={styles.titleMov}>Kupu Kupu Kertas</Text>
                <View style={styles.mov1}>
                  <Image source={Img17} style={styles.moviePoster} />
                </View>
              </View>
            </View>
            <View style={styles.contentMov}>
              <View style={styles.contentMov4}>
                <Text style={styles.titleMov}>Gatot Kaca</Text>
                <View style={styles.mov1}>
                  <Image source={Img18} style={styles.moviePoster} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentWrap1}>
            <View style={styles.contentMov}>
              <View style={styles.contentMov3}>
                <Text style={styles.titleMov}>Pengabdi Setan 2</Text>
                <View style={styles.mov1}>
                  <Image source={Img19} style={styles.moviePoster} />
                </View>
              </View>
            </View>
            <View style={styles.contentMov}>
              <View style={styles.contentMov4}>
                <Text style={styles.titleMov}>Sosok Ketiga</Text>
                <View style={styles.mov1}>
                  <Image source={Img20} style={styles.moviePoster} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentWrap1}>
            <View style={styles.contentMov}>
              <View style={styles.contentMov3}>
                <Text style={styles.titleMov}>Detektif Jaga Jarak</Text>
                <View style={styles.mov1}>
                  <Image source={Img21} style={styles.moviePoster} />
                </View>
              </View>
            </View>
            <View style={styles.contentMov}>
              <View style={styles.contentMov4}>
                <Text style={styles.titleMov}>The Barbie Movie</Text>
                <View style={styles.mov1}>
                  <Image source={Img22} style={styles.moviePoster} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Gap height={1} />
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

export default Trending;

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#200926',
  },
  content: {
    height: 550,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container2: {
    flexDirection: 'row',
  },
  contentWrapper1: {
    marginTop: 10,
    height: 820,
    paddingHorizontal: 25,
    backgroundColor: '#121111',
  },
  contentMov: {
    flexDirection: 'column',
  },
  contentMov1: {
    marginTop: 4,
    borderRadius: 10,
    backgroundColor: '#200926',
    elevation: 13,
  },
  contentMov2: {
    marginTop: 2,
    borderRadius: 10,
    backgroundColor: '#200926',
    elevation: 13,
    marginLeft: 30,
  },
  contentMov3: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#200926',
    elevation: 13,
    marginLeft: 2,
  },
  contentMov4: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#200926',
    elevation: 13,
    marginLeft: 30,
  },
  contentWrap1: {
    flexDirection: 'row',
  },
  contentWrap2: {
    marginTop: 20,
    flexDirection: 'row',
  },
  back: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: '#FFFFFF3D',
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  bttnBack: {
    marginLeft: 8,
    marginTop: 2,
  },
  Qr: {
    marginLeft: 40,
    paddingTop: 40,
    paddingBottom: 15,
  },
  Notif: {
    paddingTop: 40,
    paddingBottom: 15,
  },
  search: {
    marginHorizontal: 20,
  },
  logo: {
    marginLeft: 70,
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    marginLeft: 20,
  },
  titleMov: {
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
  },
  mov1: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  mov2: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  moviePoster: {
    width: 143,
    height: 70,
    borderRadius: 10,
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