//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { allCatergoriesList } from '../../utils/enum/mock';
import { string } from '../../utils/global/constants';

// create a component
const AllCatergories = (props: any) => {
    const [searchValue, setSearchValue] = useState('')
    const [selectedItem, setselectedItem] = useState(props.route.params.name?props.route.params.name:'Automotive')

    const renderItems = (item: { url: any; name: any; }) => {
        return (
            <TouchableOpacity
            onPress={() => { setselectedItem(item.name) }}
            style={{
                    padding: 10,
                    alignItems: 'center',
                    backgroundColor: selectedItem ==  item.name ? '#F9FAFB' : null,
                    borderLeftWidth:selectedItem ==  item.name ? 3 : 0,
                    borderLeftColor:selectedItem ==  item.name ? 'orange' : null
                }}>
                <Image
                    style={styles.catImage}
                    resizeMode='contain'
                    source={{ uri: item.url }}
                />
                <Text style={{ fontSize: 12, color: '#1E1E1E', fontWeight: '400', textAlign: 'center', paddingVertical: 5 }}>{item.name}</Text>
            </TouchableOpacity>
        );
    }
    const renderSubItems = (item: { url: any; name: any; }) => {
        return (
            <TouchableOpacity
                onPress={() => { setselectedItem(item.name) }}
                style={{
                    padding: 10,
                    alignItems: 'center',
                }}>
                <Image
                    style={styles.catImage}
                    resizeMode='contain'
                    source={{ uri: item.url }}
                />
                <Text style={{ fontSize: 12, color: '#1E1E1E', fontWeight: '400', textAlign: 'center', paddingVertical: 5 }}>{item.name}</Text>
            </TouchableOpacity>
        );
    }
    const renderSeparator = () => {
        return (
            <View style={{ width: '100%', height: 1, backgroundColor: '#D1D5DB' }}></View>
        )
    }
    return (
        <View style={styles.container}>
            <Header {...props} isBack={true} />
            <SearchBar {...props} placeholder={string.searchPlaceholder} value={searchValue} onChangeText={(e) => { setSearchValue(e) }} />
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffff', marginHorizontal: 10 }}>
                <View style={{ flex: 0.3, alignItems: 'center', borderRightWidth: 0.5, borderRightColor: '#D1D5DB' }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={allCatergoriesList}
                        renderItem={({ item }) => renderItems(item)}
                        ItemSeparatorComponent={() => renderSeparator()}
                    />
                </View>
                <View style={{ flex: 0.7, padding: 10, }}>
                    <Text style={styles.catHeadText}>{selectedItem}</Text>
                    <FlatList
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        numColumns={3}
                        data={allCatergoriesList}
                        renderItem={({ item }) => renderSubItems(item)}
                    />
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
    },
    catImage: {
        width: 55,
        height: 55,
        borderRadius: 50

    },
    catHeadText: {
        fontSize: 14, color: '#1E1E1E', fontWeight: '400',
    },
});

//make this component available to the app
export default AllCatergories;
