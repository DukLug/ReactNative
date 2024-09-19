import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ColorSelectionScreen({ route, navigation }) {
  const { handleColorSelection } = route.params;

  return (
    <View style={styles.container}>
      <View style = {styles.topContainer}>
        <Image
          style={{width: 80, height: 100, margin: 5}}
          source={require('../assets/vs_red.png')}
        />
        <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>
      <View style = {styles.bottomContainer}>
          <Text style = {{margin: 10, fontSize: 16}}>
            Chọn một màu bên dưới:
          </Text>
        <View style={styles.colorContainer}>
          
          <TouchableOpacity 
            style={[styles.colorBox, { backgroundColor: '#C5F1FB' }]} 
            onPress={() => handleColorSelection(require('../assets/vs_silver.png'))}
          />
          <TouchableOpacity 
            style={[styles.colorBox, { backgroundColor: '#F30D0D' }]} 
            onPress={() => handleColorSelection(require('../assets/vs_red.png'))}
          />
          <TouchableOpacity 
            style={[styles.colorBox, { backgroundColor: '#000000' }]} 
            onPress={() => handleColorSelection(require('../assets/vs_black.png'))}
          />
          <TouchableOpacity 
            style={[styles.colorBox, { backgroundColor: '#234896' }]} 
            onPress={() => handleColorSelection(require('../assets/vs_blue.png'))}
          />
        </View>
      </View>
      
      <TouchableOpacity style={styles.doneButton} onPress={() => navigation.goBack()}>
        <Text style={styles.doneButtonText}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  topContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  bottomContainer: {
    padding: 10,
    backgroundColor: '#C4C4C4',
  },
  colorContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4'
  },
  colorBox: {
    width: 50,
    height: 50,
    marginBottom: 20,
    borderColor: 'gray',
  },
  doneButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  doneButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
