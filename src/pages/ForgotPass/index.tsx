import {StyleSheet, View, ScrollView, Text} from 'react-native';
import React from 'react';
import {Button, Gap, PageHeader, Textinput} from '../../components';
import {Background3} from '../../assets/images';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader
        label="Forgot Password"
        subLabel="Enter your email account to reset password"
        type={true}
        backgroundImage={Background3}
      />
      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <View style={styles.email}>
          <Textinput label="Email" placeholder="Type your Email" />
        </View>
        <Gap height={379.8} />
        <View style={styles.button}>
          <Button
            label="Reset Password"
            onPress={() => navigation.navigate('SuccessForgotPass')}
          />
        </View>
        <Gap height={93.5} />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#191919',
    flex: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  email: {
    marginHorizontal: 20,
  },
  button: {
    marginHorizontal: 20,
  },
});
