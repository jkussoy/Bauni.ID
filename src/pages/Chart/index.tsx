import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  FlatList,
} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-elements';
import {Button, Gap, PageHeader} from '../../components';
import {
  Back,
  BackButton,
  Confirm,
  Food,
  Gopay,
  IconHome,
  LogoWhite,
  Notif,
  Ovo,
  Person,
  Qr,
  Searchh,
  SquareFrame,
  Stars1,
  Stars2,
  Stars3,
} from '../../assets/icon';
import {
  Background3,
  Background4,
  Background5,
  Backgroundd,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Packet1,
  Snack1,
} from '../../assets/images';
import {useState} from 'react';

const Chart = ({navigation}) => {
  const [potatoQuantity, setPotatoQuantity] = useState(3);
  const [hotdogQuantity, setHotdogQuantity] = useState(2);
  const [menuItems, setMenuItems] = useState([
    {name: 'Hotdog with Mozzarella', price: 4, quantity: 1},
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [snackMenuItems] = useState([
    {name: 'Potato with Tomato Ketchup', price: 4},
    {name: 'Cocacolla with ice', price: 3},
    {name: 'Milkshake with oreo', price: 4},
    {name: 'Packet Promo: Pop Corn', price: 12},
    {name: 'Packet Promo: cocacolla with ice', price: 8},
    {name: 'Burget with Jasmine Tea', price: 9},
  ]);

  const handleAddItem = item => {
    setMenuItems([...menuItems, {...item, quantity: 1}]);
    setModalVisible(false);
  };

  const handleIncreaseQuantity = index => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index].quantity += 1;
    setMenuItems(updatedMenuItems);
  };

  const handleDecreaseQuantity = index => {
    const updatedMenuItems = [...menuItems];
    if (updatedMenuItems[index].quantity > 1) {
      updatedMenuItems[index].quantity -= 1;
      setMenuItems(updatedMenuItems);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    menuItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const renderMenuItem = (item, index) => (
    <View key={index} style={styles.menuItem}>
      <Text style={styles.menuItemName}>{item.name}</Text>
      <Text style={styles.menuItemPrice}>$ {item.price}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleDecreaseQuantity(index)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => handleIncreaseQuantity(index)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderSnackItem = ({item}) => (
    <TouchableOpacity
      style={styles.snackItem}
      onPress={() => handleAddItem(item)}>
      <Text style={styles.snackItemText}>{item.name}</Text>
      <Text style={styles.snackItemText}>$ {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.page}>
      <ImageBackground source={Background5} style={styles.backgroundFoto}>
        <View style={styles.overlay}>
          <View
            style={[
              styles.container2,
              {
                flexDirection: 'row',
              },
            ]}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate('Snack')}>
              <Back style={styles.bttnBack} />
            </TouchableOpacity>
            <View style={styles.logoTicket}>
              <Text style={styles.Title}>My Chart</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => renderMenuItem(item, index))}
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.addButtonText}>Add New Item</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select a Snack</Text>
            <FlatList
              data={snackMenuItems}
              renderItem={renderSnackItem}
              keyExtractor={item => item.name}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Sub Total</Text>
          <Text style={styles.totalValue}>$ {calculateTotal()}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Taxes and Fees</Text>
          <Text style={styles.totalValue}>$ 8</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>$ {calculateTotal() + 8}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() =>
            navigation.navigate('PaymentMethod3', {
              total: calculateTotal(),
              menuItems: menuItems,
            })
          }>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Chart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#200926',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#121111',
    padding: 16,
  },
  modalTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  snackItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  snackItemText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: 'purple',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121111',
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  menuItemName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemPrice: {
    color: 'white',
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 8,
  },
  quantity: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 8,
  },
  addButton: {
    backgroundColor: 'purple',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    color: 'white',
    fontSize: 16,
  },
  totalValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'purple',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backgroundFoto: {
    flex: 1,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
  },
  logoTicket: {
    marginTop: 50,
    marginLeft: 80,
  },
  back: {
    marginTop: 30,
    marginLeft: 30,
    backgroundColor: '#FFFFFF3D',
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  bttnBack: {
    marginLeft: 8,
    marginTop: 2,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 2,
    borderRadius: 12,
    width: 28,
    height: 30,
    marginLeft: 8,
  },
  checkbox2: {
    marginLeft: 248,
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 2,
    borderRadius: 12,
    width: 28,
    height: 30,
  },
  checkbox3: {
    marginLeft: 256,
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 2,
    borderRadius: 12,
    width: 28,
    height: 30,
  },
  checkboxText: {
    width: 20,
    height: 20,
    justifyContent: 'center',
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxWrapper: {
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'black',
    padding: 1,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  buy: {
    color: 'white',
    textAlign: 'center',
    marginTop: 170,
    marginLeft: 100,
    marginBottom: 10,
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9800BF',
  },
  textBuy: {
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
    width: 100,
    marginLeft: 20,
    height: 50,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  gopay: {
    marginTop: 10,
    marginLeft: 1,
  },
  ovo: {
    marginTop: 10,
    marginLeft: 1,
    marginBottom: 10,
  },
  imgOrder: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 180,
    marginTop: 25,
  },
  buttonText2: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 230,
    marginTop: 25,
  },
  buttonText3: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 170,
    marginTop: 25,
  },
  buttonText4: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    borderRadius: 10,
    width: 20,
    marginTop: 10,
    backgroundColor: '#9800BF',
  },
  buttonText5: {
    fontWeight: 'bold',
    color: 'White',
    marginLeft: 10,
    borderRadius: 10,
    width: 50,
    marginTop: 10,
    backgroundColor: '#1FD41B78',
  },
  contentWrapper1: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: '#121111',
  },
  Text: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  Text2: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 24,
  },
  Text3: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  Text4: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginTop: 10,
    marginLeft: 50,
    marginRight: 20,
  },
  Text5: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -10,
    marginLeft: 10,
  },
  Text6: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 10,
    marginTop: -10,
    marginLeft: 50,
  },
  Text7: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 2,
    marginTop: 4,
    marginLeft: 10,
  },
  Text8: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 2,
    marginTop: 4,
    marginLeft: 7,
  },
  Text9: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    marginBottom: 2,
    marginTop: 4,
    marginLeft: 7,
  },
  Title: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: -10,
    marginLeft: 10,
  },
  cashOn: {
    flexDirection: 'row',
  },
  cashOnStyle1: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 20,
  },
  cashOnMoney1: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 20,
    paddingLeft: 20,
  },
  cashOnStyle2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 11,
  },
  cashOnMoney2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 11,
    paddingLeft: 20,
  },
  contentWrapper2: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    paddingBottom: 72,
  },
  transactionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 10.6,
    marginBottom: 9,
  },
  contentWrapper3: {
    flex: 2,
    marginTop: 24,
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
  Qr: {
    marginLeft: 220,
    paddingTop: 39,
    paddingBottom: 15,
  },
  Notif: {
    paddingTop: 39,
    paddingBottom: 15,
  },
  container2: {
    flexDirection: 'column',
  },
  container3: {
    backgroundColor: '#D5D5D540',
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 50,
  },
  container5: {
    backgroundColor: '#D5D5D540',
    flexDirection: 'column',
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: -10,
  },
  container4: {
    flexDirection: 'row',
  },
  Img1: {
    marginLeft: 10,
  },
  Img2: {
    marginLeft: 10,
  },
  Img3: {
    marginLeft: 10,
  },
  Img4: {
    borderRadius: 10,
  },
  Img5: {
    marginLeft: 20,
  },
  Img6: {
    marginLeft: 20,
  },
  Img7: {
    marginLeft: 20,
  },
  Img8: {
    marginLeft: 20,
  },
  Img9: {
    marginLeft: 20,
  },
});
