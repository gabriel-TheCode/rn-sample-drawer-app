import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createStackNavigator, NavigationActions, StackActions } from 'react-navigation';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
    this.callAlert("Notice", "Email: johndoe@gmail.com | Password: 123456", null)
  }


  setEmail(email) {
    this.setState({ email })
  }

  setPassword(password) {
    this.setState({ password })
  }


  navigateToHomePage = () => {

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'HomePage' })
      ]
    });

    this.props.navigation.dispatch(resetAction);
  }


  navigateToRegisterPage = () => {
    this.props.navigation.navigate('RegisterPage');

  }


  auth() {
    if (this.state.email === '' || this.state.matricule === '') {
      this.callAlert("Avertissement", "Veuillez remplir tous les champs svp", console.log("Erreur, champs vides"));
    } else if (this.state.email === 'johndoe@gmail.com' && this.state.password === '123456') {
      this.navigateToHomePage()
    } else {
      this.callAlert("Erreur", "Vos identifiants sont incorrects", console.log("Erreur, identifiants incorrects"));
    }
  }

  callAlert(title, message, func) {
    Alert.alert(
      title, message,
      [
        { text: 'OK', onPress: () => func },
      ],
      { cancelable: false }
    )
  }


  render() {
    const resizeMode = 'cover';
    const text = 'LOGIN';


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


        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          <KeyboardAwareScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/icon.png')} style={styles.image} />

              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                }}
              >
                {text}
              </Text>
            </View>

            <View style={styles.main}>
              <TextInput underlineColorAndroid='transparent' onChangeText={(text) => this.setEmail(text)} style={styles.input} placeholder="Email" />

              <TextInput underlineColorAndroid='transparent' onChangeText={(text) => this.setPassword(text)} style={styles.input} placeholder="Mot de passe" secureTextEntry={true} />

              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.auth()} >
                <Text style={styles.buttonText}> SE CONNECTER </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer2} onPress={() => this.navigateToRegisterPage()}>
                <Text style={styles.buttonText}> S'ENREGISTER </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>

        <Text style={styles.copyright}>Copyright © The Code 2019</Text>

        <Text style={styles.footer}>React Native · A framework for building native apps using React </Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#FFFFFF',
  },
  main: {
    margin: 20,
  },
  image: {
    marginBottom: 20,
    marginTop: 50,
    height: 80,
    width: 80,

  },
  buttonContainer: {
    backgroundColor: '#5194ff',
    paddingVertical: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5
  },

  buttonContainer2: {
    backgroundColor: '#fcc358',
    paddingVertical: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  footer: {
    height: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'gray',

  },
  copyright: {
    textAlign: 'center',
    margin: 20,
    fontSize: 14,
  },
});

export default LoginStack = createStackNavigator({
  Login: { screen: Login, navigationOptions: { headerTitle: "RN-Sample-Drawer-App" } },

  HomePage: {
    screen: HomePage, navigationOptions: { header: null }
  },

  RegisterPage: {
    screen: RegisterPage, navigationOptions: { headerTitle: "S'enregistrer" }

  },


});
