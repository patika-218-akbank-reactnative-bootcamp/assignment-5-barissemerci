import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GenreCard = ({name}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}

export default GenreCard

const styles = StyleSheet.create({
container:{
    width:'40%',
    backgroundColor:'yellow',
  height:40,
  marginTop:5,
  marginBottom:5,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:15
}

})