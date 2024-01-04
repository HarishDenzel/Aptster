//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TextInputProps, Image, Pressable ,TouchableOpacity} from 'react-native';
import { fontSize } from '../../assets/Constant/fontsAndColors';
import { icons } from '../../assets/icons';
import { string } from '../../utils/global/constants';

// create a component
const SearchBar = (props: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<TextInput> & Readonly<TextInputProps>) => {
    const { value, disable } = props;
    return (
        <TouchableOpacity disabled={!disable } onPress={()=>props.navigation.navigate('Search')} style={styles.container}>
           {disable? <View   style={styles.input}>
            <Text style={{fontSize:fontSize.Medium,color:'#b8b8b8'}}>{string.searchPlaceholder}</Text>
            </View>:
            <TextInput
           
               
                {...props}
                style={styles.input}
                value={value}
            />
    }
            <Image source={icons.searchHome} style={styles.imageStyle} />
        </TouchableOpacity>
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
