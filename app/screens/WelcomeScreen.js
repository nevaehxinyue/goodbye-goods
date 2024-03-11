import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import color from '../config/color';

function WelcomeScreen(props) {
    return (
        <>
      <ImageBackground style={styles.background} source={require("../assets/background4.jpg")}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo2.png")} />
      <Text style={{ left: 10}}>Sell what you don't need</Text>

        </View>
      
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
      </ImageBackground>
     
      </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: color.primary
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: color.second
       
        // #f0e4da
    },
    logo: {
        width: 220,
        height: 100,
        resizeMode:'contain'
        
    },

    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center',
       
    }
    
})

export default WelcomeScreen;