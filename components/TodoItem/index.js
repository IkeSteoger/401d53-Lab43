// TodoItem.js
import React from 'react';
import { View, Text, Image } from 'react-native';

const TodoItem = ({ title, imageUri }) => {
  return (
    <View>
      <Text>{title}</Text>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />}
    </View>
  );
};

export default TodoItem;