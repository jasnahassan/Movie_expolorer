import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, Dimensions, Image, ImageBackground, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getPopularMovies } from '../Api/api';
import { setMovies, setLoading, setError } from '../redux/action';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const height = Dimensions.get('window').height;

const MovieListScreen = ({ props }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { movies, loading, error } = useSelector((state) => state.global);
    const [page, setPage] = useState(1)
    const [MovieData, setMovieData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            console.log('testing')
            dispatch(setLoading(true));
            try {
                const response = await getMovies(page);

                setMovieData(response?.data?.results)
                dispatch(setMovies(response?.data?.results));
                setFilteredMovies(response?.data?.results);
            } catch (err) {
                console.log("ERROR", JSON.stringify(err));
                dispatch(setError('Error fetching movies'));
            }
        };

        fetchMovies();
    }, []);
    const handleSearch = () => {
        const filtered = movies.filter((movie) =>
            movie.original_title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredMovies(filtered);
    };

    const renderMovieItem = ({ item }) => (

        <TouchableOpacity onPress={() => navigation.navigate('MovieDetailScreen', { id: item.id })}>

            <ImageBackground
                source={{ uri: `https://image.tmdb.org/t/p/original/${item.backdrop_path}` }}
                style={styles.Flatliststyle}
                imageStyle={styles.imageStyle}
            >
                <View style={styles.movieDetails}>
                    <Text style={styles.title}>{item?.original_title}</Text>
                    <Text style={styles.genre}>{item?.release_date}</Text>
                    <View style={styles.ratingContainer}>

                        <Text style={styles.rating}>★</Text>
                        <Text style={styles.rating}>{item.vote_average}</Text>
                    </View>
                </View>

            </ImageBackground>
        </TouchableOpacity>

    );
    return (
        <View style={{ backgroundColor: 'black', height: height }}>

            {loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" />
                </View>
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                <>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search movies..."
                            value={searchText}
                            placeholderTextColor="white"
                            onChangeText={(text) => setSearchText(text)}
                            onSubmitEditing={handleSearch}
                        />
                    </View>
                    <FlatList
                        data={searchText?.length > 0 ? filteredMovies : movies}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={renderMovieItem}

                    />
                </>
            )}
        </View>
    );
};

export default MovieListScreen;


const styles = StyleSheet.create({
    Flatliststyle: {
        flexDirection: 'row',

        margin: 15,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        height: height / 4,
        justifyContent: 'center',
        alignItems: 'center'

    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    movieItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    poster: {
        width: 80,
        height: 120,
        marginRight: 16,
        borderRadius: 8,
    },
    movieDetails: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 60
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white'
    },
    genre: {
        fontSize: 14,
        color: 'white',
    },

    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 550
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    rating: {
        color: 'gold',
        marginLeft: 4,
    },
    searchContainer: {
        padding: 10,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        color: 'white',
    },
});
