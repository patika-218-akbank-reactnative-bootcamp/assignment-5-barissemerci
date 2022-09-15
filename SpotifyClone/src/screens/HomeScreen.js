import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
    const navigation= useNavigation()


const handleSignout=()=>{
    auth.signOut().then(()=>{
        navigation.replace('LoginScreen')}).catch(error=>alert(error.message))
    
}

  return (
    <View style={styles.container}>
      <Text>Email {auth.currentUser?.email}</Text>


      <TouchableOpacity onPress={handleSignout} style={styles.button}>
        <Text >Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
button:{backgroundColor:'green',
width:'60%',
padding:15,
borderRadius:10,
alignItems:'center',
marginTop:40},



})