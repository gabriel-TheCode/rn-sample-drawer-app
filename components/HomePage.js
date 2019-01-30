import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { Card, CardItem, Body } from "native-base";
import DrawerContainer from './DrawerContainer';
import MyPage1 from './MyPage1';
import MyPage2 from './MyPage2';
import MyPage3 from './MyPage3';
import MyPage4 from './MyPage4';
import MyPage5 from './MyPage5';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

let resizeMode = 'cover';

class HomePage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >

          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={require('../assets/bg_app.png')}
          />

        </View>

        <View style={styles.container}>

          <Card borderRadius={10} style={styles.card}>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>
                  Welcome
                </Text>
                <Text style={styles.cardText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Body>
            </CardItem>

          </Card>


        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


  card: {
    height: 350,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    borderRadius: 5
  },

  cardTitle: {
    fontSize: 22,
    color: '#000000',
    textAlign: 'center',
  },

  cardText: {
    fontSize: 18,
    color: 'grey',
  }


})

const HomeStack = createStackNavigator({

  HomePage: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Home Page",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
    })
  },

});


const DrawerStack = createDrawerNavigator({
  HomePage: { screen: HomeStack },
  MyPage1: { screen: MyPage1 },
  MyPage2: { screen: MyPage2 },
  MyPage3: { screen: MyPage3 },
  MyPage4: { screen: MyPage4 },
  MyPage5: { screen: MyPage5 },
},
  {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  })


export default DrawerStack
