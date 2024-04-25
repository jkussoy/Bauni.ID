import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Button, Gap, PageHeader, Textinput} from '../../components';
import {Background3} from '../../assets/images';

const SignIn = ({navigation}) => {
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
          <Textinput
            label="Email Address"
            placeholder="Type your email address"
          />
        </View>
        <Gap height={16} />
        <View style={styles.pass}>
          <View>
            <Text style={styles.textPass}>Password</Text>
          </View>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Type your password"
            placeholderTextColor="white"
          />
        </View>
        <Gap height={12} />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
          <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Button label="Login" onPress={() => navigation.navigate('Home')} />
        </View>
        <Gap height={31} />
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.text}> Or login with </Text>
          <View style={styles.line} />
        </View>
        <Gap height={59} />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
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
    width: 24,
    height: 24,
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
