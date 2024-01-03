import React, { useState, useEffect } from 'react';
import { Image, View, Pressable, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { icons } from '../assets/icons';
import { useTheme } from '@react-navigation/native';
import { string } from '../utils/global/constants';
// import { Octicons, AntDesign, SimpleLineIcons, FontAwesome5 } from '@expo/vector-icons';

const Header = (props: any) => {
    const { isBack } = props
    const { colors } = useTheme()
    const styles = makeStyles(colors)
    const openMyDrawer = () => {
        isBack ? props.navigation.goBack(null) : null
    }
    return (
        <View style={{ backgroundColor: '#ffff', padding: 5, alignItems: 'center', flexDirection: "row", paddingVertical: 10, paddingHorizontal: 10 }}>
            <View >
                <TouchableOpacity onPress={openMyDrawer} >
                    <Image source={isBack ? icons.back : icons.menu} style={isBack ? styles.back : styles.menu} />
                </TouchableOpacity>
            </View>
            {isBack ?
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontWeight: '500', fontSize: 14, color: '#1E1E1E', paddingHorizontal: 10 }}>
                        {string.categories}
                    </Text>
                </View> :
                <>
                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                        <View>
                            <Text style={{ fontWeight: '400', fontSize: 10, color: '#4B5563' }}>{string.currentLocation}</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View>
                                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#1E1E1E' }}>
                                        {"15A,James Street"}
                                    </Text>
                                </View>
                                <Image source={icons.dropDown} style={{ height: 10, width: 10, resizeMode: 'contain', marginHorizontal: 5 }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ margin: 2 }}>
                        <Text style={{ fontWeight: '400', fontSize: 10, color: 'black' }}> {"BRONZE"} </Text>
                        <Text style={{ fontWeight: '500', fontSize: 8, color: '#4B5563' }}> {"0 POINTS"}</Text>
                    </View>
                    <Image source={icons.badge} style={{ height: 24, width: 24, resizeMode: 'contain' }} />
                </>
            }
        </View>
    )
}
export default Header;


const makeStyles = (colors: any) => StyleSheet.create({

    menu: { height: 32, width: 32, resizeMode: 'contain' },
    back: { height: 25, width: 25, resizeMode: 'contain' }

});
