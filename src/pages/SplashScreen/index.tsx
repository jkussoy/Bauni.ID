import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Background} from '../../assets/images'; // Assuming Background is your image file
import {Image} from 'react-native-svg';
import {LogoWhite, Swipe} from '../../assets/icon';
import {Button} from 'react-native-elements';

const SplashScreen = ({navigation}) => {
  return (
    <ImageBackground source={Background} style={styles.backgroundFoto}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <LogoWhite style={styles.logo} />
          <Text style={styles.text}>
            Extraordinary space to find your latest favorite movie
          </Text>
          <View style={styles.container2}>
            <Swipe style={styles.swipe} />
            <Button
              style={styles.button}
              title="Skip"
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonTitle}
              onPress={() => navigation.navigate('NewScreen')}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  backgroundFoto: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  buttonStyle: {
    backgroundColor: 'grey',
    borderRadius: 9,
  },
  buttonTitle: {
    color: 'white',
  },
  button: {
    backgroundColor: 'grey',
    textShadowColor: 'white',
    borderColor: 'white',
  },
  swipe: {
    marginTop: 24,
    marginRight: 239,
    marginLeft: 12,
  },
  logo: {
    marginTop: 632,
    marginLeft: 12,
    marginRight: 177,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'transparent',
    marginTop: 19,
    marginLeft: 12,
    marginRight: 62,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
});
