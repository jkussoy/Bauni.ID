import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Back, Saved, Stars1} from '../../assets/icon';
import {Backgroundd, Img1, Trailer} from '../../assets/images';
import {Button, Gap} from '../../components';
import YouTube from 'react-youtube';
import YoutubeIframe from 'react-native-youtube-iframe';

const DetailMovies = ({navigation}) => {
  const [playing, setPlaying] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground source={Backgroundd} style={styles.backgroundFoto}>
        <View style={styles.overlay}>
          <View style={[styles.container2, {flexDirection: 'row'}]}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate('Home')}>
              <Back style={styles.bttnBack} />
            </TouchableOpacity>
            <View style={styles.text}>
              <Text style={styles.text}>Detail Movies</Text>
            </View>
            <TouchableOpacity
              style={styles.saved}
              onPress={() => navigation.navigate('Saved')}>
              <Saved style={styles.saved} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>
            Shang-Chi and the Legend of the Ten Rings
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.solidBackgroundContainer}>
        <View style={styles.overlay}>
          <ScrollView>
            <View style={styles.container3}>
              <Text style={styles.text2}>2021. 2h 21m</Text>
              <Stars1 style={styles.stars1} />
              <Text style={styles.text3}>
                Shang-Chi begins training in martial arts and is sent by Wenwu
                at the age of 14 to assassinate the leader of the Iron Gang.
                After fulfilling his mission, a traumatized Shang-Chi escapes to
                San Francisco, where he adopts the name "Shaun".{' '}
              </Text>
              <Text style={styles.text4}>Watch Trailer</Text>
              <YoutubeIframe
                webViewStyle={styles.trailer}
                height={300}
                width={400}
                play={playing}
                videoId="8YjFbMbfXaQ"
              />
            </View>
            <Gap height={100} />
          </ScrollView>
          <View style={styles.contentButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
              <View style={styles.bttnBook}>
                <Text style={styles.book}>Book Now</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailMovies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundFoto: {
    flex: 1,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trailer: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
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
    marginTop: 10,
  },
  contentButton: {
    marginBottom: 10,
  },
  bttnBack: {
    marginLeft: 8,
    marginTop: 2,
  },
  bttnBook: {
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
    marginTop: -40,
    marginBottom: 30,
  },
  back: {
    marginBottom: 200,
    marginLeft: 10,
    backgroundColor: '#FFFFFF3D',
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  saved: {
    marginTop: -75,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container2: {
    flex: 1,
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
    marginLeft: 20,
    marginRight: 50,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginTop: 10,
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
  container3: {},
  stars1: {
    marginLeft: 18,
  },
  video: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    aspectRatio: 16 / 9, // Sesuaikan aspek rasio video jika diperlukan
  },
});
