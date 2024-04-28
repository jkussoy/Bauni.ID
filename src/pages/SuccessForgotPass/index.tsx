import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import {PageHeader, Gap, Textinput, Button} from '../../components';
import {Background3} from '../../assets/images';

const SuccessForgotPass = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <PageHeader
          label="Forgot Password"
          subLabel="Enter your email account to reset password"
          type={true}
          backgroundImage={Background3}
        />
        <View style={styles.contentWrapper}>
          <Gap height={26} />
          <Textinput label="Email" placeholder="Type your Email" />
          <Gap height={379.8} />
          <Button
            label="Reset Password"
            onPress={() => navigation.navigate('SuccessForgotPass')}
          />
          <Gap height={63.5} />
        </View>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Check your email</Text>
            <Text style={styles.modalText}>
              We have sent a instructions to recover your password to your email
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.modalButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#370843',
    padding: 30,
    borderColor: '#0096FF',
    borderRadius: 30,
    marginTop: 670,
  },
  modalTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#9800BF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 40,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SuccessForgotPass;
