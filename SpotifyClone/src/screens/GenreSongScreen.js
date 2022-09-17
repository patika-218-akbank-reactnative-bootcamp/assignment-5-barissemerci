import { FlatList, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import ArtistCard from '../components/ArtistCard';
import {useNavigation} from '@react-navigation/native';



const GenreSongScreen = props => {
  const [artistList,setArtistList]=useState(null)
  const navigation = useNavigation();

useEffect(() => {
  
  getArtists()
  
}, [])

const getArtists=()=>{


  axios
  .get(
    'https://api.deezer.com/genre/'+props.route.params.genreId+'/artists'
  )
  .then(response => {
    setArtistList(response.data.data);
    console.log("search response.data",response.data.data)

  });


}

const navigateArtistSongScreen=(id,name)=>{

  navigation.navigate('ArtistSongScreen', {
    artistId: id,
    artistName:name

  });


}

  const  renderArtistCard=({item})=>{
    return(
      <ArtistCard onPress={navigateArtistSongScreen} id={item.id} photo={item.picture} name={item.name}></ArtistCard>
      )
  }


  return (
    <View>


<Text style={styles.genreNameStyle}>{props.route.params.genreName}</Text>

<FlatList 
 style={styles.flatListStyle}
 data={artistList}
 keyExtractor={item => item.id}
 renderItem={renderArtistCard}


/>

    </View>
  )
}

export default GenreSongScreen

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