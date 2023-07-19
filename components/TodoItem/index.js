// TodoItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const TodoItem = ({ title, imageUri }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{title}</Text>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    elevation: 4,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  image: {
    width: "80%",
    height: 200,
    borderRadius: 4,
    alignSelf: "center"
  },
});

export default TodoItem;