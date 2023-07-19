import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, useColorScheme, Text } from 'react-native';
import Constants from 'expo-constants';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { NativeBaseProvider } from "native-base";
import { StatusBar } from 'expo-status-bar';
import { Switch, List } from 'react-native-paper';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    // Generate a unique ID for the new todo item
    newTodo.id = todos.length + 1;
    setTodos([...todos, newTodo]);
  };

  const theme = useColorScheme();
  const [trueFalseTheme, setTrueFalseTheme] = useState(false)

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTrueFalseTheme(!trueFalseTheme);
    }
    if (theme === 'light') {
      setTrueFalseTheme(!trueFalseTheme);
    }
  };

  return (
    <NativeBaseProvider>
      <View style={[
        styles.container,
        trueFalseTheme
          ? { backgroundColor: 'black' }
          : { backgroundColor: 'white' }
      ]}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Render the TodoList component with todos */}
          <TodoList todos={todos} />
        </ScrollView>
        {/* Render the AddTodo component */}
        <AddTodo onAddTodo={handleAddTodo} trueFalseTheme={trueFalseTheme} />
        <StatusBar />
        <View style={styles.switchContainer}>
          {trueFalseTheme
            ? <>
              <List.Icon
                color='white'
                icon="weather-sunny" /><Switch value={trueFalseTheme} onValueChange={toggleTheme} /><List.Icon
                color='white'
                icon="weather-night" />
            </>
            : <>
              <List.Icon
                color='black'
                icon="weather-sunny" /><Switch value={trueFalseTheme} onValueChange={toggleTheme} /><List.Icon
                color='black'
                icon="weather-night" />
            </>
          }
        </View>
      </View>
    </NativeBaseProvider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
});

export default App;