import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { UserContext } from '../App';

const API_URL = 'https://66fde39e699369308956755d.mockapi.io/note';



const NotesListScreen = ({ route, navigation }) => {
  const { username } = route.params ? route.params : { username: 'Hi' };
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);
  const {userName, setUserName} = useContext(UserContext);
  
  const fetchNotes = async () => {
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data);
      setFilteredNotes(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch notes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
    const unsubscribe = navigation.addListener('focus', fetchNotes);
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredNotes(notes);
    } else {
      const filtered = notes.filter(note => 
        note.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNotes(filtered);
    }
  }, [searchQuery, notes]);

  const renderItem = ({ item }) => (
    <View style={styles.noteItem}>
      <Text>✅</Text>
      <Text style={styles.noteName}>{item.name}</Text>
      <TouchableOpacity
        style={styles.modifyButton}
        onPress={() => navigation.navigate('NoteDetail', { username, note: item })}
      >
        <Icon name="edit" size={20} color="red"/>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Hi {userName}</Text>
      <Text style={{fontSize: 18, fontWeight: 'bold', color:'gray', marginBottom: 10}}>Have agrate day ahead</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="🔎︎ Search "
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      {loading ? (
        <Text>Loading notes...</Text>
      ) : (
        <FlatList
          data={filteredNotes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text>No notes available.</Text>}
        />
      )}
      
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('NoteDetail', { username })}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      
    </View>
  );
};

export default NotesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  username: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  searchInput: {
    borderWidth: 1,
    width: 300,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  noteItem: {
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#c7c7c7',
    margin: 5,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  noteName: {
    fontSize: 16,
    flex: 1,
  },
  modifyButton: {
    backgroundColor: '#c7c7c7',
    padding: 8,
    borderRadius: 4,
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#00BDD6',
    width: 60,
    height: 60,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 30,
    
  },
  modifyButtonText: {
    color: '#fff',
  },
});
