import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite() {
    Linking.openURL('https://example.com');
    console.log('Website opened!');
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      {/* <View style={[styles.card, styles.elevatedCard]} onPress={openWebsite}> */}
      {/* Anove one is not working becasue we are nto able to pass the onPress prop to a View component so we have to wrap it in TouchableOpacity */}
      <TouchableOpacity
        style={[styles.card, styles.elevatedCard]}
        onPress={openWebsite}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Click to open website</Text>
        </View>
        <Image
          source={{ uri: 'https://tinypng.com/images/social/website.jpg' }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  card: {
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
  elevatedCard: {
    elevation: 5,
    backgroundColor: '#fff',
  },
  headerContainer: {},
  headerText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
});
