import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import GenreCard from '../components/GenreCard';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';

const SearchScreen = () => {
  const [searchResultList, setSearchResultList] = useState(null);
  const [genreList, setGenreList] = useState(null);
  const navigation = useNavigation();
  const [hideGenres, setHideGenres] = useState(0);

  const renderSongCard = ({item}) => {
    return (
      <SongCard
        photo={item.md5_image}
        singer={item.artist.name}
        name={item.title}
      />
    );
  };

  const navigateGenreSongScreen = (id, name) => {
    navigation.navigate('GenreSongScreen', {
      genreId: id,
      genreName: name,
    });
  };

  const handleOnFocus = () => {
    setHideGenres(1);
  };

  const handleOnBlur = () => {
    setHideGenres(0);
  };

  useEffect(() => {
    getGenres();
  }, []);

  const renderGenreCard = ({item}) => {
    return (
      <GenreCard
        id={item.id}
        name={item.name}
        onPress={navigateGenreSongScreen}
      />
    );
  };
  const getGenres = () => {
    axios.get('https://api.deezer.com/genre').then(response => {
      setGenreList(response.data.data);
      console.log('genreList', genreList);
    });
  };

  const getSearchResults = query => {
    axios.get('https://api.deezer.com/search?q=' + query).then(response => {
      setSearchResultList(response.data.data);
      console.log('search response.data', response.data.data);
    });
  };

  return (
    <View>
      <SearchBar
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onPress={getSearchResults}
      />
      <View style={styles.flatListContainer}>
        {hideGenres ? (
          <FlatList
            style={styles.flatListStyle}
            data={searchResultList}
            keyExtractor={item => item.id}
            renderItem={renderSongCard}
            key="#"
          />
        ) : (
          <FlatList
            style={styles.flatListStyle}
            data={genreList}
            key="_"
            keyExtractor={item => item.id}
            renderItem={renderGenreCard}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  flatListStyle: {
    flexGrow: 0,
    marginBottom: 50,
  },
  flatListContainer: {
    width: '100%',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
