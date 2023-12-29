import React, { useState, useEffect } from 'react';
import { Image, View, Pressable, TouchableOpacity, Text } from 'react-native';
import { icons } from '../assets/icons';
// import { Octicons, AntDesign, SimpleLineIcons, FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
    const openMyDrawer = () => {

    }
    return (
        <View style={{ backgroundColor: '#ffff', padding: 5, alignItems: 'center', flexDirection: "row", paddingVertical: 10, paddingHorizontal: 10 }}>
            <View >
                <TouchableOpacity onPress={openMyDrawer} >
                    <Image source={icons.menu} style={{ height: 32, width: 32, resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <View>
                    <Text style={{ fontWeight: 400, fontSize: 10, color: '#4B5563' }}>Current Location</Text>
                </View>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View>
                            <Text style={{ fontWeight: 400, fontSize: 12, color: '#1E1E1E' }}>
                                15A,James Street
                            </Text>
                        </View>
                        <Image source={icons.dropDown} style={{ height: 10, width: 10, resizeMode: 'contain', marginHorizontal: 5 }} />
                    </View>
                </View>
            </View>
            <View style={{ margin: 2 }}>
                <Text style={{ fontWeight: '400', fontSize: 10, color: 'black' }}> BRONZE </Text>
                <Text style={{ fontWeight: '500', fontSize: 8, color: '#4B5563' }}> 0 POINTS</Text>
            </View>
            <Image source={icons.badge} style={{ height: 24, width: 24, resizeMode: 'contain' }} />
        </View>
    )
}

export default Header;