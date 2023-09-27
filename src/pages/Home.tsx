import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ImageCarousel from '../component/molecules/ImageCarousel';
import SearchBar from '../component/molecules/SearchBar';
import Category from '../component/molecules/Category';
import PopularProduct from '../component/molecules/PopularProduct';
import HotDeals from '../component/molecules/HotDeals';

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.main}>
        <SearchBar />
        <ImageCarousel />
        <Category />
        <HotDeals />
        <PopularProduct />
      </View>
      <View style={{marginTop: '15%'}} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
});
