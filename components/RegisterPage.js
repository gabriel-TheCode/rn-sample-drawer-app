import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Switch } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class RegisterPage extends Component {

    constructor() {
        super();
        this.state = {
            switch1Value: false,
        }
    }

    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
        console.log('Switch 1 is: ' + value)
    }

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
                            resizeMode: 'cover',
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
                                Veuillez vous enregister s'il vous plait
                            </Text>
                        </View>

                        <View style={styles.main}>
                            <Text>Nom complet</Text>
                            <TextInput underlineColorAndroid='transparent' style={styles.input} />

                            <Text>Email</Text>
                            <TextInput underlineColorAndroid='transparent' style={styles.input} />

                            <Text>Mot de passe</Text>
                            <TextInput underlineColorAndroid='transparent' style={styles.input} secureTextEntry={true} />
                            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>

                                <Switch onValueChange={this.toggleSwitch1} onTintColor="#fcc358"
                                    value={this.state.switch1Value} />
                                <Text style={{ alignSelf: 'center', textAlign: 'left' }}>J'accepte les termes et conditions</Text>

                            </View>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={styles.buttonText}> VALIDER </Text>
                            </TouchableOpacity>

                        </View>
                    </KeyboardAwareScrollView>
                </View>

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
