import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Background2} from '../../assets/images'; // Assuming Background is your image file
import {Image} from 'react-native-svg';
import {LogoWhite, Swipe2} from '../../assets/icon';
import {Button} from 'react-native-elements';

const SplashScreen = ({navigation}) => {
  return (
    <ImageBackground source={Background2} style={styles.backgroundFoto}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <LogoWhite style={styles.logo} />
          <Text style={styles.text}>
            Choosing the best view for you to watch
          </Text>
          <View style={styles.container2}>
            <Swipe2 style={styles.swipe} />
            <Button
              style={styles.button}
              title="Get Started"
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonTitle}
              onPress={() => navigation.navigate('SignIn')}
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
    shadowRadius: 1000,
    shadowColor: 'black',
    shadowOpacity: 1000,
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
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
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
    marginRight: 190,
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
    marginTop: 19,
    marginLeft: 12,
    marginRight: 62,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'white', // Assuming you want white text for better visibility on the background
  },
});
