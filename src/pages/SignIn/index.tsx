import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {app} from '../../../config/firebase';
import {Button, Gap, PageHeader} from '../../components';
import {Background3} from '../../assets/images';
import {Google, Googlee} from '../../assets/icon';

// import statusCodes along with GoogleSignin
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId:
//     '825317241990-mhor2l5ejgrskj409iahfl6laiamjml6.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
// });
// Somewhere in your code

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);
  const onSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('MyAccount', {uid: user.uid});
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // showMessage({
        //   message: errorMessage,
        //   type: 'danger',
        // });
      });
  };

  // const auth = getAuth(app);
  // const SignIn = ({navigation}) => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const onPressLogin = async () => {
  //     try {
  //       const userCredential = await signInWithEmailAndPassword(
  //         auth,
  //         email,
  //         password,
  //       );
  //       const user = userCredential.user;
  //       console.log('Logged in user:', user);
  //       navigation.replace('Home');
  //     } catch (error) {
  //       if (error.code === 'auth/invalid-email') {
  //         console.log('Email is not valid');
  //         Alert.alert('Error', 'Email format is not valid');
  //       } else if (error.code === 'auth/user-not-found') {
  //         console.log('User not found');
  //         Alert.alert('Error', 'User not found');
  //       } else if (error.code === 'auth/wrong-password') {
  //         console.log('Wrong password');
  //         Alert.alert('Error', 'Wrong password');
  //       } else {
  //         console.log(error);
  //         Alert.alert('Login failure', error.message);
  //       }
  //     }
  //   };
  // const signInGoogle = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const {idToken} = await GoogleSignin.signIn();
  //   } catch (error) {
  //     console.log('got error: ', error.message);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  return (
    <View style={styles.container}>
      <PageHeader
        label="Sign In"
        subLabel="Sign in to your account"
        type={true}
        backgroundImage={Background3}
      />
      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <View style={styles.email}>
          <View>
            <Text style={styles.textPass}>Email</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Type your email address"
            placeholderTextColor="white"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <Gap height={16} />
        <View style={styles.pass}>
          <View>
            <Text style={styles.textPass}>Password</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Type your password"
            placeholderTextColor="white"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
        </View>
        <Gap height={12} />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
          <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Button label="Login" onPress={onSubmit} />
        </View>
        <Gap height={31} />
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.text}> Or login with </Text>
          <View style={styles.line} />
        </View>
        <Gap height={59} />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={signInGoogle}>
            <Image source={Googlee} style={styles.icon} />
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.container2]}>
          <View style={styles.container2}>
            <Text style={styles.text}>Didn't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={[styles.buttonText2, {color: '#9800BF'}]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <Gap height={99.2} />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forgotPasswordText: {
    color: '#9800BF',
    textAlign: 'right',
    marginBottom: 31,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'white',
    padding: 10,
  },
  email: {
    marginHorizontal: 20,
  },
  pass: {
    marginHorizontal: 20,
  },
  textPass: {
    color: 'white',
    marginVertical: 5,
    fontSize: 16,
  },
  button: {
    marginHorizontal: 20,
  },
  googleText: {
    fontSize: 16,
    color: '#757575',
    marginLeft: 10,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    backgroundColor: '#191919',
    flex: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B1B1B',
    padding: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  buttonText2: {
    marginLeft: 10,
  },
});
