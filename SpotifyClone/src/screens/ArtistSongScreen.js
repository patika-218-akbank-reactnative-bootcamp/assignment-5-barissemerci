import { FlatList, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import SongCard from '../components/SongCard';



const ArtistSongScreen = props => {
  const [songList,setSongList]=useState(null)

useEffect(() => {
  
  getSongs()
  
}, [])

const getSongs=()=>{


  axios
  .get(

    'https://api.deezer.com/artist/'+props.route.params.artistId+'/top'
  )
  .then(response => {
    setSongList(response.data.data);
    console.log("search response.data",response.data)

  });


}


  const  renderSongCard=({item})=>{
    return(
      <SongCard id={item.id} photo={item.md5_image} singer={item.artist.name} name={item.title}></SongCard>
      )
  }


  return (
    <View>


<Text style={styles.genreNameStyle}>{props.route.params.artistName}</Text>

<FlatList 
 style={styles.flatListStyle}
 data={songList}
 keyExtractor={item => item.id}
 renderItem={renderSongCard}


/>

    </View>
  )
}

export default ArtistSongScreen

const styles = StyleSheet.create({

  flatListStyle:{
    flexGrow: 0,
    marginBottom:90
  
  },
  genreNameStyle:{
    fontSize:40,
    fontWeight:'bold',
    marginTop:20,
  alignSelf:'center'

  }
  
})