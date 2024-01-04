//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TextInputProps, Image, Pressable ,Alert} from 'react-native';
import { fontSize } from '../../assets/Constant/fontsAndColors';
import { icons } from '../../assets/icons';
import { string } from '../../utils/global/constants';

// create a component
const SearchBar = (props: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<TextInput> & Readonly<TextInputProps>) => {
    const { value, disable } = props;
    return (
        <View style={styles.container}>
           {disable? <Pressable  onPress={()=> props.navigation.navigate('Search')} style={styles.input}>
            <Text style={{fontSize:fontSize.Medium,color:'#b8b8b8'}}>{string.searchPlaceholder}</Text>
            </Pressable>:
            <TextInput
           
               
                {...props}
                style={styles.input}
                value={value}
            />
    }
            <Image source={icons.searchHome} style={styles.imageStyle} />
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
    },
    imageStyle:{ height: 32, width: 32, resizeMode: 'contain', marginHorizontal: 5 }


});

//make this component available to the app
export default SearchBar;
