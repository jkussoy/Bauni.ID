import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Backgroundd, Img2, Img4} from '../../assets/images';
import {
  Barcode,
  Confirm,
  Food,
  IconHome,
  IconHomeWhite,
  IconProfile,
  LogoWhite,
  PersonPurple,
  Verif,
} from '../../assets/icon';
import {getDatabase, onValue, ref} from 'firebase/database';

const MyAccount = ({navigation, route}) => {
  const [user, setUser] = useState({});

  const {uid} = route.params;
  const db = getDatabase();
  useEffect(() => {
    const userRef = ref(db, 'users/' + uid);
    onValue(userRef, snapshot => {
      const data = snapshot.val();
      setUser(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoWhite />
      </View>
      <View style={styles.background}>
        <View>
          <IconProfile style={styles.iconProfile} />
        </View>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subTitle}>{user.fullName} </Text>
      </View>
      <View style={styles.background}>
        <TouchableOpacity style={styles.ButtonEdit}>
          <Text style={styles.textEdit}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonPurchase}>
          <Text style={styles.textPurchase}>Purchase History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.background}>
        <View style={styles.email}>
          <Text style={styles.textEmail}>Email</Text>
          <Text style={styles.textEmail2}>{user.email}</Text>
        </View>
        <View style={styles.dob}>
          <Text style={styles.textDob}>Date of Birth</Text>
          <Text style={styles.textDob2}>{user.dateOfBirth}</Text>
        </View>
        <View style={styles.gender}>
          <Text style={styles.textGender}>Gender</Text>
          <Text style={styles.textGender2}>{user.gender}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonLogOut}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.textLogout}>Log Out</Text>
        </TouchableOpacity>
      </View>
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
            <PersonPurple />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200926',
  },
  footer: {
    backgroundColor: '#121111',
    height: 60,
    marginTop: -140,
  },
  contentFooter: {
    flexDirection: 'row',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -60,
  },
  contentWrapper3: {
    flex: 1,
    marginTop: -250,
    paddingHorizontal: 25,
    backgroundColor: '#200926',
    flexDirection: 'row',
    justifyContent: 'center',
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
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#200926',
    marginLeft: 100,
    marginTop: 25,
  },
  email: {
    flexDirection: 'row',
    color: 'white',
    backgroundColor: '#4D065F85',
    marginLeft: 24,
    width: 335,
    height: 35,
    borderRadius: 10,
    marginTop: -25,
    alignItems: 'center',
  },
  textEmail: {
    color: 'white',
    marginLeft: 20,
    marginVertical: 7,
  },
  textEmail2: {
    color: 'white',
    marginLeft: 90,
    marginVertical: 7,
  },
  dob: {
    flexDirection: 'row',
    color: 'white',
    backgroundColor: '#4D065F85',
    marginTop: 10,
    marginLeft: 24,
    width: 335,
    height: 35,
    borderRadius: 10,
  },
  textDob: {
    color: 'white',
    marginLeft: 20,
    marginTop: 7,
  },
  textDob2: {
    color: 'white',
    marginLeft: 45,
    marginTop: 7,
  },
  gender: {
    flexDirection: 'row',
    color: 'white',
    backgroundColor: '#4D065F85',
    marginTop: 10,
    marginLeft: 24,
    width: 335,
    height: 35,
    borderRadius: 10,
  },
  textGender: {
    color: 'white',
    marginLeft: 20,
    marginTop: 7,
  },
  textGender2: {
    color: 'white',
    marginLeft: 80,
    marginTop: 7,
  },
  buttonLogOut: {
    color: 'white',
    backgroundColor: '#4D065F85',
    marginBottom: 341,
    marginTop: 10,
    marginLeft: 24,
    width: 335,
    height: 35,
    borderRadius: 10,
  },
  textLogout: {
    color: 'white',
    marginLeft: 10,
    marginTop: 7,
    textAlign: 'center',
  },
  time: {
    flexDirection: 'row',
  },
  textTime: {
    color: '#CDCACA',
    marginRight: 10,
  },
  place: {
    flexDirection: 'row',
  },
  textLocation: {
    color: '#CDCACA',
    marginRight: 10,
  },
  ButtonEdit: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 65,
    marginBottom: 10,
    width: 105,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#3B2540',
  },
  textEdit: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    marginLeft: 2,
    height: 50,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  ButtonPurchase: {
    color: 'white',
    textAlign: 'center',
    marginTop: -54,
    marginLeft: 178,
    marginBottom: 10,
    width: 150,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#3B2540',
  },
  textPurchase: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 130,
    marginLeft: 8,
    height: 50,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  iconProfile: {
    alignContent: 'center',
    marginLeft: 144,
  },
  background: {
    backgroundColor: '#121111',
    padding: 16,
    flexDirection: 'column',
  },
  subTitle: {
    color: 'white',
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 8,
    marginBottom: -8,
  },
});
