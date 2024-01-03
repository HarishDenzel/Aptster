import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import { SliderBox } from "react-native-image-slider-box";
import { useTheme } from '@react-navigation/native'
import { allCatergoriesList,bannerList} from '../../utils/enum/mock';
import {string} from '../../utils/global/constants';


export default function HomeScreen(props: any) {
  const { colors } = useTheme()
  const styles = makeStyles(colors)
  const [searchValue, setSearchValue] = useState('')
  const renderItems = (item: { url: any; name: any; }) => {
    return (
      <TouchableOpacity
        onPress={() => { null }}
        style={{
          padding: 10
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
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 60 }}>
          <View style={styles.welcomeCon}>
            <View style={styles.welcomesub}>
              <Text style={styles.headText}>{string.hello}</Text>
              <Text style={styles.subText}>Harish !</Text>
            </View>
            <Text style={styles.notesText}>{string.notes}</Text>
          </View>
          <SearchBar {...props} placeholder={string.searchPlaceholder} value={searchValue} onChangeText={(e) => { setSearchValue(e) }} />
          <SliderBox
            images={bannerList}
            sliderBoxHeight={200}
            onCurrentImagePressed={(index: any) => console.warn(`image ${index} pressed`)}
            dotColor="#FF8C00"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={styles.pageination}
            dotStyle={styles.dotstyle}
            ImageComponentStyle={styles.slideImage}
            imageLoadingColor="#2196F3"
          />
          <View style={styles.catContainer}>
            <TouchableOpacity onPress={() => props.navigation.navigate('AllCatergories')} style={styles.catHeader}>
              <Text style={styles.catHeadText}>{string.allCatergories}</Text>
              <Text style={styles.catSubText}>{string.viewAll}</Text>
            </TouchableOpacity>
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
                renderItem={({ item }) => renderItems(item)}
              />
            </ScrollView>
          </View>
        </ScrollView>

      </View>
    </View>
  )
}

const makeStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#f4f4f4"
  },
  welcomeCon: {
    justifyContent: 'center', paddingHorizontal: 10, marginVertical: 15
  },
  welcomesub: {
    flexDirection: 'row', paddingTop: 15
  },
  headText: {
    fontSize: 20, color: '#1E1E1E', fontWeight: '500'
  },
  subText: {
    fontSize: 20, color: '#FF8C00', paddingLeft: 5, fontWeight: '400'
  },
  notesText: {
    fontSize: 24, color: '#1E1E1E', fontWeight: '400', paddingTop: 15
  },
  slideImage: {
    borderRadius: 15, width: '95%', marginTop: 15,
  },
  pageination: {
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  catContainer: {
    flex: 0.8, padding: 10, backgroundColor: '#fff', marginTop: 15
  },
  catHeader: {
    flexDirection: 'row', paddingTop: 15
  },
  catHeadText: {
    fontSize: 14, color: '#1E1E1E', fontWeight: '500', flex: 1
  },
  catSubText: {
    fontSize: 12, color: '#FF8C00', paddingLeft: 5, fontWeight: '400'
  },
  catImage: {
    width: 55,
    height: 55,
    borderRadius: 50

  }, dotstyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }
})