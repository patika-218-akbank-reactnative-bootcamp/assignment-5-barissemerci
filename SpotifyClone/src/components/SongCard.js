import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const SongCard = ({photo,singer,name}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.imageStyle}  
        source={{
              uri: 'https://e-cdn-images.dzcdn.net/images/artist/' + photo+'/264x264-000000-80-0-0.jpg'
            }} />
                <View>
                <Text>{name}</Text>
      <Text>{singer}</Text>
                </View>
     
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
        width:100,height:100,
        borderRadius:50
    }
})