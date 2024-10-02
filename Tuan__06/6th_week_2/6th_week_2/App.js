import React, { useState } from 'react';

import { Text, SafeAreaView, StyleSheet, View, FlatList,
  StatusBar,
  TouchableOpacity,
  Image, } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

const DATA = [
  {
    id: '1',
    itemTitle: 'Cáp chuyển từ Cổng USB sang PS2...',
    itemPrice: '69.900đ',
    itemSaleOff: '-39%',
    img: require('./assets/giacchuyen 1.png'), // Replace with actual image URL
  },
  {
    id: '2',
    itemTitle: 'Cáp chuyển từ Cổng USB sang PS2...',
    itemPrice: '69.900đ',
    itemSaleOff: '-39%',
    img: require('./assets/daynguon 1.png'), // Replace with actual image URL
  },
  {
    id: '3',
    itemTitle: 'Cáp chuyển từ Cổng USB sang PS2...',
    itemPrice: '69.900đ',
    itemSaleOff: '-39%',
    img: require('./assets/dauchuyendoipsps2 1.png'), // Replace with actual image URL
  },
  {
    id: '4',
    itemTitle: 'Cáp chuyển từ Cổng USB sang PS2...',
    itemPrice: '69.900đ',
    itemSaleOff: '-39%',
    img: require('./assets/dauchuyendoi 1.png'), // Replace with actual image URL
  },
  {
    id: '5',
    itemTitle: 'Cáp chuyển từ Cổng USB sang PS2...',
    itemPrice: '69.900đ',
    itemSaleOff: '-39%',
    img: require('./assets/carbusbtops2 1.png'), // Replace with actual image URL
  },
  {
    id: '6',
    itemTitle: 'Cáp chuyển từ Cổng USB sang PS2...',
    itemPrice: '69.900đ',
    itemSaleOff: '-39%',
    img: require('./assets/daucam 1.png'), // Replace with actual image URL
  },
  
 
];

const Item = ({ item, onPress, backgroundColor, textColor }) => 
{
  console.log(item)
  return (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Image source={item.img} style={styles.image} />
      <View style={styles.itemCenter}>
        <Text style={[styles.itemTitle]}>{item.itemTitle}</Text>
        <View style={{padding: 0, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Image source={require('./assets/Group 3.png')} style={{width: '80%', marginTop: 5}} />
          <Text style={{color: textColor }}>(15)</Text>
        </View>
        
        <View style={{padding: 0, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Text style={[styles.itemPrice, { color: textColor, marginRight: 10 }]}>{item.itemPrice}</Text>
          <Text style={{marginTop: 5, color: textColor }}>{item.itemSaleOff}</Text>
        </View>
        
      </View>    
  </TouchableOpacity>
)};

export default function App() {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#FFFFFF' : '#dbdbdb';
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.topSetion}>
        <Image source={require('./assets/1backwhite.png')} style={styles.iconImage} />
        <View style={{backgroundColor: 'white', width: '60%', paddingVertical: 3, paddingHorizontal: 10, flexDirection:'row', alignItems:'center'}}>
          <Image source={require('./assets/whh_magnifier.png')} style={{height: '100%', resizeMode: 'contain'}} />
          <Text style={{marginLeft: 10, color: 'gray'}}>Dây cáp USB</Text>
        </View>
        <View style={{paddingVertical: 3, paddingHorizontal: 10, flexDirection:'row-reverse', alignItems:'center'}}>
          <Image source={require('./assets/1cart.png')} style={styles.iconImage} />
          <View style={{width: 8,height: 8,backgroundColor: "red",borderRadius: 1000, alignSelf: 'flex-start', position: 'absolute'}}></View>
        </View>
        
        <Image source={require('./assets/Group 2.png')} style={styles.iconImage} />
      </View>
      <View style={styles.center}>
        <View style ={styles.items}>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Image source={require('./assets/1select.png')} style={styles.iconImage} />
        <Image source={require('./assets/1home.png')} style={styles.iconImage} />
        <Image source={require('./assets/1backblack.png')} style={styles.iconImage} />
      </View>
    </SafeAreaView>

    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dbdbdb',
    padding: 8,
  },
  topSetion: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1BA9FF',
    padding: 10,
  },
  center: {
    flex: 14,
    justifyContent: 'center',
    backgroundColor: '#dbdbdb',
    justifyContent: 'flex-start', 
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1BA9FF',
    padding: 10,
  },
  message: {
    height: '12%',
    justifyContent: 'center',
    backgroundColor: '#dbdbdb',
  },
  messageContent: {
    height: "100%",
    padding: 15,
    marginBottom: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: '#dbdbdb',
  },
  items: {
    justifyContent: 'center',
    backgroundColor: '#dbdbdb',
    paddingVertical: 20,
  },
  item: {
    width: '50%',
    height: 200,
    alignItems: 'center',
  },
  image: {
    width: '80%',          
    height: '50%',       
    resizeMode: 'contain',      
  },
  itemTitle: {
    fontSize: 14,
  },
  itemPrice: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'Bold',
  },
  iconImage: {
    width: 30,          
    height: 30, 
    resizeMode: 'contain',
  },
  itemCenter: {
    width: '80%',
    flexDirection: 'collumn',
    paddingTop: 1,
    paddingLeft: 5,
  },  
  chatButton: {
    height: '60%',
    fontSize: 20,
    backgroundColor: 'red',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,

  },  
});
