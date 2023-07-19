import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Image,
  StyleSheet
} from 'react-native';
import { Box, Input } from "native-base";
import * as ImagePicker from 'expo-image-picker';

const AddTodo = ({ onAddTodo, trueFalseTheme }) => {
  const [todoTitle, setTodoTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleAddTodo = () => {
    onAddTodo({
      title: todoTitle,
      imageUri: image ? image.uri : null,
    });
    setTodoTitle('');
    setImage(null);
  };

  const handleCameraImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result);
    }
  };

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result);
    }
  };

  return (
    <View>
      <View style={styles.centered}>
        <Box alignItems="center">
          {trueFalseTheme
            ?
            <Input
              color='white'
              mx="3"
              placeholder="Enter ToDo Task"
              w="80%"
              value={todoTitle}
              onChangeText={setTodoTitle}
              textAlign="center"
            />
            : <Input
              color='black'
              mx="3"
              placeholder="Enter ToDo Task"
              w="80%"
              value={todoTitle}
              onChangeText={setTodoTitle}
              textAlign="center"

            />}
   
        </Box>
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 100, height: 100 }}
          />
        )}
        <View
          style={{
            flexDirection: "row",
            padding: 5,
          }}>
          <Button
            onPress={handleCameraImage}
            color="orange"
            title="Take Picture" />
          <Button
            onPress={handlePickImage}
            color="blue"
            title="Select Image" />
        </View>
      </View>
      <View
        style={{
          height: 100,
          padding: 10,
        }}>
        <Button
          onPress={handleAddTodo}
          color="green"
          title="Add ToDo" />
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});