import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { HStack, Image } from 'native-base';

const CardDetail = ({ navigation, route }) => {
  const { name, id, rating, currency, location, images } = route.params;
  const { url } = route.params.images[0];
  const fallbackImageUrl = "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image  source={{ uri: url }}  defaultSource={{ uri: fallbackImageUrl }} style={styles.image} />
      </View>
      <View style={styles.card}>
      <HStack>
  <View style={{ flex: 8 }}>
    <Text style={styles.restaurantName}>{name}</Text>
    <Text style={styles.location}>{location.location_address}</Text>
  </View>
  <View style={{ flex: 2 }}>
    <Text style={styles.rating}>⭐ {rating.restaurant_avg_rating}</Text>
  </View>
</HStack>
<View style={styles.defaultText}>
<Text>Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache</Text>
</View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  card: {
    flex: 1,
    marginTop: '110%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize:20,
    marginLeft:10
  },
  location:{
    fontWeight:"400",
    fontSize:15,
    marginTop:5,
    marginLeft:10
  },
  rating:{
    fontSize:15,
    opacity:0.6,
    marginLeft:13
  },
  defaultText:{
    marginTop:30,
    fontSize:16,
    marginLeft:10,
    marginRight:15
  }
});

export default CardDetail;
