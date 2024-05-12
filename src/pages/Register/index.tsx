import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, PageHeader, Textinput} from '../../components';
import {Background3} from '../../assets/images';
import {createAccount} from '../../../config/firebase';
import {useNavigation} from '@react-navigation/native';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

const Register = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');

  const onSubmit = () => {
    const auth = getAuth();
    const db = getDatabase();

    createUserWithEmailAndPassword(auth, email, password, dateOfBirth, gender)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        const dataUser = {
          uid: user.uid,
          fullName: fullName,
          email: email,
          dateOfBirth: dateOfBirth,
          gender: gender,
        };
        //Insert to database
        set(ref(db, 'users/' + dataUser.uid), dataUser);

        showMessage({
          message: 'Pendaftaran user berhasil',
          type: 'success',
        });
        navigation.navigate('SignIn');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
        // ..
      });
  };

  // const Register = () => {
  //   const navigation = useNavigation();
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [name, setName] = useState('');

  //   const onPressRegister = async () => {
  //     const data = {
  //       name: name,
  //       email: email,
  //     };
  //     const auth = getAuth();
  //     const db = getDatabase();
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then(userCredential => {
  //         const user = userCredential.user;
  //         set(ref(db, 'users/' + user.uid), data);
  //       })
  //       .catch(error => {
  //         // Tangani error di sini, misalnya:
  //         console.log('Error creating user:', error);
  //         // Atau tampilkan pesan error kepada pengguna
  //       });
  // try {
  //   await createAccount({email, password, name});
  //   // Jika pendaftaran berhasil, Anda bisa melakukan navigasi ke layar lain atau menampilkan pesan sukses

  //   Alert.alert(
  //     'Registration successful',
  //     'You have successfully registered.',
  //   );
  // } catch (error) {
  //   // Jika terjadi kesalahan, tampilkan pesan kesalahan
  //   Alert.alert('Registration failed', error.message);
  // }
  // };
  return (
    <View style={styles.container}>
      <PageHeader
        label="Register"
        subLabel="Create your account"
        type={true}
        backgroundImage={Background3}
      />
      <ScrollView style={styles.contentWrapper}>
        <View style={styles.textInput}>
          <Gap height={26} />
          <View>
            <Text style={styles.textEmail}>User Name</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            placeholderTextColor={'white'}
            value={fullName}
            onChangeText={setFullName}
          />
          <View>
            <Text style={styles.textEmail}>Date Of Birth</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Date Of Birth"
            placeholderTextColor={'white'}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
          />
          <View>
            <Text style={styles.textEmail}>Gender</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Gender"
            placeholderTextColor={'white'}
            value={gender}
            onChangeText={setGender}
          />
          <View>
            <Text style={styles.textEmail}>Email</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={'white'}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <View>
            <Text style={styles.textEmail}>Password</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'white'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Gap height={21} />
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={onSubmit}>
          <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>Register</Text>
          </View>
        </TouchableOpacity>
        <Gap height={17} />
        <View style={[styles.container2]}>
          <View style={styles.container2}>
            <Text style={styles.text}>I have an account,</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={[styles.buttonText, {color: '#9800BF'}]}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          <Gap height={79.2} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#191919',
    flex: 1,
  },
  container2: {
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginLeft: 20,
  },
  textInput: {
    marginHorizontal: 20,
  },
  button: {
    marginHorizontal: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  buttonContainer: {
    backgroundColor: '#13274A',
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 17,
    paddingVertical: 8,
    marginHorizontal: 45,
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
  },
  textEmail: {
    color: 'white',
    marginVertical: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'white',
    padding: 10,
    marginVertical: 3,
  },
});
