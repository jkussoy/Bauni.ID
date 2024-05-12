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
  Searchh,
} from '../../assets/icon';
import {
  Background5,
  Film1,
  Film8,
  Img1,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img2,
  Img3,
  Img31,
  Img4,
  Img5,
  Img6,
} from '../../assets/images';
import {Gap, Textinput} from '../../components';

const NowPlaying = ({navigation}) => {
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
      <Text style={styles.title}>Now Playing!!</Text>
      <ScrollView style={styles.content}>
        <View style={styles.contentWrapper1}>
          <Gap height={10} />
          <View style={styles.contentWrap1}>
            <View style={styles.contentMov}>
              <View style={styles.contentMov1}>
                <Text style={styles.titleMov}>Evil Dead</Text>
                <View style={styles.mov1}>
                  <Img1 />
                </View>
              </View>
            </View>
            <View style={styles.contentMov}>
              <View style={styles.contentMov2}>
                <Text style={styles.titleMov}>Jesus Revolution</Text>
                <View style={styles.mov1}>
                  <Img2 />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentWrap1}>
            <View style={styles.contentMov}>
              <View style={styles.contentMov3}>
                <Text style={styles.titleMov}>Mencuri Raden Saleh</Text>
                <View style={styles.mov1}>
                  <Image source={Img31} style={styles.moviePoster} />
                </View>
              </View>
            </View>
            <View style={styles.contentMov}>
              <View style={styles.contentMov4}>
                <Text style={styles.titleMov}>Kisah Tanah Jawa</Text>
                <View style={styles.mov1}>
                  <Image source={Img10} style={styles.moviePoster} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentWrap1}>
            <View style={styles.contentMov}>
              <View style={styles.contentMov3}>
                <Text style={styles.titleMov}>Kajiman</Text>
                <View style={styles.mov1}>
                  <Image source={Img12} style={styles.moviePoster} />
                </View>
              </View>
            </View>
            <View style={styles.contentMov}>
              <View style={styles.contentMov4}>
                <Text style={styles.titleMov}>Pemandi Jenazah</Text>
                <View style={styles.mov1}>
                  <Image source={Img11} style={styles.moviePoster} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentWrap1}>
            <View style={styles.contentMov}>
              <View style={styles.contentMov3}>
                <Text style={styles.titleMov}>EXHUMA</Text>
                <View style={styles.mov1}>
                  <Image source={Img13} style={styles.moviePoster} />
                </View>
              </View>
            </View>
            <View style={styles.contentMov}>
              <View style={styles.contentMov4}>
                <Text style={styles.titleMov}>Badaruwhi</Text>
                <View style={styles.mov1}>
                  <Image source={Img14} style={styles.moviePoster} />
                </View>
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

export default NowPlaying;

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
    height: 620,
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
  Qr: {
    marginLeft: 30,
    paddingTop: 40,
    paddingBottom: 15,
  },
  Notif: {
    paddingTop: 40,
    paddingBottom: 15,
  },
  search: {
    marginHorizontal: 20,
    marginTop: -20,
  },
  logo: {
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    marginLeft: 10,
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