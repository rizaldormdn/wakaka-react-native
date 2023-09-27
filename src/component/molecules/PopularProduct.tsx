import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

export default function PopularProduct() {
  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 15,
        }}>
        REKOMENDASI
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingVertical: 10}}>
        {Array.from(Array(10)).map((_, index) => (
          <Card key={index} style={styles.card}>
            <Card.Cover
              style={styles.cardCover}
              source={{
                uri: 'https://media.dekoruma.com/catalogue/NRA-406844.jpg?auto=webp&bg-color=ffffff&dpr=1&fit=bounds&optimize=high&pad=0&quality=20&trim-color=auto',
              }}
            />
            <Card.Content style={styles.cardContent}>
              <Text style={styles.titleContent}>sofa</Text>
              <Text style={{color: 'black'}}>Rp. 499.000</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 200,
    overflow: 'hidden',
    marginRight: 15,
  },
  cardCover: {
    height: 200,
    borderRadius: 0,
  },
  cardContent: {
    backgroundColor: 'white',
    padding: 6,
  },
  titleContent: {
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
  },
});
