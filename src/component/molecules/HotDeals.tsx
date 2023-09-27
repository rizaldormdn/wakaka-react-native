import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';

export default function HotDeals() {
  return (
    <View style={{marginTop: 10}}>
      <Text style={styles.title}>FLASH SALE</Text>
      <FlatList
        numColumns={2}
        style={styles.flatList}
        data={Array(4)}
        renderItem={() => (
          <Pressable style={styles.pressable}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://www.cherrypickindia.in/wp-content/uploads/2020/12/1-848x487.jpg',
              }}
            />
          </Pressable>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  flatList: {
    marginTop: 5,
  },
  pressable: {
    flex: 1,
    margin: 5,
    height: 100,
  },
  image: {
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: 'gray',
    width: '100%',
    height: '100%',
  },
});
