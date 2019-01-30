import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        };
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.secondContainer} >

                    <Image style={{ flex: 1, resizeMode: "cover", }} source={require('../assets/bg_app.png')} />

                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>

                        <Image source={require('../assets/icon.png')} style={styles.image} />

                        <Text style={{ textAlign: 'center', fontSize: 18 }} > React Native Sample Drawer App </Text>

                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },

    secondContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },

    image: {
        marginBottom: 20,
        height: 100,
        width: 100,

    },
});
