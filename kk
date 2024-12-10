import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';  // Import the Provider from react-redux
// API URL
const API_URL = 'https://670717a7a0e04071d22919b3.mockapi.io/bike_9thweek';
// Redux slice for managing state
const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    bikes: [],
    searchTerm: '',
  },
  reducers: {
    setBikes: (state, action) => {
      state.bikes = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    bikes: bikeSlice.reducer,
  },
});
const { setBikes, setSearchTerm } = bikeSlice.actions;
// Fetch bikes from API
const fetchBikes = async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(setBikes(response.data));
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};
// BikeList Component
const BikeList = ({ navigation }) => {
  const bikes = useSelector((state) => state.bikes.bikes);
  const searchTerm = useSelector((state) => state.bikes.searchTerm);
  const dispatch = useDispatch();
  const filteredBikes = bikes.filter((bike) =>
    bike.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    fetchBikes(dispatch);
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchBikes(dispatch); // Re-fetch bikes after deletion
    } catch (error) {
      console.error('Error deleting bike: ', error);
    }
  };

  const handleSearchChange = (text) => {
    dispatch(setSearchTerm(text));
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <TextInput
          placeholder="Search by name"
          value={searchTerm}
          onChangeText={handleSearchChange}
          style={{
            padding: 10,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 20,
          }}
        />
        <FlatList
          data={filteredBikes}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10, padding: 10, backgroundColor: '#f8f8f8' }}>
              <Text>{item.name}</Text>
              <Text>Price: ${item.basePrice}</Text>
              <Text>Sale Amount: {item.saleAmount}</Text>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={{ backgroundColor: 'red', padding: 10 }}>
                <Text style={{ color: 'white' }}>Delete</Text>
              </TouchableOpacity>
              <Button
                title="Edit"
                onPress={() => navigation.navigate('EditBike', { bike: item })}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <Button
          title="Add New Bike"
          onPress={() => navigation.navigate('AddBike')}
        />
      </View>
    </ScrollView>
  );
};

// EditBike Component
const EditBike = ({ route, navigation }) => {
  const { bike } = route.params;
  const [name, setName] = useState(bike.name);
  const [basePrice, setBasePrice] = useState(bike.basePrice);
  const [saleAmount, setSaleAmount] = useState(bike.saleAmount);
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_URL}/${bike.id}`, {
        name,
        basePrice,
        saleAmount,
      });
      fetchBikes(dispatch); // Re-fetch bikes after update
      navigation.goBack();
    } catch (error) {
      console.error('Error updating bike: ', error);
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <TextInput
        placeholder="Bike Name"
        value={name}
        onChangeText={setName}
        style={{
          padding: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />
      <TextInput
        placeholder="Base Price"
        value={String(basePrice)}
        onChangeText={(text) => setBasePrice(Number(text))}
        keyboardType="numeric"
        style={{
          padding: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />
      <TextInput
        placeholder="Sale Amount"
        value={String(saleAmount)}
        onChangeText={(text) => setSaleAmount(Number(text))}
        keyboardType="numeric"
        style={{
          padding: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />
      <Button title="Update Bike" onPress={handleUpdate} />
    </ScrollView>
  );
};

// AddBike Component
const AddBike = ({ navigation }) => {
  const [name, setName] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [saleAmount, setSaleAmount] = useState('');
  const dispatch = useDispatch();

  const handleAdd = async () => {
    try {
      await axios.post(API_URL, {
        name,
        basePrice: Number(basePrice),
        saleAmount: Number(saleAmount),
      });
      fetchBikes(dispatch); // Re-fetch bikes after add
      navigation.goBack();
    } catch (error) {
      console.error('Error adding bike: ', error);
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <TextInput
        placeholder="Bike Name"
        value={name}
        onChangeText={setName}
        style={{
          padding: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />
      <TextInput
        placeholder="Base Price"
        value={basePrice}
        onChangeText={setBasePrice}
        keyboardType="numeric"
        style={{
          padding: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />
      <TextInput
        placeholder="Sale Amount"
        value={saleAmount}
        onChangeText={setSaleAmount}
        keyboardType="numeric"
        style={{
          padding: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />
      <Button title="Add Bike" onPress={handleAdd} />
    </ScrollView>
  );
};

// App Navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BikeList">
        <Stack.Screen name="BikeList" component={BikeList} />
        <Stack.Screen name="EditBike" component={EditBike} />
        <Stack.Screen name="AddBike" component={AddBike} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <Provider store={store}>  {/* Wrapping the App with Provider */}
    <App />
  </Provider>
);
