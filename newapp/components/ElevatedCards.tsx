import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>TEST</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
    backgroundColor: '#000',
    color: '#fff',
  },
  cardText: {
    color: '#fff',
  },
});
