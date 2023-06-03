import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, HStack, Image } from 'native-base';

const HomeScreen = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);


  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(
        'https://staging.fastor.in/v1/m/restaurant?city_id=118',
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      const res = await response.json();
      setRestaurants(res);
      console.log(res[0].name);
    } catch (error) {
      console.log('Error fetching restaurants:', error);
    }
  };

  const handleRestaurantPress = (restaurant) => {
    console.log('Restaurant pressed:', restaurant);
    navigation.navigate('CardDetail', {
      name: restaurant.restaurant_name,
      id: restaurant.restaurant_id,
      rating: restaurant.rating,
      currency: restaurant.currency,
      location: restaurant.location,
      images: restaurant.images,
    });
  };
  
  

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{marginLeft:20, opacity:0.5,fontWeight:"bold", fontSize:12}}>Pre Order From </Text>
        <Text style={{marginLeft:20, fontWeight:"700", fontSize:15}}>Connaught Palace</Text>
      </View>
      <View style={styles.shadowLine}></View>

      <ScrollView>
        <HStack>
        <Box style={{width: '40%',backgroundColor: '#FAF9F6',borderRadius:30, marginLeft:20,justifyContent: 'center',alignItems: 'center',}}>
          <Text style={{fontSize:30, opacity:0.7, marginTop:40, marginLeft:-30}}>Karan</Text>
        <Text style={{fontsize:12,fontWeight:"700",marginTop:5}}>Let's Explore this  </Text>
        <Text style={{fontsize:12,fontWeight:"700",marginLeft:-55, marginBottom:40}}>enening  </Text>
        </Box>
        <View style={{width: '20%',backgroundColor: '#FAF9F6',borderRadius:30, marginLeft:20,justifyContent: 'center',alignItems: 'center',}}>
          <Text style={{fontSize:15, opacity:0.7}}>Offers</Text>
        </View>
        <View style={{width: '20%',backgroundColor: '#FAF9F6',borderRadius:30, marginLeft:20,justifyContent: 'center',alignItems: 'center',}}>
          <Text style={{fontSize:15, opacity:0.7}}>Wallet</Text>
        </View>
        </HStack>
        <View style={{ marginLeft:20}}>
          <HStack>
        <Text style={{fontSize:20,fontWeight:"700",marginTop:40, marginBottom:10}}>Your Taste</Text>
        <Text style={{marginTop:40, marginLeft:220, opacity:0.4, fontWeight:"500"}}>See all </Text>
        </HStack>
        <View style={{marginTop:20}}>
        <HStack>
        <View
  style={{
    width: '40%',
    borderRadius: 30,
    marginLeft: 20,
    overflow: 'hidden',
  }}
>
  <Image
    source={{
      uri:
        'https://images.unsplash.com/photo-1615837136007-701de6015cfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    }}
    style={{ width: '100%', aspectRatio: 1, borderRadius: 20 }}
  />
  <View
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>It's Bake</Text>
    <Text>Delhi</Text>

  </View>
</View>

<View
  style={{
    width: '40%',
    borderRadius: 30,
    marginLeft: 20,
    overflow: 'hidden',
  }}
>
  <Image
    source={{
      uri:
        'https://images.unsplash.com/photo-1615837136007-701de6015cfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    }}
    style={{ width: '100%', aspectRatio: 1, borderRadius: 20 }}
  />
  <View
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Nik's Bake</Text>
    <Text>Bareilly</Text>

  </View>
</View>


</HStack>

<View style={{ width: '100%', height: 200, marginTop:40 }}>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        }}
        style={{ width: 400, height: 200, marginRight: 10, borderRadius:30 }}
      />
      <Image
        source={{
          uri:
          'https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1324&q=80',
        }}
        style={{ width: 400, height: 200, marginRight: 10,borderRadius:30 }}
      />
      <Image
        source={{
          uri:
          'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1389&q=80',
        }}
        style={{ width: 400, height: 200, marginRight: 10, borderRadius:30 }}
      />
      <Image
        source={{
          uri:
          'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80',
        }}
        style={{ width: 400, height: 200, marginRight: 10, borderRadius:30}}
      />
    </View>
  </ScrollView>
</View>



</View>
        </View>
        <Text style={{ fontSize:20, marginLeft:20, fontWeight:"700", marginTop:50, marginBottom:15}}>Popular Ones</Text>
        {restaurants.map((restaurant) => (
          <Pressable
            key={restaurant.id}
            onPress={() => handleRestaurantPress(restaurant)}
          >
            <View style={styles.card}>
              <HStack space={4}>
                <View style={{ flex: 3 }}>
                  <Image
                    style={{ width: 160, height: 140, borderRadius:10}}
                    source={{ uri: restaurant.images[0].url }} 
                  />
                </View>
                <View style={{ flex: 6, marginLeft:20}}>
                  <Text>{restaurant.restaurant_name}</Text>
                  <Text style={{opacity:0.5}}>Cakes, Pastry, Pastas</Text>
                  <Text style={{opacity:0.5}}>{restaurant?.location?.location_address}</Text>
                  <HStack>
                  <View style={{marginTop:15}}><Text>⭐ {restaurant.rating.restaurant_avg_rating}</Text><View style={{opacity:0.5}}><Text style={{fontSize:12}}>Popularity</Text></View></View>
                <View style={{marginTop:15, marginLeft:80}}><Text>{restaurant.currency.symbol}{restaurant.avg_cost_for_two}</Text><View style={{opacity:0.5}}><Text style={{fontSize:12}}>Cost of Two </Text></View></View>
                </HStack>
                </View>
                <View>
                </View>
              </HStack>
            </View>
          </Pressable>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  heading: {
    marginTop: '15%',
    marginBottom: 10,
    fontSize: 32,
    fontWeight: 'bold',
  },
  
  card: {
    padding: 25,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  shadowLine: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 5,
  },
});

export default HomeScreen;
