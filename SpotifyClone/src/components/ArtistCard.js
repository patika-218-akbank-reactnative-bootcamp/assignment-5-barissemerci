import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const ArtistCard = ({id,photo,name,onPress}) => {
  return (
    <TouchableOpacity onPress={()=>{
        onPress(id,name)
        console.log("id",id)
    }} style={styles.container}>
        <Image style={styles.imageStyle}  
        source={{
              uri: photo
            }} />
                <View style={styles.nameAndSingerContainer}>
                <Text style={styles.nameTextStyle}>{name}</Text>
                </View>
              
     
    </TouchableOpacity>
  )
}

export default ArtistCard

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        borderWidth:1,
        borderColor:'black',
        padding:5

    },
    imageStyle:{
        width:75,height:75,
        borderRadius:75/2
    },
    nameAndSingerContainer:{
    justifyContent:'center',
    marginLeft:10,
    flex: 1, 

  },
 
  nameTextStyle:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    

  },
  

})