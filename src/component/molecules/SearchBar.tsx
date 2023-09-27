import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={[styles.search, styles.borderShadow]}>
        <Ionicons name="search" size={14} color="gray" />
        <TextInput
          placeholder="cari apa bro?"
          placeholderTextColor="gray"
          style={{textDecorationColor: 'black'}}
        />
      </View>
      <IconButton icon="cart" size={25} onPress={() => {}} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    paddingLeft: 15,
    gap: 10,
    height: 40,
    flex: 1,
  },
  borderShadow: {
    borderRadius: 50,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 1},
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: '#f5f5f5',
  },
});
