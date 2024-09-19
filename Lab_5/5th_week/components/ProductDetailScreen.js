import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProductDetailScreen({ navigation }) {
  const [imageSource, setImageSource] = React.useState(require('../assets/vs_red.png'));

  const handleColorSelection = (colorImage) => {
    setImageSource(colorImage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          style={styles.tinyLogo}
          source={imageSource}
        />
      </View>
      
      <View style={styles.middleSection}>
        <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.rating}>
          <Image style={styles.ratingStar} source={require('../assets/star.png')} />
          <Image style={styles.ratingStar} source={require('../assets/star.png')} />
          <Image style={styles.ratingStar} source={require('../assets/star.png')} />
          <Image style={styles.ratingStar} source={require('../assets/star.png')} />
          <Image style={styles.ratingStar} source={require('../assets/star.png')} />
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{ color: 'black', fontSize: 20, marginRight: 30}}>1.790.000d</Text>
          <Text style={{ color: 'gray', textDecorationLine: 'line-through' }}>1.790.000d</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{ color: 'red', fontSize: 10, marginRight: 30, fontWeight: 'bold', marginTop: 10}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image style={{width: 15, height: 15, marginTop: 10}} source={require('../assets/Group.png')} />
        </View>
        <TouchableOpacity 
          style={styles.colorButton}
          onPress={() => navigation.navigate('ColorSelection', { handleColorSelection })}
        >
          <Text style={styles.colorButtonText}>4 màu - Chọn màu</Text>
          <Text style={styles.colorButtonIcon}>></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.purchaseButton}>
          <Text style={styles.purchaseButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full height of the screen
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topSection: {
    flex: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  middleSection: {
    flex: 4,
    width: '100%',
    padding: 20,
  },
  rating: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'row',
    padding: 5,
    paddingTop: 10,
  },

  ratingStar: {
    marginRight: 5,
  },  

  bottomSection: {
    flex: 1, 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  sectionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tinyLogo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  colorButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'end',
    padingRight: 20,
  },
  colorButtonText: {
    color: 'black',
    fontSize: 16,
  },
  colorButtonIcon: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 60,
  },
  purchaseButton: {
    backgroundColor: '#E53935',
    borderRadius: 5,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 20,
  },
  purchaseButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'row',
    padding: 5,
    paddingTop: 10,
  },

});

  