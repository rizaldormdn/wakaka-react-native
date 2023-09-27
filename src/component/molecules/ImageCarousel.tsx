import React from 'react';
import {Image, View, useWindowDimensions, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export default function ImageCarousel() {
  const dummy = [
    { 
      id: 1,
      url: 'https://media.dekoruma.com/catalogue/NRA-406844.jpg?auto=webp&bg-color=ffffff&dpr=1&fit=bounds&optimize=high&pad=0&quality=20&trim-color=auto',
    },
    {
      id: 2,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMjrhYulzrmaXTR0_YGaOt3WDZMGhZwWqHg&usqp=CAU',
    },
  ];
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width - 20}
        height={200}
        autoPlay={true}
        data={dummy}
        scrollAnimationDuration={1000}
        renderItem={({item}) => (
          <Image
            key={item.id}
            style={styles.images}
            source={{
              uri: item.url,
            }}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  images: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
