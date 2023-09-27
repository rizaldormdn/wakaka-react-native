import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SearchBar from '../component/molecules/SearchBar';

export default function Product() {
  return (
    <View style={styles.main}>
      <SearchBar />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
});
