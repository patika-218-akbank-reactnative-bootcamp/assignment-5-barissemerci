import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useState} from 'react'
import SongCard from '../components/SongCard';


const LikedScreen = () => {

    const [songList,setSongList]=useState(null)
    const  renderSongCard=({item})=>{
        return(
          <SongCard photo={item.md5_image} singer={item.artist.name} name={item.title}></SongCard>
          )
      }
  return (
    <View>
     
     

     <FlatList 
 style={styles.flatListStyle}
 data={songList}
 keyExtractor={item => item.id}
 renderItem={renderSongCard}


/>
     
    </View>
  )
}

export default LikedScreen

const styles = StyleSheet.create({
    flatListStyle:{
        backgroundColor:'gray',
        flexGrow: 0,
        marginBottom:90
      
      },
})