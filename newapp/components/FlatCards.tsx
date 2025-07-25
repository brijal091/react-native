import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    height: 100,
    width: 100,
  },
  cardOne: {
    backgroundColor: '#B33F40',
  },
  cardTwo: {
    backgroundColor: '#48A14D',
  },
  cardThree: {
    backgroundColor: '#6577B3',
  },
});
