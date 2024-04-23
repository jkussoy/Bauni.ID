import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import {BackButton} from '../../../assets/icon';

const PageHeader = ({
  label,
  backButton,
  navigation,
  nav,
  type,
  subLabel,
  backgroundImage,
}) => {
  if (type === true) {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundFoto}>
        <View style={styles.overlay}>
          <View style={styles.containerWithPhoto}>
            <View>
              <Text style={styles.label}>{label}</Text>
              {subLabel && <Text style={styles.subLabel}>{subLabel}</Text>}
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => backButton && navigation.navigate(nav)}>
        {backButton && <BackButton style={styles.backButton} />}
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  containerWithPhoto: {
    paddingHorizontal: 24,
    paddingVertical: 37,
    height: 108,
    width: 430,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 150,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Change the opacity level here (0.5 means 50% opacity)
  },
  Foto: {
    height: 50,
    width: 50,
    marginRight: 24,
    marginTop: 32,
    marginBottom: 26,
    borderRadius: 10,
  },
  backgroundFoto: {
    width: '100%', // Set the width to fill the entire screen
    height: 250, // Set the desired height for the header
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    color: '#370843',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins',
    fontSize: 44,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: -20,
    marginTop: -10,
  },
  backButton: {
    marginRight: 26,
  },
  subLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: 'white',
    marginTop: 15,
  },
});
