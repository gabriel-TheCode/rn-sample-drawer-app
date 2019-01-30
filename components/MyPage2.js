import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'
import { Card, CardItem, Thumbnail, Left, Body, Button } from 'native-base';

class MyPage2 extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/avatar.png')} />
              <Body>
                <Text>John Doe</Text>
                <Text style={{ color: 'grey' }}>April 15, 2018</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={require('../assets/bg_drawer.png')} style={{ height: 200, width: 200, flex: 1 }} />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <TouchableOpacity>
                <Icon name='github-circle' size={35} />
                <Text style={{ color: '#87838B' }}>1,926 stars</Text>
              </TouchableOpacity>
            </Left>
          </CardItem>
        </Card>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  },

  card: {
    height: 350,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    borderRadius: 5
  },

});


export default Page2Stack = createStackNavigator({

  MyPage2: {
    screen: MyPage2,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "My Page 2",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
    })
  },

});
