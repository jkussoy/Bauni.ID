import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {
  Back,
  Confirm,
  FoodPurple,
  IconHomeWhite,
  IconShop,
  LogoWhite,
  Notif,
  Person,
  Qr,
} from '../../assets/icon';
import {Gap, Textinput} from '../../components';
import {
  Drink1,
  Drink2,
  Drink4,
  Drink5,
  Drink6,
  Drink7,
  Drink8,
  Drink9,
  Food2,
  Food3,
  Food4,
  Food5,
  Food6,
  Food7,
  Food8,
  Food9,
  Packet1,
  Packet2,
  Packet3,
  Packet4,
  Packet5,
  Packet6,
  Packet7,
  Packet8,
  Snack1,
  Snack2,
} from '../../assets/images';

const Packets = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.navigate('Snack')}>
            <Back style={styles.bttnBack} />
          </TouchableOpacity>
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
        <View style={styles.wrapText1}>
          <Text style={styles.text1}>Packets</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.contentWrapper}>
            <View style={styles.wrapImg1}>
              <Packet1 style={styles.img1} />
              <View style={styles.title1}>
                <Text style={styles.food1}>Pop-Corn</Text>
                <Text style={styles.food2}>with Cocacola and Sprite</Text>
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
                <Text style={styles.food1}>Cocacola</Text>
                <Text style={styles.food2}>with Hotdog</Text>
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
          <View style={styles.contentWrapper}>
            <View style={styles.wrapImg1}>
              <View style={styles.imgFood1}>
                <Packet3 style={styles.food} />
              </View>
              <View style={styles.title1}>
                <Text style={styles.food1}>Burger</Text>
                <Text style={styles.food2}>With Jasmine Tea</Text>
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
              <View style={styles.imgFood1}>
                <Packet4 style={styles.food} />
              </View>
              <View style={styles.title1}>
                <Text style={styles.food1}>Pop Corn</Text>
                <Text style={styles.food2}>with 2 Cocacola</Text>
                <View style={styles.contentWrapper}>
                  <Text style={styles.food3}>$ 6</Text>
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
          <View style={styles.contentWrapper}>
            <View style={styles.wrapImg1}>
              <View style={styles.imgFood1}>
                <Image source={Packet5} style={styles.food} />
              </View>
              <View style={styles.title1}>
                <Text style={styles.food1}>Chicken</Text>
                <Text style={styles.food2}>With Potato</Text>
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
              <View style={styles.imgFood1}>
                <Image source={Packet6} style={styles.food} />
              </View>
              <View style={styles.title1}>
                <Text style={styles.food1}>Chicken Slices</Text>
                <Text style={styles.food2}>With Noodle</Text>
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
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.wrapImg1}>
              <View style={styles.imgFood1}>
                <Image source={Packet7} style={styles.food} />
              </View>
              <View style={styles.title1}>
                <Text style={styles.food1}>Noodle</Text>
                <Text style={styles.food2} />
                <View style={styles.contentWrapper}>
                  <Text style={styles.food3}>$ 6</Text>
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
              <View style={styles.imgFood1}>
                <Image source={Packet8} style={styles.food} />
              </View>
              <View style={styles.title1}>
                <Text style={styles.food1}>Spaghetti</Text>
                <Text style={styles.food2}>With Beef</Text>
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
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.wrapImg1}>
              <View style={styles.imgFood1}>
                <Image source={Food8} style={styles.food} />
              </View>
              <View style={styles.title1}>
                <Text style={styles.food1}>Pangsit</Text>
                <Text style={styles.food2}>Original</Text>
                <View style={styles.contentWrapper}>
                  <Text style={styles.food3}>$ 6</Text>
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
              <View style={styles.imgFood1}>
                <Image source={Food9} style={styles.food} />
              </View>
              <View style={styles.title1}>
                <Text style={styles.food1}>Banana Crackers</Text>
                <Text style={styles.food2}>Balado</Text>
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

export default Packets;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: '#200926',
    height: 220,
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
  back: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
    backgroundColor: '#FFFFFF3D',
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  bttnBack: {
    marginLeft: 8,
    marginTop: 2,
  },
  logo: {
    marginLeft: 20,
    marginTop: 50,
  },
  qr: {
    marginTop: 50,
    marginLeft: 50,
  },
  notif: {
    marginTop: 50,
    marginLeft: 10,
  },
  search: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  content: {
    backgroundColor: '#121111',
    height: 800,
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
  imgFood1: {
    marginTop: 10,
    marginLeft: 10,
    marginVertical: 10,
  },
  food: {
    width: 70,
    height: 75,
    borderRadius: 10,
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
    width: 90,
  },
  food3: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#9800BF',
    marginLeft: 10,
    marginTop: 10,
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
