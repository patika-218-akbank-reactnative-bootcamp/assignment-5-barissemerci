import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from 'axios';
import GenreCard from '../components/GenreCard';
import SongCard from '../components/SongCard';


const HomeScreen = () => {
    const navigation= useNavigation()
    const [genreList,setGenreList]=useState(null)
    const [topTracks,setTopTracks]=useState(null)

    const renderGenreCard=({item})=>{
      return(
       <GenreCard name={item.name}></GenreCard>
      )
    }

  const  renderSongCard=({item})=>{
      return(
        <SongCard ></SongCard>
      )
    }

    useEffect(() => {
      getGenres()
      getTopTracks()
    
    }, [])
    

    const getGenres = () => {
      axios
        .get(
          'https://api.deezer.com/genre'
        )
        .then(response => {
          setGenreList(response.data.data.slice(0,4));
          console.log("genreList",genreList)

        });
    };


    const getTopTracks= ()=>{
      axios
      .get(
        'https://api.deezer.com/chart/0/tracks'
      )
      .then(response => {
        setTopTracks(response.data.data);

      });


    }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleTextStyle}>Genres</Text>
      <View style={styles.flatListContainer}>
      <FlatList style={styles.flatListStyle}
       data={genreList}
       keyExtractor={item => item.id}
       renderItem={renderGenreCard}
       numColumns={2}
       columnWrapperStyle={styles.row}
     />
      </View>
      <Text>Top Tracks</Text>
      <FlatList style={styles.flatListStyle}
       data={topTracks}
       keyExtractor={item => item.id}
       renderItem={renderSongCard} />
      

      

     
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
container:{
width:'100%',height:'100%',
    
},
titleTextStyle:{fontSize:30,fontWeight:'bold',marginTop:30,
marginLeft:20},
flatListStyle:{
  backgroundColor:'gray',
  flexGrow: 0,

},
flatListContainer:{
width:'100%'

},
row: {
  flex: 1,
  justifyContent: "space-around"
}



})