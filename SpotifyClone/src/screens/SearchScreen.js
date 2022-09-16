import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../components/SearchBar';
import axios from 'axios';

const SearchScreen = () => {
  const [searchResultList, setSearchResultList] = useState([]);

const getSearchResults=(query)=>{


  axios
  .get(
    'https://api.deezer.com/search?q='+query
  )
  .then(response => {
    setSearchResultList(response.data);
    console.log("search response.data",response.data.data)

  });


}



  return (
    <View>
          <SearchBar  onPress={getSearchResults}/>

          

    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})