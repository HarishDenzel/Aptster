//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { icons } from '../../assets/icons';
import { StackActions } from '@react-navigation/native';
import { string } from '../../utils/global/constants';

// create a component
const InitialScreen = (props: any) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.dispatch(StackActions.replace('BottomTab'));
        }, 1000);
    }, []);
    return (
        <View

            style={styles.container}>
            <View
                style={{
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    paddingHorizontal: 5,
                }}>
                <Image
                    style={styles.logostyle}
                    resizeMode="contain"
                    source={icons.icLauncher}
                />
            </View>
            <View style={styles.logoContainer}>
                <Text style={styles.mainFont}>{string.appName}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 10
    },
    mainFont: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    logostyle: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
});

//make this component available to the app
export default InitialScreen;
