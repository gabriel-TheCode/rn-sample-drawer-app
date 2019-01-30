import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

let iconSize = 25;

export default class DrawerContainer extends React.Component {

  constructor(props) {
    super(props)
  }


  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }


  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View>

            <ImageBackground
              style={{
                flex: 1,
                width: '100%',
                height: 170,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
              source={require('../assets/bg_drawer.png')}>

              <View style={{ marginLeft: 10 }}>
                <TouchableOpacity>
                  <Image source={require("../assets/icon.png")}
                    style={{
                      borderWidth: 1,
                      borderColor: 'rgba(0,0,0,0.2)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 75,
                      height: 75,
                      borderRadius: 100,
                    }}
                  />
                </TouchableOpacity>

                <Text style={{ color: 'white', fontSize: 14, marginTop: 10 }}>
                  John Doe
                </Text>
                <Text style={{ color: 'white', fontSize: 14 }}>
                  johndoe@gmail.com
                </Text>

              </View>

            </ImageBackground>



            <View style={styles.navSectionStyle}>
              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('HomePage')}>
                <Icon name='home' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Home</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionHeadingStyle}> Section 1 </Text>

            <View style={styles.navSectionStyle}>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('MyPage1')}>
                <Icon name='account' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Page 1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('MyPage2')}>
                <Icon name='clipboard-text' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle}>Page 2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('MyPage3')}>
                <Icon name='animation' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle}>Page 3</Text>
              </TouchableOpacity>

            </View>

            <Text style={styles.sectionHeadingStyle}> Section 2 </Text>

            <View style={styles.navSectionStyle}>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('MyPage4')}>
                <Icon name='rss' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Page 4</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('MyPage5')}>
                <Icon name='application' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Page 5</Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>

        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.drawerMenu}>
            <Icon name='logout' size={iconSize} style={styles.drawerIcon} />
            <Text style={styles.navItemStyle} >Code For Fun !</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  navItemStyle: {
    padding: 15,
    marginLeft: 20,

  },
  navSectionStyle: {
    marginLeft: 20,
  },

  drawerIcon: {
    color: "grey"
  },

  drawerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#E0E0E0',
    color: '#003759'
  },
  footerContainer: {
    padding: 20,
    backgroundColor: '#fcc358',
  }
})