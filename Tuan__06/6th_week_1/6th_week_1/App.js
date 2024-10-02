import React, { useState } from 'react';

import { Text, SafeAreaView, StyleSheet, View, FlatList,
  StatusBar,
  TouchableOpacity,
  Image, } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';
import homeImg from './assets/ca_nau_lau.png';

const DATA = [
  {
    id: '1',
    itemTitle: 'Cá lẩu nấu mì mini...',
    itemDescription: 'Shop Devang',
    img: require('./assets/ca_nau_lau.png'), // Replace with actual image URL
  },
  {
    id: '2',
    itemTitle: '1KG KHÔ GÀ BƠ TỎI...',
    itemDescription: 'Shop LTD Food',
    img: require('./assets/ga_bo_toi.png'), // Replace with actual image URL
  },
  {
    id: '3',
    itemTitle: 'Xe cần cẩu đa năng',
    itemDescription: 'Shop Thế giới đồ chơi',
    img: require('./assets/xa_can_cau.png'), // Replace with actual image URL
  },
  {
    id: '4',
    itemTitle: 'Đồ chơi dạng mô hình',
    itemDescription: 'Shop Thế giới đồ chơi',
    img: require('./assets/do_choi_dang_mo_hinh.png'), // Replace with actual image URL
  },
  {
    id: '5',
    itemTitle: 'Lãnh đạo giản đơn',
    itemDescription: 'Shop Minh Long Book',
    img: require('./assets/lanh_dao_gian_don.png'), // Replace with actual image URL
  },
  {
    id: '6',
    itemTitle: 'Hiểu lòng con trẻ',
    itemDescription: 'Shop Minh Long Book',
    img: require('./assets/hieu_long_con_tre.png'), // Replace with actual image URL
  },
 
];

const Item = ({ item, onPress, backgroundColor, textColor }) => 
{
  console.log(item)
  return (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <View style={styles.itemContent}>
      <Image source={item.img} style={styles.image} />
      <View style={styles.itemCenter}>
        <Text style={[styles.itemTitle]}>{item.itemTitle}</Text>
        <Text style={[styles.itemDescription, { color: textColor }]}>{item.itemDescription}</Text>
      </View>
      <Text style={[styles.chatButton]}>Chat</Text>
    </View>
    
  </TouchableOpacity>
)};

export default function App() {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#FFFFFF' : '#dbdbdb';
    const color = item.id === selectedId ? 'red' : 'black';

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
        <Text style={{ color: 'white', fontSize: 20, marginRight: 30}}>Chat</Text>
        <Image source={require('./assets/1cart.png')} style={styles.iconImage} />
      </View>
      <View style={styles.center}>
        <View style={styles.message}>
          <View style={styles.messageContent}>
            <Text style={{ color: 'black', fontSize: 12}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
          </View>
        </View>
        <View style ={styles.items}>
          <FlatList
            data={DATA}
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
    backgroundColor: '#ecf0f9',
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
    backgroundColor: 'white',
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
    height: '88%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  item: {

  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center', 
    paddingHorizontal: 4,
    paddingBottom: 2,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 3,
  },
  image: {
    width: 60,          
    height: 60,      
    resizeMode: 'contain',      
  },
  itemTitle: {
    fontSize: 16,
  },
  itemDescription: {
    marginTop: 5,
    fontSize: 14,
  },
  iconImage: {
    width: 30,          
    height: 30, 
    resizeMode: 'contain',
  },
  itemCenter: {
    width: '60%',
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
