import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const API_URL = 'https://66fde39e699369308956755d.mockapi.io/note';

export default NoteDetailScreen = ({ route, navigation }) => {
  const { username, note } = route.params || {};
  const isEdit = !!note;

  const [name, setName] = useState(isEdit ? note.name : '');
  const [content, setContent] = useState(isEdit ? note.content : '');

  const handleFinish = async () => {
    if (name.trim() === '') {
      alert('Please fill in name.');
      return;
    }

    try {
      if (isEdit) {
        await axios.put(`${API_URL}/${note.id}`, {
          name,
          content,
        });
      } else {
        await axios.post(API_URL, {
          name,
          content,
        });
      }
      navigation.goBack();
    } catch (error) {
      console.error(error);
      alert('Failed to save the note.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Hi {username}</Text>
      <Text style={{fontSize: 18, fontWeight: 'bold', color:'gray', marginBottom: 10}}>Have agrate day ahead</Text>
      <Text style={styles.label}>ADD YOUR JOB</Text>

      <TextInput
        style={[styles.input, styles.contentInput]}
        placeholder="Write your note here..."
        value={name}
        onChangeText={setName}
        multiline
      />
      <TouchableOpacity 
        style={styles.addButton}
        onPress={handleFinish}
      >
        <Text style={styles.addButtonText}>FINISH ⟶</Text>
      </TouchableOpacity>

      <Image
        style={{width: 180, height: 180, resizeMode: 'stretch', marginTop: 30, alignSelf: 'center'}}
        source={require('../assets/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  username: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 30,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    width: 300,
  },
  contentInput: {

    textAlignVertical: 'top',
  },
   addButton: {
    backgroundColor: '#00BDD6',
    width: 200,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    
  },
});

