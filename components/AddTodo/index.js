import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddTodo = ({ onAddTodo }) => {
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

    if (!result.cancelled) {
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

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Todo Task"
        value={todoTitle}
        onChangeText={setTodoTitle}
      />
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: 100, height: 100 }}
        />
      )}
      <TouchableOpacity
        onPress={handleCameraImage}
        style={{ backgroundColor: 'blue', padding: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Take Picture
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePickImage}
        style={{ backgroundColor: 'orange', padding: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Select Image
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleAddTodo}
        style={{ backgroundColor: 'green', padding: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;