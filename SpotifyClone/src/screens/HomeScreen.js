import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/core'
import axios from 'axios';
import GenreCard from '../components/GenreCard';
import SongCard from '../components/SongCard';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = () => {
    const [genreList,setGenreList]=useState(null)
    const [topTracks,setTopTracks]=useState(null)
    const [favoriteSongs,setfavoriteSongs]=useState([])
    const navigation = useNavigation();

    const navigateGenreSongScreen=(id,name)=>{

      navigation.navigate('GenreSongScreen', {
        genreId: id,
        genreName:name
  
      });
  
  
    }
  
  

    const renderGenreCard=({item})=>{
      return(
       <GenreCard id={item.id} name={item.name} onPress={navigateGenreSongScreen}  ></GenreCard>
      )
    }

    const handleFavorite = async (id) => {
      try {
        setfavoriteSongs([...favoriteSongs,topTracks.filter(item => item.id == id)])
        const jsonValue = JSON.stringify(favoriteSongs);
  
        await AsyncStorage.setItem('favorite', jsonValue);
  
      } catch (e) {
        // saving error
        console.log(e)
      }
    };

    const isFavorite=(id)=>{
      console.log("id",id)
      console.log('favoriteSongs.filter(item => item.id == id)',favoriteSongs.filter(item => {
        console.log("baris",favoriteSongs)
        console.log("item.id",item.id)
        console.log("id",id)
        item.id === id}))

      if(favoriteSongs.filter(item => item.id === id).length===1){
        return 1
      }
      else{
        return 0
      }
    }


  const  renderSongCard=({item})=>{
      return(
        <SongCard isFavorite={isFavorite(item.id)} onPress={handleFavorite} id={item.id} photo={item.md5_image} singer={item.artist.name} name={item.title}></SongCard>
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
        console.log("topTracks",topTracks)

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
      <Text style={styles.titleTextStyle}>Top Tracks</Text>
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