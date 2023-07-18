// TodoList.js
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TodoItem from '../TodoItem/index';

const TodoList = ({ todos }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TodoItem style={styles.item} title={item.title} imageUri={item.imageUri} />}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});

export default TodoList;