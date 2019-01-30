import React from 'react';
import { AppRegistry } from 'react-native';
import Splash from './components/Splash';
import Login from './components/Login';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }



  render() {

    var mainScreen = <Splash />

    setTimeout(() => { this.setState({ timePassed: true }) }, 3000)

    if (!this.state.timePassed) {

      return mainScreen

    } else {

      mainScreen = <Login />

    }
    return mainScreen

  }


}


AppRegistry.registerComponent("rn-sample-drawer-app", () => App)