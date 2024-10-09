import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default HomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleGetStarted = () => {
    if (username.trim()) {
      navigation.navigate('NotesList', { username });
    } else {
      navigation.navigate('NotesList', { username });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{width: 220, height: 220, resizeMode: 'stretch', marginBottom: 30}}
        source={require('../assets/logo.png')}
      />
      <Text style={styles.label}>MANAGE YOUR TASK</Text>
      <TextInput
        style={styles.input}
        placeholder="✉ Enter your Name"
        value={username}
        onChangeText={setUsername}
      />
      <Button style={styles.button} title="  Get Started  ⟶ " onPress={handleGetStarted} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 30,
    color: '#8353E2',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    width: 250,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 10,
  },
  button: {
    borderWidth: 1,
    width: 250,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 20,
  }
});


