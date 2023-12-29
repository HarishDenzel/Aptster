//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TextInputProps, Image } from 'react-native';
import { fontSize } from '../Assets/Constant/fontsAndColors';
import { icons } from '../Assets/icons';

// create a component
const SearchBar = (props: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<TextInput> & Readonly<TextInputProps>) => {
    const { value } = props;
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                style={styles.input}
                value={value}
            />
            <Image source={icons.search} style={{ height: 32, width: 32, resizeMode: 'contain', marginHorizontal: 5 }} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: 16,
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical:12,
        letterSpacing: 1,
        flex: 1
    }


});

//make this component available to the app
export default SearchBar;
