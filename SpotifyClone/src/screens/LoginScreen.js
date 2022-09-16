import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import {auth} from '../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/core'

const LoginScreen = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('') 
  const navigation= useNavigation()


  const storeData = async value => {
    try {
      console.log("value.email",value.email)
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem('user', jsonValue);

      console.log("LoginScreen AsyncStorage'a atıldı:", jsonValue);
    } catch (e) {
      // saving error
    }
  };


  useEffect(() => {
   const unsubscribe= auth.onAuthStateChanged(user=>{
        if(user){
            navigation.replace('HomeScreen')
            storeData(user)
            AsyncStorage.getItem('user').then(val => {
                console.log("MainStackNavigation AsyncStorage'dan çekildi:", val.phoneNumber);
              
              });
        }
    }
        )
  return unsubscribe
   
  }, [])
  


  const handleSignup=()=>{
    auth.createUserWithEmailAndPassword(email,password).then(
      userCredentials=>{
        const user=userCredentials.user;
        console.log("REGISTERED",email)
      }
    ).catch(error=>alert(error.message))
  }

  const handleLogin=()=>{
    auth.signInWithEmailAndPassword(email,password).then(
      userCredentials=>{
        const user=userCredentials.user;
        storeData(user)
        console.log("LOGGED IN ",email)
        AsyncStorage.getItem('user').then(val => {
            console.log("MainStackNavigation AsyncStorage'dan çekildi:", val);
          
          });

      }
    ).catch(error=>alert(error.message))
  }



  return (
<KeyboardAvoidingView style={styles.container} > 
  <View style={styles.inputContainer}>
  <TextInput placeholder='Email'
  value={email}
  onChangeText={text=> setEmail(text)}
  style={styles.input}
  />

  <TextInput placeholder='Password'
  value={password}
  onChangeText={text=>setPassword(text) }
  style={styles.input}
  secureTextEntry
  />
  
  </View>    

  <View style={styles.buttonContainer}>

    <TouchableOpacity onPress={handleLogin} style={styles.button}>
      <Text style={styles.buttonTextStyle}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={handleSignup} style={[styles.button,styles.buttonOutline]}>
      <Text style={styles.buttonTextStyle}>Register</Text>
    </TouchableOpacity>

  </View>
</KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container:{
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  input:{
    backgroundColor:'white',
  paddingHorizontal:15,
paddingVertical:10,
borderRadius:10,
marginTop:5},
  inputContainer:{ width:'80%'},
  buttonContainer:{width:'60%',
  justifyContent:'center',
  alignItems:'center',
  marginTop:40
},
  button:{backgroundColor:'green',
width:'100%',
padding:15,
borderRadius:10,
alignItems:'center'},
  buttonOutline:{backgroundColor:'white',marginTop:5,borderWidth:2,borderColor:'green'},
  buttonTextStyle:{}
})