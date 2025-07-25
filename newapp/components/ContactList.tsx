import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: '1',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'John Doe',
      designation: 'Software Engineer',
    },
    {
      uid: '2',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Jane Smith',
      designation: 'Product Manager',
    },
    {
      uid: '3',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Michael Johnson',
      designation: 'Data Analyst',
    },
    {
      uid: '4',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      name: 'Emily Davis',
      designation: 'UX Designer',
    },
    {
      uid: '5',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      name: 'David Brown',
      designation: 'Marketing Lead',
    },
    {
      uid: '6',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      name: 'Sophia Wilson',
      designation: 'HR Manager',
    },
    {
      uid: '7',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      name: 'James Miller',
      designation: 'Operations Director',
    },
    {
      uid: '8',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      name: 'Olivia Moore',
      designation: 'Sales Executive',
    },
    {
      uid: '9',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      name: 'Liam Taylor',
      designation: 'Business Analyst',
    },
    {
      uid: '10',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      name: 'Ava Anderson',
      designation: 'Customer Support Specialist',
    },
  ];

  return (
    <View style={{ marginBottom: 20, paddingHorizontal: 16 }}>
      <Text style={styles.headingText}>ContactList</Text>
      <View>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.listContainer}>
            <Image style={styles.image} source={{ uri: contact.image }} />
            <View>
              <Text style={{ color: '#fff', fontSize: 18 }}>
                {contact.name}
              </Text>
              <Text style={{ color: '#fff', fontSize: 14 }}>
                {contact.designation}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
    backgroundColor: '#8e44ad',
    borderRadius: 8,
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
