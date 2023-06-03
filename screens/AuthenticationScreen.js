import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AuthenticationScreen = ({ navigation }) => {
  const [otp, setOTP] = useState('');
const route = useRoute()
console.log(route.params.data.number)
  const handleOTPConfirmation = () => {
    const body = JSON.stringify({
        "phone":route.params.data.number,
        "otp":otp,
        "dial_code":"+91"
      })
    if (!otp) {
      Alert.alert('Please fill the OTP field');
    } else if (parseInt(otp) === otp ) {
      fetch('https://staging.fastor.in/v1/pwa/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:body
        
      })
        .then(response => response.json())
        .then(responseData => {
          if (parseInt(otp) === otp ) {
              const token = responseData.data.token; // Get the token from the API response
              console.log(token)
            AsyncStorage.setItem('token', token)
              .then(() => {
                navigation.navigate('HomeScreen');
              })
              .catch(error => {
                console.error('Error:', error);
              });
          } else {
            Alert.alert('Incorrect OTP');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      Alert.alert('Invalid OTP');
    }
  };
  const handleDigitChange = (index, text) => {
    const otpArray = otp.split('');
    otpArray[index] = text;
    const newOTP = otpArray.join('');
    setOTP(newOTP);

    if (text !== '' && index < 5) {
      refs[index + 1].focus();
    }
  };

  const refs = [];
  const setRef = ref => {
    refs.push(ref);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.text}>Enter the verification code we just sent to your mobile number.</Text>
      <View style={styles.otpContainer}>
        {[0, 1, 2, 3, 4, 5].map(index => (
          <TextInput
            key={index}
            ref={setRef}
            style={styles.otpInput}
            placeholder=""
            value={otp[index] || ''}
            onChangeText={text => handleDigitChange(index, text)}
            keyboardType="numeric"
            maxLength={1}
            returnKeyType={index === 5 ? 'done' : 'next'}
            onSubmitEditing={() => {
              if (index === 5) {
                Keyboard.dismiss();
              } else {
                refs[index + 1].focus();
              }
            }}
          />
        ))}
      </View>
     
      <Pressable style={styles.buttonContainer} onPress={handleOTPConfirmation}>
  <Text style={styles.buttonText}>Confirm OTP</Text>
</Pressable>
<Text style={{marginTop:10}}>Didn’t received code? Resend</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    marginTop:10,
    marginBottom:20
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    marginLeft: -160,
    fontWeight: '600',
  },
  text: {
    fontSize: 18,
    opacity: 0.5,
    marginBottom: 20,
  },
  otpInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 10,
  },
  otpInput: {
    width: 50,
    height: 60,
    borderColor: 'lightgrey',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#F7F8F9',
  },
  buttonContainer: {
    backgroundColor: '#FF6D6A',
    width: '80%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText:{
    color:"#fff"
  }
});

export default AuthenticationScreen;
