import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { fontSize, height, width } from '../../Assets/Constant/fontsAndColors'
import SearchBar from '../../components/SearchBar'
import { SliderBox } from "react-native-image-slider-box";


export default function HomeScreen(props: any) {
  const [searchValue, setSearchValue] = useState('')
  const [bannerList, setbannerList] = useState(['https://aptster-images.s3.us-east-2.amazonaws.com/restaurant.png', 'https://aptster-images.s3.us-east-2.amazonaws.com/restaurant.png'])
  const [allCatergoriesList, setallCatergoriesList] = useState([
    {
      name: 'Automotive',
      url: 'https://aptster-images.s3.us-east-2.amazonaws.com/18.png'
    },
    {
      name: 'Merchants',
      url: 'https://aptster-images.s3.us-east-2.amazonaws.com/11.png'
    }, {
      name: 'Real Estate',
      url: 'https://aptster-images.s3.us-east-2.amazonaws.com/12.png'
    }, {
      name: 'Constructions',
      url: 'https://aptster-images.s3.us-east-2.amazonaws.com/13.png'
    }, {
      name: 'Educations',
      url: 'https://aptster-images.s3.us-east-2.amazonaws.com/14.png'
    }, {
      name: 'Entertainment',
      url: 'https://aptster-images.s3.us-east-2.amazonaws.com/15.png'
    }, {
      name: 'Travel',
      url: 'https://aptster-images.s3.us-east-2.amazonaws.com/17.png'
    }, {
      name: 'Health',
      url: 'https://aptster-images.s3.us-east-2.amazonaws.com/9.png'
    }, {
      name: 'Home',
      url: 'https://aptster-images.s3.us-east-2.amazonaws.com/8.png'
    }, {
      name: 'sale',
      url: 'https://aptster-images.s3.us-east-2.amazonaws.com/9.png'
    }, {
      name: 'Automotive',
      url: 'https://aptster-images.s3.us-east-2.amazonaws.com/6.png'
    },

  ])
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 0.15, justifyContent: 'center', paddingHorizontal: 10, marginVertical: 15 }}>
        <View style={{ flexDirection: 'row', paddingTop: 15 }}>
          <Text style={{ fontSize: 20, color: '#1E1E1E', fontWeight: '500' }}>Hello</Text>
          <Text style={{ fontSize: 20, color: '#FF8C00', paddingLeft: 5, fontWeight: '400' }}>Harish !</Text>
        </View>
        <Text style={{ fontSize: 24, color: '#1E1E1E', fontWeight: '400', paddingTop: 15 }}>What you are looking for{'\n'}today?</Text>
      </View>
      <SearchBar {...props} placeholder={'Search for “House keeping” deals'} value={searchValue} onChangeText={(e) => { setSearchValue(e) }} />
      <SliderBox
        images={bannerList}
        sliderBoxHeight={200}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#FF8C00"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={styles.pageination}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "rgba(128, 128, 128, 0.92)"
        }}
        ImageComponentStyle={{ borderRadius: 15, width: '95%', marginTop: 15, }}
        imageLoadingColor="#2196F3"
      />
      <View style={{ flex: 0.8, padding: 10, backgroundColor: '#fff', marginTop: 15 }}>
        <View style={{ flexDirection: 'row', paddingTop: 15 }}>
          <Text style={{ fontSize: 14, color: '#1E1E1E', fontWeight: '500', flex: 1 }}>All Catergories</Text>
          <Text style={{ fontSize: 12, color: '#FF8C00', paddingLeft: 5, fontWeight: '400' }}>View all</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
        >
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-start' }}
            numColumns={Math.ceil(allCatergoriesList.length / 2)}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={allCatergoriesList}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => { }}
                  style={{
                    padding: 10
                  }}>
                  <Image
                    style={styles.catImage}
                    resizeMode='contain'
                    source={{ uri: item.url }}
                  />
                  <Text style={{ fontSize: 12, color: '#1E1E1E', fontWeight: '400', textAlign: 'center' ,paddingVertical:5}}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageination: {
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  catImage: {
    width: 55,
    height: 55,
    borderRadius: 50

  }
})