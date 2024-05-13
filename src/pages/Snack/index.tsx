import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  
  Confirm,
  Food,
  FoodPurple,
  IconHome,
  IconHomeWhite,
  IconShop,
  LogoWhite,
  Notif,
  Person,
  Qr,
  Searchh,
  Stars1,
  Stars2,
} from '../../assets/icon';
import {Gap, Textinput} from '../../components';
import {
  Drink1,
  Drink2,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img7,
  Img8,
  Packet1,
  Packet2,
  Packet3,
  Packet4,
  Snack1,
  Snack2,
  Snack3,
} from '../../assets/images';

const Snack = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <View style={styles.logo}>
            <LogoWhite />
          </View>
          <TouchableOpacity style={styles.qr}>
            <Qr />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notif}>
            <Notif />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <Textinput placeholder="Type to Search..." />
        </View>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.wrapText1}>
            <Text style={styles.text1}>Foods</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Foods')}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.wrapImg1}>
              <Snack1 style={styles.img1} />
              <View style={styles.title1}>
                <Text style={styles.food1}>Hot Dog</Text>
                <Text style={styles.food2}>with Mozzarella</Text>
                <View style={styles.contentWrapper}>
                  <Text style={styles.food3}>$ 5</Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Chart')}>
                    <Text style={styles.buttonAdd}>Add</Text>
                    <IconShop style={styles.buttonShop} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.wrapImg1}>
              <Snack2 style={styles.img1} />
              <View style={styles.title1}>
                <Text style={styles.food1}>Potato</Text>
                <Text style={styles.food2}>with Tomato Ketchup</Text>
                <View style={styles.contentWrapper}>
                  <Text style={styles.food3}>$ 4</Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Chart')}>
                    <Text style={styles.buttonAdd}>Add</Text>
                    <IconShop style={styles.buttonShop} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.content2}>
          <View style={styles.wrapText2}>
            <Text style={styles.text2}>Drinks</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Drinks')}>
              <Text style={styles.viewAll2}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.contentWrapper}>
              <View style={styles.wrapImg1}>
                <Drink1 style={styles.img1} />
                <View style={styles.title1}>
                  <Text style={styles.food1}>Cocacolla</Text>
                  <Text style={styles.food2}>with Ice</Text>
                  <View style={styles.contentWrapper}>
                    <Text style={styles.food3}>$ 3</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate('Chart')}>
                      <Text style={styles.buttonAdd}>Add</Text>
                      <IconShop style={styles.buttonShop} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.wrapImg1}>
                <Drink2 style={styles.img1} />
                <View style={styles.title1}>
                  <Text style={styles.food1}>Milkshake</Text>
                  <Text style={styles.food2}>with Oreo</Text>
                  <View style={styles.contentWrapper}>
                    <Text style={styles.food3}>$ 4</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate('Chart')}>
                      <Text style={styles.buttonAdd}>Add</Text>
                      <IconShop style={styles.buttonShop} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.content4}>
          <View style={styles.wrapText2}>
            <Text style={styles.text2}>Packets Promo</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Packets')}>
              <Text style={styles.viewAll3}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.contentWrapper}>
              <View style={styles.wrapImg1}>
                <Packet1 style={styles.img1} />
                <View style={styles.title1}>
                  <Text style={styles.food1}>Cocacolla</Text>
                  <Text style={styles.food2}>with Ice</Text>
                  <View style={styles.contentWrapper}>
                    <Text style={styles.food3}>$ 3</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate('Chart')}>
                      <Text style={styles.buttonAdd}>Add</Text>
                      <IconShop style={styles.buttonShop} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.wrapImg1}>
                <Packet2 style={styles.img1} />
                <View style={styles.title1}>
                  <Text style={styles.food1}>Milkshake</Text>
                  <Text style={styles.food2}>with Oreo</Text>
                  <View style={styles.contentWrapper}>
                    <Text style={styles.food3}>$ 4</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate('Chart')}>
                      <Text style={styles.buttonAdd}>Add</Text>
                      <IconShop style={styles.buttonShop} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.contentWrapper}>
              <View style={styles.wrapImg1}>
                <Packet3 style={styles.img1} />
                <View style={styles.title1}>
                  <Text style={styles.food1}>Cocacolla</Text>
                  <Text style={styles.food2}>with Ice</Text>
                  <View style={styles.contentWrapper}>
                    <Text style={styles.food3}>$ 3</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate('Chart')}>
                      <Text style={styles.buttonAdd}>Add</Text>
                      <IconShop style={styles.buttonShop} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.wrapImg1}>
                <Packet4 style={styles.img1} />
                <View style={styles.title1}>
                  <Text style={styles.food1}>Milkshake</Text>
                  <Text style={styles.food2}>with Oreo</Text>
                  <View style={styles.contentWrapper}>
                    <Text style={styles.food3}>$ 4</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate('Chart')}>
                      <Text style={styles.buttonAdd}>Add</Text>
                      <IconShop style={styles.buttonShop} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
            <FoodPurple />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Person}
            onPress={() => navigation.navigate('MyAccount')}>
            <Person />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Snack;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: '#200926',
    height: 200,
  },
  footer: {
    backgroundColor: '#121111',
    height: 60,
  },
  contentHeader: {
    flexDirection: 'row',
  },
  contentFooter: {
    flexDirection: 'row',
  },
  logo: {
    marginLeft: 20,
    marginTop: 50,
  },
  qr: {
    marginTop: 70,
    marginLeft: 100,
  },
  notif: {
    marginTop: 70,
    marginLeft: 10,
  },
  search: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  content: {
    backgroundColor: '#121111',
    height: 150,
  },
  content2: {
    backgroundColor: '#121111',
    height: 150,
  },
  content3: {
    backgroundColor: '#121111',
    height: 300,
  },
  content4: {
    backgroundColor: '#121111',
    height: 300,
  },
  contentWrapper: {
    flexDirection: 'row',
  },
  wrapText1: {
    flexDirection: 'row',
  },
  text1: {
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapText2: {
    flexDirection: 'row',
  },
  text2: {
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapText3: {
    flexDirection: 'row',
  },
  text3: {
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#9800BF',
    fontWeight: 'bold',
    marginLeft: 250,
    marginTop: 15,
  },
  viewAll2: {
    color: '#9800BF',
    fontWeight: 'bold',
    marginLeft: 240,
    marginTop: 15,
  },
  viewAll3: {
    color: '#9800BF',
    fontWeight: 'bold',
    marginLeft: 156,
    marginTop: 15,
  },
  wrapImg1: {
    backgroundColor: '#200926',
    marginLeft: 5,
    width: 200,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
    flexDirection: 'row',
  },
  img1: {
    marginTop: 10,
    marginLeft: 9,
    marginBottom: 10,
  },
  wrapImg2: {
    backgroundColor: '#200926',
    marginLeft: 5,
    width: 160,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
  },
  img2: {
    marginTop: 10,
    marginLeft: 9,
    marginBottom: 10,
  },
  wrapImg3: {
    backgroundColor: '#200926',
    marginLeft: 20,
    width: 160,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
  },
  img3: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
  wrapImg4: {
    backgroundColor: '#200926',
    marginLeft: 45,
    width: 160,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
  },
  img4: {
    marginTop: 10,
    marginLeft: 21,
    marginBottom: 10,
  },
  wrapImg5: {
    backgroundColor: '#200926',
    marginLeft: 10,
    width: 190,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
  },
  img5: {
    marginTop: 10,
    marginLeft: 21,
    marginBottom: 10,
  },
  wrapImg6: {
    backgroundColor: '#200926',
    marginLeft: 12,
    width: 190,
    marginTop: 10,
    borderRadius: 10,
    elevation: 10,
  },
  img6: {
    marginTop: 10,
    marginLeft: 21,
    marginBottom: 10,
  },
  title1: {
    flexDirection: 'column',
  },
  textTitle1: {
    color: 'white',
    marginLeft: 20,
  },
  stars1: {
    marginLeft: 15,
    marginVertical: 5,
  },
  title2: {
    flexDirection: 'column',
  },
  textTitle2: {
    color: 'white',
    marginLeft: 20,
  },
  stars2: {
    marginLeft: 15,
    marginVertical: 5,
  },
  title3: {
    flexDirection: 'column',
  },
  textTitle3: {
    color: 'white',
    marginLeft: 20,
    marginBottom: 10,
  },
  title4: {
    flexDirection: 'column',
  },
  textTitle4: {
    color: 'white',
    marginLeft: 20,
    marginBottom: 10,
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
  food1: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  food2: {
    color: '#D5D5D5',
    marginLeft: 10,
  },
  food3: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#9800BF',
    marginLeft: 10,
    marginTop: 20,
    width: 70,
    borderRadius: 10,
    flexDirection: 'row',
  },
  buttonAdd: {
    color: 'white',
    textAlign: 'center',
    marginLeft: 15,
  },
  buttonShop: {
    marginLeft: 10,
    marginTop: 2,
  },
});
