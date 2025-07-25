import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={styles.cardList}>
        {[1, 2, 3].map(item => (
          <View style={styles.card} key={item}>
            <Image
              source={{ uri: 'https://tinypng.com/images/social/website.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.content}>
              <Text style={styles.title}>Panda Paradise</Text>
              <Text style={styles.description}>
                Discover the serene world of pandas! This beautiful sanctuary is
                home to adorable pandas and lush bamboo forests. A must-visit
                for nature lovers and wildlife enthusiasts.
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
    alignSelf: 'center',
  },
  cardList: {
    flexDirection: 'column',
    gap: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#eee',
  },
  content: {
    width: '100%',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
