import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IconButton} from 'react-native-paper';

export default function Category() {
  const icons = [
    {id: 1, icon: 'home-outline'},
    {id: 1, icon: 'heart-outline'},
    {id: 1, icon: 'cart-outline'},
    {id: 1, icon: 'home-outline'},
    {id: 1, icon: 'home-outline'},
  ];

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {icons.map(index => (
          <IconButton
            key={index.id}
            icon={({color, size}) => (
              <View style={{alignItems: 'center'}}>
                <Ionicons name={index.icon} color={color} size={size} />
                <Text style={{color: 'gray', fontSize: 12}}>Home</Text>
              </View>
            )}
            style={styles.iconButton}
          />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  iconButton: {
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'black',
    height: 50,
    width: 100,
  },
});
