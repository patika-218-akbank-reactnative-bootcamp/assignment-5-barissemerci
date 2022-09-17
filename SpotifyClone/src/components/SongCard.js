import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import IconHeartOutline from '@expo/vector-icons/AntDesign';
import IconHeart from '@expo/vector-icons/AntDesign';

const SongCard = ({isFavorite,id,onPress,photo,singer,name}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.imageStyle}  
        source={{
              uri: 'https://e-cdn-images.dzcdn.net/images/artist/' + photo+'/264x264-000000-80-0-0.jpg'
            }} />
                <View style={styles.nameAndSingerContainer}>
                <Text style={styles.nameTextStyle}>{name}</Text>
      <Text  style={styles.singerTextStyle}>{singer}</Text>
                </View>
                <TouchableOpacity style={styles.iconButtonStyle} onPress={()=>{
                  onPress(id)  
}}>
                <IconHeartOutline name={isFavorite?'heart':'hearto'} size={50}style={styles.iconStyle}/>
                </TouchableOpacity>
     
    </View>
  )
}

export default SongCard

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
  singerTextStyle:{
    fontSize:16,
    fontWeight:'bold',
    color:'black'
  },
  nameTextStyle:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    

  },
  iconStyle:{
   
  },
  iconButtonStyle:{
    alignSelf:'center',
    position:'absolute',
    right:15
  }
})