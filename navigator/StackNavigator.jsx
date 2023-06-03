import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HOME_SCREEN,  AUTHENTICATION_SCREEN, PHONE_NUMBER, CARD, CARD_DETAIL} from '../constants/routes';
import HomeScreen from '../screens/HomeScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import PhoneNumber from '../screens/PhoneNumber';
import CardDetail from '../screens/CardDetail';
const Stack = createStackNavigator();
const StackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={PHONE_NUMBER}>
        
<Stack.Screen name={PHONE_NUMBER}  component={PhoneNumber}/>
<Stack.Screen name={AUTHENTICATION_SCREEN}  component={AuthenticationScreen}/>
<Stack.Screen name={HOME_SCREEN}  component={HomeScreen}/>
<Stack.Screen name={CARD_DETAIL}  component={CardDetail}/>

  </Stack.Navigator>
  )
}

export default StackNavigator