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

const Register = ({navigation}) => {
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
          <Textinput label="Full Name" placeholder="Type your full name" />
          <Gap height={31} />
          <Textinput label="Email" placeholder="Type your Email" />
          <Gap height={21} />
          <View>
            <Text style={styles.textPass}>Password</Text>
          </View>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Repeat your Password"
            placeholderTextColor="white"
          />
          <Gap height={21} />
        </View>
        <View style={styles.button}>
          <Button
            label="Register"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
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
  textPass: {
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
  },
});
